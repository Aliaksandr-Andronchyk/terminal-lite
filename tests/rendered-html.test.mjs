import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render() {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the finished ТЕРМИНАЛ product page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /ТЕРМИНАЛ · lite/);
  assert.match(html, /219\.8 KiB/);
  assert.match(html, /225,088/);
  assert.match(html, /10\.7× lighter/);
  assert.match(html, /2\.29 MiB/);
  assert.match(html, /No bundled tokens/i);
  assert.match(html, /TerminalLite-macOS-arm64\.zip/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});
