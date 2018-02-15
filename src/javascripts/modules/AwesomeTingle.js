import tingle from "tingle.js";

export default class AwesomeTingle {
  constructor(resp) {
    const myTingle = new tingle.modal({
      footer: false,
      stickyFooter: false,
      closeMethods: ["overlay", "escape", "button"],
      closeLabel: "",
    });

    myTingle.setContent(`
    <div class="c-popup  u-text-center">
        <h1>${resp.result === "error" ? "NOT " : ""}Awesome!</h1>
        <p>${resp.msg}</p>
        <p>Lorem ipsum dolor sit amet.Consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna.</p>
        <div class="c-share">
          <span class="c-share__items">
          share on
          </span>

          <a href="https://www.facebook.com/sharer/sharer.php?u=xavierang.github.io/shopify" target="_blank" title="Share on facebook" class="c-share__items  c-icon  c-icon--large  c-icon--lightbg">
            <span class="u-hidden-visually">Share on facebook</span>
            <span class='sprite -facebook '>
              <svg viewBox="0 0 1 1">
                <use xlink:href='images/icons.svg#facebook'></use>
              </svg>
            </span>
          </a>

          <a href="https://twitter.com/home?status=xavierang.github.io/shopify" target="_blank" title="Share on twitter" class="c-share__items  c-icon  c-icon--large  c-icon--lightbg">
            <span class="u-hidden-visually">Share on twitter</span>
              <span class='sprite -twitter-filled '>
               <svg viewBox="0 0 1 1">
                <use xlink:href='images/icons.svg#twitter-filled'></use>
              </svg>
              </span>
          </a>

          <a href="https://www.instagram.com/" target="_blank" title="Share on instagram" class="c-share__items  c-icon  c-icon--large  c-icon--lightbg">
            <span class="u-hidden-visually">Share on instagram</span>
              <span class='sprite -instagram '>
               <svg viewBox="0 0 1 1">
                <use xlink:href='images/icons.svg#instagram'></use>
               </svg>
              </span>
          </a>
        </div>
      </div>
    `);

    return myTingle;
  }
}
