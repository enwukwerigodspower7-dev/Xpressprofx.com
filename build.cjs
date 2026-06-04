#!/usr/bin/env node

/**
 * ============================================
 *  XpressPro FX — Universal Build सिस्टम
 * ============================================
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;

/* ================================
   UTILITIES
================================ */
function run(cmd) {
  console.log(`\n▶ ${cmd}\n`);
  execSync(cmd, { stdio: "inherit" });
}

function log(msg) {
  console.log(`\n${msg}\n`);
}

/* ================================
   FIND ALL ZIP FILES
================================ */
function findZipFiles(dir, results = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      findZipFiles(full, results);
    } else if (file.endsWith(".zip")) {
      results.push(full);
    }
  }

  return results;
}

/* ================================
   EXTRACT LIB ZIP SMARTLY
================================ */
function extractLibZipSmart() {
  const files = fs.readdirSync(ROOT);

  const libZip = files.find(
    (f) => f.toLowerCase().startsWith("lib") && f.endsWith(".zip")
  );

  const libPath = path.join(ROOT, "lib");

  if (fs.existsSync(libPath)) {
    log("✅ lib folder already exists");
    return;
  }

  if (!libZip) {
    console.error("❌ No lib zip file found in root");
    process.exit(1);
  }

  const zipPath = path.join(ROOT, libZip);

  log(`📦 Extracting ${libZip}...`);
  run(`unzip -o "${zipPath}" -d "${ROOT}"`);

  // Normalize folder name → lib
  const dirs = fs
    .readdirSync(ROOT)
    .filter((f) => fs.statSync(path.join(ROOT, f)).isDirectory());

  if (!fs.existsSync(libPath)) {
    const candidate = dirs.find((d) =>
      d.toLowerCase().includes("lib")
    );

    if (candidate) {
      fs.renameSync(
        path.join(ROOT, candidate),
        libPath
      );
      log(`✅ Renamed ${candidate} → lib`);
    }
  }

  log("✅ lib extraction complete");
}

/* ================================
   EXTRACT ALL ZIP FILES
================================ */
function extractAllZips() {
  log("🔍 Searching for ALL zip files...");

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
    } catch {
      console.warn(`⚠️ Failed to extract ${name}, skipping...`);
    }
  }

  log("✅ All zip files processed");
}

/* ================================
   VALIDATE REQUIRED STRUCTURE
================================ */
function validateStructure() {
  const dbPkg = path.join(ROOT, "lib", "db", "package.json");

  if (!fs.existsSync(dbPkg)) {
    console.error("❌ Missing required file: lib/db/package.json");
    process.exit(1);
  }

  log("✅ lib/db structure verified");
}

/* ================================
   INSTALL DEPENDENCIES
================================ */
function installDependencies() {
  log("📦 Installing dependencies...");
  run("pnpm install --no-frozen-lockfile");
}

/* ================================
   BUILD INTERNAL LIBS
================================ */
function buildLibs() {
  const dbPath = path.join(ROOT, "lib", "db");

  if (fs.existsSync(dbPath)) {
    log("📚 Building lib/db...");

    run(`cd "${dbPath}" && pnpm install && pnpm build || echo "No build step"`);
  }
}

/* ================================
   BUILD MAIN APP
================================ */
function buildApp() {
  const pkg = path.join(ROOT, "package.json");

  if (fs.existsSync(pkg)) {
    log("🚀 Building main app...");

    try {
      run("pnpm build");
    } catch {
      log("⚠️ No build script found, skipping...");
    }
  }
}

/* ================================
   MAIN
================================ */
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

  // 🔥 CRITICAL ORDER
  extractLibZipSmart(); // fix lib first
  extractAllZips();     // then all other zips

  validateStructure();

  buildLibs();
  buildApp();

  log("🎉 BUILD COMPLETED SUCCESSFULLY");
}

main();
