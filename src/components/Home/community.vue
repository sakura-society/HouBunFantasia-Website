<template>
  <div
    class="section mcb-section mfn-default-section mcb-section event8-radius close-button-left default-width show-on-scroll bg-contain"
    style="padding-top: 100px; padding-bottom: 60px; background-color: #f8f8f8">
    <div class="mcb-background-overlay"></div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner">
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item two-third tablet-two-third mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix mobile_align_center" style="">
                <h5>
                  <span style="color: #0089f7"> ● </span>
                  <span style="color: #300843"> Community </span>
                </h5>
                <p></p>
                <hr class="no_line" style="margin: 0 auto 10px auto" />
                <p></p>
                <h2>
                  <span class="themecolor">官方</span>社区
                </h2>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one tablet-one mobile-one column_slider" style="">
            <div class="cardListContainer">
              <div class="card-list">
                <a v-for="community in communitys" v-bind:key="community" :href="community.url" target="_blank"
                  class="card-item row-3" style="background-color:#f1f1f1;--random-color:#f1f1f1;color:#2A3344;">
                  <img :src="community.ProPho">
                  <div>
                    <p class="name">
                      <strong>{{ community.name }}</strong>
                    </p>
                    <p class="desc">
                      {{ community.desc }}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      communitys: [
        {
          name: "QQ群",
          url: "https://jq.qq.com/?_wv=1027&k=fhrdx0wa",
          ProPho:
            "https://44422.jx1639.com/iefans/images/2022-01-29/61f4b75ed03b9.jpeg",
          desc: "为中国大陆的用户提供的聊天群聊！"
        },
        {
          name: "樱雪论坛",
          url: "https://forum.sakurakoi.top",
          ProPho: "/image/sakurasnow.svg",
          desc: "官方论坛！"
        },
        {
          name: "Discord",
          url: "https://discord.gg/qe8kv5avvV",
          ProPho:
            "https://blog.osk.de/wp-content/uploads/2021/01/OSK-Blog_Discord-Guide_1280x480px.jpg",
          desc: "虽然这是一个理想社区，但是团队成员可能不会经常上！"
        },
      ],
    };
  },
};
</script>

<style scoped>
.center-container {
  text-align: center
}

.center-container>h1,
.center-container>h2,
.center-container>h3,
.center-container>h4,
.center-container>h5,
.center-container>h6 {
  margin-top: -3.1rem;
  padding-top: 4.6rem;
  margin-bottom: 0
}

.center-container>h1 a.header-anchor,
.center-container>h2 a.header-anchor,
.center-container>h3 a.header-anchor,
.center-container>h4 a.header-anchor,
.center-container>h5 a.header-anchor,
.center-container>h6 a.header-anchor {
  float: none;
  padding-right: 0;
  margin-left: -.9rem
}

.cardListContainer {
  margin: .7rem 0
}

.cardListContainer>:not(.card-list) {
  display: none
}

.cardListContainer .card-list {
  margin: -.35rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start
}

.cardListContainer .card-list .card-item {
  width: calc(33.33333% - .7rem);
  margin: .35rem;
  background: var(--bodyBg);
  border-radius: 3px;
  color: var(--textColor);
  display: flex;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .06);
  transition: all .4s
}

.cardListContainer .card-list .card-item:hover {
  text-decoration: none;
  box-shadow: 0 10px 20px -10px var(--randomColor, rgba(0, 0, 0, .15));
  transform: translateY(-3px) scale(1.01)
}

.cardListContainer .card-list .card-item:hover img {
  box-shadow: 3px 2px 7px rgba(0, 0, 0, .15)
}

.cardListContainer .card-list .card-item:hover div p {
  text-shadow: 3px 2px 5px rgba(0, 0, 0, .15)
}

.cardListContainer .card-list .card-item img {
  width: 160px;
  height: 60px;
  border-radius: 10%;
  border: 2px solid #fff;
  margin: 1rem 0 1rem 1rem;
  box-shadow: 3px 2px 5px rgba(0, 0, 0, .08);
  transition: all .4s
}

.cardListContainer .card-list .card-item div {
  flex: 1;
  display: inline-block;
  float: right;
  padding: 1rem 0
}

.cardListContainer .card-list .card-item div p {
  margin: 0;
  padding: 0 1rem;
  transition: text-shadow .4s;
  text-align: center
}

.cardListContainer .card-list .card-item div .name {
  margin: .2rem 0 .3rem
}

.cardListContainer .card-list .card-item div .desc {
  font-size: .8rem;
  line-height: 1.1rem;
  opacity: .8;
  margin-bottom: .2rem
}

.cardListContainer .card-list .card-item.row-1 {
  width: calc(100% - .7rem)
}

.cardListContainer .card-list .card-item.row-1 img {
  margin-left: 2rem
}

.cardListContainer .card-list .card-item.row-2 {
  width: calc(50% - .7rem)
}

.cardListContainer .card-list .card-item.row-2 img {
  margin-left: 1.5rem
}

.cardListContainer .card-list .card-item.row-3 {
  width: calc(33.33333% - .7rem)
}

.cardListContainer .card-list .card-item.row-4 {
  width: calc(25% - .7rem)
}

.cardImgListContainer {
  margin: 1rem 0
}

.cardImgListContainer>:not(.card-list) {
  display: none
}

.cardImgListContainer .card-list {
  margin: -.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start
}

.cardImgListContainer .card-list .card-item {
  width: calc(33.33333% - 1rem);
  margin: .5rem;
  background: var(--mainBg);
  border: 1px solid rgba(0, 0, 0, .1);
  box-sizing: border-box;
  border-radius: 3px;
  overflow: hidden;
  color: var(--textColor);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  transition: all .4s
}

.cardImgListContainer .card-list .card-item:hover {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, .1);
  transform: translateY(-3px)
}

.cardImgListContainer .card-list .card-item .box-img {
  overflow: hidden;
  position: relative;
  background: #eee
}

.cardImgListContainer .card-list .card-item .box-img img {
  display: block;
  width: 100%;
  height: 100%;
  transition: all .3s
}

.cardImgListContainer .card-list .card-item a {
  color: var(--textColor);
  transition: color .3s
}

.cardImgListContainer .card-list .card-item a:hover {
  text-decoration: none
}

.cardImgListContainer .card-list .card-item .box-info {
  padding: .8rem 1rem
}

.cardImgListContainer .card-list .card-item .box-info p {
  margin: 0
}

.cardImgListContainer .card-list .card-item .box-info .desc {
  margin-top: .3rem;
  opacity: .8;
  font-size: .9rem;
  line-height: 1.1rem;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical
}

.cardImgListContainer .card-list .card-item .box-footer {
  overflow: hidden;
  padding: .8rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, .1)
}

.cardImgListContainer .card-list .card-item .box-footer img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  float: left
}

.cardImgListContainer .card-list .card-item .box-footer span {
  line-height: 1.8rem;
  float: left;
  margin-left: .6rem;
  font-size: .8rem
}

.cardImgListContainer .card-list .card-item.row-1 {
  width: calc(100% - 1rem)
}

.cardImgListContainer .card-list .card-item.row-2 {
  width: calc(50% - 1rem)
}

.cardImgListContainer .card-list .card-item.row-3 {
  width: calc(33.33333% - 1rem)
}

.cardImgListContainer .card-list .card-item.row-4 {
  width: calc(25% - 1rem)
}

.theme-mode-dark .cardImgListContainer .card-list .card-item,
.theme-mode-dark .cardImgListContainer .card-list .card-item .box-footer {
  border-color: var(--borderColor)
}

@media (max-width:900px) {
  .cardListContainer .card-list .card-item.row-4 {
    width: calc(33.33333% - .7rem)
  }

  .cardImgListContainer .card-list .card-item.row-4 {
    width: calc(33.33333% - 1rem)
  }
}

@media (max-width:720px) {

  .cardListContainer .card-list .card-item.row-3,
  .cardListContainer .card-list .card-item.row-4 {
    width: calc(50% - .7rem)
  }

  .cardListContainer .card-list .card-item.row-3 img,
  .cardListContainer .card-list .card-item.row-4 img {
    margin-left: 1.5rem
  }

  .cardImgListContainer .card-list .card-item.row-3,
  .cardImgListContainer .card-list .card-item.row-4 {
    width: calc(50% - 1rem)
  }
}

@media (max-width:500px) {

  .cardListContainer .card-list .card-item.row-1,
  .cardListContainer .card-list .card-item.row-2,
  .cardListContainer .card-list .card-item.row-3,
  .cardListContainer .card-list .card-item.row-4 {
    width: calc(100% - .7rem)
  }

  .cardListContainer .card-list .card-item.row-1 img,
  .cardListContainer .card-list .card-item.row-2 img,
  .cardListContainer .card-list .card-item.row-3 img,
  .cardListContainer .card-list .card-item.row-4 img {
    margin-left: 1.5rem
  }

  .cardImgListContainer .card-list .card-item.row-1,
  .cardImgListContainer .card-list .card-item.row-2,
  .cardImgListContainer .card-list .card-item.row-3,
  .cardImgListContainer .card-list .card-item.row-4 {
    width: calc(100% - 1rem)
  }
}


.container,
.section_wrapper {
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.content_slider.carousel .content_slider_ul li {
  text-align: center;
  opacity: 0.3;
  padding: 5px 20px 0;
  transition: all ease-in-out 0.2s;
}

.content_slider.carousel .content_slider_ul li:hover {
  opacity: 1;
}

.one.mcb-wrap {
  width: 100%;
}

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start;
}

.mcb-column,
.mcb-wrap,
.section {
  background: no-repeat 0 0;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.mcb-wrap {
  float: left;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.mcb-wrap-inner {
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  align-self: stretch;
}

.two-third.column {
  width: 66.666%;
}

.column_column {
  display: flex;
}

.mcb-column {
  position: relative;
}

.column,
.columns {
  float: left;
  margin: 0;
}

.mcb-item-column-inner {
  width: 100%;
  word-break: break-word;
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left);
}

.one.column {
  width: 100%;
}

.content_slider.carousel {
  padding: 0 70px;
}

.content_slider {
  padding: 0 140px;
  position: relative;
}

.content_slider .content_slider_ul.slick-slider {
  opacity: 1;
  max-height: none;
}

.content_slider .content_slider_ul {
  opacity: 0;
  max-height: 300px;
  transition: opacity 0.3s ease-in-out;
  margin: 0;
  line-height: 0;
}

.slick-list,
.slick-slider {
  position: relative;
  display: block;
}

.slick-slider {
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

ul {
  list-style: none outside none;
}

ol,
ul {
  list-style: none;
}

.content_slider.carousel .content_slider_ul .slick-list {
  border-width: 0;
}

#comments .commentlist>li .photo,
.author-box .avatar-wrapper,
.content_slider .content_slider_ul .slick-list,
.edd_download_image,
.google-map,
.icon_box .icon_wrapper,
.image_frame,
.caption {
  border-color: #f8f8f8;
}

.content_slider .content_slider_ul .slick-list {
  border-width: 8px;
  border-style: solid;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.slick-slider .slick-list,
.slick-slider .slick-track {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.slick-list {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-slide {
  display: none;
  height: 100%;
  min-height: 1px;
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
  outline: 0;
}

.content_slider .content_slider_ul li {
  display: block;
  float: left;
  margin: 0 0 !important;
}

.content_slider.carousel .content_slider_ul li a {
  color: inherit;
  text-decoration: none;
}

.content_slider.carousel .content_slider_ul li img {
  margin-bottom: 20px;
  opacity: 0.8;
  position: relative;
  top: 0;
}

.content_slider.carousel ul li .title,
.content_slider.carousel ul li img,
.content_slider.flat a.button .button_icon {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.slick-slide img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.content_wrapper img,
img.scale-with-grid {
  max-width: 100%;
  height: auto;
}

.content_slider.carousel .content_slider_ul li .title {
  opacity: 0.3;
  line-height: 120%;
  line-height: normal;
}

body,
ul.timeline_items,
.icon_box a .desc,
.icon_box a:hover .desc,
.feature_list ul li a,
.list_item a,
.list_item a:hover,
.widget_recent_entries ul li a,
.flat_box a,
.flat_box a:hover,
.story_box .desc,
.content_slider.carousel ul li a .title,
.content_slider.flat.description ul li .desc,
.content_slider.flat.description ul li a .desc,
.post-nav.minimal a i {
  color: #292b32;
}

@media only screen and (max-width: 767px) {

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 700px !important;
    padding-left: 33px !important;
    padding-right: 33px !important;
  }

  .slick-slide {
    float: none !important;
  }

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 550px !important;
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    width: 100%;
    clear: both;
    margin: 0;
    width: 100%;
    clear: both;
  }

  .mobile-one.mcb-wrap {
    width: 100%;
  }

  .mobile-one.column {
    width: 100%;
  }

  .content_wrapper .mcb-column-inner {
    margin: 0 0 20px;
    height: auto !important;
  }

  .column_attr.mobile_align_center {
    text-align: center;
  }

  .content_slider {
    padding: 0 0 !important;
    margin: 0 0 50px;
  }

  .content_slider a.button {
    top: auto !important;
    bottom: -60px;
  }

  .content_slider a.slider_prev {
    left: 0 !important;
  }

  .content_slider.carousel a.button,
  .content_slider.flat a.button {
    bottom: -50px;
  }

  .content_slider.carousel .content_slider_ul li {
    opacity: 1 !important;
  }
}

.event8-radius {
  border-radius: 0 0 30px 30px;
}

h5 {
  font-size: 32px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0;
}
</style>
