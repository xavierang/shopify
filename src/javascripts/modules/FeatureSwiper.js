import Swiper from "swiper";

export default class FeatureSwiper {
  constructor(el) {
    this.el = el;
    console.log(el.textContent, "- From the example module");

    const testSwiper = new Swiper(el);
  }
}
