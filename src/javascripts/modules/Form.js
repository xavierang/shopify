import "ajaxchimp";
import AwesomeTingle from "./AwesomeTingle";

const $ = require("jquery");

export default class Form {
  constructor(el) {
    this.el = el;

    this.el.addEventListener("keyup", e => {
      if (e.target.value !== "") {
        this.el.classList.add("is-filled");
      } else {
        this.el.classList.remove("is-filled");
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
