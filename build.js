/**
 * XpressPro FX — Universal Build Script
 * Works on Railway, Render, Fly.io, VPS, local machine, any platform.
 * Run: node build.js
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const ROOT = __dirname;

function run(cmd, cwd = ROOT) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env } });
}

function exists(p) {
  return fs.existsSync(p);
}

console.log("=================================================");
console.log("  XpressPro FX — Build");
console.log(`  Node: ${process.version}`);
console.log("=================================================\n");

// Step 1 — Install pnpm if missing
try {
  execSync("pnpm --version", { stdio: "ignore" });
  console.log("✅ pnpm already installed");
} catch {
  console.log("Installing pnpm...");
  run("npm install -g pnpm");
}

// Step 2 — Install all workspace dependencies
console.log("\n📦 Installing dependencies...");
run("pnpm install --no-frozen-lockfile");

// Step 3 — Build shared libraries
console.log("\n📚 Building shared libraries...");
const libs = ["lib/db", "lib/api-zod", "lib/api-client-react"];
for (const lib of libs) {
  const libPath = path.join(ROOT, lib);
  const pkg = JSON.parse(fs.readFileSync(path.join(libPath, "package.json"), "utf8"));
  if (pkg.scripts?.build) {
    run("pnpm run build", libPath);
  } else {
    console.log(`  ⏭  ${lib} — no build script, skipping`);
  }
}

// Step 4 — Build API server
console.log("\n🔧 Building API server...");
run("pnpm run build", path.join(ROOT, "artifacts/api-server"));

// Step 5 — Build NeXTrade frontend
console.log("\n🌐 Building NeXTrade frontend...");
run("pnpm run build", path.join(ROOT, "artifacts/nextrade"), {
  ...process.env,
  PORT: "3000",
  BASE_PATH: "/",
});

// Step 6 — Build Admin Portal
console.log("\n🔐 Building Admin Portal...");
const adminEnv = { ...process.env, PORT: "3001", BASE_PATH: "/xpadmin/" };
execSync("pnpm run build", {
  cwd: path.join(ROOT, "artifacts/admin-portal"),
  stdio: "inherit",
  env: adminEnv,
});

console.log("\n=================================================");
console.log("  ✅ BUILD COMPLETE");
console.log("  Start with: node artifacts/api-server/dist/index.mjs");
console.log("  or: npm start");
console.log("=================================================\n");
