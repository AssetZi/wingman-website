// Weight Wingman — Meta test landing pages
// OS switch, App Store tap tracking, Android interest form.
(function () {
  var body = document.body;
  var page = body.getAttribute('data-page') || '';

  function fb() { if (typeof window.fbq === 'function') window.fbq.apply(null, arguments); }
  function ga(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); }

  // ── OS switch ────────────────────────────────────────────────────
  var ua = navigator.userAgent || '';
  var isIOS = /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS reports as a Mac
  // The App Store button shows for everyone. Non-iOS visitors also get the small Android line.
  if (!isIOS) {
    document.querySelectorAll('.cta-android').forEach(function (el) { el.hidden = false; });
  }

  // ── App Store tap ────────────────────────────────────────────────
  document.querySelectorAll('.js-appstore').forEach(function (a) {
    a.addEventListener('click', function () {
      var p = a.getAttribute('data-page') || page;
      fb('trackCustom', 'AppStoreClick', { page: p });
      ga('app_store_click', { page: p });
    });
  });

  // ── Android interest form ────────────────────────────────────────
  var supabaseUrl = body.getAttribute('data-supabase-url') || '';
  var supabaseKey = body.getAttribute('data-supabase-key') || '';
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll('.android-form').forEach(function (form) {
    var input = form.querySelector('input[type="email"]');
    var hp = form.querySelector('.hp');
    var btn = form.querySelector('button[type="submit"]');
    var row = form.querySelector('.form-row');
    var q = form.querySelector('.form-q');
    var thanks = form.querySelector('.form-thanks');
    var err = form.querySelector('.form-err');

    function done() {
      row.hidden = true; q.hidden = true; err.hidden = true; thanks.hidden = false;
      fb('track', 'Lead', { page: page });
      ga('generate_lead', { page: page });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();
      if (hp && hp.value) { done(); return; } // bot filled the honeypot; pretend it worked
      if (!emailRe.test(email)) { err.hidden = false; input.focus(); return; }
      if (!supabaseUrl || !supabaseKey) { err.hidden = false; return; }

      btn.disabled = true; err.hidden = true;
      fetch(supabaseUrl + '/rest/v1/android_interest', {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': 'Bearer ' + supabaseKey,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ email: email, page: page, user_agent: ua.slice(0, 255) })
      }).then(function (res) {
        // 201 inserted; 409 the address is already on the list. Both are a yes.
        if (res.status === 201 || res.status === 409) done();
        else { err.hidden = false; btn.disabled = false; }
      }).catch(function () {
        err.hidden = false; btn.disabled = false;
      });
    });
  });
})();
