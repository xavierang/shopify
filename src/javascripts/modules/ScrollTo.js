import SmoothScroll from "smooth-scroll";
import "smooth-scroll/dist/js/smooth-scroll.polyfills";

export default class ScrollTo {
  constructor(el) {
    this.el = el;
    this.currentPageYOffset = 0;

    const option = {
      speed: 1000,
      easing: "easeInOutCubic",
      offset: 0,

      before: () => {
        console.log("start scroll");
        this.currentPageYOffset = window.pageYOffset;
        document.querySelector(".c-header").classList.add("is-locked");
      },

      after: () => {
        console.log(window.pageYOffset, this.currentPageYOffset);
        setTimeout(() => {
          if (window.pageYOffset !== 0) {
            document.querySelector(".c-header").classList.add("is-scroll");
          }
          document.querySelector(".c-header").classList.remove("is-locked");
        }, 20);
      },
    };
    const scroll = new SmoothScroll("a, button", option);

    this.el.addEventListener("click", e => {
      e.preventDefault();
      if (this.el.tagName === "BUTTON") {
        const ref = this.el.attributes["data-href"].value;
        switch (ref) {
          case "menu":
            // scroll.animateScroll(document.querySelector(".js-menu"), this.el);
            document.querySelector(".c-menu").classList.toggle("is-open");
            break;
          case "home":
            scroll.animateScroll(0);
            if (
              document.querySelector(".c-menu").classList.contains("is-open")
            ) {
              document.querySelector(".c-menu").classList.remove("is-open");
            }
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
      } else if (this.el.tagName === "A") {
        const ref = this.el.attributes.href.value;
        if (document.querySelector(".c-menu").classList.contains("is-open")) {
          document.querySelector(".c-menu").classList.remove("is-open");
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
