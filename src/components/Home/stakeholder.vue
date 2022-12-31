<template>
  <div
    class="section mcb-section mfn-default-section mcb-section  no-margin-v equal-height-wrap close-button-left default-width show-on-scroll"
    style="">
    <div class="mcb-background-overlay">
    </div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner">
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-middle clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item one tablet-one mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix mobile_align_center" style="">
                <h2>
                  相关
                  <span class="themecolor">
                    人员
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div v-for="stakeholder in stakeholders" v-bind:key="stakeholder"
            class="column mcb-column mcb-item one-sixth tablet-one-sixth mobile-one column_our_team" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-our_team-inner">
              <div class="team team_vertical">
                <h4 class="title">
                  {{ stakeholder.work }}
                </h4>
                <div class="image_frame photo no_link scale-with-grid">
                  <div class="image_wrapper">
                    <img class="scale-with-grid" :src="stakeholder.ProPho" alt="VD8UsUAi" width="376" height="376">
                  </div>
                </div>
                <div class="desc_wrapper clearfix">
                  <h4>
                    {{ stakeholder.name }}
                  </h4>
                  <p class="subtitle">
                    {{ stakeholder.ID }}
                  </p>
                  <hr class="hr_color">
                  <div class="desc">
                    <div class="links">
                      <a v-if="stakeholder.links.twitter" target="_blank" :href="stakeholder.links.twitter"
                        class="icon_bar icon_bar_small twitter">
                        <span class="t">
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                      <a v-if="stakeholder.links.bili" target="_blank" :href="stakeholder.links.bili"
                        class="icon_bar icon_bar_small bili">
                        <span class="t">
                          <i class="fa-brands fa-bilibili"></i>
                        </span>
                      </a>
                      <a v-if="stakeholder.links.github" target="_blank" :href="stakeholder.links.twitter"
                        class="icon_bar icon_bar_small github">
                        <span class="t">
                          <i class="fa-brands fa-github"></i>
                        </span>
                      </a>
                      <a v-if="stakeholder.links.youtube" target="_blank" :href="stakeholder.links.twitter"
                        class="icon_bar icon_bar_small youtube">
                        <span class="t">
                          <i class="fa-brands fa-youtube"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
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
      stakeholders: [
        {
          name: 'misaka10843',
          work: 'Game Dev',
          ProPho: 'http://q.qlogo.cn/g?b=qq&nk=3594254539&s=0',
          ID: '@misaka10843',
          links: {
            github: 'https://github.com/misaka10843',
            bili: 'https://space.bilibili.com/384576146',
            youtube: 'https://www.youtube.com/channel/UCBexSpEFy5i5_TGfNrUm_0w',
            twitter: 'https://twitter.com/kaosu_sensei'
          }
        },
      ]
    }
  }
}
</script>

<style scoped>
.mcb-column,
.mcb-wrap,
.section {
  background: no-repeat 0 0
}

.section {
  position: relative;
  box-sizing: border-box
}

.section>.mcb-background-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0
}

.equal-height-wrap .section_wrapper {
  align-items: stretch
}

.one.mcb-wrap {
  width: 100%
}

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start
}

.mcb-wrap {
  float: left;
  position: relative;
  z-index: 1;
  box-sizing: border-box
}

.section_wrapper {
  flex-wrap: wrap
}

.container,
.section_wrapper {
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  position: relative
}

.clearfix:after,
.clearfix:before {
  overflow: hidden;
  width: 0
}

.clearfix:after,
.clearfix:before,
.container:after {
  content: "\20";
  display: block;
  height: 0;
  visibility: hidden
}

.equal-height-wrap .mcb-wrap.valign-middle .mcb-wrap-inner {
  align-content: center
}

.equal-height-wrap .mcb-wrap .mcb-wrap-inner {
  position: relative;
  float: left;
  width: 100%
}

.mcb-wrap-inner {
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  align-self: stretch
}

.one.column {
  width: 100%
}

.column_column {
  display: flex
}

.mcb-column {
  position: relative
}

.column,
.columns {
  float: left;
  margin: 0
}

.section.no-margin-v .column .mcb-column-inner,
.section.no-margin .column .mcb-column-inner {
  margin-bottom: 0
}

.mcb-item-column-inner {
  width: 100%;
  word-break: break-word
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left)
}

.one-sixth.column {
  width: 16.666%
}

h4,
h4 a,
h4 a:hover,
.sliding_box .desc_wrapper h4 {
  color: #292b32
}

h4,
.woocommerce .woocommerce-order-details__title,
.woocommerce .wc-bacs-bank-details-heading,
.woocommerce .woocommerce-customer-details h2 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 0
}

.team .image_frame {
  margin-bottom: 15px
}

.image_frame {
  border-color: #f8f8f8
}

.image_frame,
.caption {
  display: block;
  overflow: hidden;
  margin: 0;
  border-style: solid;
  border-width: 0;
  max-width: 100%;
  line-height: 0;
  box-sizing: border-box
}

#comments .commentlist>li .photo,
.author-box .avatar-wrapper,
.content_slider .content_slider_ul .slick-list,
.edd_download_image,
.google-map,
.icon_box .icon_wrapper,
.image_frame,
.caption {
  border-color: #f8f8f8
}

.icon_box .icon_wrapper:before,
.image_frame .image_wrapper,
.caption img {
  border-color: #e2e2e2
}

.image_frame .image_wrapper {
  position: relative;
  overflow: hidden
}

.image_frame .image_wrapper,
.caption img {
  box-sizing: border-box
}

.if-zoom .image_frame .image_wrapper img {
  max-width: 100.1%
}

.image_frame .image_wrapper img:not(.ls-l) {
  position: relative;
  top: 0;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1)
}

.image_frame .image_wrapper .image_links,
.image_frame .image_wrapper .mask:after,
.image_frame .image_wrapper img {
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out
}

.content_wrapper img,
img.scale-with-grid {
  max-width: 100%;
  height: auto
}

.team .desc_wrapper h4 {
  margin-bottom: 3px
}

.team .desc_wrapper hr {
  display: inline-block;
  width: 40%
}

.team .desc_wrapper .desc {
  margin-bottom: 15px
}

.team .desc_wrapper .links {
  line-height: 0
}

a.icon_bar {
  display: inline-block;
  overflow: hidden;
  text-align: center;
  margin: 0 2px 2px 0;
  border-width: 1px;
  border-style: solid;
  position: relative;
  -webkit-box-shadow: inset 0 0 5px 0 rgb(0 0 0 / 8%);
  border-width: 0;
  background: #f0f0f0 none;
  -webkit-box-shadow: inset 0 0 0 0 transparent;
  box-shadow: inset 0 0 0 0 transparent
}

#edd_checkout_cart .edd_cart_header_row th,
.chart_box .chart .icon,
.chart_box .chart .num,
.counter .desc_wrapper .number-wrapper,
.quick_fact .number-wrapper,
a.icon_bar {
  color: #444
}

#comments>:first-child,
#edd_checkout_cart td,
#edd_checkout_cart th,
.accordion .question,
.accordion .question.active .title,
.accordion .question .title:before,
.article_box .desc_wrapper p,
.chart_box:before,
.column_opening_hours .mcb-item-opening_hours-inner,
.column_pricing_item .mcb-item-pricing_item-inner,
.fixed-nav .desc .date,
.format-link .post-title .icon-link,
.header-stack #Top_bar .logo,
.how_it_works .image,
.icon_box.has_border:after,
.idea_box,
.Latest_news ul li .desc_footer,
.Latest_news ul li .photo,
.list_item .circle,
.mcb-sidebar,
.offer_thumb.bottom .slider_pagination a,
.offer_thumb .slider_pagination,
.offer_thumb .slider_pagination a,
.opening_hours .opening_hours_wrapper li,
.portfolio_group.list .portfolio-item,
.portfolio_group .portfolio-item .desc .details-wrapper,
.post-footer .post-links,
.post-header .title_wrapper,
.promo_box.has_border:after,
.Recent_posts ul li .desc h6,
.section-post-related .section-related-adjustment,
.share_wrapper,
#Filters .filters_wrapper ul,
.faq .question,
.team_list .bq_wrapper,
.widget:after,
.widget_recent_entries ul li a,
.woocommerce .product .related.products,
.woocommerce .product .upsells.products,
.woocommerce .product div.entry-summary h1.product_title:after,
.woocommerce .quantity input.qty,
.woocommerce .widget_best_sellers li,
.woocommerce .widget_featured_products li,
.woocommerce .widget_layered_nav li,
.woocommerce .widget_onsale li,
.woocommerce .widget_products li,
.woocommerce .widget_random_products li,
.woocommerce .widget_recent_products li,
.woocommerce .widget_recent_reviews li,
.woocommerce .widget_recently_viewed_products li,
.woocommerce .widget_shopping_cart ul.product_list_widget li,
.woocommerce .widget_top_rated_products li,
a.content_link,
a.icon_bar,
dl>dd,
dl>dt,
input[type=date],
input[type=email],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=url],
select,
table td,
table th,
textarea {
  border-color: rgba(0, 0, 0, .08)
}

a.icon_bar_small,
a.icon_bar_small span {
  width: 43px;
  height: 43px;
  line-height: 43px;
  font-size: 15px
}

.team .desc_wrapper .links a.icon_bar span {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}

a.icon_bar span.t {
  opacity: 1;
  position: relative
}

a.icon_bar span {
  -moz-transition: -moz-transform .3s;
  display: block;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  transition: transform .3s
}

@media only screen and (max-width:767px) {

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 700px !important;
    padding-left: 33px !important;
    padding-right: 33px !important
  }

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 550px !important
  }

  .equal-height-wrap .mcb-wrap {
    height: auto !important
  }

  .mobile-one.mcb-wrap {
    width: 100%
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    width: 100%;
    clear: both;
    margin: 0;
    width: 100%;
    clear: both
  }

  .equal-height-wrap .mcb-wrap .mcb-wrap-inner {
    top: 0 !important;
    -webkit-transform: none !important;
    -moz-transform: none !important;
    -ms-transform: none !important;
    -o-transform: none !important;
    transform: none !important
  }

  .mobile-one.column {
    width: 100%
  }

  .content_wrapper .mcb-column-inner {
    margin: 0 0 20px;
    height: auto !important
  }

  .column_attr.mobile_align_center {
    text-align: center
  }

  .image_frame {
    margin-top: 0 !important
  }
}
</style>