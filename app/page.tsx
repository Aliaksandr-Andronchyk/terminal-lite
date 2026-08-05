const facts = [
  ["225,088", "bytes, exact"],
  ["2", "local agents"],
  ["1", "native window"],
  ["0", "bundled tokens"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="ТЕРМИНАЛ lite home">
          ТЕРМИНАЛ <span>· lite</span>
        </a>
        <div className="navLinks">
          <a href="#proof">Proof</a>
          <a href="#inside">Inside</a>
          <a className="navDownload" href="/downloads/TerminalLite-macOS-arm64.zip">
            Download ↓
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span className="liveDot" /> Native macOS · Apple silicon</p>
          <h1><span>One prompt.</span><br />Two minds.<br /><em>219.8 KiB.</em></h1>
          <p className="lede">
            A brutally small AppKit window for Claude and Codex. No Electron,
            no webview, no account layer — just your local CLIs answering side by side.
          </p>
          <div className="actions">
            <a className="button primary" href="/downloads/TerminalLite-macOS-arm64.zip">
              Get the 70 KiB download
            </a>
            <a className="button secondary" href="#inside">See what fits inside</a>
          </div>
          <p className="finePrint">macOS 13+ · arm64 · ad-hoc signed · bring your own CLI login</p>
        </div>

        <div className="terminalStage" aria-label="ТЕРМИНАЛ lite interface illustration">
          <div className="measure measureTop">512 px</div>
          <div className="measure measureSide">≈ 219.8 KiB</div>
          <div className="cube" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
          <div className="terminalCard">
            <div className="titlebar">
              <div className="traffic"><i /><i /><i /></div>
              <span>ТЕРМИНАЛ · lite</span>
              <b>219.8 KiB</b>
            </div>
            <div className="promptLine">
              <span>›</span> Explain this repo in one sentence.
            </div>
            <div className="panes">
              <article className="pane claudePane">
                <header><span>CLAUDE</span><small>local CLI</small></header>
                <p>A tiny native macOS shell that lets two agents think in parallel.</p>
                <div className="pulse orange" />
              </article>
              <article className="pane codexPane">
                <header><span>CODEX</span><small>local CLI</small></header>
                <p>One prompt fan-outs to two processes and streams both answers.</p>
                <div className="pulse green" />
              </article>
            </div>
            <div className="statusbar"><span>● ready</span><span>native AppKit</span></div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Product facts">
        <div className="tickerTrack">
          <span>NO ELECTRON</span><i>✦</i><span>NO WEBVIEW</span><i>✦</i>
          <span>NO BUNDLED TOKENS</span><i>✦</i><span>ONE SWIFT FILE</span><i>✦</i>
          <span>HAND-WRITTEN ARM64 CUBE</span><i>✦</i>
        </div>
      </section>

      <section className="proof shell" id="proof">
        <div className="sectionLabel"><span>01</span> Measured, not marketed</div>
        <div className="proofHeader">
          <h2>10.7× lighter than<br />the real macOS Terminal.</h2>
          <p>
            Binary against binary on this Mac: 219.8 KiB versus 2.29 MiB.
            The full Terminal.app occupies about 3.7 MiB on disk.
          </p>
        </div>
        <div className="factGrid">
          {facts.map(([value, label]) => (
            <div className="fact" key={label}>
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>
        <div className="scale">
          <div className="scaleRow ters"><span>ТЕРМИНАЛ · lite</span><b>219.8 KiB</b><i /></div>
          <div className="scaleRow terminalBin"><span>macOS Terminal binary</span><b>2.29 MiB</b><i /></div>
          <div className="scaleRow terminalApp"><span>complete Terminal.app</span><b>≈ 3.7 MiB</b><i /></div>
        </div>
        <p className="measurementNote">Measured on macOS 26.6 · Terminal 2.15 · executable-to-executable ratio: 10.66×.</p>
      </section>

      <section className="inside" id="inside">
        <div className="shell">
          <div className="sectionLabel light"><span>02</span> What fits inside</div>
          <div className="insideGrid">
            <article className="feature featureLead">
              <p className="featureIndex">A / NATIVE</p>
              <h3>One Swift file.<br />No framework zoo.</h3>
              <p>AppKit draws the window, launches both local CLIs, streams JSONL, and keeps two resumable conversations.</p>
              <div className="codeCard" aria-label="Build command">
                <span>$</span> swiftc -O terseylite.swift cube.o<br />
                <span>→</span> 225088 bytes
              </div>
            </article>
            <article className="feature">
              <p className="featureIndex">B / PARALLEL</p>
              <h3>Claude left.<br />Codex right.</h3>
              <p>One return key starts both processes. Partial output lands directly in its own native text pane.</p>
            </article>
            <article className="feature tokenFeature">
              <p className="featureIndex">C / CLEAN</p>
              <h3>Your tokens<br />stay yours.</h3>
              <p>The app bundles no credentials and strips Claude, OpenAI, and Codex API-key variables before launch.</p>
              <div className="zero">0<span>secrets shipped</span></div>
            </article>
            <article className="feature cubeFeature">
              <p className="featureIndex">D / UNREASONABLE</p>
              <h3>Even the cube<br />is hand-written.</h3>
              <p>The tiny rotating mark is projected by a few lines of ARM64 assembly. Necessary? No. Correct? Absolutely.</p>
              <div className="asm">svc&nbsp;&nbsp;#0x80<br />fmul&nbsp;d4, d0, d1<br />ret</div>
            </article>
          </div>
        </div>
      </section>

      <section className="models shell">
        <div className="sectionLabel"><span>03</span> A little more, still little</div>
        <div className="modelsCard">
          <div>
            <p className="tag">BONUS BUILD · 224.2 KiB</p>
            <h2>Four extra kilobytes buy a model switchboard.</h2>
            <p className="modelsCopy">The compact Models build adds quick selectors for lighter or heavier Claude and Codex runs without becoming a heavyweight app.</p>
          </div>
          <div className="modelControls">
            <label>CLAUDE <span>haiku</span></label>
            <label>CODEX <span>terra</span></label>
            <label>EFFORT <span>low</span></label>
            <a href="/downloads/TerminalLiteModels-macOS-arm64.zip">Download Models build →</a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell ctaInner">
          <p>225,088 bytes.<br />Two minds.<br />Zero excuses.</p>
          <div>
            <a className="button darkButton" href="/downloads/TerminalLite-macOS-arm64.zip">Download ТЕРМИНАЛ · lite</a>
            <a className="sourceLink" href="https://github.com/SashaAndronchyk/terminal-lite" id="source">Browse the source ↗</a>
          </div>
        </div>
      </section>

      <footer className="shell">
        <span>ТЕРМИНАЛ · lite / 2026</span>
        <span>Built small on purpose.</span>
      </footer>
    </main>
  );
}
