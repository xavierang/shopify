import SmoothScroll from "smooth-scroll";

export default class ScrollTo {
  constructor(el) {
    this.el = el;

    const option = { speed: 1000, easing: "easeInOutCubic", offset: 0 };
    const scroll = new SmoothScroll("a, button", option);

    this.el.addEventListener("click", e => {
      e.preventDefault();
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
            break;
          case "play-video":
            this.el.classList.add("u-hide");
            document
              .querySelector(".c-video__video")
              .classList.add("is-playing");
            document.querySelector(".c-video__video").src += "&amp;autoplay=1";
            break;
          default:
            // do nothing
            break;
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
            break;
          default:
            // do nothing
            break;
        }

        // look for href
      } else {
        // do nothing
      }
    });
  }
}
