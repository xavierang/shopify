export default class CollapseAccordion {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("click", e => {
      e.preventDefault();
      this.el.parentElement.classList.toggle("is-collapsed");
      const sprites = Array.from(
        this.el.querySelectorAll(".c-accordion__icon")
      );
      for (const sprite of sprites) {
        sprite.classList.toggle("u-hide");
      }
    });
  }
}
