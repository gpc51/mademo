(() => {
  'use strict';
  const slides = window.DECK.slides;
  const stage = document.getElementById('stage');
  const pad = n => String(n).padStart(2, '0');
  const clock = s => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
  const plain = text => text.replace(/<br\s*\/?\s*>/g, ' ').replace(/<[^>]*>/g, '');
  const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const starts = slides.map((_, i) => slides.slice(0, i).reduce((a, s) => a + s.seconds, 0));
  let current = 0;
  let presenter;
  let quietTimer;
  let toastTimer;
  const channel = typeof BroadcastChannel === 'function' ? new BroadcastChannel('made-cemex-enterprise-v6') : null;
  slides.forEach((s, i) => {
    const section = document.createElement('section');
    section.className = `slide ${s.template}`;
    section.id = s.id;
    section.hidden = true;
    section.setAttribute('aria-label', `${i + 1}. ${plain(s.title)}`);
    section.innerHTML = s.template === 'demo' ? s.html : `<header><img src="assets/logo.png" alt="Made OS"></header><${i === 0 ? 'h1' : 'h2'}>${s.title}</${i === 0 ? 'h1' : 'h2'}>${s.html}`;
    stage.appendChild(section);
    const button = document.createElement('button');
    button.innerHTML = `<span>${pad(i + 1)}</span>${s.label}<small>${clock(starts[i])}</small>`;
    button.addEventListener('click', () => { go(i); panelsOff(); });
    document.getElementById('overview-list').appendChild(button);
  });
  const sections = [...stage.children];
  const video = document.getElementById('product-video');
  const play = document.getElementById('play-demo');
  const notes = document.getElementById('notes');
  const overview = document.getElementById('overview');
  function state() { return {type:'state', index:current, start:starts[current], end:starts[current]+slides[current].seconds}; }
  function broadcast() { channel?.postMessage(state()); if (presenter && !presenter.closed) presenter.postMessage(state(), location.origin === 'null' ? '*' : location.origin); }
  function renderNotes() {
    const s = slides[current];
    document.getElementById('notes-content').innerHTML = `<div class="timing">${clock(starts[current])}–${clock(starts[current]+s.seconds)} · ${s.seconds}s</div><h2>${s.title}</h2><p class="director">${escape(s.direction)}</p>${s.script.split('\n\n').map(p => `<p>${escape(p)}</p>`).join('')}<p class="evidence">${escape(s.evidence)}</p><div class="sources">${s.sources.map(key => `<a href="${window.DECK.sources[key]}" target="_blank" rel="noopener noreferrer">Source: ${key} ↗</a>`).join('')}</div>`;
    notes.scrollTop = 0;
  }
  function go(index, updateHash = true) {
    const target = Math.max(0, Math.min(slides.length - 1, Number(index) || 0));
    if (target !== current && !video.paused) video.pause();
    current = target;
    sections.forEach((el, i) => { el.hidden = i !== current; });
    document.getElementById('counter').textContent = `${pad(current+1)} / ${pad(slides.length)}`;
    document.getElementById('prev').disabled = current === 0;
    document.getElementById('next').disabled = current === slides.length-1;
    [...document.getElementById('overview-list').children].forEach((el, i) => el.setAttribute('aria-current', String(i === current)));
    if (updateHash) history.replaceState(null, '', `#${current+1}`);
    document.title = `${pad(current+1)} · ${slides[current].label} | Made OS`;
    renderNotes();
    broadcast();
  }
  function fromHash() { const h = location.hash.slice(1); go(/^\d+$/.test(h) ? Number(h)-1 : Math.max(0, slides.findIndex(s => s.id === h)), false); }
  function panelsOff() { notes.hidden = true; overview.hidden = true; }
  function toggleNotes() { overview.hidden = true; notes.hidden = !notes.hidden; }
  function toggleOverview() { notes.hidden = true; overview.hidden = !overview.hidden; }
  function toast(message) { const el = document.getElementById('toast'); el.textContent = message; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 5000); }
  async function fullscreen() { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { toast('Use your browser’s presentation or fullscreen command.'); } }
  function openPresenter() { presenter = window.open('presenter.html', 'made-cemex-presenter', 'width=1100,height=850'); if (!presenter) toast('Allow this local page to open the presenter window, or use N for notes.'); }
  function onCommand(data) { if (data?.type !== 'command') return; if (data.action === 'ready') broadcast(); else if (data.action === 'next') go(current+1); else if (data.action === 'prev') go(current-1); else if (data.action === 'goto') go(data.index); }
  if (channel) channel.onmessage = event => onCommand(event.data);
  window.addEventListener('message', event => { if (event.source === presenter && (event.origin === location.origin || location.protocol === 'file:')) onCommand(event.data); });
  document.getElementById('prev').onclick = () => go(current-1);
  document.getElementById('next').onclick = () => go(current+1);
  document.getElementById('index-toggle').onclick = toggleOverview;
  document.getElementById('notes-toggle').onclick = toggleNotes;
  document.getElementById('notes-close').onclick = panelsOff;
  document.getElementById('overview-close').onclick = panelsOff;
  document.getElementById('presenter-open').onclick = openPresenter;
  document.getElementById('fullscreen').onclick = fullscreen;
  play.addEventListener('click', async () => { try { if (video.ended) video.currentTime = 0; video.muted = false; await video.play(); } catch { toast('Use the video controls to start playback. Check the audio output before presenting.'); } });
  video.addEventListener('play', () => { play.hidden = true; });
  video.addEventListener('ended', () => { play.hidden = false; play.innerHTML = '<span>↺</span> Replay demo <small>Replay demo</small>'; });
  video.addEventListener('error', () => toast('The video could not load. Keep the assets folder beside index.html.'));
  window.addEventListener('keydown', event => {
    if (event.altKey || event.metaKey || event.ctrlKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.target.tagName === 'VIDEO') return;
    const key = event.key.toLowerCase();
    if (['arrowright','pagedown'].includes(key)) { event.preventDefault(); go(current+1); }
    else if (['arrowleft','pageup'].includes(key)) { event.preventDefault(); go(current-1); }
    else if (key === ' ' && event.target.tagName !== 'BUTTON') { event.preventDefault(); if (slides[current].id !== 'demo') go(current+1); else if (video.paused) play.click(); else video.pause(); }
    else if (key === 'home') go(0);
    else if (key === 'end') go(slides.length-1);
    else if (key === 'n') toggleNotes();
    else if (key === 'g') toggleOverview();
    else if (key === 'p') openPresenter();
    else if (key === 'f') fullscreen();
    else if (key === 'escape') panelsOff();
  });
  function fit() { document.documentElement.style.setProperty('--scale', Math.min(innerWidth / 1600, innerHeight / 900)); }
  function showControls() { const controls = document.querySelector('.controls'); controls.classList.remove('quiet'); clearTimeout(quietTimer); quietTimer = setTimeout(() => controls.classList.add('quiet'), 2500); }
  addEventListener('resize', fit);
  addEventListener('hashchange', fromHash);
  addEventListener('mousemove', showControls);
  fit(); fromHash(); showControls();
})();
