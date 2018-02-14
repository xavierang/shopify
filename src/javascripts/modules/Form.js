export default class Form {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("keyup", e => {
      if(e.target.value!==""){
        this.el.classList.add("is-filled");
      } else {
        this.el.classList.remove("is-filled");
      }
    });
  }
}
