export default class Signup {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("click", e => {
      e.preventDefault();
      console.dir(e.target);
    });
  }
}
