export default class CollapseAccordion {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("click", e => {
      e.preventDefault();
      this.toggleClass(this.el.parentElement);
    });
  }

  toggleClass(t) {
    t.classList.toggle("is-collapsed");
    const sprites = t.children[0].children;
    for (const sprite of sprites) {
      sprite.classList.toggle("u-hide");
    }
  }
}
