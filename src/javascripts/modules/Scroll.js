export default class Scroll {
  constructor(el) {
    this.el = el;

    window.addEventListener("scroll", e => {
      const offsetY = 700; // change when finalized height of hero
      const win = e.target.defaultView;

      if (typeof win.pageYOffset === "number" && win.pageYOffset > offsetY) {
        el.classList.remove("is-transparent");
      } else {
        el.classList.add("is-transparent");
      }
    });
  }
}
