/* Site language switch: EN / 한국어.
   Elements marked .l-en / .l-ko are shown for the active language (see lang.css).
   Pages that render text in script use L(en, ko) and re-render on the "langchange" event. */
(function () {
  var KEY = "papua-site-lang";
  var root = document.documentElement;
  function initial() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ko" || q === "en") return q;
    try { var s = localStorage.getItem(KEY); if (s === "ko" || s === "en") return s; } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  }
  function apply(lang, save) {
    root.classList.toggle("ko", lang === "ko");
    root.lang = lang;
    root.setAttribute("data-lang", lang);
    var t = root.getAttribute(lang === "ko" ? "data-title-ko" : "data-title-en");
    if (t) document.title = t;
    if (save) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    var btns = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-pressed", String(btns[i].getAttribute("data-set") === lang));
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }
  window.siteLang = function () { return root.getAttribute("data-lang") || "en"; };
  window.L = function (en, ko) { return window.siteLang() === "ko" ? ko : en; };
  apply(initial(), false);
  document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function (e) { apply(e.currentTarget.getAttribute("data-set"), true); });
    }
    apply(window.siteLang(), false);
  });
})();
