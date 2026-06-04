import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AccountManager, ActionResult, ActivityLogEntry, AdminAlert, AdminBankSummary, AdminBillingOverview, AdminBillingUserRow, AdminCardSummary, AdminChatReplyBody, AdminP2PMerchantsResponse, AdminP2PNotifyRequest, AdminPresenceState, AdminProvisioningStatus, AdminSetWithdrawalGasFeeBody, AdminStats, AdminTradeRow, AdminUserDetail, AdminUserSummary, AssetCatalogItem, AuthOtpChallenge, AuthSession, BankAccount, BankVerificationRequest, BillingPaymentRequest, BillingRates, BillingStatus, BroadcastResult, BroadcastSupportTicketBody, BrokerCard, CardDecisionRequest, ConnectWalletRequest, ConnectedWallet, ConnectedWalletLiveBalance, CreateAdminTradeRequest, CreateAssetRequest, CreateP2PListingRequest, CreateP2POrderRequest, CreatePromotionRequest, CreateSupportTicketRequest, CreateUserRequest, CredentialVault, CryptoAddressMap, Deposit, DepositRequest, GasFeeSettings, GetAdminWithdrawalsParams, GetMessagesParams, GetP2PListingsParams, HealthStatus, KycDecisionRequest, KycRecord, KycSubmissionRequest, LinkBankRequest, LiveChatMessage, LiveChatResponse, LiveChatSession, LoginRequest, LoginResult, MailboxReplyBody, MailboxThread, MailboxUserReplyBody, MarkGasFeeFundedBody, Message, MoonpayInitiateRequest, MoonpayInitiateResponse, MoonpayWebhookEvent, Notification, NotificationSettings, OkResponse, P2PListing, P2PMerchantApplication, P2PMerchantApplicationOrNull, P2PMerchantDecisionRequest, P2PNotificationsResponse, P2POrder, PlatformReceivingAddress, PlatformSettings, Promotion, PurchaseAssetRequest, PurchaseResult, ReferralInfo, RequestCardRequest, ResendOtpRequest, SelectManagerRequest, SelectedManagerResponse, SendAdminP2PChatRequest, SendFromConnectedWalletRequest, SendFromConnectedWalletResult, SendLiveChatBody, SendMailBody, SendMessageRequest, SentEmail, SignupRequest, SocialTradingWallet, SubmitP2PMerchantApplicationRequest, SupportTicket, Trade, Transaction, UpdateAdminTradeRequest, UpdateAssetRequest, UpdateBankAccountRequest, UpdateCardDesignRequest, UpdateOwnBankAccountRequest, UpdateOwnProfileRequest, UpdatePromotionRequest, UpdateUserProfileRequest, UpdateUserStatusRequest, User, VerifyOtpRequest, Wallet, WalletAdjustBody, Withdrawal, WithdrawalDecisionRequest, WithdrawalGasFeeStatus, WithdrawalRequest } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get current user profile
 */
export declare const getGetCurrentUserUrl: () => string;
export declare const getCurrentUser: (options?: RequestInit) => Promise<User>;
export declare const getGetCurrentUserQueryKey: () => readonly ["/api/users/me"];
export declare const getGetCurrentUserQueryOptions: <TData = Awaited<ReturnType<typeof getCurrentUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCurrentUserQueryResult = NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>;
export type GetCurrentUserQueryError = ErrorType<unknown>;
/**
 * @summary Get current user profile
 */
export declare function useGetCurrentUser<TData = Awaited<ReturnType<typeof getCurrentUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user wallets
 */
export declare const getGetWalletsUrl: () => string;
export declare const getWallets: (options?: RequestInit) => Promise<Wallet[]>;
export declare const getGetWalletsQueryKey: () => readonly ["/api/wallets"];
export declare const getGetWalletsQueryOptions: <TData = Awaited<ReturnType<typeof getWallets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWallets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWallets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWalletsQueryResult = NonNullable<Awaited<ReturnType<typeof getWallets>>>;
export type GetWalletsQueryError = ErrorType<unknown>;
/**
 * @summary Get user wallets
 */
export declare function useGetWallets<TData = Awaited<ReturnType<typeof getWallets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWallets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get wallet transactions
 */
export declare const getGetTransactionsUrl: () => string;
export declare const getTransactions: (options?: RequestInit) => Promise<Transaction[]>;
export declare const getGetTransactionsQueryKey: () => readonly ["/api/wallets/transactions"];
export declare const getGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactions>>>;
export type GetTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary Get wallet transactions
 */
export declare function useGetTransactions<TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Connect an external wallet
 */
export declare const getConnectExternalWalletUrl: () => string;
export declare const connectExternalWallet: (connectWalletRequest: ConnectWalletRequest, options?: RequestInit) => Promise<ConnectedWallet>;
export declare const getConnectExternalWalletMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof connectExternalWallet>>, TError, {
        data: BodyType<ConnectWalletRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof connectExternalWallet>>, TError, {
    data: BodyType<ConnectWalletRequest>;
}, TContext>;
export type ConnectExternalWalletMutationResult = NonNullable<Awaited<ReturnType<typeof connectExternalWallet>>>;
export type ConnectExternalWalletMutationBody = BodyType<ConnectWalletRequest>;
export type ConnectExternalWalletMutationError = ErrorType<unknown>;
/**
 * @summary Connect an external wallet
 */
export declare const useConnectExternalWallet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof connectExternalWallet>>, TError, {
        data: BodyType<ConnectWalletRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof connectExternalWallet>>, TError, {
    data: BodyType<ConnectWalletRequest>;
}, TContext>;
/**
 * @summary Get user trades
 */
export declare const getGetTradesUrl: () => string;
export declare const getTrades: (options?: RequestInit) => Promise<Trade[]>;
export declare const getGetTradesQueryKey: () => readonly ["/api/trades"];
export declare const getGetTradesQueryOptions: <TData = Awaited<ReturnType<typeof getTrades>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTrades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTrades>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTradesQueryResult = NonNullable<Awaited<ReturnType<typeof getTrades>>>;
export type GetTradesQueryError = ErrorType<unknown>;
/**
 * @summary Get user trades
 */
export declare function useGetTrades<TData = Awaited<ReturnType<typeof getTrades>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTrades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get social trading wallet summary
 */
export declare const getGetSocialTradingWalletUrl: () => string;
export declare const getSocialTradingWallet: (options?: RequestInit) => Promise<SocialTradingWallet>;
export declare const getGetSocialTradingWalletQueryKey: () => readonly ["/api/trades/social-wallet"];
export declare const getGetSocialTradingWalletQueryOptions: <TData = Awaited<ReturnType<typeof getSocialTradingWallet>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSocialTradingWallet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSocialTradingWallet>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSocialTradingWalletQueryResult = NonNullable<Awaited<ReturnType<typeof getSocialTradingWallet>>>;
export type GetSocialTradingWalletQueryError = ErrorType<unknown>;
/**
 * @summary Get social trading wallet summary
 */
export declare function useGetSocialTradingWallet<TData = Awaited<ReturnType<typeof getSocialTradingWallet>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSocialTradingWallet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Release completed trade funds to main wallet
 */
export declare const getReleaseTradeFundsUrl: (tradeId: string) => string;
export declare const releaseTradeFunds: (tradeId: string, options?: RequestInit) => Promise<ActionResult>;
export declare const getReleaseTradeFundsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof releaseTradeFunds>>, TError, {
        tradeId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof releaseTradeFunds>>, TError, {
    tradeId: string;
}, TContext>;
export type ReleaseTradeFundsMutationResult = NonNullable<Awaited<ReturnType<typeof releaseTradeFunds>>>;
export type ReleaseTradeFundsMutationError = ErrorType<unknown>;
/**
 * @summary Release completed trade funds to main wallet
 */
export declare const useReleaseTradeFunds: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof releaseTradeFunds>>, TError, {
        tradeId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof releaseTradeFunds>>, TError, {
    tradeId: string;
}, TContext>;
/**
 * @summary Get list of account managers
 */
export declare const getGetManagersUrl: () => string;
export declare const getManagers: (options?: RequestInit) => Promise<AccountManager[]>;
export declare const getGetManagersQueryKey: () => readonly ["/api/managers"];
export declare const getGetManagersQueryOptions: <TData = Awaited<ReturnType<typeof getManagers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getManagers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getManagers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetManagersQueryResult = NonNullable<Awaited<ReturnType<typeof getManagers>>>;
export type GetManagersQueryError = ErrorType<unknown>;
/**
 * @summary Get list of account managers
 */
export declare function useGetManagers<TData = Awaited<ReturnType<typeof getManagers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getManagers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get user's selected account manager
 */
export declare const getGetSelectedManagerUrl: () => string;
export declare const getSelectedManager: (options?: RequestInit) => Promise<SelectedManagerResponse>;
export declare const getGetSelectedManagerQueryKey: () => readonly ["/api/managers/selected"];
export declare const getGetSelectedManagerQueryOptions: <TData = Awaited<ReturnType<typeof getSelectedManager>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSelectedManager>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSelectedManager>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSelectedManagerQueryResult = NonNullable<Awaited<ReturnType<typeof getSelectedManager>>>;
export type GetSelectedManagerQueryError = ErrorType<unknown>;
/**
 * @summary Get user's selected account manager
 */
export declare function useGetSelectedManager<TData = Awaited<ReturnType<typeof getSelectedManager>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSelectedManager>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Select an account manager
 */
export declare const getSelectManagerUrl: () => string;
export declare const selectManager: (selectManagerRequest: SelectManagerRequest, options?: RequestInit) => Promise<ActionResult>;
export declare const getSelectManagerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof selectManager>>, TError, {
        data: BodyType<SelectManagerRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof selectManager>>, TError, {
    data: BodyType<SelectManagerRequest>;
}, TContext>;
export type SelectManagerMutationResult = NonNullable<Awaited<ReturnType<typeof selectManager>>>;
export type SelectManagerMutationBody = BodyType<SelectManagerRequest>;
export type SelectManagerMutationError = ErrorType<unknown>;
/**
 * @summary Select an account manager
 */
export declare const useSelectManager: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof selectManager>>, TError, {
        data: BodyType<SelectManagerRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof selectManager>>, TError, {
    data: BodyType<SelectManagerRequest>;
}, TContext>;
/**
 * @summary Get messages with manager or in P2P context
 */
export declare const getGetMessagesUrl: (params?: GetMessagesParams) => string;
export declare const getMessages: (params?: GetMessagesParams, options?: RequestInit) => Promise<Message[]>;
export declare const getGetMessagesQueryKey: (params?: GetMessagesParams) => readonly ["/api/messages", ...GetMessagesParams[]];
export declare const getGetMessagesQueryOptions: <TData = Awaited<ReturnType<typeof getMessages>>, TError = ErrorType<unknown>>(params?: GetMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getMessages>>>;
export type GetMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Get messages with manager or in P2P context
 */
export declare function useGetMessages<TData = Awaited<ReturnType<typeof getMessages>>, TError = ErrorType<unknown>>(params?: GetMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a message
 */
export declare const getSendMessageUrl: () => string;
export declare const sendMessage: (sendMessageRequest: SendMessageRequest, options?: RequestInit) => Promise<Message>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        data: BodyType<SendMessageRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    data: BodyType<SendMessageRequest>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<SendMessageRequest>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
 * @summary Send a message
 */
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        data: BodyType<SendMessageRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    data: BodyType<SendMessageRequest>;
}, TContext>;
/**
 * @summary Get P2P marketplace listings
 */
export declare const getGetP2PListingsUrl: (params?: GetP2PListingsParams) => string;
export declare const getP2PListings: (params?: GetP2PListingsParams, options?: RequestInit) => Promise<P2PListing[]>;
export declare const getGetP2PListingsQueryKey: (params?: GetP2PListingsParams) => readonly ["/api/p2p/listings", ...GetP2PListingsParams[]];
export declare const getGetP2PListingsQueryOptions: <TData = Awaited<ReturnType<typeof getP2PListings>>, TError = ErrorType<unknown>>(params?: GetP2PListingsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2PListings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getP2PListings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetP2PListingsQueryResult = NonNullable<Awaited<ReturnType<typeof getP2PListings>>>;
export type GetP2PListingsQueryError = ErrorType<unknown>;
/**
 * @summary Get P2P marketplace listings
 */
export declare function useGetP2PListings<TData = Awaited<ReturnType<typeof getP2PListings>>, TError = ErrorType<unknown>>(params?: GetP2PListingsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2PListings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new P2P listing
 */
export declare const getCreateP2PListingUrl: () => string;
export declare const createP2PListing: (createP2PListingRequest: CreateP2PListingRequest, options?: RequestInit) => Promise<P2PListing>;
export declare const getCreateP2PListingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createP2PListing>>, TError, {
        data: BodyType<CreateP2PListingRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createP2PListing>>, TError, {
    data: BodyType<CreateP2PListingRequest>;
}, TContext>;
export type CreateP2PListingMutationResult = NonNullable<Awaited<ReturnType<typeof createP2PListing>>>;
export type CreateP2PListingMutationBody = BodyType<CreateP2PListingRequest>;
export type CreateP2PListingMutationError = ErrorType<unknown>;
/**
 * @summary Create a new P2P listing
 */
export declare const useCreateP2PListing: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createP2PListing>>, TError, {
        data: BodyType<CreateP2PListingRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createP2PListing>>, TError, {
    data: BodyType<CreateP2PListingRequest>;
}, TContext>;
/**
 * @summary Get user's P2P orders
 */
export declare const getGetP2POrdersUrl: () => string;
export declare const getP2POrders: (options?: RequestInit) => Promise<P2POrder[]>;
export declare const getGetP2POrdersQueryKey: () => readonly ["/api/p2p/orders"];
export declare const getGetP2POrdersQueryOptions: <TData = Awaited<ReturnType<typeof getP2POrders>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2POrders>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getP2POrders>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetP2POrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getP2POrders>>>;
export type GetP2POrdersQueryError = ErrorType<unknown>;
/**
 * @summary Get user's P2P orders
 */
export declare function useGetP2POrders<TData = Awaited<ReturnType<typeof getP2POrders>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2POrders>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a P2P order (initiate trade)
 */
export declare const getCreateP2POrderUrl: () => string;
export declare const createP2POrder: (createP2POrderRequest: CreateP2POrderRequest, options?: RequestInit) => Promise<P2POrder>;
export declare const getCreateP2POrderMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createP2POrder>>, TError, {
        data: BodyType<CreateP2POrderRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createP2POrder>>, TError, {
    data: BodyType<CreateP2POrderRequest>;
}, TContext>;
export type CreateP2POrderMutationResult = NonNullable<Awaited<ReturnType<typeof createP2POrder>>>;
export type CreateP2POrderMutationBody = BodyType<CreateP2POrderRequest>;
export type CreateP2POrderMutationError = ErrorType<unknown>;
/**
 * @summary Create a P2P order (initiate trade)
 */
export declare const useCreateP2POrder: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createP2POrder>>, TError, {
        data: BodyType<CreateP2POrderRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createP2POrder>>, TError, {
    data: BodyType<CreateP2POrderRequest>;
}, TContext>;
/**
 * @summary Get P2P admin notifications
 */
export declare const getGetP2PNotificationsUrl: () => string;
export declare const getP2PNotifications: (options?: RequestInit) => Promise<P2PNotificationsResponse>;
export declare const getGetP2PNotificationsQueryKey: () => readonly ["/api/p2p/notifications"];
export declare const getGetP2PNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof getP2PNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2PNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getP2PNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetP2PNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getP2PNotifications>>>;
export type GetP2PNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary Get P2P admin notifications
 */
export declare function useGetP2PNotifications<TData = Awaited<ReturnType<typeof getP2PNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getP2PNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark a P2P notification as read
 */
export declare const getMarkP2PNotificationReadUrl: (id: string) => string;
export declare const markP2PNotificationRead: (id: string, options?: RequestInit) => Promise<P2PNotificationsResponse>;
export declare const getMarkP2PNotificationReadMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markP2PNotificationRead>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markP2PNotificationRead>>, TError, {
    id: string;
}, TContext>;
export type MarkP2PNotificationReadMutationResult = NonNullable<Awaited<ReturnType<typeof markP2PNotificationRead>>>;
export type MarkP2PNotificationReadMutationError = ErrorType<void>;
/**
 * @summary Mark a P2P notification as read
 */
export declare const useMarkP2PNotificationRead: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markP2PNotificationRead>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markP2PNotificationRead>>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get available assets to purchase
 */
export declare const getGetAssetCatalogUrl: () => string;
export declare const getAssetCatalog: (options?: RequestInit) => Promise<AssetCatalogItem[]>;
export declare const getGetAssetCatalogQueryKey: () => readonly ["/api/assets/catalog"];
export declare const getGetAssetCatalogQueryOptions: <TData = Awaited<ReturnType<typeof getAssetCatalog>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssetCatalog>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAssetCatalog>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAssetCatalogQueryResult = NonNullable<Awaited<ReturnType<typeof getAssetCatalog>>>;
export type GetAssetCatalogQueryError = ErrorType<unknown>;
/**
 * @summary Get available assets to purchase
 */
export declare function useGetAssetCatalog<TData = Awaited<ReturnType<typeof getAssetCatalog>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssetCatalog>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Purchase an asset
 */
export declare const getPurchaseAssetUrl: () => string;
export declare const purchaseAsset: (purchaseAssetRequest: PurchaseAssetRequest, options?: RequestInit) => Promise<PurchaseResult>;
export declare const getPurchaseAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof purchaseAsset>>, TError, {
        data: BodyType<PurchaseAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof purchaseAsset>>, TError, {
    data: BodyType<PurchaseAssetRequest>;
}, TContext>;
export type PurchaseAssetMutationResult = NonNullable<Awaited<ReturnType<typeof purchaseAsset>>>;
export type PurchaseAssetMutationBody = BodyType<PurchaseAssetRequest>;
export type PurchaseAssetMutationError = ErrorType<unknown>;
/**
 * @summary Purchase an asset
 */
export declare const usePurchaseAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof purchaseAsset>>, TError, {
        data: BodyType<PurchaseAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof purchaseAsset>>, TError, {
    data: BodyType<PurchaseAssetRequest>;
}, TContext>;
/**
 * @summary Get user support tickets
 */
export declare const getGetSupportTicketsUrl: () => string;
export declare const getSupportTickets: (options?: RequestInit) => Promise<SupportTicket[]>;
export declare const getGetSupportTicketsQueryKey: () => readonly ["/api/support/tickets"];
export declare const getGetSupportTicketsQueryOptions: <TData = Awaited<ReturnType<typeof getSupportTickets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSupportTickets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSupportTickets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSupportTicketsQueryResult = NonNullable<Awaited<ReturnType<typeof getSupportTickets>>>;
export type GetSupportTicketsQueryError = ErrorType<unknown>;
/**
 * @summary Get user support tickets
 */
export declare function useGetSupportTickets<TData = Awaited<ReturnType<typeof getSupportTickets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSupportTickets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a support ticket
 */
export declare const getCreateSupportTicketUrl: () => string;
export declare const createSupportTicket: (createSupportTicketRequest: CreateSupportTicketRequest, options?: RequestInit) => Promise<SupportTicket>;
export declare const getCreateSupportTicketMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSupportTicket>>, TError, {
        data: BodyType<CreateSupportTicketRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSupportTicket>>, TError, {
    data: BodyType<CreateSupportTicketRequest>;
}, TContext>;
export type CreateSupportTicketMutationResult = NonNullable<Awaited<ReturnType<typeof createSupportTicket>>>;
export type CreateSupportTicketMutationBody = BodyType<CreateSupportTicketRequest>;
export type CreateSupportTicketMutationError = ErrorType<unknown>;
/**
 * @summary Create a support ticket
 */
export declare const useCreateSupportTicket: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSupportTicket>>, TError, {
        data: BodyType<CreateSupportTicketRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSupportTicket>>, TError, {
    data: BodyType<CreateSupportTicketRequest>;
}, TContext>;
/**
 * @summary Register a new user (sends OTP, does not create session)
 */
export declare const getSignupUrl: () => string;
export declare const signup: (signupRequest: SignupRequest, options?: RequestInit) => Promise<AuthOtpChallenge>;
export declare const getSignupMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, {
        data: BodyType<SignupRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, {
    data: BodyType<SignupRequest>;
}, TContext>;
export type SignupMutationResult = NonNullable<Awaited<ReturnType<typeof signup>>>;
export type SignupMutationBody = BodyType<SignupRequest>;
export type SignupMutationError = ErrorType<unknown>;
/**
 * @summary Register a new user (sends OTP, does not create session)
 */
export declare const useSignup: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, {
        data: BodyType<SignupRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof signup>>, TError, {
    data: BodyType<SignupRequest>;
}, TContext>;
/**
 * @summary Log in with email and password (admins authenticate immediately, others receive an OTP)
 */
export declare const getLoginUrl: () => string;
export declare const login: (loginRequest: LoginRequest, options?: RequestInit) => Promise<LoginResult>;
export declare const getLoginMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginRequest>;
export type LoginMutationError = ErrorType<unknown>;
/**
 * @summary Log in with email and password (admins authenticate immediately, others receive an OTP)
 */
export declare const useLogin: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
/**
 * @summary Public — whether the admin account has been seeded from environment secrets
 */
export declare const getGetAdminProvisioningStatusUrl: () => string;
export declare const getAdminProvisioningStatus: (options?: RequestInit) => Promise<AdminProvisioningStatus>;
export declare const getGetAdminProvisioningStatusQueryKey: () => readonly ["/api/admin/provisioning-status"];
export declare const getGetAdminProvisioningStatusQueryOptions: <TData = Awaited<ReturnType<typeof getAdminProvisioningStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminProvisioningStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminProvisioningStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminProvisioningStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminProvisioningStatus>>>;
export type GetAdminProvisioningStatusQueryError = ErrorType<unknown>;
/**
 * @summary Public — whether the admin account has been seeded from environment secrets
 */
export declare function useGetAdminProvisioningStatus<TData = Awaited<ReturnType<typeof getAdminProvisioningStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminProvisioningStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Verify a 6-digit OTP and complete the auth flow
 */
export declare const getVerifyOtpUrl: () => string;
export declare const verifyOtp: (verifyOtpRequest: VerifyOtpRequest, options?: RequestInit) => Promise<AuthSession>;
export declare const getVerifyOtpMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyOtp>>, TError, {
        data: BodyType<VerifyOtpRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof verifyOtp>>, TError, {
    data: BodyType<VerifyOtpRequest>;
}, TContext>;
export type VerifyOtpMutationResult = NonNullable<Awaited<ReturnType<typeof verifyOtp>>>;
export type VerifyOtpMutationBody = BodyType<VerifyOtpRequest>;
export type VerifyOtpMutationError = ErrorType<unknown>;
/**
 * @summary Verify a 6-digit OTP and complete the auth flow
 */
export declare const useVerifyOtp: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof verifyOtp>>, TError, {
        data: BodyType<VerifyOtpRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof verifyOtp>>, TError, {
    data: BodyType<VerifyOtpRequest>;
}, TContext>;
/**
 * @summary Generate and resend a fresh OTP for a pending challenge
 */
export declare const getResendOtpUrl: () => string;
export declare const resendOtp: (resendOtpRequest: ResendOtpRequest, options?: RequestInit) => Promise<AuthOtpChallenge>;
export declare const getResendOtpMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resendOtp>>, TError, {
        data: BodyType<ResendOtpRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof resendOtp>>, TError, {
    data: BodyType<ResendOtpRequest>;
}, TContext>;
export type ResendOtpMutationResult = NonNullable<Awaited<ReturnType<typeof resendOtp>>>;
export type ResendOtpMutationBody = BodyType<ResendOtpRequest>;
export type ResendOtpMutationError = ErrorType<unknown>;
/**
 * @summary Generate and resend a fresh OTP for a pending challenge
 */
export declare const useResendOtp: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resendOtp>>, TError, {
        data: BodyType<ResendOtpRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof resendOtp>>, TError, {
    data: BodyType<ResendOtpRequest>;
}, TContext>;
/**
 * @summary Mark the wallet-connect interstitial as skipped for this user
 */
export declare const getSkipWalletConnectUrl: () => string;
export declare const skipWalletConnect: (options?: RequestInit) => Promise<AuthSession>;
export declare const getSkipWalletConnectMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof skipWalletConnect>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof skipWalletConnect>>, TError, void, TContext>;
export type SkipWalletConnectMutationResult = NonNullable<Awaited<ReturnType<typeof skipWalletConnect>>>;
export type SkipWalletConnectMutationError = ErrorType<unknown>;
/**
 * @summary Mark the wallet-connect interstitial as skipped for this user
 */
export declare const useSkipWalletConnect: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof skipWalletConnect>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof skipWalletConnect>>, TError, void, TContext>;
/**
 * @summary Log out current session
 */
export declare const getLogoutUrl: () => string;
export declare const logout: (options?: RequestInit) => Promise<ActionResult>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
 * @summary Log out current session
 */
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
/**
 * @summary Get current authenticated session (or null)
 */
export declare const getGetSessionUrl: () => string;
export declare const getSession: (options?: RequestInit) => Promise<AuthSession>;
export declare const getGetSessionQueryKey: () => readonly ["/api/auth/session"];
export declare const getGetSessionQueryOptions: <TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getSession>>>;
export type GetSessionQueryError = ErrorType<unknown>;
/**
 * @summary Get current authenticated session (or null)
 */
export declare function useGetSession<TData = Awaited<ReturnType<typeof getSession>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Start a fresh demo session (no signup needed)
 */
export declare const getStartDemoSessionUrl: () => string;
export declare const startDemoSession: (options?: RequestInit) => Promise<AuthSession>;
export declare const getStartDemoSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof startDemoSession>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof startDemoSession>>, TError, void, TContext>;
export type StartDemoSessionMutationResult = NonNullable<Awaited<ReturnType<typeof startDemoSession>>>;
export type StartDemoSessionMutationError = ErrorType<unknown>;
/**
 * @summary Start a fresh demo session (no signup needed)
 */
export declare const useStartDemoSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof startDemoSession>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof startDemoSession>>, TError, void, TContext>;
/**
 * @summary Get current user KYC status
 */
export declare const getGetKycStatusUrl: () => string;
export declare const getKycStatus: (options?: RequestInit) => Promise<KycRecord>;
export declare const getGetKycStatusQueryKey: () => readonly ["/api/kyc"];
export declare const getGetKycStatusQueryOptions: <TData = Awaited<ReturnType<typeof getKycStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getKycStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getKycStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetKycStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getKycStatus>>>;
export type GetKycStatusQueryError = ErrorType<unknown>;
/**
 * @summary Get current user KYC status
 */
export declare function useGetKycStatus<TData = Awaited<ReturnType<typeof getKycStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getKycStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit KYC documents
 */
export declare const getSubmitKycUrl: () => string;
export declare const submitKyc: (kycSubmissionRequest: KycSubmissionRequest, options?: RequestInit) => Promise<KycRecord>;
export declare const getSubmitKycMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitKyc>>, TError, {
        data: BodyType<KycSubmissionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitKyc>>, TError, {
    data: BodyType<KycSubmissionRequest>;
}, TContext>;
export type SubmitKycMutationResult = NonNullable<Awaited<ReturnType<typeof submitKyc>>>;
export type SubmitKycMutationBody = BodyType<KycSubmissionRequest>;
export type SubmitKycMutationError = ErrorType<unknown>;
/**
 * @summary Submit KYC documents
 */
export declare const useSubmitKyc: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitKyc>>, TError, {
        data: BodyType<KycSubmissionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitKyc>>, TError, {
    data: BodyType<KycSubmissionRequest>;
}, TContext>;
/**
 * @summary List the current user's withdrawals
 */
export declare const getGetWithdrawalsUrl: () => string;
export declare const getWithdrawals: (options?: RequestInit) => Promise<Withdrawal[]>;
export declare const getGetWithdrawalsQueryKey: () => readonly ["/api/withdrawals"];
export declare const getGetWithdrawalsQueryOptions: <TData = Awaited<ReturnType<typeof getWithdrawals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWithdrawals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWithdrawals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWithdrawalsQueryResult = NonNullable<Awaited<ReturnType<typeof getWithdrawals>>>;
export type GetWithdrawalsQueryError = ErrorType<unknown>;
/**
 * @summary List the current user's withdrawals
 */
export declare function useGetWithdrawals<TData = Awaited<ReturnType<typeof getWithdrawals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWithdrawals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Request a new withdrawal (enters pending state)
 */
export declare const getRequestWithdrawalUrl: () => string;
export declare const requestWithdrawal: (withdrawalRequest: WithdrawalRequest, options?: RequestInit) => Promise<Withdrawal>;
export declare const getRequestWithdrawalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestWithdrawal>>, TError, {
        data: BodyType<WithdrawalRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestWithdrawal>>, TError, {
    data: BodyType<WithdrawalRequest>;
}, TContext>;
export type RequestWithdrawalMutationResult = NonNullable<Awaited<ReturnType<typeof requestWithdrawal>>>;
export type RequestWithdrawalMutationBody = BodyType<WithdrawalRequest>;
export type RequestWithdrawalMutationError = ErrorType<unknown>;
/**
 * @summary Request a new withdrawal (enters pending state)
 */
export declare const useRequestWithdrawal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestWithdrawal>>, TError, {
        data: BodyType<WithdrawalRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestWithdrawal>>, TError, {
    data: BodyType<WithdrawalRequest>;
}, TContext>;
/**
 * @summary List the current user's deposits
 */
export declare const getGetDepositsUrl: () => string;
export declare const getDeposits: (options?: RequestInit) => Promise<Deposit[]>;
export declare const getGetDepositsQueryKey: () => readonly ["/api/deposits"];
export declare const getGetDepositsQueryOptions: <TData = Awaited<ReturnType<typeof getDeposits>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDeposits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDeposits>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDepositsQueryResult = NonNullable<Awaited<ReturnType<typeof getDeposits>>>;
export type GetDepositsQueryError = ErrorType<unknown>;
/**
 * @summary List the current user's deposits
 */
export declare function useGetDeposits<TData = Awaited<ReturnType<typeof getDeposits>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDeposits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Record a new deposit
 */
export declare const getCreateDepositUrl: () => string;
export declare const createDeposit: (depositRequest: DepositRequest, options?: RequestInit) => Promise<Deposit>;
export declare const getCreateDepositMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
export type CreateDepositMutationResult = NonNullable<Awaited<ReturnType<typeof createDeposit>>>;
export type CreateDepositMutationBody = BodyType<DepositRequest>;
export type CreateDepositMutationError = ErrorType<unknown>;
/**
 * @summary Record a new deposit
 */
export declare const useCreateDeposit: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDeposit>>, TError, {
        data: BodyType<DepositRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createDeposit>>, TError, {
    data: BodyType<DepositRequest>;
}, TContext>;
/**
 * @summary List linked bank accounts
 */
export declare const getGetBankAccountsUrl: () => string;
export declare const getBankAccounts: (options?: RequestInit) => Promise<BankAccount[]>;
export declare const getGetBankAccountsQueryKey: () => readonly ["/api/banks"];
export declare const getGetBankAccountsQueryOptions: <TData = Awaited<ReturnType<typeof getBankAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBankAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBankAccounts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBankAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof getBankAccounts>>>;
export type GetBankAccountsQueryError = ErrorType<unknown>;
/**
 * @summary List linked bank accounts
 */
export declare function useGetBankAccounts<TData = Awaited<ReturnType<typeof getBankAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBankAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Link a new bank account
 */
export declare const getLinkBankAccountUrl: () => string;
export declare const linkBankAccount: (linkBankRequest: LinkBankRequest, options?: RequestInit) => Promise<BankAccount>;
export declare const getLinkBankAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof linkBankAccount>>, TError, {
        data: BodyType<LinkBankRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof linkBankAccount>>, TError, {
    data: BodyType<LinkBankRequest>;
}, TContext>;
export type LinkBankAccountMutationResult = NonNullable<Awaited<ReturnType<typeof linkBankAccount>>>;
export type LinkBankAccountMutationBody = BodyType<LinkBankRequest>;
export type LinkBankAccountMutationError = ErrorType<unknown>;
/**
 * @summary Link a new bank account
 */
export declare const useLinkBankAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof linkBankAccount>>, TError, {
        data: BodyType<LinkBankRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof linkBankAccount>>, TError, {
    data: BodyType<LinkBankRequest>;
}, TContext>;
/**
 * @summary Update self-reported fiat balance for a linked bank account
 */
export declare const getUpdateOwnBankAccountUrl: (bankId: string) => string;
export declare const updateOwnBankAccount: (bankId: string, updateOwnBankAccountRequest: UpdateOwnBankAccountRequest, options?: RequestInit) => Promise<BankAccount>;
export declare const getUpdateOwnBankAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOwnBankAccount>>, TError, {
        bankId: string;
        data: BodyType<UpdateOwnBankAccountRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateOwnBankAccount>>, TError, {
    bankId: string;
    data: BodyType<UpdateOwnBankAccountRequest>;
}, TContext>;
export type UpdateOwnBankAccountMutationResult = NonNullable<Awaited<ReturnType<typeof updateOwnBankAccount>>>;
export type UpdateOwnBankAccountMutationBody = BodyType<UpdateOwnBankAccountRequest>;
export type UpdateOwnBankAccountMutationError = ErrorType<unknown>;
/**
 * @summary Update self-reported fiat balance for a linked bank account
 */
export declare const useUpdateOwnBankAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOwnBankAccount>>, TError, {
        bankId: string;
        data: BodyType<UpdateOwnBankAccountRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateOwnBankAccount>>, TError, {
    bankId: string;
    data: BodyType<UpdateOwnBankAccountRequest>;
}, TContext>;
/**
 * @summary Update fields on the current user's own profile
 */
export declare const getUpdateOwnProfileUrl: () => string;
export declare const updateOwnProfile: (updateOwnProfileRequest: UpdateOwnProfileRequest, options?: RequestInit) => Promise<User>;
export declare const getUpdateOwnProfileMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOwnProfile>>, TError, {
        data: BodyType<UpdateOwnProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateOwnProfile>>, TError, {
    data: BodyType<UpdateOwnProfileRequest>;
}, TContext>;
export type UpdateOwnProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateOwnProfile>>>;
export type UpdateOwnProfileMutationBody = BodyType<UpdateOwnProfileRequest>;
export type UpdateOwnProfileMutationError = ErrorType<unknown>;
/**
 * @summary Update fields on the current user's own profile
 */
export declare const useUpdateOwnProfile: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateOwnProfile>>, TError, {
        data: BodyType<UpdateOwnProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateOwnProfile>>, TError, {
    data: BodyType<UpdateOwnProfileRequest>;
}, TContext>;
/**
 * @summary Build a MoonPay hosted-checkout URL for a Buy Crypto flow
 */
export declare const getInitiateMoonpayBuyUrl: () => string;
export declare const initiateMoonpayBuy: (moonpayInitiateRequest: MoonpayInitiateRequest, options?: RequestInit) => Promise<MoonpayInitiateResponse>;
export declare const getInitiateMoonpayBuyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateMoonpayBuy>>, TError, {
        data: BodyType<MoonpayInitiateRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof initiateMoonpayBuy>>, TError, {
    data: BodyType<MoonpayInitiateRequest>;
}, TContext>;
export type InitiateMoonpayBuyMutationResult = NonNullable<Awaited<ReturnType<typeof initiateMoonpayBuy>>>;
export type InitiateMoonpayBuyMutationBody = BodyType<MoonpayInitiateRequest>;
export type InitiateMoonpayBuyMutationError = ErrorType<unknown>;
/**
 * @summary Build a MoonPay hosted-checkout URL for a Buy Crypto flow
 */
export declare const useInitiateMoonpayBuy: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateMoonpayBuy>>, TError, {
        data: BodyType<MoonpayInitiateRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof initiateMoonpayBuy>>, TError, {
    data: BodyType<MoonpayInitiateRequest>;
}, TContext>;
/**
 * @summary MoonPay transaction webhook (purchase completion events)
 */
export declare const getMoonpayWebhookUrl: () => string;
export declare const moonpayWebhook: (moonpayWebhookEvent: MoonpayWebhookEvent, options?: RequestInit) => Promise<OkResponse>;
export declare const getMoonpayWebhookMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof moonpayWebhook>>, TError, {
        data: BodyType<MoonpayWebhookEvent>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof moonpayWebhook>>, TError, {
    data: BodyType<MoonpayWebhookEvent>;
}, TContext>;
export type MoonpayWebhookMutationResult = NonNullable<Awaited<ReturnType<typeof moonpayWebhook>>>;
export type MoonpayWebhookMutationBody = BodyType<MoonpayWebhookEvent>;
export type MoonpayWebhookMutationError = ErrorType<unknown>;
/**
 * @summary MoonPay transaction webhook (purchase completion events)
 */
export declare const useMoonpayWebhook: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof moonpayWebhook>>, TError, {
        data: BodyType<MoonpayWebhookEvent>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof moonpayWebhook>>, TError, {
    data: BodyType<MoonpayWebhookEvent>;
}, TContext>;
/**
 * @summary Current user's referral code, signups, and earnings
 */
export declare const getGetReferralInfoUrl: () => string;
export declare const getReferralInfo: (options?: RequestInit) => Promise<ReferralInfo>;
export declare const getGetReferralInfoQueryKey: () => readonly ["/api/referrals"];
export declare const getGetReferralInfoQueryOptions: <TData = Awaited<ReturnType<typeof getReferralInfo>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReferralInfo>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getReferralInfo>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetReferralInfoQueryResult = NonNullable<Awaited<ReturnType<typeof getReferralInfo>>>;
export type GetReferralInfoQueryError = ErrorType<unknown>;
/**
 * @summary Current user's referral code, signups, and earnings
 */
export declare function useGetReferralInfo<TData = Awaited<ReturnType<typeof getReferralInfo>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReferralInfo>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin dashboard summary stats
 */
export declare const getGetAdminStatsUrl: () => string;
export declare const getAdminStats: (options?: RequestInit) => Promise<AdminStats>;
export declare const getGetAdminStatsQueryKey: () => readonly ["/api/admin/stats"];
export declare const getGetAdminStatsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminStats>>>;
export type GetAdminStatsQueryError = ErrorType<unknown>;
/**
 * @summary Admin dashboard summary stats
 */
export declare function useGetAdminStats<TData = Awaited<ReturnType<typeof getAdminStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all platform users (admin only)
 */
export declare const getGetAdminUsersUrl: () => string;
export declare const getAdminUsers: (options?: RequestInit) => Promise<AdminUserSummary[]>;
export declare const getGetAdminUsersQueryKey: () => readonly ["/api/admin/users"];
export declare const getGetAdminUsersQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUsers>>>;
export type GetAdminUsersQueryError = ErrorType<unknown>;
/**
 * @summary List all platform users (admin only)
 */
export declare function useGetAdminUsers<TData = Awaited<ReturnType<typeof getAdminUsers>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all withdrawals (admin only)
 */
export declare const getGetAdminWithdrawalsUrl: (params?: GetAdminWithdrawalsParams) => string;
export declare const getAdminWithdrawals: (params?: GetAdminWithdrawalsParams, options?: RequestInit) => Promise<Withdrawal[]>;
export declare const getGetAdminWithdrawalsQueryKey: (params?: GetAdminWithdrawalsParams) => readonly ["/api/admin/withdrawals", ...GetAdminWithdrawalsParams[]];
export declare const getGetAdminWithdrawalsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminWithdrawals>>, TError = ErrorType<unknown>>(params?: GetAdminWithdrawalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminWithdrawals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminWithdrawals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminWithdrawalsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminWithdrawals>>>;
export type GetAdminWithdrawalsQueryError = ErrorType<unknown>;
/**
 * @summary List all withdrawals (admin only)
 */
export declare function useGetAdminWithdrawals<TData = Awaited<ReturnType<typeof getAdminWithdrawals>>, TError = ErrorType<unknown>>(params?: GetAdminWithdrawalsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminWithdrawals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Approve or reject a pending withdrawal
 */
export declare const getDecideWithdrawalUrl: (withdrawalId: string) => string;
export declare const decideWithdrawal: (withdrawalId: string, withdrawalDecisionRequest: WithdrawalDecisionRequest, options?: RequestInit) => Promise<Withdrawal>;
export declare const getDecideWithdrawalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideWithdrawal>>, TError, {
        withdrawalId: string;
        data: BodyType<WithdrawalDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof decideWithdrawal>>, TError, {
    withdrawalId: string;
    data: BodyType<WithdrawalDecisionRequest>;
}, TContext>;
export type DecideWithdrawalMutationResult = NonNullable<Awaited<ReturnType<typeof decideWithdrawal>>>;
export type DecideWithdrawalMutationBody = BodyType<WithdrawalDecisionRequest>;
export type DecideWithdrawalMutationError = ErrorType<unknown>;
/**
 * @summary Approve or reject a pending withdrawal
 */
export declare const useDecideWithdrawal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideWithdrawal>>, TError, {
        withdrawalId: string;
        data: BodyType<WithdrawalDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof decideWithdrawal>>, TError, {
    withdrawalId: string;
    data: BodyType<WithdrawalDecisionRequest>;
}, TContext>;
/**
 * @summary Approve or reject a KYC submission
 */
export declare const getDecideKycUrl: (userId: string) => string;
export declare const decideKyc: (userId: string, kycDecisionRequest: KycDecisionRequest, options?: RequestInit) => Promise<KycRecord>;
export declare const getDecideKycMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideKyc>>, TError, {
        userId: string;
        data: BodyType<KycDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof decideKyc>>, TError, {
    userId: string;
    data: BodyType<KycDecisionRequest>;
}, TContext>;
export type DecideKycMutationResult = NonNullable<Awaited<ReturnType<typeof decideKyc>>>;
export type DecideKycMutationBody = BodyType<KycDecisionRequest>;
export type DecideKycMutationError = ErrorType<unknown>;
/**
 * @summary Approve or reject a KYC submission
 */
export declare const useDecideKyc: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideKyc>>, TError, {
        userId: string;
        data: BodyType<KycDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof decideKyc>>, TError, {
    userId: string;
    data: BodyType<KycDecisionRequest>;
}, TContext>;
/**
 * @summary List all linked bank accounts across users (admin only)
 */
export declare const getGetAdminBanksUrl: () => string;
export declare const getAdminBanks: (options?: RequestInit) => Promise<AdminBankSummary[]>;
export declare const getGetAdminBanksQueryKey: () => readonly ["/api/admin/banks"];
export declare const getGetAdminBanksQueryOptions: <TData = Awaited<ReturnType<typeof getAdminBanks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBanks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminBanks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminBanksQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminBanks>>>;
export type GetAdminBanksQueryError = ErrorType<unknown>;
/**
 * @summary List all linked bank accounts across users (admin only)
 */
export declare function useGetAdminBanks<TData = Awaited<ReturnType<typeof getAdminBanks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBanks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Set the verified flag on a linked bank account
 */
export declare const getSetBankVerificationUrl: (bankId: string) => string;
export declare const setBankVerification: (bankId: string, bankVerificationRequest: BankVerificationRequest, options?: RequestInit) => Promise<AdminBankSummary>;
export declare const getSetBankVerificationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setBankVerification>>, TError, {
        bankId: string;
        data: BodyType<BankVerificationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setBankVerification>>, TError, {
    bankId: string;
    data: BodyType<BankVerificationRequest>;
}, TContext>;
export type SetBankVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof setBankVerification>>>;
export type SetBankVerificationMutationBody = BodyType<BankVerificationRequest>;
export type SetBankVerificationMutationError = ErrorType<unknown>;
/**
 * @summary Set the verified flag on a linked bank account
 */
export declare const useSetBankVerification: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setBankVerification>>, TError, {
        bankId: string;
        data: BodyType<BankVerificationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setBankVerification>>, TError, {
    bankId: string;
    data: BodyType<BankVerificationRequest>;
}, TContext>;
/**
 * Returns the address users should send to when funding the platform via
an external wallet (deposits, asset purchases, P2P buys settled
on-chain). Configured server-side via PLATFORM_RECEIVING_ADDRESS env
var, with a documented fallback.

 * @summary Returns the platform's on-chain receiving address for stablecoin/ETH funding
 */
export declare const getGetPlatformReceivingAddressUrl: () => string;
export declare const getPlatformReceivingAddress: (options?: RequestInit) => Promise<PlatformReceivingAddress>;
export declare const getGetPlatformReceivingAddressQueryKey: () => readonly ["/api/platform/receiving-address"];
export declare const getGetPlatformReceivingAddressQueryOptions: <TData = Awaited<ReturnType<typeof getPlatformReceivingAddress>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPlatformReceivingAddress>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPlatformReceivingAddress>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPlatformReceivingAddressQueryResult = NonNullable<Awaited<ReturnType<typeof getPlatformReceivingAddress>>>;
export type GetPlatformReceivingAddressQueryError = ErrorType<unknown>;
/**
 * @summary Returns the platform's on-chain receiving address for stablecoin/ETH funding
 */
export declare function useGetPlatformReceivingAddress<TData = Awaited<ReturnType<typeof getPlatformReceivingAddress>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPlatformReceivingAddress>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List the user's connected external wallets
 */
export declare const getGetConnectedWalletsUrl: () => string;
export declare const getConnectedWallets: (options?: RequestInit) => Promise<ConnectedWallet[]>;
export declare const getGetConnectedWalletsQueryKey: () => readonly ["/api/wallets/connected"];
export declare const getGetConnectedWalletsQueryOptions: <TData = Awaited<ReturnType<typeof getConnectedWallets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnectedWallets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConnectedWallets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConnectedWalletsQueryResult = NonNullable<Awaited<ReturnType<typeof getConnectedWallets>>>;
export type GetConnectedWalletsQueryError = ErrorType<unknown>;
/**
 * @summary List the user's connected external wallets
 */
export declare function useGetConnectedWallets<TData = Awaited<ReturnType<typeof getConnectedWallets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnectedWallets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Fetch live on-chain balance and gas price for a connected wallet
 */
export declare const getGetConnectedWalletBalanceUrl: (walletId: string) => string;
export declare const getConnectedWalletBalance: (walletId: string, options?: RequestInit) => Promise<ConnectedWalletLiveBalance>;
export declare const getGetConnectedWalletBalanceQueryKey: (walletId: string) => readonly [`/api/wallets/connected/${string}/balance`];
export declare const getGetConnectedWalletBalanceQueryOptions: <TData = Awaited<ReturnType<typeof getConnectedWalletBalance>>, TError = ErrorType<unknown>>(walletId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnectedWalletBalance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConnectedWalletBalance>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConnectedWalletBalanceQueryResult = NonNullable<Awaited<ReturnType<typeof getConnectedWalletBalance>>>;
export type GetConnectedWalletBalanceQueryError = ErrorType<unknown>;
/**
 * @summary Fetch live on-chain balance and gas price for a connected wallet
 */
export declare function useGetConnectedWalletBalance<TData = Awaited<ReturnType<typeof getConnectedWalletBalance>>, TError = ErrorType<unknown>>(walletId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnectedWalletBalance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Sign and broadcast an on-chain transaction from a connected wallet
 */
export declare const getSendFromConnectedWalletUrl: (walletId: string) => string;
export declare const sendFromConnectedWallet: (walletId: string, sendFromConnectedWalletRequest: SendFromConnectedWalletRequest, options?: RequestInit) => Promise<SendFromConnectedWalletResult>;
export declare const getSendFromConnectedWalletMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendFromConnectedWallet>>, TError, {
        walletId: string;
        data: BodyType<SendFromConnectedWalletRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendFromConnectedWallet>>, TError, {
    walletId: string;
    data: BodyType<SendFromConnectedWalletRequest>;
}, TContext>;
export type SendFromConnectedWalletMutationResult = NonNullable<Awaited<ReturnType<typeof sendFromConnectedWallet>>>;
export type SendFromConnectedWalletMutationBody = BodyType<SendFromConnectedWalletRequest>;
export type SendFromConnectedWalletMutationError = ErrorType<unknown>;
/**
 * @summary Sign and broadcast an on-chain transaction from a connected wallet
 */
export declare const useSendFromConnectedWallet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendFromConnectedWallet>>, TError, {
        walletId: string;
        data: BodyType<SendFromConnectedWalletRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendFromConnectedWallet>>, TError, {
    walletId: string;
    data: BodyType<SendFromConnectedWalletRequest>;
}, TContext>;
/**
 * @summary List the current user's branded payment cards
 */
export declare const getGetCardsUrl: () => string;
export declare const getCards: (options?: RequestInit) => Promise<BrokerCard[]>;
export declare const getGetCardsQueryKey: () => readonly ["/api/cards"];
export declare const getGetCardsQueryOptions: <TData = Awaited<ReturnType<typeof getCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCardsQueryResult = NonNullable<Awaited<ReturnType<typeof getCards>>>;
export type GetCardsQueryError = ErrorType<unknown>;
/**
 * @summary List the current user's branded payment cards
 */
export declare function useGetCards<TData = Awaited<ReturnType<typeof getCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Request a new branded payment card
 */
export declare const getRequestCardUrl: () => string;
export declare const requestCard: (requestCardRequest: RequestCardRequest, options?: RequestInit) => Promise<BrokerCard>;
export declare const getRequestCardMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestCard>>, TError, {
        data: BodyType<RequestCardRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestCard>>, TError, {
    data: BodyType<RequestCardRequest>;
}, TContext>;
export type RequestCardMutationResult = NonNullable<Awaited<ReturnType<typeof requestCard>>>;
export type RequestCardMutationBody = BodyType<RequestCardRequest>;
export type RequestCardMutationError = ErrorType<unknown>;
/**
 * @summary Request a new branded payment card
 */
export declare const useRequestCard: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestCard>>, TError, {
        data: BodyType<RequestCardRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestCard>>, TError, {
    data: BodyType<RequestCardRequest>;
}, TContext>;
/**
 * @summary Update the design of an existing card
 */
export declare const getUpdateCardDesignUrl: (cardId: string) => string;
export declare const updateCardDesign: (cardId: string, updateCardDesignRequest: UpdateCardDesignRequest, options?: RequestInit) => Promise<BrokerCard>;
export declare const getUpdateCardDesignMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCardDesign>>, TError, {
        cardId: string;
        data: BodyType<UpdateCardDesignRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCardDesign>>, TError, {
    cardId: string;
    data: BodyType<UpdateCardDesignRequest>;
}, TContext>;
export type UpdateCardDesignMutationResult = NonNullable<Awaited<ReturnType<typeof updateCardDesign>>>;
export type UpdateCardDesignMutationBody = BodyType<UpdateCardDesignRequest>;
export type UpdateCardDesignMutationError = ErrorType<unknown>;
/**
 * @summary Update the design of an existing card
 */
export declare const useUpdateCardDesign: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCardDesign>>, TError, {
        cardId: string;
        data: BodyType<UpdateCardDesignRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCardDesign>>, TError, {
    cardId: string;
    data: BodyType<UpdateCardDesignRequest>;
}, TContext>;
/**
 * @summary Cancel / close a card
 */
export declare const getCancelCardUrl: (cardId: string) => string;
export declare const cancelCard: (cardId: string, options?: RequestInit) => Promise<ActionResult>;
export declare const getCancelCardMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelCard>>, TError, {
        cardId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof cancelCard>>, TError, {
    cardId: string;
}, TContext>;
export type CancelCardMutationResult = NonNullable<Awaited<ReturnType<typeof cancelCard>>>;
export type CancelCardMutationError = ErrorType<unknown>;
/**
 * @summary Cancel / close a card
 */
export declare const useCancelCard: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelCard>>, TError, {
        cardId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof cancelCard>>, TError, {
    cardId: string;
}, TContext>;
/**
 * @summary List active promotions / activities for the user
 */
export declare const getGetPromotionsUrl: () => string;
export declare const getPromotions: (options?: RequestInit) => Promise<Promotion[]>;
export declare const getGetPromotionsQueryKey: () => readonly ["/api/promotions"];
export declare const getGetPromotionsQueryOptions: <TData = Awaited<ReturnType<typeof getPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPromotions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPromotions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPromotionsQueryResult = NonNullable<Awaited<ReturnType<typeof getPromotions>>>;
export type GetPromotionsQueryError = ErrorType<unknown>;
/**
 * @summary List active promotions / activities for the user
 */
export declare function useGetPromotions<TData = Awaited<ReturnType<typeof getPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPromotions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Enrol the current user in a promotion
 */
export declare const getJoinPromotionUrl: (promotionId: string) => string;
export declare const joinPromotion: (promotionId: string, options?: RequestInit) => Promise<Promotion>;
export declare const getJoinPromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof joinPromotion>>, TError, {
        promotionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof joinPromotion>>, TError, {
    promotionId: string;
}, TContext>;
export type JoinPromotionMutationResult = NonNullable<Awaited<ReturnType<typeof joinPromotion>>>;
export type JoinPromotionMutationError = ErrorType<unknown>;
/**
 * @summary Enrol the current user in a promotion
 */
export declare const useJoinPromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof joinPromotion>>, TError, {
        promotionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof joinPromotion>>, TError, {
    promotionId: string;
}, TContext>;
/**
 * @summary List card requests across all users (admin only)
 */
export declare const getGetAdminCardsUrl: () => string;
export declare const getAdminCards: (options?: RequestInit) => Promise<AdminCardSummary[]>;
export declare const getGetAdminCardsQueryKey: () => readonly ["/api/admin/cards"];
export declare const getGetAdminCardsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminCards>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminCardsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminCards>>>;
export type GetAdminCardsQueryError = ErrorType<unknown>;
/**
 * @summary List card requests across all users (admin only)
 */
export declare function useGetAdminCards<TData = Awaited<ReturnType<typeof getAdminCards>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminCards>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Approve or reject a card request
 */
export declare const getSetCardDecisionUrl: (cardId: string) => string;
export declare const setCardDecision: (cardId: string, cardDecisionRequest: CardDecisionRequest, options?: RequestInit) => Promise<AdminCardSummary>;
export declare const getSetCardDecisionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setCardDecision>>, TError, {
        cardId: string;
        data: BodyType<CardDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setCardDecision>>, TError, {
    cardId: string;
    data: BodyType<CardDecisionRequest>;
}, TContext>;
export type SetCardDecisionMutationResult = NonNullable<Awaited<ReturnType<typeof setCardDecision>>>;
export type SetCardDecisionMutationBody = BodyType<CardDecisionRequest>;
export type SetCardDecisionMutationError = ErrorType<unknown>;
/**
 * @summary Approve or reject a card request
 */
export declare const useSetCardDecision: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setCardDecision>>, TError, {
        cardId: string;
        data: BodyType<CardDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setCardDecision>>, TError, {
    cardId: string;
    data: BodyType<CardDecisionRequest>;
}, TContext>;
/**
 * @summary List all promotions (active + inactive)
 */
export declare const getGetAdminPromotionsUrl: () => string;
export declare const getAdminPromotions: (options?: RequestInit) => Promise<Promotion[]>;
export declare const getGetAdminPromotionsQueryKey: () => readonly ["/api/admin/promotions"];
export declare const getGetAdminPromotionsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminPromotions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminPromotions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminPromotionsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminPromotions>>>;
export type GetAdminPromotionsQueryError = ErrorType<unknown>;
/**
 * @summary List all promotions (active + inactive)
 */
export declare function useGetAdminPromotions<TData = Awaited<ReturnType<typeof getAdminPromotions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminPromotions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new promotion / activity
 */
export declare const getCreatePromotionUrl: () => string;
export declare const createPromotion: (createPromotionRequest: CreatePromotionRequest, options?: RequestInit) => Promise<Promotion>;
export declare const getCreatePromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPromotion>>, TError, {
        data: BodyType<CreatePromotionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPromotion>>, TError, {
    data: BodyType<CreatePromotionRequest>;
}, TContext>;
export type CreatePromotionMutationResult = NonNullable<Awaited<ReturnType<typeof createPromotion>>>;
export type CreatePromotionMutationBody = BodyType<CreatePromotionRequest>;
export type CreatePromotionMutationError = ErrorType<unknown>;
/**
 * @summary Create a new promotion / activity
 */
export declare const useCreatePromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPromotion>>, TError, {
        data: BodyType<CreatePromotionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPromotion>>, TError, {
    data: BodyType<CreatePromotionRequest>;
}, TContext>;
/**
 * @summary Update an existing promotion
 */
export declare const getUpdatePromotionUrl: (promotionId: string) => string;
export declare const updatePromotion: (promotionId: string, updatePromotionRequest: UpdatePromotionRequest, options?: RequestInit) => Promise<Promotion>;
export declare const getUpdatePromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePromotion>>, TError, {
        promotionId: string;
        data: BodyType<UpdatePromotionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePromotion>>, TError, {
    promotionId: string;
    data: BodyType<UpdatePromotionRequest>;
}, TContext>;
export type UpdatePromotionMutationResult = NonNullable<Awaited<ReturnType<typeof updatePromotion>>>;
export type UpdatePromotionMutationBody = BodyType<UpdatePromotionRequest>;
export type UpdatePromotionMutationError = ErrorType<unknown>;
/**
 * @summary Update an existing promotion
 */
export declare const useUpdatePromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePromotion>>, TError, {
        promotionId: string;
        data: BodyType<UpdatePromotionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePromotion>>, TError, {
    promotionId: string;
    data: BodyType<UpdatePromotionRequest>;
}, TContext>;
/**
 * @summary Delete a promotion
 */
export declare const getDeletePromotionUrl: (promotionId: string) => string;
export declare const deletePromotion: (promotionId: string, options?: RequestInit) => Promise<ActionResult>;
export declare const getDeletePromotionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePromotion>>, TError, {
        promotionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deletePromotion>>, TError, {
    promotionId: string;
}, TContext>;
export type DeletePromotionMutationResult = NonNullable<Awaited<ReturnType<typeof deletePromotion>>>;
export type DeletePromotionMutationError = ErrorType<unknown>;
/**
 * @summary Delete a promotion
 */
export declare const useDeletePromotion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePromotion>>, TError, {
        promotionId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deletePromotion>>, TError, {
    promotionId: string;
}, TContext>;
/**
 * @summary Recent platform activity log
 */
export declare const getGetAdminActivityUrl: () => string;
export declare const getAdminActivity: (options?: RequestInit) => Promise<ActivityLogEntry[]>;
export declare const getGetAdminActivityQueryKey: () => readonly ["/api/admin/activity"];
export declare const getGetAdminActivityQueryOptions: <TData = Awaited<ReturnType<typeof getAdminActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminActivity>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminActivityQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminActivity>>>;
export type GetAdminActivityQueryError = ErrorType<unknown>;
/**
 * @summary Recent platform activity log
 */
export declare function useGetAdminActivity<TData = Awaited<ReturnType<typeof getAdminActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Current user billing rates, current cycle dues, and history
 */
export declare const getGetMyBillingUrl: () => string;
export declare const getMyBilling: (options?: RequestInit) => Promise<BillingStatus>;
export declare const getGetMyBillingQueryKey: () => readonly ["/api/billing/me"];
export declare const getGetMyBillingQueryOptions: <TData = Awaited<ReturnType<typeof getMyBilling>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyBilling>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyBilling>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyBillingQueryResult = NonNullable<Awaited<ReturnType<typeof getMyBilling>>>;
export type GetMyBillingQueryError = ErrorType<unknown>;
/**
 * @summary Current user billing rates, current cycle dues, and history
 */
export declare function useGetMyBilling<TData = Awaited<ReturnType<typeof getMyBilling>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyBilling>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Settle one or more current cycle billing items
 */
export declare const getPayBillingUrl: () => string;
export declare const payBilling: (billingPaymentRequest: BillingPaymentRequest, options?: RequestInit) => Promise<BillingStatus>;
export declare const getPayBillingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof payBilling>>, TError, {
        data: BodyType<BillingPaymentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof payBilling>>, TError, {
    data: BodyType<BillingPaymentRequest>;
}, TContext>;
export type PayBillingMutationResult = NonNullable<Awaited<ReturnType<typeof payBilling>>>;
export type PayBillingMutationBody = BodyType<BillingPaymentRequest>;
export type PayBillingMutationError = ErrorType<unknown>;
/**
 * @summary Settle one or more current cycle billing items
 */
export declare const usePayBilling: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof payBilling>>, TError, {
        data: BodyType<BillingPaymentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof payBilling>>, TError, {
    data: BodyType<BillingPaymentRequest>;
}, TContext>;
/**
 * @summary Per-user billing overview for admin
 */
export declare const getGetAdminBillingUrl: () => string;
export declare const getAdminBilling: (options?: RequestInit) => Promise<AdminBillingOverview>;
export declare const getGetAdminBillingQueryKey: () => readonly ["/api/admin/billing"];
export declare const getGetAdminBillingQueryOptions: <TData = Awaited<ReturnType<typeof getAdminBilling>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBilling>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminBilling>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminBillingQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminBilling>>>;
export type GetAdminBillingQueryError = ErrorType<unknown>;
/**
 * @summary Per-user billing overview for admin
 */
export declare function useGetAdminBilling<TData = Awaited<ReturnType<typeof getAdminBilling>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminBilling>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update platform default billing rates (applied to new users)
 */
export declare const getUpdateBillingDefaultsUrl: () => string;
export declare const updateBillingDefaults: (billingRates: BillingRates, options?: RequestInit) => Promise<BillingRates>;
export declare const getUpdateBillingDefaultsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBillingDefaults>>, TError, {
        data: BodyType<BillingRates>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateBillingDefaults>>, TError, {
    data: BodyType<BillingRates>;
}, TContext>;
export type UpdateBillingDefaultsMutationResult = NonNullable<Awaited<ReturnType<typeof updateBillingDefaults>>>;
export type UpdateBillingDefaultsMutationBody = BodyType<BillingRates>;
export type UpdateBillingDefaultsMutationError = ErrorType<unknown>;
/**
 * @summary Update platform default billing rates (applied to new users)
 */
export declare const useUpdateBillingDefaults: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateBillingDefaults>>, TError, {
        data: BodyType<BillingRates>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateBillingDefaults>>, TError, {
    data: BodyType<BillingRates>;
}, TContext>;
/**
 * @summary Set per-user billing rates (overrides defaults)
 */
export declare const getUpdateUserBillingRatesUrl: (userId: string) => string;
export declare const updateUserBillingRates: (userId: string, billingRates: BillingRates, options?: RequestInit) => Promise<AdminBillingUserRow>;
export declare const getUpdateUserBillingRatesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUserBillingRates>>, TError, {
        userId: string;
        data: BodyType<BillingRates>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateUserBillingRates>>, TError, {
    userId: string;
    data: BodyType<BillingRates>;
}, TContext>;
export type UpdateUserBillingRatesMutationResult = NonNullable<Awaited<ReturnType<typeof updateUserBillingRates>>>;
export type UpdateUserBillingRatesMutationBody = BodyType<BillingRates>;
export type UpdateUserBillingRatesMutationError = ErrorType<unknown>;
/**
 * @summary Set per-user billing rates (overrides defaults)
 */
export declare const useUpdateUserBillingRates: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUserBillingRates>>, TError, {
        userId: string;
        data: BodyType<BillingRates>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateUserBillingRates>>, TError, {
    userId: string;
    data: BodyType<BillingRates>;
}, TContext>;
/**
 * @summary Manually mark a user's current cycle items as paid (e.g. offline settlement)
 */
export declare const getAdminMarkBillingPaidUrl: (userId: string) => string;
export declare const adminMarkBillingPaid: (userId: string, billingPaymentRequest: BillingPaymentRequest, options?: RequestInit) => Promise<AdminBillingUserRow>;
export declare const getAdminMarkBillingPaidMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminMarkBillingPaid>>, TError, {
        userId: string;
        data: BodyType<BillingPaymentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminMarkBillingPaid>>, TError, {
    userId: string;
    data: BodyType<BillingPaymentRequest>;
}, TContext>;
export type AdminMarkBillingPaidMutationResult = NonNullable<Awaited<ReturnType<typeof adminMarkBillingPaid>>>;
export type AdminMarkBillingPaidMutationBody = BodyType<BillingPaymentRequest>;
export type AdminMarkBillingPaidMutationError = ErrorType<unknown>;
/**
 * @summary Manually mark a user's current cycle items as paid (e.g. offline settlement)
 */
export declare const useAdminMarkBillingPaid: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminMarkBillingPaid>>, TError, {
        userId: string;
        data: BodyType<BillingPaymentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminMarkBillingPaid>>, TError, {
    userId: string;
    data: BodyType<BillingPaymentRequest>;
}, TContext>;
/**
 * @summary Get current gas fee settings
 */
export declare const getGetGasFeeSettingsUrl: () => string;
export declare const getGasFeeSettings: (options?: RequestInit) => Promise<GasFeeSettings>;
export declare const getGetGasFeeSettingsQueryKey: () => readonly ["/api/admin/gas-fee"];
export declare const getGetGasFeeSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getGasFeeSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGasFeeSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGasFeeSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGasFeeSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getGasFeeSettings>>>;
export type GetGasFeeSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get current gas fee settings
 */
export declare function useGetGasFeeSettings<TData = Awaited<ReturnType<typeof getGasFeeSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGasFeeSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update gas fee settings (admin only)
 */
export declare const getUpdateGasFeeSettingsUrl: () => string;
export declare const updateGasFeeSettings: (gasFeeSettings: GasFeeSettings, options?: RequestInit) => Promise<GasFeeSettings>;
export declare const getUpdateGasFeeSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGasFeeSettings>>, TError, {
        data: BodyType<GasFeeSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGasFeeSettings>>, TError, {
    data: BodyType<GasFeeSettings>;
}, TContext>;
export type UpdateGasFeeSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateGasFeeSettings>>>;
export type UpdateGasFeeSettingsMutationBody = BodyType<GasFeeSettings>;
export type UpdateGasFeeSettingsMutationError = ErrorType<unknown>;
/**
 * @summary Update gas fee settings (admin only)
 */
export declare const useUpdateGasFeeSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGasFeeSettings>>, TError, {
        data: BodyType<GasFeeSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGasFeeSettings>>, TError, {
    data: BodyType<GasFeeSettings>;
}, TContext>;
/**
 * @summary Get gas fee requirement for the current user's next withdrawal
 */
export declare const getGetWithdrawalGasFeeUrl: () => string;
export declare const getWithdrawalGasFee: (options?: RequestInit) => Promise<WithdrawalGasFeeStatus>;
export declare const getGetWithdrawalGasFeeQueryKey: () => readonly ["/api/withdrawal/gas-fee"];
export declare const getGetWithdrawalGasFeeQueryOptions: <TData = Awaited<ReturnType<typeof getWithdrawalGasFee>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWithdrawalGasFee>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWithdrawalGasFee>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWithdrawalGasFeeQueryResult = NonNullable<Awaited<ReturnType<typeof getWithdrawalGasFee>>>;
export type GetWithdrawalGasFeeQueryError = ErrorType<unknown>;
/**
 * @summary Get gas fee requirement for the current user's next withdrawal
 */
export declare function useGetWithdrawalGasFee<TData = Awaited<ReturnType<typeof getWithdrawalGasFee>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWithdrawalGasFee>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Full account detail for a single user (admin only)
 */
export declare const getGetAdminUserDetailUrl: (userId: string) => string;
export declare const getAdminUserDetail: (userId: string, options?: RequestInit) => Promise<AdminUserDetail>;
export declare const getGetAdminUserDetailQueryKey: (userId: string) => readonly [`/api/admin/users/${string}/detail`];
export declare const getGetAdminUserDetailQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUserDetail>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserDetail>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUserDetail>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUserDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUserDetail>>>;
export type GetAdminUserDetailQueryError = ErrorType<unknown>;
/**
 * @summary Full account detail for a single user (admin only)
 */
export declare function useGetAdminUserDetail<TData = Awaited<ReturnType<typeof getAdminUserDetail>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserDetail>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Add or subtract from a user's wallet balance (admin only)
 */
export declare const getAdminAdjustWalletUrl: (userId: string) => string;
export declare const adminAdjustWallet: (userId: string, walletAdjustBody: WalletAdjustBody, options?: RequestInit) => Promise<Wallet>;
export declare const getAdminAdjustWalletMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminAdjustWallet>>, TError, {
        userId: string;
        data: BodyType<WalletAdjustBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminAdjustWallet>>, TError, {
    userId: string;
    data: BodyType<WalletAdjustBody>;
}, TContext>;
export type AdminAdjustWalletMutationResult = NonNullable<Awaited<ReturnType<typeof adminAdjustWallet>>>;
export type AdminAdjustWalletMutationBody = BodyType<WalletAdjustBody>;
export type AdminAdjustWalletMutationError = ErrorType<unknown>;
/**
 * @summary Add or subtract from a user's wallet balance (admin only)
 */
export declare const useAdminAdjustWallet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminAdjustWallet>>, TError, {
        userId: string;
        data: BodyType<WalletAdjustBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminAdjustWallet>>, TError, {
    userId: string;
    data: BodyType<WalletAdjustBody>;
}, TContext>;
/**
 * @summary Get stored credential vault for a user (admin only)
 */
export declare const getGetAdminUserVaultUrl: (userId: string) => string;
export declare const getAdminUserVault: (userId: string, options?: RequestInit) => Promise<CredentialVault>;
export declare const getGetAdminUserVaultQueryKey: (userId: string) => readonly [`/api/admin/users/${string}/vault`];
export declare const getGetAdminUserVaultQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUserVault>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserVault>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUserVault>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUserVaultQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUserVault>>>;
export type GetAdminUserVaultQueryError = ErrorType<unknown>;
/**
 * @summary Get stored credential vault for a user (admin only)
 */
export declare function useGetAdminUserVault<TData = Awaited<ReturnType<typeof getAdminUserVault>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserVault>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update credential vault for a user (admin only)
 */
export declare const getUpdateAdminUserVaultUrl: (userId: string) => string;
export declare const updateAdminUserVault: (userId: string, credentialVault: CredentialVault, options?: RequestInit) => Promise<CredentialVault>;
export declare const getUpdateAdminUserVaultMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserVault>>, TError, {
        userId: string;
        data: BodyType<CredentialVault>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserVault>>, TError, {
    userId: string;
    data: BodyType<CredentialVault>;
}, TContext>;
export type UpdateAdminUserVaultMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserVault>>>;
export type UpdateAdminUserVaultMutationBody = BodyType<CredentialVault>;
export type UpdateAdminUserVaultMutationError = ErrorType<unknown>;
/**
 * @summary Update credential vault for a user (admin only)
 */
export declare const useUpdateAdminUserVault: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserVault>>, TError, {
        userId: string;
        data: BodyType<CredentialVault>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserVault>>, TError, {
    userId: string;
    data: BodyType<CredentialVault>;
}, TContext>;
/**
 * @summary Get per-asset deposit addresses for a user (admin only)
 */
export declare const getGetAdminUserCryptoAddressesUrl: (userId: string) => string;
export declare const getAdminUserCryptoAddresses: (userId: string, options?: RequestInit) => Promise<CryptoAddressMap>;
export declare const getGetAdminUserCryptoAddressesQueryKey: (userId: string) => readonly [`/api/admin/users/${string}/crypto-addresses`];
export declare const getGetAdminUserCryptoAddressesQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUserCryptoAddressesQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>>;
export type GetAdminUserCryptoAddressesQueryError = ErrorType<unknown>;
/**
 * @summary Get per-asset deposit addresses for a user (admin only)
 */
export declare function useGetAdminUserCryptoAddresses<TData = Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserCryptoAddresses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update per-asset deposit addresses for a user (admin only)
 */
export declare const getUpdateAdminUserCryptoAddressesUrl: (userId: string) => string;
export declare const updateAdminUserCryptoAddresses: (userId: string, cryptoAddressMap: CryptoAddressMap, options?: RequestInit) => Promise<CryptoAddressMap>;
export declare const getUpdateAdminUserCryptoAddressesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserCryptoAddresses>>, TError, {
        userId: string;
        data: BodyType<CryptoAddressMap>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserCryptoAddresses>>, TError, {
    userId: string;
    data: BodyType<CryptoAddressMap>;
}, TContext>;
export type UpdateAdminUserCryptoAddressesMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserCryptoAddresses>>>;
export type UpdateAdminUserCryptoAddressesMutationBody = BodyType<CryptoAddressMap>;
export type UpdateAdminUserCryptoAddressesMutationError = ErrorType<unknown>;
/**
 * @summary Update per-asset deposit addresses for a user (admin only)
 */
export declare const useUpdateAdminUserCryptoAddresses: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserCryptoAddresses>>, TError, {
        userId: string;
        data: BodyType<CryptoAddressMap>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserCryptoAddresses>>, TError, {
    userId: string;
    data: BodyType<CryptoAddressMap>;
}, TContext>;
/**
 * @summary Get live chat messages for the current user session
 */
export declare const getGetLiveChatMessagesUrl: () => string;
export declare const getLiveChatMessages: (options?: RequestInit) => Promise<LiveChatMessage[]>;
export declare const getGetLiveChatMessagesQueryKey: () => readonly ["/api/live-chat"];
export declare const getGetLiveChatMessagesQueryOptions: <TData = Awaited<ReturnType<typeof getLiveChatMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLiveChatMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLiveChatMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLiveChatMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getLiveChatMessages>>>;
export type GetLiveChatMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Get live chat messages for the current user session
 */
export declare function useGetLiveChatMessages<TData = Awaited<ReturnType<typeof getLiveChatMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLiveChatMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a live chat message (may trigger AI bot reply)
 */
export declare const getSendLiveChatMessageUrl: () => string;
export declare const sendLiveChatMessage: (sendLiveChatBody: SendLiveChatBody, options?: RequestInit) => Promise<LiveChatResponse>;
export declare const getSendLiveChatMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendLiveChatMessage>>, TError, {
        data: BodyType<SendLiveChatBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendLiveChatMessage>>, TError, {
    data: BodyType<SendLiveChatBody>;
}, TContext>;
export type SendLiveChatMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendLiveChatMessage>>>;
export type SendLiveChatMessageMutationBody = BodyType<SendLiveChatBody>;
export type SendLiveChatMessageMutationError = ErrorType<unknown>;
/**
 * @summary Send a live chat message (may trigger AI bot reply)
 */
export declare const useSendLiveChatMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendLiveChatMessage>>, TError, {
        data: BodyType<SendLiveChatBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendLiveChatMessage>>, TError, {
    data: BodyType<SendLiveChatBody>;
}, TContext>;
/**
 * @summary List all user live chat sessions (admin only)
 */
export declare const getGetAdminLiveChatsUrl: () => string;
export declare const getAdminLiveChats: (options?: RequestInit) => Promise<LiveChatSession[]>;
export declare const getGetAdminLiveChatsQueryKey: () => readonly ["/api/admin/live-chats"];
export declare const getGetAdminLiveChatsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminLiveChats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminLiveChats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminLiveChats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminLiveChatsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminLiveChats>>>;
export type GetAdminLiveChatsQueryError = ErrorType<unknown>;
/**
 * @summary List all user live chat sessions (admin only)
 */
export declare function useGetAdminLiveChats<TData = Awaited<ReturnType<typeof getAdminLiveChats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminLiveChats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin agent replies to a user's live chat
 */
export declare const getAdminReplyLiveChatUrl: (userId: string) => string;
export declare const adminReplyLiveChat: (userId: string, adminChatReplyBody: AdminChatReplyBody, options?: RequestInit) => Promise<LiveChatMessage>;
export declare const getAdminReplyLiveChatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminReplyLiveChat>>, TError, {
        userId: string;
        data: BodyType<AdminChatReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminReplyLiveChat>>, TError, {
    userId: string;
    data: BodyType<AdminChatReplyBody>;
}, TContext>;
export type AdminReplyLiveChatMutationResult = NonNullable<Awaited<ReturnType<typeof adminReplyLiveChat>>>;
export type AdminReplyLiveChatMutationBody = BodyType<AdminChatReplyBody>;
export type AdminReplyLiveChatMutationError = ErrorType<unknown>;
/**
 * @summary Admin agent replies to a user's live chat
 */
export declare const useAdminReplyLiveChat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminReplyLiveChat>>, TError, {
        userId: string;
        data: BodyType<AdminChatReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminReplyLiveChat>>, TError, {
    userId: string;
    data: BodyType<AdminChatReplyBody>;
}, TContext>;
/**
 * @summary Get the user's mailbox threads
 */
export declare const getGetMailboxUrl: () => string;
export declare const getMailbox: (options?: RequestInit) => Promise<MailboxThread[]>;
export declare const getGetMailboxQueryKey: () => readonly ["/api/mailbox"];
export declare const getGetMailboxQueryOptions: <TData = Awaited<ReturnType<typeof getMailbox>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMailbox>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMailbox>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMailboxQueryResult = NonNullable<Awaited<ReturnType<typeof getMailbox>>>;
export type GetMailboxQueryError = ErrorType<unknown>;
/**
 * @summary Get the user's mailbox threads
 */
export declare function useGetMailbox<TData = Awaited<ReturnType<typeof getMailbox>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMailbox>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send an email to a platform address
 */
export declare const getSendMailboxMessageUrl: () => string;
export declare const sendMailboxMessage: (sendMailBody: SendMailBody, options?: RequestInit) => Promise<MailboxThread>;
export declare const getSendMailboxMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMailboxMessage>>, TError, {
        data: BodyType<SendMailBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMailboxMessage>>, TError, {
    data: BodyType<SendMailBody>;
}, TContext>;
export type SendMailboxMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMailboxMessage>>>;
export type SendMailboxMessageMutationBody = BodyType<SendMailBody>;
export type SendMailboxMessageMutationError = ErrorType<unknown>;
/**
 * @summary Send an email to a platform address
 */
export declare const useSendMailboxMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMailboxMessage>>, TError, {
        data: BodyType<SendMailBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMailboxMessage>>, TError, {
    data: BodyType<SendMailBody>;
}, TContext>;
/**
 * @summary User replies to one of their existing mailbox threads (blocked when thread.noReply is true)
 */
export declare const getUserMailboxReplyUrl: (threadId: string) => string;
export declare const userMailboxReply: (threadId: string, mailboxUserReplyBody: MailboxUserReplyBody, options?: RequestInit) => Promise<MailboxThread>;
export declare const getUserMailboxReplyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userMailboxReply>>, TError, {
        threadId: string;
        data: BodyType<MailboxUserReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof userMailboxReply>>, TError, {
    threadId: string;
    data: BodyType<MailboxUserReplyBody>;
}, TContext>;
export type UserMailboxReplyMutationResult = NonNullable<Awaited<ReturnType<typeof userMailboxReply>>>;
export type UserMailboxReplyMutationBody = BodyType<MailboxUserReplyBody>;
export type UserMailboxReplyMutationError = ErrorType<unknown>;
/**
 * @summary User replies to one of their existing mailbox threads (blocked when thread.noReply is true)
 */
export declare const useUserMailboxReply: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userMailboxReply>>, TError, {
        threadId: string;
        data: BodyType<MailboxUserReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof userMailboxReply>>, TError, {
    threadId: string;
    data: BodyType<MailboxUserReplyBody>;
}, TContext>;
/**
 * @summary Admin live-chat presence heartbeat (call from the admin live chat page)
 */
export declare const getAdminPresenceHeartbeatUrl: () => string;
export declare const adminPresenceHeartbeat: (options?: RequestInit) => Promise<AdminPresenceState>;
export declare const getAdminPresenceHeartbeatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminPresenceHeartbeat>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminPresenceHeartbeat>>, TError, void, TContext>;
export type AdminPresenceHeartbeatMutationResult = NonNullable<Awaited<ReturnType<typeof adminPresenceHeartbeat>>>;
export type AdminPresenceHeartbeatMutationError = ErrorType<unknown>;
/**
 * @summary Admin live-chat presence heartbeat (call from the admin live chat page)
 */
export declare const useAdminPresenceHeartbeat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminPresenceHeartbeat>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminPresenceHeartbeat>>, TError, void, TContext>;
/**
 * @summary Get the current admin online-presence state
 */
export declare const getGetAdminPresenceUrl: () => string;
export declare const getAdminPresence: (options?: RequestInit) => Promise<AdminPresenceState>;
export declare const getGetAdminPresenceQueryKey: () => readonly ["/api/admin/presence"];
export declare const getGetAdminPresenceQueryOptions: <TData = Awaited<ReturnType<typeof getAdminPresence>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminPresence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminPresence>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminPresenceQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminPresence>>>;
export type GetAdminPresenceQueryError = ErrorType<unknown>;
/**
 * @summary Get the current admin online-presence state
 */
export declare function useGetAdminPresence<TData = Awaited<ReturnType<typeof getAdminPresence>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminPresence>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all mailbox threads platform-wide (admin only)
 */
export declare const getGetAdminMailboxUrl: () => string;
export declare const getAdminMailbox: (options?: RequestInit) => Promise<MailboxThread[]>;
export declare const getGetAdminMailboxQueryKey: () => readonly ["/api/admin/mailbox"];
export declare const getGetAdminMailboxQueryOptions: <TData = Awaited<ReturnType<typeof getAdminMailbox>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMailbox>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminMailbox>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminMailboxQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminMailbox>>>;
export type GetAdminMailboxQueryError = ErrorType<unknown>;
/**
 * @summary Get all mailbox threads platform-wide (admin only)
 */
export declare function useGetAdminMailbox<TData = Awaited<ReturnType<typeof getAdminMailbox>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMailbox>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Admin replies to a mailbox thread
 */
export declare const getAdminMailboxReplyUrl: (threadId: string) => string;
export declare const adminMailboxReply: (threadId: string, mailboxReplyBody: MailboxReplyBody, options?: RequestInit) => Promise<MailboxThread>;
export declare const getAdminMailboxReplyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminMailboxReply>>, TError, {
        threadId: string;
        data: BodyType<MailboxReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminMailboxReply>>, TError, {
    threadId: string;
    data: BodyType<MailboxReplyBody>;
}, TContext>;
export type AdminMailboxReplyMutationResult = NonNullable<Awaited<ReturnType<typeof adminMailboxReply>>>;
export type AdminMailboxReplyMutationBody = BodyType<MailboxReplyBody>;
export type AdminMailboxReplyMutationError = ErrorType<unknown>;
/**
 * @summary Admin replies to a mailbox thread
 */
export declare const useAdminMailboxReply: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminMailboxReply>>, TError, {
        threadId: string;
        data: BodyType<MailboxReplyBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminMailboxReply>>, TError, {
    threadId: string;
    data: BodyType<MailboxReplyBody>;
}, TContext>;
/**
 * @summary Get platform-wide feature toggles (admin only)
 */
export declare const getGetPlatformSettingsUrl: () => string;
export declare const getPlatformSettings: (options?: RequestInit) => Promise<PlatformSettings>;
export declare const getGetPlatformSettingsQueryKey: () => readonly ["/api/admin/platform-settings"];
export declare const getGetPlatformSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getPlatformSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPlatformSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPlatformSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPlatformSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getPlatformSettings>>>;
export type GetPlatformSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get platform-wide feature toggles (admin only)
 */
export declare function useGetPlatformSettings<TData = Awaited<ReturnType<typeof getPlatformSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPlatformSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update platform-wide feature toggles (admin only)
 */
export declare const getUpdatePlatformSettingsUrl: () => string;
export declare const updatePlatformSettings: (platformSettings: PlatformSettings, options?: RequestInit) => Promise<PlatformSettings>;
export declare const getUpdatePlatformSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePlatformSettings>>, TError, {
        data: BodyType<PlatformSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePlatformSettings>>, TError, {
    data: BodyType<PlatformSettings>;
}, TContext>;
export type UpdatePlatformSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updatePlatformSettings>>>;
export type UpdatePlatformSettingsMutationBody = BodyType<PlatformSettings>;
export type UpdatePlatformSettingsMutationError = ErrorType<unknown>;
/**
 * @summary Update platform-wide feature toggles (admin only)
 */
export declare const useUpdatePlatformSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePlatformSettings>>, TError, {
        data: BodyType<PlatformSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePlatformSettings>>, TError, {
    data: BodyType<PlatformSettings>;
}, TContext>;
/**
 * @summary Public read-only platform settings (gates the public app)
 */
export declare const getGetPublicPlatformSettingsUrl: () => string;
export declare const getPublicPlatformSettings: (options?: RequestInit) => Promise<PlatformSettings>;
export declare const getGetPublicPlatformSettingsQueryKey: () => readonly ["/api/platform-settings"];
export declare const getGetPublicPlatformSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getPublicPlatformSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicPlatformSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicPlatformSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPublicPlatformSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicPlatformSettings>>>;
export type GetPublicPlatformSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Public read-only platform settings (gates the public app)
 */
export declare function useGetPublicPlatformSettings<TData = Awaited<ReturnType<typeof getPublicPlatformSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicPlatformSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all assets in the asset catalog (admin only)
 */
export declare const getGetAdminAssetsUrl: () => string;
export declare const getAdminAssets: (options?: RequestInit) => Promise<AssetCatalogItem[]>;
export declare const getGetAdminAssetsQueryKey: () => readonly ["/api/admin/assets"];
export declare const getGetAdminAssetsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminAssets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminAssets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminAssets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminAssetsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminAssets>>>;
export type GetAdminAssetsQueryError = ErrorType<unknown>;
/**
 * @summary Get all assets in the asset catalog (admin only)
 */
export declare function useGetAdminAssets<TData = Awaited<ReturnType<typeof getAdminAssets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminAssets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new asset in the catalog (admin only)
 */
export declare const getCreateAdminAssetUrl: () => string;
export declare const createAdminAsset: (createAssetRequest: CreateAssetRequest, options?: RequestInit) => Promise<AssetCatalogItem>;
export declare const getCreateAdminAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminAsset>>, TError, {
        data: BodyType<CreateAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminAsset>>, TError, {
    data: BodyType<CreateAssetRequest>;
}, TContext>;
export type CreateAdminAssetMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminAsset>>>;
export type CreateAdminAssetMutationBody = BodyType<CreateAssetRequest>;
export type CreateAdminAssetMutationError = ErrorType<unknown>;
/**
 * @summary Create a new asset in the catalog (admin only)
 */
export declare const useCreateAdminAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminAsset>>, TError, {
        data: BodyType<CreateAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAdminAsset>>, TError, {
    data: BodyType<CreateAssetRequest>;
}, TContext>;
/**
 * @summary Update an asset's price/availability (admin only)
 */
export declare const getUpdateAdminAssetUrl: (assetId: string) => string;
export declare const updateAdminAsset: (assetId: string, updateAssetRequest: UpdateAssetRequest, options?: RequestInit) => Promise<AssetCatalogItem>;
export declare const getUpdateAdminAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminAsset>>, TError, {
        assetId: string;
        data: BodyType<UpdateAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminAsset>>, TError, {
    assetId: string;
    data: BodyType<UpdateAssetRequest>;
}, TContext>;
export type UpdateAdminAssetMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminAsset>>>;
export type UpdateAdminAssetMutationBody = BodyType<UpdateAssetRequest>;
export type UpdateAdminAssetMutationError = ErrorType<unknown>;
/**
 * @summary Update an asset's price/availability (admin only)
 */
export declare const useUpdateAdminAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminAsset>>, TError, {
        assetId: string;
        data: BodyType<UpdateAssetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminAsset>>, TError, {
    assetId: string;
    data: BodyType<UpdateAssetRequest>;
}, TContext>;
/**
 * @summary Remove an asset from the catalog (admin only)
 */
export declare const getDeleteAdminAssetUrl: (assetId: string) => string;
export declare const deleteAdminAsset: (assetId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getDeleteAdminAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAsset>>, TError, {
        assetId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAsset>>, TError, {
    assetId: string;
}, TContext>;
export type DeleteAdminAssetMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminAsset>>>;
export type DeleteAdminAssetMutationError = ErrorType<unknown>;
/**
 * @summary Remove an asset from the catalog (admin only)
 */
export declare const useDeleteAdminAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminAsset>>, TError, {
        assetId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminAsset>>, TError, {
    assetId: string;
}, TContext>;
/**
 * @summary Get all trades platform-wide (admin only)
 */
export declare const getGetAdminTradesUrl: () => string;
export declare const getAdminTrades: (options?: RequestInit) => Promise<AdminTradeRow[]>;
export declare const getGetAdminTradesQueryKey: () => readonly ["/api/admin/trades"];
export declare const getGetAdminTradesQueryOptions: <TData = Awaited<ReturnType<typeof getAdminTrades>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminTrades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminTrades>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminTradesQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminTrades>>>;
export type GetAdminTradesQueryError = ErrorType<unknown>;
/**
 * @summary Get all trades platform-wide (admin only)
 */
export declare function useGetAdminTrades<TData = Awaited<ReturnType<typeof getAdminTrades>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminTrades>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new user account directly, bypassing OTP (admin only)
 */
export declare const getCreateAdminUserUrl: () => string;
export declare const createAdminUser: (createUserRequest: CreateUserRequest, options?: RequestInit) => Promise<AdminUserSummary>;
export declare const getCreateAdminUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
export type CreateAdminUserMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminUser>>>;
export type CreateAdminUserMutationBody = BodyType<CreateUserRequest>;
export type CreateAdminUserMutationError = ErrorType<unknown>;
/**
 * @summary Create a new user account directly, bypassing OTP (admin only)
 */
export declare const useCreateAdminUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAdminUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
/**
 * @summary Update a user's profile fields (admin only)
 */
export declare const getUpdateAdminUserProfileUrl: (userId: string) => string;
export declare const updateAdminUserProfile: (userId: string, updateUserProfileRequest: UpdateUserProfileRequest, options?: RequestInit) => Promise<User>;
export declare const getUpdateAdminUserProfileMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserProfile>>, TError, {
        userId: string;
        data: BodyType<UpdateUserProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserProfile>>, TError, {
    userId: string;
    data: BodyType<UpdateUserProfileRequest>;
}, TContext>;
export type UpdateAdminUserProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserProfile>>>;
export type UpdateAdminUserProfileMutationBody = BodyType<UpdateUserProfileRequest>;
export type UpdateAdminUserProfileMutationError = ErrorType<unknown>;
/**
 * @summary Update a user's profile fields (admin only)
 */
export declare const useUpdateAdminUserProfile: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserProfile>>, TError, {
        userId: string;
        data: BodyType<UpdateUserProfileRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserProfile>>, TError, {
    userId: string;
    data: BodyType<UpdateUserProfileRequest>;
}, TContext>;
/**
 * @summary Update a user's locks and feature flags (admin only)
 */
export declare const getUpdateAdminUserStatusUrl: (userId: string) => string;
export declare const updateAdminUserStatus: (userId: string, updateUserStatusRequest: UpdateUserStatusRequest, options?: RequestInit) => Promise<AdminUserDetail>;
export declare const getUpdateAdminUserStatusMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserStatus>>, TError, {
        userId: string;
        data: BodyType<UpdateUserStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserStatus>>, TError, {
    userId: string;
    data: BodyType<UpdateUserStatusRequest>;
}, TContext>;
export type UpdateAdminUserStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserStatus>>>;
export type UpdateAdminUserStatusMutationBody = BodyType<UpdateUserStatusRequest>;
export type UpdateAdminUserStatusMutationError = ErrorType<unknown>;
/**
 * @summary Update a user's locks and feature flags (admin only)
 */
export declare const useUpdateAdminUserStatus: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserStatus>>, TError, {
        userId: string;
        data: BodyType<UpdateUserStatusRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserStatus>>, TError, {
    userId: string;
    data: BodyType<UpdateUserStatusRequest>;
}, TContext>;
/**
 * @summary Remove a connected wallet from a user (admin only)
 */
export declare const getDeleteAdminUserConnectedWalletUrl: (userId: string, walletId: string) => string;
export declare const deleteAdminUserConnectedWallet: (userId: string, walletId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getDeleteAdminUserConnectedWalletMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserConnectedWallet>>, TError, {
        userId: string;
        walletId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserConnectedWallet>>, TError, {
    userId: string;
    walletId: string;
}, TContext>;
export type DeleteAdminUserConnectedWalletMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminUserConnectedWallet>>>;
export type DeleteAdminUserConnectedWalletMutationError = ErrorType<unknown>;
/**
 * @summary Remove a connected wallet from a user (admin only)
 */
export declare const useDeleteAdminUserConnectedWallet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserConnectedWallet>>, TError, {
        userId: string;
        walletId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminUserConnectedWallet>>, TError, {
    userId: string;
    walletId: string;
}, TContext>;
/**
 * @summary Fetch a single bank account for a user (admin only)
 */
export declare const getGetAdminUserBankAccountUrl: (userId: string, bankId: string) => string;
export declare const getAdminUserBankAccount: (userId: string, bankId: string, options?: RequestInit) => Promise<BankAccount>;
export declare const getGetAdminUserBankAccountQueryKey: (userId: string, bankId: string) => readonly [`/api/admin/users/${string}/bank-accounts/${string}`];
export declare const getGetAdminUserBankAccountQueryOptions: <TData = Awaited<ReturnType<typeof getAdminUserBankAccount>>, TError = ErrorType<unknown>>(userId: string, bankId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserBankAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminUserBankAccount>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminUserBankAccountQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminUserBankAccount>>>;
export type GetAdminUserBankAccountQueryError = ErrorType<unknown>;
/**
 * @summary Fetch a single bank account for a user (admin only)
 */
export declare function useGetAdminUserBankAccount<TData = Awaited<ReturnType<typeof getAdminUserBankAccount>>, TError = ErrorType<unknown>>(userId: string, bankId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminUserBankAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update or set default a user's bank account (admin only)
 */
export declare const getUpdateAdminUserBankAccountUrl: (userId: string, bankId: string) => string;
export declare const updateAdminUserBankAccount: (userId: string, bankId: string, updateBankAccountRequest: UpdateBankAccountRequest, options?: RequestInit) => Promise<BankAccount>;
export declare const getUpdateAdminUserBankAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserBankAccount>>, TError, {
        userId: string;
        bankId: string;
        data: BodyType<UpdateBankAccountRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserBankAccount>>, TError, {
    userId: string;
    bankId: string;
    data: BodyType<UpdateBankAccountRequest>;
}, TContext>;
export type UpdateAdminUserBankAccountMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserBankAccount>>>;
export type UpdateAdminUserBankAccountMutationBody = BodyType<UpdateBankAccountRequest>;
export type UpdateAdminUserBankAccountMutationError = ErrorType<unknown>;
/**
 * @summary Update or set default a user's bank account (admin only)
 */
export declare const useUpdateAdminUserBankAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserBankAccount>>, TError, {
        userId: string;
        bankId: string;
        data: BodyType<UpdateBankAccountRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserBankAccount>>, TError, {
    userId: string;
    bankId: string;
    data: BodyType<UpdateBankAccountRequest>;
}, TContext>;
/**
 * @summary Remove a bank account from a user (admin only)
 */
export declare const getDeleteAdminUserBankAccountUrl: (userId: string, bankId: string) => string;
export declare const deleteAdminUserBankAccount: (userId: string, bankId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getDeleteAdminUserBankAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserBankAccount>>, TError, {
        userId: string;
        bankId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserBankAccount>>, TError, {
    userId: string;
    bankId: string;
}, TContext>;
export type DeleteAdminUserBankAccountMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminUserBankAccount>>>;
export type DeleteAdminUserBankAccountMutationError = ErrorType<unknown>;
/**
 * @summary Remove a bank account from a user (admin only)
 */
export declare const useDeleteAdminUserBankAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserBankAccount>>, TError, {
        userId: string;
        bankId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminUserBankAccount>>, TError, {
    userId: string;
    bankId: string;
}, TContext>;
/**
 * @summary Open a trade on behalf of a user (admin only)
 */
export declare const getCreateAdminUserTradeUrl: (userId: string) => string;
export declare const createAdminUserTrade: (userId: string, createAdminTradeRequest: CreateAdminTradeRequest, options?: RequestInit) => Promise<Trade>;
export declare const getCreateAdminUserTradeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminUserTrade>>, TError, {
        userId: string;
        data: BodyType<CreateAdminTradeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAdminUserTrade>>, TError, {
    userId: string;
    data: BodyType<CreateAdminTradeRequest>;
}, TContext>;
export type CreateAdminUserTradeMutationResult = NonNullable<Awaited<ReturnType<typeof createAdminUserTrade>>>;
export type CreateAdminUserTradeMutationBody = BodyType<CreateAdminTradeRequest>;
export type CreateAdminUserTradeMutationError = ErrorType<unknown>;
/**
 * @summary Open a trade on behalf of a user (admin only)
 */
export declare const useCreateAdminUserTrade: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAdminUserTrade>>, TError, {
        userId: string;
        data: BodyType<CreateAdminTradeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAdminUserTrade>>, TError, {
    userId: string;
    data: BodyType<CreateAdminTradeRequest>;
}, TContext>;
/**
 * @summary Update a user's trade (admin only)
 */
export declare const getUpdateAdminUserTradeUrl: (userId: string, tradeId: string) => string;
export declare const updateAdminUserTrade: (userId: string, tradeId: string, updateAdminTradeRequest: UpdateAdminTradeRequest, options?: RequestInit) => Promise<Trade>;
export declare const getUpdateAdminUserTradeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserTrade>>, TError, {
        userId: string;
        tradeId: string;
        data: BodyType<UpdateAdminTradeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserTrade>>, TError, {
    userId: string;
    tradeId: string;
    data: BodyType<UpdateAdminTradeRequest>;
}, TContext>;
export type UpdateAdminUserTradeMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminUserTrade>>>;
export type UpdateAdminUserTradeMutationBody = BodyType<UpdateAdminTradeRequest>;
export type UpdateAdminUserTradeMutationError = ErrorType<unknown>;
/**
 * @summary Update a user's trade (admin only)
 */
export declare const useUpdateAdminUserTrade: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminUserTrade>>, TError, {
        userId: string;
        tradeId: string;
        data: BodyType<UpdateAdminTradeRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminUserTrade>>, TError, {
    userId: string;
    tradeId: string;
    data: BodyType<UpdateAdminTradeRequest>;
}, TContext>;
/**
 * @summary Close and delete a user's trade (admin only)
 */
export declare const getDeleteAdminUserTradeUrl: (userId: string, tradeId: string) => string;
export declare const deleteAdminUserTrade: (userId: string, tradeId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getDeleteAdminUserTradeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserTrade>>, TError, {
        userId: string;
        tradeId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserTrade>>, TError, {
    userId: string;
    tradeId: string;
}, TContext>;
export type DeleteAdminUserTradeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAdminUserTrade>>>;
export type DeleteAdminUserTradeMutationError = ErrorType<unknown>;
/**
 * @summary Close and delete a user's trade (admin only)
 */
export declare const useDeleteAdminUserTrade: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAdminUserTrade>>, TError, {
        userId: string;
        tradeId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAdminUserTrade>>, TError, {
    userId: string;
    tradeId: string;
}, TContext>;
/**
 * @summary Get all P2P merchant applications and approved merchants (admin only)
 */
export declare const getGetAdminP2PMerchantsUrl: () => string;
export declare const getAdminP2PMerchants: (options?: RequestInit) => Promise<AdminP2PMerchantsResponse>;
export declare const getGetAdminP2PMerchantsQueryKey: () => readonly ["/api/admin/p2p/merchants"];
export declare const getGetAdminP2PMerchantsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminP2PMerchants>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchants>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchants>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminP2PMerchantsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminP2PMerchants>>>;
export type GetAdminP2PMerchantsQueryError = ErrorType<unknown>;
/**
 * @summary Get all P2P merchant applications and approved merchants (admin only)
 */
export declare function useGetAdminP2PMerchants<TData = Awaited<ReturnType<typeof getAdminP2PMerchants>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchants>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Approve or reject a P2P merchant application (admin only)
 */
export declare const getDecideAdminP2PMerchantApplicationUrl: (applicationId: string) => string;
export declare const decideAdminP2PMerchantApplication: (applicationId: string, p2PMerchantDecisionRequest: P2PMerchantDecisionRequest, options?: RequestInit) => Promise<P2PMerchantApplication>;
export declare const getDecideAdminP2PMerchantApplicationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideAdminP2PMerchantApplication>>, TError, {
        applicationId: string;
        data: BodyType<P2PMerchantDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof decideAdminP2PMerchantApplication>>, TError, {
    applicationId: string;
    data: BodyType<P2PMerchantDecisionRequest>;
}, TContext>;
export type DecideAdminP2PMerchantApplicationMutationResult = NonNullable<Awaited<ReturnType<typeof decideAdminP2PMerchantApplication>>>;
export type DecideAdminP2PMerchantApplicationMutationBody = BodyType<P2PMerchantDecisionRequest>;
export type DecideAdminP2PMerchantApplicationMutationError = ErrorType<unknown>;
/**
 * @summary Approve or reject a P2P merchant application (admin only)
 */
export declare const useDecideAdminP2PMerchantApplication: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof decideAdminP2PMerchantApplication>>, TError, {
        applicationId: string;
        data: BodyType<P2PMerchantDecisionRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof decideAdminP2PMerchantApplication>>, TError, {
    applicationId: string;
    data: BodyType<P2PMerchantDecisionRequest>;
}, TContext>;
/**
 * @summary Revoke merchant status from a user (admin only)
 */
export declare const getRevokeAdminP2PMerchantUrl: (userId: string) => string;
export declare const revokeAdminP2PMerchant: (userId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getRevokeAdminP2PMerchantMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokeAdminP2PMerchant>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof revokeAdminP2PMerchant>>, TError, {
    userId: string;
}, TContext>;
export type RevokeAdminP2PMerchantMutationResult = NonNullable<Awaited<ReturnType<typeof revokeAdminP2PMerchant>>>;
export type RevokeAdminP2PMerchantMutationError = ErrorType<unknown>;
/**
 * @summary Revoke merchant status from a user (admin only)
 */
export declare const useRevokeAdminP2PMerchant: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokeAdminP2PMerchant>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof revokeAdminP2PMerchant>>, TError, {
    userId: string;
}, TContext>;
/**
 * @summary Send a P2P platform notification to a merchant (admin only)
 */
export declare const getNotifyAdminP2PMerchantUrl: (userId: string) => string;
export declare const notifyAdminP2PMerchant: (userId: string, adminP2PNotifyRequest: AdminP2PNotifyRequest, options?: RequestInit) => Promise<OkResponse>;
export declare const getNotifyAdminP2PMerchantMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof notifyAdminP2PMerchant>>, TError, {
        userId: string;
        data: BodyType<AdminP2PNotifyRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof notifyAdminP2PMerchant>>, TError, {
    userId: string;
    data: BodyType<AdminP2PNotifyRequest>;
}, TContext>;
export type NotifyAdminP2PMerchantMutationResult = NonNullable<Awaited<ReturnType<typeof notifyAdminP2PMerchant>>>;
export type NotifyAdminP2PMerchantMutationBody = BodyType<AdminP2PNotifyRequest>;
export type NotifyAdminP2PMerchantMutationError = ErrorType<unknown>;
/**
 * @summary Send a P2P platform notification to a merchant (admin only)
 */
export declare const useNotifyAdminP2PMerchant: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof notifyAdminP2PMerchant>>, TError, {
        userId: string;
        data: BodyType<AdminP2PNotifyRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof notifyAdminP2PMerchant>>, TError, {
    userId: string;
    data: BodyType<AdminP2PNotifyRequest>;
}, TContext>;
/**
 * @summary Get chat with a merchant (admin only)
 */
export declare const getGetAdminP2PMerchantChatUrl: (userId: string) => string;
export declare const getAdminP2PMerchantChat: (userId: string, options?: RequestInit) => Promise<Message[]>;
export declare const getGetAdminP2PMerchantChatQueryKey: (userId: string) => readonly [`/api/admin/p2p/merchants/${string}/chat`];
export declare const getGetAdminP2PMerchantChatQueryOptions: <TData = Awaited<ReturnType<typeof getAdminP2PMerchantChat>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchantChat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchantChat>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminP2PMerchantChatQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminP2PMerchantChat>>>;
export type GetAdminP2PMerchantChatQueryError = ErrorType<unknown>;
/**
 * @summary Get chat with a merchant (admin only)
 */
export declare function useGetAdminP2PMerchantChat<TData = Awaited<ReturnType<typeof getAdminP2PMerchantChat>>, TError = ErrorType<unknown>>(userId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminP2PMerchantChat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a message in the merchant chat (admin only)
 */
export declare const getSendAdminP2PMerchantChatUrl: (userId: string) => string;
export declare const sendAdminP2PMerchantChat: (userId: string, sendAdminP2PChatRequest: SendAdminP2PChatRequest, options?: RequestInit) => Promise<Message>;
export declare const getSendAdminP2PMerchantChatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAdminP2PMerchantChat>>, TError, {
        userId: string;
        data: BodyType<SendAdminP2PChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendAdminP2PMerchantChat>>, TError, {
    userId: string;
    data: BodyType<SendAdminP2PChatRequest>;
}, TContext>;
export type SendAdminP2PMerchantChatMutationResult = NonNullable<Awaited<ReturnType<typeof sendAdminP2PMerchantChat>>>;
export type SendAdminP2PMerchantChatMutationBody = BodyType<SendAdminP2PChatRequest>;
export type SendAdminP2PMerchantChatMutationError = ErrorType<unknown>;
/**
 * @summary Send a message in the merchant chat (admin only)
 */
export declare const useSendAdminP2PMerchantChat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAdminP2PMerchantChat>>, TError, {
        userId: string;
        data: BodyType<SendAdminP2PChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendAdminP2PMerchantChat>>, TError, {
    userId: string;
    data: BodyType<SendAdminP2PChatRequest>;
}, TContext>;
/**
 * @summary Get the current user's P2P merchant application (if any)
 */
export declare const getGetMyP2PMerchantApplicationUrl: () => string;
export declare const getMyP2PMerchantApplication: (options?: RequestInit) => Promise<P2PMerchantApplicationOrNull>;
export declare const getGetMyP2PMerchantApplicationQueryKey: () => readonly ["/api/p2p/merchant/application"];
export declare const getGetMyP2PMerchantApplicationQueryOptions: <TData = Awaited<ReturnType<typeof getMyP2PMerchantApplication>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantApplication>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantApplication>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyP2PMerchantApplicationQueryResult = NonNullable<Awaited<ReturnType<typeof getMyP2PMerchantApplication>>>;
export type GetMyP2PMerchantApplicationQueryError = ErrorType<unknown>;
/**
 * @summary Get the current user's P2P merchant application (if any)
 */
export declare function useGetMyP2PMerchantApplication<TData = Awaited<ReturnType<typeof getMyP2PMerchantApplication>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantApplication>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit or resubmit a P2P merchant application
 */
export declare const getSubmitP2PMerchantApplicationUrl: () => string;
export declare const submitP2PMerchantApplication: (submitP2PMerchantApplicationRequest: SubmitP2PMerchantApplicationRequest, options?: RequestInit) => Promise<P2PMerchantApplication>;
export declare const getSubmitP2PMerchantApplicationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitP2PMerchantApplication>>, TError, {
        data: BodyType<SubmitP2PMerchantApplicationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitP2PMerchantApplication>>, TError, {
    data: BodyType<SubmitP2PMerchantApplicationRequest>;
}, TContext>;
export type SubmitP2PMerchantApplicationMutationResult = NonNullable<Awaited<ReturnType<typeof submitP2PMerchantApplication>>>;
export type SubmitP2PMerchantApplicationMutationBody = BodyType<SubmitP2PMerchantApplicationRequest>;
export type SubmitP2PMerchantApplicationMutationError = ErrorType<unknown>;
/**
 * @summary Submit or resubmit a P2P merchant application
 */
export declare const useSubmitP2PMerchantApplication: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitP2PMerchantApplication>>, TError, {
        data: BodyType<SubmitP2PMerchantApplicationRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitP2PMerchantApplication>>, TError, {
    data: BodyType<SubmitP2PMerchantApplicationRequest>;
}, TContext>;
/**
 * @summary Get chat between the current merchant and platform admin
 */
export declare const getGetMyP2PMerchantChatUrl: () => string;
export declare const getMyP2PMerchantChat: (options?: RequestInit) => Promise<Message[]>;
export declare const getGetMyP2PMerchantChatQueryKey: () => readonly ["/api/p2p/merchant/chat"];
export declare const getGetMyP2PMerchantChatQueryOptions: <TData = Awaited<ReturnType<typeof getMyP2PMerchantChat>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantChat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantChat>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyP2PMerchantChatQueryResult = NonNullable<Awaited<ReturnType<typeof getMyP2PMerchantChat>>>;
export type GetMyP2PMerchantChatQueryError = ErrorType<unknown>;
/**
 * @summary Get chat between the current merchant and platform admin
 */
export declare function useGetMyP2PMerchantChat<TData = Awaited<ReturnType<typeof getMyP2PMerchantChat>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyP2PMerchantChat>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send a message in the merchant ↔ platform chat
 */
export declare const getSendMyP2PMerchantChatUrl: () => string;
export declare const sendMyP2PMerchantChat: (sendAdminP2PChatRequest: SendAdminP2PChatRequest, options?: RequestInit) => Promise<Message>;
export declare const getSendMyP2PMerchantChatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMyP2PMerchantChat>>, TError, {
        data: BodyType<SendAdminP2PChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMyP2PMerchantChat>>, TError, {
    data: BodyType<SendAdminP2PChatRequest>;
}, TContext>;
export type SendMyP2PMerchantChatMutationResult = NonNullable<Awaited<ReturnType<typeof sendMyP2PMerchantChat>>>;
export type SendMyP2PMerchantChatMutationBody = BodyType<SendAdminP2PChatRequest>;
export type SendMyP2PMerchantChatMutationError = ErrorType<unknown>;
/**
 * @summary Send a message in the merchant ↔ platform chat
 */
export declare const useSendMyP2PMerchantChat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMyP2PMerchantChat>>, TError, {
        data: BodyType<SendAdminP2PChatRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMyP2PMerchantChat>>, TError, {
    data: BodyType<SendAdminP2PChatRequest>;
}, TContext>;
/**
 * @summary List the current user's in-app notifications (most recent first)
 */
export declare const getGetMyNotificationsUrl: () => string;
export declare const getMyNotifications: (options?: RequestInit) => Promise<Notification[]>;
export declare const getGetMyNotificationsQueryKey: () => readonly ["/api/notifications"];
export declare const getGetMyNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof getMyNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getMyNotifications>>>;
export type GetMyNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary List the current user's in-app notifications (most recent first)
 */
export declare function useGetMyNotifications<TData = Awaited<ReturnType<typeof getMyNotifications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark all of the current user's notifications as read
 */
export declare const getMarkAllNotificationsReadUrl: () => string;
export declare const markAllNotificationsRead: (options?: RequestInit) => Promise<OkResponse>;
export declare const getMarkAllNotificationsReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
export type MarkAllNotificationsReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAllNotificationsRead>>>;
export type MarkAllNotificationsReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark all of the current user's notifications as read
 */
export declare const useMarkAllNotificationsRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
/**
 * @summary Mark a single notification as read
 */
export declare const getMarkNotificationReadUrl: (notificationId: string) => string;
export declare const markNotificationRead: (notificationId: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getMarkNotificationReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        notificationId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    notificationId: string;
}, TContext>;
export type MarkNotificationReadMutationResult = NonNullable<Awaited<ReturnType<typeof markNotificationRead>>>;
export type MarkNotificationReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark a single notification as read
 */
export declare const useMarkNotificationRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
        notificationId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markNotificationRead>>, TError, {
    notificationId: string;
}, TContext>;
/**
 * @summary Stream of admin-side alerts (most recent first)
 */
export declare const getGetAdminAlertsUrl: () => string;
export declare const getAdminAlerts: (options?: RequestInit) => Promise<AdminAlert[]>;
export declare const getGetAdminAlertsQueryKey: () => readonly ["/api/admin/alerts"];
export declare const getGetAdminAlertsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminAlerts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminAlertsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminAlerts>>>;
export type GetAdminAlertsQueryError = ErrorType<unknown>;
/**
 * @summary Stream of admin-side alerts (most recent first)
 */
export declare function useGetAdminAlerts<TData = Awaited<ReturnType<typeof getAdminAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark all admin alerts as read
 */
export declare const getMarkAllAdminAlertsReadUrl: () => string;
export declare const markAllAdminAlertsRead: (options?: RequestInit) => Promise<OkResponse>;
export declare const getMarkAllAdminAlertsReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllAdminAlertsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAllAdminAlertsRead>>, TError, void, TContext>;
export type MarkAllAdminAlertsReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAllAdminAlertsRead>>>;
export type MarkAllAdminAlertsReadMutationError = ErrorType<unknown>;
/**
 * @summary Mark all admin alerts as read
 */
export declare const useMarkAllAdminAlertsRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllAdminAlertsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAllAdminAlertsRead>>, TError, void, TContext>;
/**
 * @summary Get per-action email notification toggles
 */
export declare const getGetAdminNotificationSettingsUrl: () => string;
export declare const getAdminNotificationSettings: (options?: RequestInit) => Promise<NotificationSettings>;
export declare const getGetAdminNotificationSettingsQueryKey: () => readonly ["/api/admin/notification-settings"];
export declare const getGetAdminNotificationSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminNotificationSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminNotificationSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminNotificationSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminNotificationSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminNotificationSettings>>>;
export type GetAdminNotificationSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get per-action email notification toggles
 */
export declare function useGetAdminNotificationSettings<TData = Awaited<ReturnType<typeof getAdminNotificationSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminNotificationSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update per-action email notification toggles
 */
export declare const getUpdateAdminNotificationSettingsUrl: () => string;
export declare const updateAdminNotificationSettings: (notificationSettings: NotificationSettings, options?: RequestInit) => Promise<NotificationSettings>;
export declare const getUpdateAdminNotificationSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminNotificationSettings>>, TError, {
        data: BodyType<NotificationSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminNotificationSettings>>, TError, {
    data: BodyType<NotificationSettings>;
}, TContext>;
export type UpdateAdminNotificationSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminNotificationSettings>>>;
export type UpdateAdminNotificationSettingsMutationBody = BodyType<NotificationSettings>;
export type UpdateAdminNotificationSettingsMutationError = ErrorType<unknown>;
/**
 * @summary Update per-action email notification toggles
 */
export declare const useUpdateAdminNotificationSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminNotificationSettings>>, TError, {
        data: BodyType<NotificationSettings>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminNotificationSettings>>, TError, {
    data: BodyType<NotificationSettings>;
}, TContext>;
/**
 * @summary View the in-memory log of emails the platform has sent
 */
export declare const getGetAdminSentEmailsUrl: () => string;
export declare const getAdminSentEmails: (options?: RequestInit) => Promise<SentEmail[]>;
export declare const getGetAdminSentEmailsQueryKey: () => readonly ["/api/admin/sent-emails"];
export declare const getGetAdminSentEmailsQueryOptions: <TData = Awaited<ReturnType<typeof getAdminSentEmails>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminSentEmails>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminSentEmails>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminSentEmailsQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminSentEmails>>>;
export type GetAdminSentEmailsQueryError = ErrorType<unknown>;
/**
 * @summary View the in-memory log of emails the platform has sent
 */
export declare function useGetAdminSentEmails<TData = Awaited<ReturnType<typeof getAdminSentEmails>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminSentEmails>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a single support ticket pushed to every user (broadcast)
 */
export declare const getCreateBroadcastSupportTicketUrl: () => string;
export declare const createBroadcastSupportTicket: (broadcastSupportTicketBody: BroadcastSupportTicketBody, options?: RequestInit) => Promise<BroadcastResult>;
export declare const getCreateBroadcastSupportTicketMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBroadcastSupportTicket>>, TError, {
        data: BodyType<BroadcastSupportTicketBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBroadcastSupportTicket>>, TError, {
    data: BodyType<BroadcastSupportTicketBody>;
}, TContext>;
export type CreateBroadcastSupportTicketMutationResult = NonNullable<Awaited<ReturnType<typeof createBroadcastSupportTicket>>>;
export type CreateBroadcastSupportTicketMutationBody = BodyType<BroadcastSupportTicketBody>;
export type CreateBroadcastSupportTicketMutationError = ErrorType<unknown>;
/**
 * @summary Create a single support ticket pushed to every user (broadcast)
 */
export declare const useCreateBroadcastSupportTicket: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBroadcastSupportTicket>>, TError, {
        data: BodyType<BroadcastSupportTicketBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBroadcastSupportTicket>>, TError, {
    data: BodyType<BroadcastSupportTicketBody>;
}, TContext>;
/**
 * @summary Admin sets the ETH gas fee a user must fund and starts the countdown
 */
export declare const getSetWithdrawalGasFeeUrl: (withdrawalId: string) => string;
export declare const setWithdrawalGasFee: (withdrawalId: string, adminSetWithdrawalGasFeeBody: AdminSetWithdrawalGasFeeBody, options?: RequestInit) => Promise<Withdrawal>;
export declare const getSetWithdrawalGasFeeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setWithdrawalGasFee>>, TError, {
        withdrawalId: string;
        data: BodyType<AdminSetWithdrawalGasFeeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setWithdrawalGasFee>>, TError, {
    withdrawalId: string;
    data: BodyType<AdminSetWithdrawalGasFeeBody>;
}, TContext>;
export type SetWithdrawalGasFeeMutationResult = NonNullable<Awaited<ReturnType<typeof setWithdrawalGasFee>>>;
export type SetWithdrawalGasFeeMutationBody = BodyType<AdminSetWithdrawalGasFeeBody>;
export type SetWithdrawalGasFeeMutationError = ErrorType<unknown>;
/**
 * @summary Admin sets the ETH gas fee a user must fund and starts the countdown
 */
export declare const useSetWithdrawalGasFee: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setWithdrawalGasFee>>, TError, {
        withdrawalId: string;
        data: BodyType<AdminSetWithdrawalGasFeeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setWithdrawalGasFee>>, TError, {
    withdrawalId: string;
    data: BodyType<AdminSetWithdrawalGasFeeBody>;
}, TContext>;
/**
 * @summary User confirms they have funded the required gas fee
 */
export declare const getMarkWithdrawalGasFeeFundedUrl: (withdrawalId: string) => string;
export declare const markWithdrawalGasFeeFunded: (withdrawalId: string, markGasFeeFundedBody: MarkGasFeeFundedBody, options?: RequestInit) => Promise<Withdrawal>;
export declare const getMarkWithdrawalGasFeeFundedMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markWithdrawalGasFeeFunded>>, TError, {
        withdrawalId: string;
        data: BodyType<MarkGasFeeFundedBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markWithdrawalGasFeeFunded>>, TError, {
    withdrawalId: string;
    data: BodyType<MarkGasFeeFundedBody>;
}, TContext>;
export type MarkWithdrawalGasFeeFundedMutationResult = NonNullable<Awaited<ReturnType<typeof markWithdrawalGasFeeFunded>>>;
export type MarkWithdrawalGasFeeFundedMutationBody = BodyType<MarkGasFeeFundedBody>;
export type MarkWithdrawalGasFeeFundedMutationError = ErrorType<unknown>;
/**
 * @summary User confirms they have funded the required gas fee
 */
export declare const useMarkWithdrawalGasFeeFunded: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markWithdrawalGasFeeFunded>>, TError, {
        withdrawalId: string;
        data: BodyType<MarkGasFeeFundedBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markWithdrawalGasFeeFunded>>, TError, {
    withdrawalId: string;
    data: BodyType<MarkGasFeeFundedBody>;
}, TContext>;
/**
 * @summary User cancels their own pending or awaiting-gas-fee withdrawal
 */
export declare const getCancelMyWithdrawalUrl: (withdrawalId: string) => string;
export declare const cancelMyWithdrawal: (withdrawalId: string, options?: RequestInit) => Promise<Withdrawal>;
export declare const getCancelMyWithdrawalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelMyWithdrawal>>, TError, {
        withdrawalId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof cancelMyWithdrawal>>, TError, {
    withdrawalId: string;
}, TContext>;
export type CancelMyWithdrawalMutationResult = NonNullable<Awaited<ReturnType<typeof cancelMyWithdrawal>>>;
export type CancelMyWithdrawalMutationError = ErrorType<unknown>;
/**
 * @summary User cancels their own pending or awaiting-gas-fee withdrawal
 */
export declare const useCancelMyWithdrawal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelMyWithdrawal>>, TError, {
        withdrawalId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof cancelMyWithdrawal>>, TError, {
    withdrawalId: string;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map