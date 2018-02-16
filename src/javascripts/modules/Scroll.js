export default class Scroll {
  constructor(el) {
    this.el = el;
    let lastOffsetY = 0; // change when finalized height of hero

    window.addEventListener("scroll", e => {
      const win = e.target.defaultView;
      if (typeof win.pageYOffset === "number" && win.pageYOffset < 25) {
        // header is at the top of website
        el.classList.add("is-transparent");
        el.classList.remove("is-scroll");
      } else if (
        typeof win.pageYOffset === "number" &&
        win.pageYOffset > 0 &&
        win.pageYOffset > lastOffsetY
      ) {
        // header is scrolling down
        el.classList.add("is-scroll");
      } else if (
        typeof win.pageYOffset === "number" &&
        win.pageYOffset > 0 &&
        win.pageYOffset < lastOffsetY
      ) {
        // header is scrolling up
        el.classList.remove("is-scroll");
        el.classList.remove("is-transparent");
      }

      lastOffsetY = win.pageYOffset;
    });
  }
}
