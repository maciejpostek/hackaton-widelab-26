/* GSAP 3.13.0 + SplitText, locally vendored. Whole-line swaps every 10s. */
(async () => {
  if (!window.gsap || !window.SplitText) return;
  await document.fonts.ready;
  gsap.registerPlugin(SplitText);
  const words = [...document.querySelectorAll('.poster-brand-word')];
  if (words.length !== 2) return;
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const splits = words.map(word => SplitText.create(word, { type: 'lines', aria: 'none' }));
    const [first, second] = splits.map(split => split.lines);
    gsap.set(words, { visibility: 'visible' });
    gsap.set(first, { yPercent: 120 });
    gsap.set(second, { yPercent: 120 });
    const revealDuration = 1.4;
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.to(first, { yPercent: 0, duration: revealDuration, ease: 'power3.out' }, 0)
      .to(first, { yPercent: -120, duration: revealDuration, ease: 'power3.inOut' }, 10)
      .fromTo(second, { yPercent: 120 }, { yPercent: 0, duration: revealDuration, ease: 'power3.inOut', immediateRender: false }, 10)
      .to(second, { yPercent: -120, duration: revealDuration, ease: 'power3.inOut' }, 20)
      .fromTo(first, { yPercent: 120 }, { yPercent: 0, duration: revealDuration, ease: 'power3.inOut', immediateRender: false }, 20);
    // Repeat the 20-second alternating cycle without replaying the initial reveal.
    timeline.eventCallback('onRepeat', () => timeline.time(revealDuration));
    const visibility = () => { timeline.paused(document.hidden); };
    document.addEventListener('visibilitychange', visibility);
    visibility();
    return () => {
      document.removeEventListener('visibilitychange', visibility);
      timeline.kill();
      splits.forEach(split => split.revert());
    };
  });
})();
