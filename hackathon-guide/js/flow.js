(() => {
      // Fresh agenda progress, separate from earlier prototype/test checkmarks.
      const storageKey = 'hackathon-2026-guide-progress-v2';
      const tasks = [...document.querySelectorAll('.task[data-task]')];
      const toast = document.getElementById('toast');
      const guideLauncher = document.getElementById('guide-launcher');
      const guidePanel = document.getElementById('ai-guide');
      const guideClose = document.getElementById('guide-close');
      const inspirationList = document.getElementById('inspiration-list');
      const inspirationCount = document.getElementById('inspiration-count');
      const loadMoreInspiration = document.getElementById('load-more-inspiration');
      let toastTimer;

      const inspirationSources = [
        { name: 'Awwwards', url: 'https://www.awwwards.com/' },
        { name: 'Behance', url: 'https://www.behance.net/' },
        { name: 'Brandbooki', url: 'https://brandingstyleguides.com/' },
        { name: 'Curated Design', url: 'https://www.curated.design/' },
        { name: 'dark.design', url: 'https://www.dark.design/' },
        { name: 'Dribbble', url: 'https://dribbble.com/' },
        { name: 'Fonts In Use', url: 'https://fontsinuse.com/' },
        { name: 'Footer Design', url: 'https://www.footer.design/', description: 'Projekty footerów i całych stron' },
        { name: 'Godly', url: 'https://godly.website/' },
        { name: 'Hoverstat.es', url: 'https://www.hoverstat.es/' },
        { name: 'Abduzeedo', url: 'https://abduzeedo.com/', description: 'Magazyn i portal o sztuce oraz designie' },
        { name: 'Panda', url: 'https://app.usepanda.com/#/' },
        { name: 'Visual Journal', url: 'https://visualjournal.it/' },
        { name: 'Httpster', url: 'https://httpster.net/' },
        { name: 'Curator X', url: 'https://www.curatorx.io/inspiration' },
        { name: 'Land-book', url: 'https://land-book.com/' },
        { name: 'MaxiBestOf', url: 'https://maxibestof.one/', description: 'Wybrane projekty digitalowe' },
        { name: 'Minimal Gallery', url: 'https://minimal.gallery/' },
        { name: 'Mobbin', url: 'https://mobbin.com/browse/ios/apps' },
        { name: 'OffGrid', url: 'https://www.offgrid-design.co/' },
        { name: 'Pinterest', url: 'https://pl.pinterest.com/' },
        { name: 'SaaSpo', url: 'https://www.saaspo.com/' },
        { name: 'SeeSaw', url: 'https://www.seesaw.website/' },
        { name: 'Sidebar.io', url: 'https://sidebar.io/' },
        { name: 'SiteInspire', url: 'https://www.siteinspire.com' },
        { name: 'The Brand Identity', url: 'https://the-brandidentity.com/features' },
        { name: 'Wow-web', url: 'https://wow-web.co.uk/' }
      ];

      const inspirationPageSize = 6;
      let visibleInspirationCount = 0;

      function readDone() {
        try {
          const saved = JSON.parse(localStorage.getItem(storageKey));
          return Array.isArray(saved) ? new Set(saved) : new Set();
        } catch (_) {
          return new Set();
        }
      }

      let done = readDone();

      function saveDone() {
        try { localStorage.setItem(storageKey, JSON.stringify([...done])); } catch (_) {}
      }

      function renderDone() {
        tasks.forEach(task => {
          const isDone = done.has(task.dataset.task);
          const button = task.querySelector('[data-done]');
          task.classList.toggle('is-done', isDone);
          if (!button) return;
          button.setAttribute('aria-pressed', String(isDone));
          if (task.dataset.optional === 'true') {
            button.querySelector('.primary-label').textContent = isDone ? 'Opcjonalne — cofnij' : 'Oznacz opcjonalnie';
          } else {
            button.querySelector('.primary-label').textContent = isDone ? 'Gotowe — cofnij' : 'Oznacz jako gotowe';
          }
        });

        document.querySelectorAll('.stage').forEach(stage => {
          const requiredTasks = [...stage.querySelectorAll('.task[data-task]:not([data-optional="true"])')];
          const complete = requiredTasks.length > 0 && requiredTasks.every(task => done.has(task.dataset.task));
          stage.classList.toggle('is-complete', complete);
        });
      }

      tasks.forEach(task => {
        const button = task.querySelector('[data-done]');
        if (!button) return;
        button.addEventListener('click', () => {
          const id = task.dataset.task;
          done.has(id) ? done.delete(id) : done.add(id);
          saveDone();
          renderDone();
        });
      });

      function showToast(message) {
        toast.textContent = message;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1700);
      }

      function sourceDescription(source) {
        if (source.description) return source.description;
        try { return new URL(source.url).hostname.replace(/^www\./, ''); } catch (_) { return 'Link do uzupełnienia'; }
      }

      function createSourceRow(source) {
        const link = document.createElement('a');
        link.className = 'link-row';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.href = source.url || '#';

        if (!source.url) {
          link.setAttribute('aria-disabled', 'true');
          link.dataset.missingLink = 'css-awards';
        }

        const platform = document.createElement('span');
        platform.className = 'link-platform';

        const name = document.createElement('strong');
        name.textContent = source.name;
        const description = document.createElement('small');
        description.textContent = sourceDescription(source);
        platform.append(name, description);

        const arrow = document.createElement('span');
        arrow.className = 'link-arrow primary-icon';
        arrow.setAttribute('aria-hidden', 'true');
        if (source.url) {
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', '0 0 24 24');
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', 'currentColor');
          svg.setAttribute('stroke-width', '1.5');
          svg.setAttribute('stroke-linecap', 'round');
          svg.setAttribute('stroke-linejoin', 'round');
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M4 12h16m-6-6 6 6-6 6');
          svg.appendChild(path);
          arrow.appendChild(svg);
        } else {
          arrow.textContent = '—';
        }

        link.append(platform, arrow);
        return link;
      }

      function renderNextInspirationPage() {
        const nextCount = Math.min(visibleInspirationCount + inspirationPageSize, inspirationSources.length);
        const fragment = document.createDocumentFragment();

        inspirationSources.slice(visibleInspirationCount, nextCount).forEach(source => {
          fragment.appendChild(createSourceRow(source));
        });

        inspirationList.appendChild(fragment);
        visibleInspirationCount = nextCount;
        inspirationCount.textContent = `${visibleInspirationCount} / ${inspirationSources.length} źródeł`;

        const hasMore = visibleInspirationCount < inspirationSources.length;
        loadMoreInspiration.hidden = !hasMore;
        if (hasMore) {
          const remaining = inspirationSources.length - visibleInspirationCount;
          loadMoreInspiration.textContent = `Load more · ${Math.min(inspirationPageSize, remaining)}`;
        }
      }

      async function copyText(value) {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value);
          return;
        }
        const area = document.createElement('textarea');
        area.value = value;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const copied = document.execCommand('copy');
        area.remove();
        if (!copied) throw new Error('copy failed');
      }

      document.querySelectorAll('.copy').forEach(button => {
        button.addEventListener('click', async () => {
          const code = button.closest('.snippet')?.querySelector('pre')?.textContent.trim();
          if (!code) return;
          try {
            await copyText(code);
            showToast('Skopiowano');
          } catch (_) {
            showToast('Nie udało się skopiować');
          }
        });
      });

      document.addEventListener('click', event => {
        const link = event.target.closest('[data-missing-link]');
        if (link) {
          event.preventDefault();
          showToast('Link do uzupełnienia');
        }
      });

      loadMoreInspiration.addEventListener('click', renderNextInspirationPage);

      function setGuide(open, restoreFocus = false) {
        guidePanel.classList.toggle('is-open', open);
        guidePanel.setAttribute('aria-hidden', String(!open));
        guideLauncher.setAttribute('aria-expanded', String(open));
        if (open) guideClose.focus();
        if (!open && restoreFocus) guideLauncher.focus();
      }

      guideLauncher.addEventListener('click', () => setGuide(!guidePanel.classList.contains('is-open')));
      guideClose.addEventListener('click', () => setGuide(false, true));

      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && guidePanel.classList.contains('is-open')) setGuide(false, true);
      });

      document.addEventListener('click', event => {
        if (!guidePanel.classList.contains('is-open')) return;
        if (!guidePanel.contains(event.target) && !guideLauncher.contains(event.target)) setGuide(false);
      });

      renderNextInspirationPage();
      renderDone();
    })();
