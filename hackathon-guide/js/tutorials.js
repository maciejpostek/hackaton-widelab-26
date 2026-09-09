/* Illustrative HTML/CSS scenes, adapted from the designer's tutorial concept.
   No commands are executed and no files are uploaded. */
(() => {
  const icon = (kind) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${kind === 'terminal' ? '<path d="m5 7 5 5-5 5m8 0h6"/><rect x="1" y="2" width="22" height="20"/>' : kind === 'folder' ? '<path d="M2 6h8l2 3h10v12H2zM2 6V3h7l3 3h8v3"/>' : '<path d="M5 2h9l5 5v15H5zM14 2v6h5M8 12h8m-8 4h8"/>'}</svg>`;
  const file = (name, kind = 'file') => `<div class="demo-file">${icon(kind)}<span>${name}</span></div>`;
  const chat = (label, prompt, answer) => `<div class="demo-chat"><span class="demo-mini">${label}</span><div class="demo-message" data-reveal="1">${prompt}</div><div class="demo-answer" data-reveal="2">${answer}</div><div class="demo-input">Napisz do Claude <span>↑</span></div></div>`;
  const terminal = (command, result) => `<div class="demo-terminal" data-reveal="1"><span class="demo-mini">Terminal · folder startera</span><div class="demo-command">${command}</div><div class="demo-output" data-reveal="2">${result}</div></div>`;
  const browser = (content) => `<div class="demo-browser" data-reveal="2"><div class="demo-address">${icon('file')} localhost:4321</div><div class="demo-web">${content}</div></div>`;
  const skeleton = '<span class="demo-mini">MECHA · WIREFRAME</span><div class="demo-skeleton-title"></div><div class="demo-skeleton-line"></div><div class="demo-cards"><i></i><i></i><i></i></div>';
  const scenes = {
    'open-preview': {
      title: 'Adres Local → strona w przeglądarce', kind: 'preview',
      steps: ['Znajdź w terminalu adres Local, np. http://localhost:4321/.', 'Kliknij adres lub skopiuj go do paska adresu przeglądarki.', 'Starter otwiera się w przeglądarce. Pozostaw terminal z serwerem uruchomiony.'],
      body: '<div class="demo-terminal"><span class="demo-mini">CLAUDE · TERMINAL</span><div class="demo-command">$ npm run dev</div><div class="demo-output">Astro · ready<br><br>Local:<br><span class="demo-local-url">http://localhost:4321/</span></div><span class="demo-mini">Przykładowy adres lokalny</span></div>' + browser('<span class="demo-mini">MECHA · STARTER ASTRO</span><div class="demo-skeleton-title"></div><div class="demo-skeleton-line"></div><div class="demo-cards"><i></i><i></i><i></i></div><p class="demo-preview-ready">✓ Podgląd działa</p>')
    },
    'open-claude': {
      title: 'Folder → projekt w Claude', kind: 'drag', steps: ['Wybierz rozpakowany folder startera.', 'Przeciągnij folder do okna Claude.', 'Sprawdź, czy Claude pracuje w folderze startera.'],
      body: file('starter-astro/', 'folder') + chat('Claude · otwórz projekt', '📎 starter-astro/', 'Projekt: starter-astro/<br><span class="demo-mini">Folder projektu jest otwarty.</span>')
    },
    'install-node': {
      title: 'Claude → terminal', kind: 'terminal', steps: ['Znajdź ikonę terminala w prawym górnym rogu.', 'Otwórz terminal i wklej polecenie dla swojego systemu.', 'Sprawdź instalację: node --version i npm --version.'],
      body: '<div class="demo-editor"><span class="demo-mini">CLAUDE · STARTER ASTRO</span><p>Twój projekt jest otwarty.</p><div class="demo-skeleton-line"></div></div>' + terminal('<span>macOS / Homebrew</span>brew install node<br><br><span>Windows / winget</span>winget install OpenJS.NodeJS.LTS', '$ node --version<br>v…<br>$ npm --version<br>…<br><span class="demo-mini">Oczekiwany wynik: numery wersji.</span>')
    },
    'start-server': {
      title: 'Terminal → podgląd Astro', kind: 'server', steps: ['W terminalu, w folderze projektu, wpisz npm install.', 'Po instalacji uruchom npm run dev.', 'Otwórz adres Local zwrócony przez terminal.'],
      body: '<div class="demo-terminal"><span class="demo-mini">TERMINAL · STARTER ASTRO</span><div class="demo-command">$ npm install</div><div class="demo-command" data-reveal="1">$ npm run dev</div><div class="demo-output" data-reveal="2">Local: http://localhost:4321/<br><span class="demo-mini">Przykładowy adres — użyj adresu ze swojego terminala.</span></div></div>' + browser(skeleton)
    },
    'import-strategy': {
      title: 'Strategia → kontekst projektu', kind: 'drag', steps: ['Otwórz nowy wątek w projekcie.', 'Załącz brief.md oraz uzupełnienie, jeśli strategia się zmieniła. Wklej prompt poniżej.', 'Sprawdź podsumowanie zapisanych plików i brakujących informacji.'],
      body: file('brief.md') + chat('Claude · nowy wątek', '📎 brief.md + uzupełnienie, jeśli dotyczy<br>Przenieś kontekst do plików projektu. Nie twórz jeszcze interfejsu.', 'Kontekst zapisany.<br>Sprawdź: zmienione pliki, fakty, założenia i otwarte kwestie.')
    },
    'build-wireframe': {
      title: 'Zatwierdzony plan → wireframe', kind: 'build', steps: ['Wklej zatwierdzony plan 2–3 sekcji.', 'Poproś o wireframe z istniejących komponentów startera.', 'Sprawdź strukturę i kolejność sekcji w przeglądarce.'],
      body: chat('Claude · starter Astro', 'Zbuduj wireframe na podstawie zatwierdzonej architektury. Użyj istniejących komponentów i tokenów.', 'Sprawdź układ, hierarchię i przepływ informacji w podglądzie.') + browser(skeleton)
    },
    'find-and-collect-inspiration': {
      title: 'Screen → wybrana sekcja', kind: 'drag', steps: ['Wybierz screen sekcji, która Cię inspiruje.', 'Załącz go do Claude i opisz, co chcesz wykorzystać.', 'Poproś o sekcję procesu zgodną z brandingiem Mecha.'],
      body: '<div class="demo-file demo-reference"><span class="demo-mini">inspiracja.png</span><div class="demo-process"><i>01</i><b></b><i>02</i><b></b><i>03</i></div></div>' + chat('Claude · sekcja procesu', '📎 inspiracja.png<br>Wykorzystaj układ i rytm sekcji procesu z tego screena.', 'Dostosuj treść do projektu, a kolory i typografię do istniejącego brandingu.')
    }
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-demo]').forEach(host => {
    const scene = scenes[host.dataset.demo];
    if (!scene) return;
    host.innerHTML = `<div class="demo-heading"><span>${scene.title}</span><span class="demo-mini">Schemat działania</span></div><div class="demo-stage" data-kind="${scene.kind}" aria-hidden="true"><div class="demo-window"><div class="demo-toolbar"><span>◦ ◦ ◦</span><span>Claude</span><span class="demo-terminal-icon">${icon('terminal')}</span></div><div class="demo-body">${scene.body}</div></div></div><div class="demo-footer"><p class="demo-caption"></p><div class="demo-controls"><button type="button" class="demo-pause">Pauza</button><button type="button" class="demo-next" aria-label="Następna scena demonstracji">Dalej →</button></div></div>`;
    if (scene.kind === 'drag') {
      const ghost = host.querySelector('.demo-file').cloneNode(true);
      ghost.classList.add('demo-ghost');
      host.querySelector('.demo-stage').append(ghost);
    }
    const task = host.closest('details');
    let phase = 0, visible = false, paused = reduced.matches, timer;
    const pause = host.querySelector('.demo-pause');
    const render = () => {
      host.dataset.phase = phase;
      host.querySelector('.demo-caption').textContent = `${phase + 1} / 3 — ${scene.steps[phase]}`;
      host.querySelectorAll('[data-reveal]').forEach(el => { el.classList.toggle('demo-visible', Number(el.dataset.reveal) <= phase); });
      pause.textContent = paused ? 'Odtwórz' : 'Pauza';
      pause.setAttribute('aria-label', paused ? 'Odtwórz demonstrację' : 'Wstrzymaj demonstrację');
    };
    const sync = () => {
      clearTimeout(timer);
      const running = visible && task.open && !document.hidden && !paused;
      host.classList.toggle('demo-running', running && !reduced.matches);
      if (running) timer = setTimeout(() => { phase = (phase + 1) % 3; render(); sync(); }, 4000);
    };
    pause.addEventListener('click', () => { paused = !paused; render(); sync(); });
    host.querySelector('.demo-next').addEventListener('click', () => { paused = true; phase = (phase + 1) % 3; render(); sync(); });
    task.addEventListener('toggle', sync);
    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', () => { paused = reduced.matches; render(); sync(); });
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .15 }).observe(host);
    render();
  });
})();
