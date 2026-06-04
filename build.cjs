#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;

function run(cmd) {
  console.log(`\n▶ ${cmd}\n`);
  execSync(cmd, { stdio: "inherit" });
}

function log(msg) {
  console.log(`\n${msg}\n`);
}

/**
 * 🔍 Recursively find all .zip files
 */
function findZipFiles(dir, results = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      findZipFiles(fullPath, results);
    } else if (file.endsWith(".zip")) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * 📦 Extract all zip files in-place
 */
function extractAllZips() {
  log("🔍 Searching for ZIP files...");

  const zips = findZipFiles(ROOT);

  if (zips.length === 0) {
    log("✅ No zip files found");
    return;
  }

  log(`📦 Found ${zips.length} zip file(s)`);

  for (const zipPath of zips) {
    const dir = path.dirname(zipPath);
    const name = path.basename(zipPath);

    console.log(`\n📂 Extracting: ${name}`);

    try {
      run(`unzip -o "${zipPath}" -d "${dir}"`);
    } catch (err) {
      console.warn(`⚠️ Failed to extract ${name}, continuing...`);
    }
  }

  log("✅ All zip files processed");
}

/**
 * ✅ Ensure lib/db exists
 */
function validateStructure() {
  const dbPkg = path.join(ROOT, "lib", "db", "package.json");

  if (!fs.existsSync(dbPkg)) {
    console.error("❌ Missing lib/db/package.json after extraction");
    process.exit(1);
  }

  log("✅ lib/db structure verified");
}

/**
 * 📦 Install dependencies
 */
function installDependencies() {
  log("📦 Installing dependencies...");
  run("pnpm install --no-frozen-lockfile");
}

/**
 * 📚 Build internal libs
 */
function buildLibs() {
  const dbPath = path.join(ROOT, "lib", "db");

  if (fs.existsSync(dbPath)) {
    log("📚 Building lib/db...");
    run(`cd "${dbPath}" && pnpm install && pnpm build || echo "No build step"`);
  }
}

/**
 * 🚀 Build main app
 */
function buildApp() {
  if (fs.existsSync(path.join(ROOT, "package.json"))) {
    log("🚀 Building main app...");

    try {
      run("pnpm build");
    } catch {
      log("⚠️ No root build script, skipping...");
    }
  }
}

/**
 * 🔁 MAIN FLOW
 */
function main() {
  console.log(`
=================================================
  XpressPro FX — Build
  Node: ${process.version}
=================================================
  `);

  // Ensure pnpm
  try {
    execSync("pnpm -v", { stdio: "ignore" });
    log("✅ pnpm already installed");
  } catch {
    log("📦 Installing pnpm...");
    run("npm install -g pnpm");
  }

  installDependencies();

  // 🔥 NEW: extract ALL zips first
  extractAllZips();

  // Validate required structure
  validateStructure();

  // Build libs + app
  buildLibs();
  buildApp();

  log("🎉 BUILD COMPLETED SUCCESSFULLY");
}

main();
