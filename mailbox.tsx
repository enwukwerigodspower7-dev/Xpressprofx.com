import { useState, useEffect } from "react";
import { useGetAdminMailbox, useAdminMailboxReply } from "@workspace/api-client-react";
import {
  Mail, Send, Loader2, Inbox, PenSquare, X, ChevronLeft,
  User, CheckCircle2,
} from "lucide-react";
import { format } from "date-fns";

const PLATFORM_ADDRESSES = [
  "no_reply@xpressprofx.com",
  "help@xpressprofx.com",
  "management@xpressprofx.com",
  "admin@xpressprofx.com",
  "chrislukeman@xpressprofx.com",
];

interface RegisteredUser {
  id: string;
  fullName: string;
  email: string;
}

interface ComposeForm {
  userId: string;
  from: string;
  subject: string;
  content: string;
  noReply: boolean;
}

const INITIAL_COMPOSE: ComposeForm = {
  userId: "",
  from: "help@xpressprofx.com",
  subject: "",
  content: "",
  noReply: false,
};

export function MailboxPage() {
  const { data: threads, isLoading, refetch } = useGetAdminMailbox();
  const replyMutation = useAdminMailboxReply();

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [replyFrom, setReplyFrom] = useState(PLATFORM_ADDRESSES[1]!);
  const [replyContent, setReplyContent] = useState("");

  // Compose new message
  const [showCompose, setShowCompose] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([]);
  const [compose, setCompose] = useState<ComposeForm>(INITIAL_COMPOSE);
  const [composeSending, setComposeSending] = useState(false);
  const [composeSent, setComposeSent] = useState(false);
  const [composeError, setComposeError] = useState("");

  const selected = (threads ?? []).find((t) => t.id === selectedId);

  // Fetch registered users when compose panel opens
  useEffect(() => {
    if (showCompose && registeredUsers.length === 0) {
      fetch("/api/admin/mailbox/users", { credentials: "include" })
        .then((r) => r.json())
        .then((users: RegisteredUser[]) => setRegisteredUsers(users))
        .catch(() => {});
    }
  }, [showCompose, registeredUsers.length]);

  const handleReply = async () => {
    if (!selectedId || !replyContent.trim()) return;
    await replyMutation.mutateAsync({
      threadId: selectedId,
      data: { from: replyFrom, content: replyContent },
    });
    setReplyContent("");
    refetch();
  };

  const handleCompose = async () => {
    if (!compose.userId || !compose.from || !compose.subject.trim() || !compose.content.trim()) {
      setComposeError("All fields are required.");
      return;
    }
    setComposeError("");
    setComposeSending(true);
    try {
      const res = await fetch("/api/admin/mailbox/compose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(compose),
      });
      if (!res.ok) {
        const data = await res.json();
        setComposeError(data.error ?? "Failed to send message.");
        setComposeSending(false);
        return;
      }
      setComposeSent(true);
      refetch();
      setTimeout(() => {
        setShowCompose(false);
        setCompose(INITIAL_COMPOSE);
        setComposeSent(false);
      }, 1500);
    } catch {
      setComposeError("Network error. Please try again.");
    }
    setComposeSending(false);
  };

  return (
    <div className="p-4 sm:p-6 h-full flex flex-col gap-3 sm:gap-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-xl font-bold text-foreground">Mailbox</h1>
          <p className="text-sm text-muted-foreground">Platform email threads</p>
        </div>
        <button
          onClick={() => { setShowCompose(true); setComposeSent(false); setComposeError(""); }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <PenSquare className="w-4 h-4" />
          Compose New Email
        </button>
      </div>

      {/* Platform mailboxes */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Platform mailboxes:</p>
        <div className="flex flex-wrap gap-2">
          {PLATFORM_ADDRESSES.map((addr) => (
            <span key={addr} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <Mail className="w-3 h-3 mr-1.5" />
              {addr}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-4 min-h-0">
        {/* Thread list */}
        <div className={`w-full md:w-72 md:flex-shrink-0 bg-card border border-card-border rounded-xl overflow-hidden flex flex-col ${selectedId && !showCompose ? "hidden md:flex" : "flex max-h-72 md:max-h-none"}`}>
          <div className="px-4 py-3 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Threads ({(threads ?? []).length})
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-border">
            {isLoading ? (
              <div className="p-4 text-sm text-muted-foreground">Loading...</div>
            ) : (threads ?? []).length === 0 ? (
              <div className="p-6 text-center">
                <Inbox className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">No email threads yet.</p>
                <p className="text-xs text-muted-foreground mt-1">Use "Compose New Email" to start a conversation.</p>
              </div>
            ) : (
              (threads ?? []).map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setSelectedId(t.id); setShowCompose(false); }}
                  className={`w-full text-left px-4 py-3 hover:bg-accent/30 transition-colors ${
                    selectedId === t.id && !showCompose ? "bg-accent/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-sm font-medium text-foreground truncate">{t.subject}</p>
                    {!t.read && (
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 ml-1" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">From: {t.from}</p>
                  <p className="text-xs text-muted-foreground truncate">To: {t.to}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t.messages.length} message{t.messages.length !== 1 ? "s" : ""}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Thread view / Compose panel */}
        <div className="flex-1 bg-card border border-card-border rounded-xl flex flex-col overflow-hidden">

          {/* ── Compose Panel ── */}
          {showCompose ? (
            <>
              <div className="px-5 py-4 border-b border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <PenSquare className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">New Email</p>
                </div>
                <button
                  onClick={() => { setShowCompose(false); setCompose(INITIAL_COMPOSE); setComposeError(""); }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {composeSent ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                  <p className="text-sm font-semibold text-foreground">Email sent successfully!</p>
                  <p className="text-xs text-muted-foreground">The user has been notified.</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {/* To: user dropdown */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1.5">
                      <User className="w-3 h-3 inline mr-1" />To (registered user) *
                    </label>
                    <select
                      value={compose.userId}
                      onChange={(e) => setCompose((f) => ({ ...f, userId: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a user…</option>
                      {registeredUsers.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.fullName} &lt;{u.email}&gt;
                        </option>
                      ))}
                    </select>
                    {registeredUsers.length === 0 && (
                      <p className="text-xs text-muted-foreground mt-1">Loading users…</p>
                    )}
                  </div>

                  {/* From: platform address */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1.5">
                      <Mail className="w-3 h-3 inline mr-1" />From (platform address) *
                    </label>
                    <select
                      value={compose.from}
                      onChange={(e) => setCompose((f) => ({ ...f, from: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {PLATFORM_ADDRESSES.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1.5">Subject *</label>
                    <input
                      value={compose.subject}
                      onChange={(e) => setCompose((f) => ({ ...f, subject: e.target.value }))}
                      placeholder="e.g. Account Update, Important Notice…"
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {/* Body */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1.5">Message *</label>
                    <textarea
                      value={compose.content}
                      onChange={(e) => setCompose((f) => ({ ...f, content: e.target.value }))}
                      placeholder="Type your message here…"
                      rows={7}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  {/* No-reply toggle */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={compose.noReply}
                      onChange={(e) => setCompose((f) => ({ ...f, noReply: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-xs text-muted-foreground">Mark as no-reply (user cannot respond to this thread)</span>
                  </label>

                  {composeError && (
                    <p className="text-xs text-destructive">{composeError}</p>
                  )}

                  <button
                    onClick={handleCompose}
                    disabled={composeSending || !compose.userId || !compose.subject.trim() || !compose.content.trim()}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {composeSending ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Email</>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : !selected ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Mail className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Select a thread to view</p>
                <p className="text-xs text-muted-foreground mt-1">or compose a new email to any registered user</p>
              </div>
            </div>
          ) : (
            <>
              {/* ── Thread View ── */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{selected.subject}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      From: {selected.from} → To: {selected.to}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selected.messages.map((m) => (
                  <div key={m.id} className="bg-muted/40 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-foreground">{m.from}</span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(m.createdAt), "MMM d, HH:mm")}
                      </span>
                    </div>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{m.content}</p>
                  </div>
                ))}
              </div>

              {selected.noReply ? (
                <div className="p-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center py-1">
                    This is a no-reply thread. The user cannot respond to it.
                  </p>
                </div>
              ) : (
                <div className="p-4 border-t border-border space-y-2">
                  <div className="flex gap-2 items-center">
                    <label className="text-xs text-muted-foreground whitespace-nowrap">Reply from:</label>
                    <select
                      value={replyFrom}
                      onChange={(e) => setReplyFrom(e.target.value)}
                      className="flex-1 px-2 py-1.5 bg-input border border-border rounded-md text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {PLATFORM_ADDRESSES.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Type your reply…"
                      rows={2}
                      className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                    <button
                      onClick={handleReply}
                      disabled={replyMutation.isPending || !replyContent.trim()}
                      className="self-end flex items-center gap-1.5 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                    >
                      {replyMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
