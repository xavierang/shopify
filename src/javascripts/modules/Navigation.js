export default class Navigation {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("click", e => {
        e.preventDefault();

      console.log(this.el);
    });
  }
}
