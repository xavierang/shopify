import SmoothScroll from "smooth-scroll";

export default class ScrollTo {
  constructor(el) {
    this.el = el;

    const option = { speed: 1000, easing: "easeInOutCubic", offset: 94 };
    const scroll = new SmoothScroll("a, button", option);

    this.el.addEventListener("click", e => {
      e.preventDefault();
      console.dir(this.el.localName);
      if (this.el.localName === "button") {
        const ref = this.el.attributes["data-href"].value;
        switch (ref) {
          case "menu":
            // scroll.animateScroll(document.querySelector(".js-menu"), this.el);
            document.querySelector(".js-menu").classList.toggle("is-open");
            break;
          case "home":
            scroll.animateScroll(0);
            break;
          case "signup":
            scroll.animateScroll(document.querySelector(".c-signup"));
            break;
          case "video":
            scroll.animateScroll(document.querySelector(".c-video"));
          case "submit":
            break;

          default:
        }
      } else if (this.el.localName === "a") {
        const ref = this.el.attributes.href.value;
        if (document.querySelector(".js-menu").classList.contains("is-open")) {
          document.querySelector(".js-menu").classList.remove("is-open");
        }
        switch (ref) {
          case "intro":
            scroll.animateScroll(document.querySelector(".c-intro"));
            break;
          case "feature":
            scroll.animateScroll(document.querySelector(".c-swiper"));
          default:
            break;
        }

        // look for href
      } else {
        // do nothing
      }
    });
  }
}
