import "ajaxchimp";
import AwesomeTingle from "./AwesomeTingle";

const $ = require("jquery");

export default class Form {
  constructor(el) {
    this.el = el;

    const input = this.el.querySelector("#email");
    input.addEventListener("keyup", e => {
      if (e.target.value !== "") {
        input.classList.add("is-filled");
      } else {
        input.classList.remove("is-filled");
      }
    });

    const url =
      "http://github.us17.list-manage.com/subscribe/post?u=43373efd1b02bff2a76a8ce96&id=58ed49b77c";

    $(this.el).ajaxChimp({
      url,
      callback: r => {
        this.callBackFunction(r);
      },
    });
  }

  callBackFunction(resp) {
    const modal = new AwesomeTingle(resp);
    modal.open();
    this.el.reset();
  }
}
