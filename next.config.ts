import type { NextConfig } from "next";

import fs from "node:fs";
import path from "node:path";

const runId = "pre-fix";

let nextVersion: string | null = null;
let nextPackageJsonPath: string | null = null;
let expectedInternalFile: string | null = null;
let expectedInternalFileExists: boolean | null = null;

// Best-effort introspection: if this fails, we still want Next to boot.
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nextPkg = require("next/package.json") as { version?: string };
  nextVersion = nextPkg?.version ?? null;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  nextPackageJsonPath = require.resolve("next/package.json");

  if (nextPackageJsonPath) {
    expectedInternalFile = path.join(
      path.dirname(nextPackageJsonPath),
      "dist",
      "lib",
      "server-external-packages.jsonc"
    );
    expectedInternalFileExists = fs.existsSync(expectedInternalFile);
  }
} catch {
  // ignore
}

const cwd = process.cwd();
const repoLockPath = path.join(cwd, "package-lock.json");
const parentLockPath = path.join(path.dirname(cwd), "package-lock.json");
const repoLockExists = fs.existsSync(repoLockPath);
const parentLockExists = fs.existsSync(parentLockPath);

// #region agent log H1
fetch("http://127.0.0.1:7390/ingest/99ec5727-851a-4407-be5a-ebc3c953a5c9", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "fe829d" },
  body: JSON.stringify({
    sessionId: "fe829d",
    runId,
    hypothesisId: "H1",
    location: "next.config.ts",
    message: "Check for missing next internal file",
    data: {
      cwd,
      nextVersion,
      nextPackageJsonPath,
      expectedInternalFile,
      expectedInternalFileExists,
    },
    timestamp: Date.now(),
  }),
})
  .catch(() => {});
// #endregion

// #region agent log H2
fetch("http://127.0.0.1:7390/ingest/99ec5727-851a-4407-be5a-ebc3c953a5c9", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "fe829d" },
  body: JSON.stringify({
    sessionId: "fe829d",
    runId,
    hypothesisId: "H2",
    location: "next.config.ts",
    message: "Report installed next version/package path",
    data: { cwd, nextVersion, nextPackageJsonPath },
    timestamp: Date.now(),
  }),
})
  .catch(() => {});
// #endregion

// #region agent log H3
fetch("http://127.0.0.1:7390/ingest/99ec5727-851a-4407-be5a-ebc3c953a5c9", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "fe829d" },
  body: JSON.stringify({
    sessionId: "fe829d",
    runId,
    hypothesisId: "H3",
    location: "next.config.ts",
    message: "Check lockfiles used by Next root inference",
    data: {
      cwd,
      repoLockPath,
      repoLockExists,
      parentLockPath,
      parentLockExists,
    },
    timestamp: Date.now(),
  }),
})
  .catch(() => {});
// #endregion

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
