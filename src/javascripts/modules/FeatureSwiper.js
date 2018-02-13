import Swiper from "swiper/dist/js/swiper";

export default class FeatureSwiper {
  constructor(el) {
    this.el = el;

    const testSwiper = new Swiper(el);
  }
}
