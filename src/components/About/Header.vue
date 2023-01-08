<template>
  <div
    class="top-box section mcb-section mfn-default-section mcb-section-107642113 event8-radius close-button-left default-width show-on-scroll bg-contain">
    <div class="mcb-background-overlay">
    </div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner-107642113">
      <div class="wrap mcb-wrap mcb-wrap-c0572276d one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner-c0572276d">
          <div class="column mcb-column mcb-item-62aebee80 one tablet-one mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner-62aebee80 mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <h1>
                  <span class="themecolor">关于</span>我们
                </h1>
                <p>
                </p>
                <hr class="no_line" style="margin: 0 auto 15px auto">
                <p>
                </p>
                <p>
                  <span style="color: #fff;">
                    本游戏为日本公司<a href="https://houbunsha.co.jp/" style="color:#77b6ff">芳文社／ほうぶんしゃ</a>旗下的
                    <br>
                    <a href="http://www.dokidokivisual.com/"><span class="kiraracolor">まんがタイム<span class="KRcolor"
                          data-text="KR">KR</span>コミックス</span></a>系列的同人游戏
                    <br>
                    本游戏不属于芳文社以及旗下产品
                    <br>
                    <span class="themecolor">
                      本游戏的资源未特殊声明均为芳文狂想曲制作团队版权所有
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
.column_attr.bg-contain,
.mcb-section.bg-contain,
.mcb-wrap.bg-contain {
  background-size: contain;
}

.top-box {
  padding-top: 60px;
  background-color: #292b31;
  background-image: url("/public/image/event8-section-bg1.svg");
  background-repeat: no-repeat;
  background-position: center top;
}

p {
  line-height: 30px;
}

.kiraracolor {
  text-shadow: 1px 1px 0px #ff0090,
    2px 2px 0px #ff0090,
    3px 3px 0px #ff0090;
  color: white;
  font-weight: 700;
  font-size: 18px;
}

.KRcolor {
  text-shadow: none !important;
  color: yellow;
  /* 兼容Webkit(Chrome/Safari)内核浏览器的写法 */
  -webkit-text-stroke: 2px rgb(74, 101, 255);
}

.KRcolor::before {
  /* attr()是用来获取被选中元素的某属性值,并且在样式文件中使用 */
  content: attr(data-text);
  position: absolute;
  /* 实现元素外描边的关键 */
  -webkit-text-stroke: 0;
  /* 文本颜色 */
  color: yellow;
}

.event8-radius {
  border-radius: 0 0 30px 30px;
}

.mcb-column,
.mcb-wrap,
.section {
  background-position: 0 0;
  background-repeat: no-repeat;
}

.section {
  position: relative;
  box-sizing: border-box;
}

@media only screen and (min-width: 1240px) {

  .section_wrapper,
  .container {
    max-width: 1290px;
  }
}

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start;
}

.section_wrapper {
  flex-wrap: wrap;
}

.container,
.section_wrapper {
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  position: relative;
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

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start;
}

.one.column {
  width: 100%;
}

.column_column {
  display: flex;
}

.mcb-column {
  position: relative;
}

.mcb-column,
.mcb-wrap,
.section {
  background-position: 0 0;
  background-repeat: no-repeat;
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

.column_attr.align_center {
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .top-box {
    padding-top: 100px;
  }

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 700px !important;
    padding-left: 33px !important;
    padding-right: 33px !important;
  }

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 550px !important;
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
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

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    margin: 0;
    width: 100%;
    clear: both;
  }

  .content_wrapper .mcb-column-inner {
    margin: 0 0 20px;
    height: auto !important;
  }
}
</style>