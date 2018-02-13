export default class MenuOpener {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(".js-menuopener").classList.toggle("is-open");
    })
  }
}
