(() => {
  const timeline = document.querySelector('.timeline');
  const rail = document.querySelector('.timeline-rail');
  const fill = document.querySelector('.timeline-fill');
  const dots = [...document.querySelectorAll('.stage-number')];
  if (!timeline || !rail || !fill || !dots.length) return;
  let queued = false;
  function update() {
    queued = false;
    const host = timeline.getBoundingClientRect();
    const first = dots[0].getBoundingClientRect();
    const last = dots[dots.length - 1].getBoundingClientRect();
    const start = first.top + first.height / 2;
    const end = last.top + last.height / 2;
    const height = Math.max(0, end - start);
    const progress = height ? Math.min(1, Math.max(0, (window.innerHeight * .5 - start) / height)) : 0;
    rail.style.top = `${start - host.top}px`;
    rail.style.left = `${first.left + first.width / 2 - host.left - 1}px`;
    rail.style.height = `${height}px`;
    fill.style.transform = `scaleY(${progress})`;
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  document.addEventListener('toggle', schedule, true);
  const observer = new ResizeObserver(schedule);
  observer.observe(timeline);
  dots.forEach(dot => observer.observe(dot));
  document.fonts.ready.then(schedule);
  schedule();
})();
