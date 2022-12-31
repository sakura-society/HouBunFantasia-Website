<template>
  <div
    class="section mcb-section mfn-default-section mcb-section  equal-height close-button-left default-width show-on-scroll bg-contain"
    style="padding-top:100px;padding-bottom:60px;background-image:url(/image/event8-section-bg2.svg);background-repeat:no-repeat;background-position:center bottom;background-attachment: ;background-size:">
    <div class="mcb-background-overlay">
    </div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner">
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item one tablet-one mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <h2>
                  P L A Y
                  <br>
                  <span class="themecolor">
                    Houbun Fantasia
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div id="countToWrapper" class="column mcb-column mcb-item one tablet-one mobile-one column_divider" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-divider-inner">
              <hr class="no_line" style="margin: 0 auto 30px auto">
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <p>
                </p>
                <div class="google_font"
                  style="font-family:'Inter',Arial,Tahoma,sans-serif;font-size:55px;line-height:55px;font-weight:700;letter-spacing:0px;color:#348cff;">
                  <span class="counter-inline animate-math">
                    <span class="number">
                      <countTo ref="countTo1" :startVal='0' :endVal='NpcNum' :duration=4000></countTo>
                    </span>
                  </span>
                </div>
                <p>
                </p>
                <p>
                  位原作角色
                </p>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <p>
                </p>
                <div class="google_font"
                  style="font-family:'Inter',Arial,Tahoma,sans-serif;font-size:55px;line-height:55px;font-weight:700;letter-spacing:0px;color:#348cff;">
                  <span class="counter-inline animate-math">
                    <span class="number">
                      <countTo ref="countTo2" :startVal='0' :endVal='ChNum' :duration=4000></countTo>
                    </span>
                  </span>
                </div>
                <p>
                </p>
                <p>
                  个剧情章节
                </p>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <p>
                </p>
                <div class="google_font"
                  style="font-family:'Inter',Arial,Tahoma,sans-serif;font-size:55px;line-height:55px;font-weight:700;letter-spacing:0px;color:#348cff;">
                  <span class="counter-inline animate-math">
                    <span class="number">
                      <countTo ref="countTo3" :startVal='0' :endVal='FoodNum' :duration=4000></countTo>
                    </span>
                  </span>
                </div>
                <p>
                </p>
                <p>
                  种各类食材
                </p>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <p>
                </p>
                <div class="google_font"
                  style="font-family:'Inter',Arial,Tahoma,sans-serif;font-size:55px;line-height:55px;font-weight:700;letter-spacing:0px;color:#348cff;">
                  <span class="counter-inline animate-math">
                    <span class="number">
                      <CountTo ref="countTo4" :startVal="0" :endVal="WorkNum" :duration="3000" :autoplay=false>
                      </CountTo>
                    </span>
                  </span>
                </div>
                <p>
                </p>
                <p>
                  种不同的打工系统
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CountTo } from 'vue3-count-to';
export default {
  components: {
    CountTo
  },
  mounted () {

    // 创建实例  循环调用 所有 dom
    const io = new IntersectionObserver((entries) => {
      // entries 实际上是dom
      // 将其转为数组，遍历
      Array.from(entries).forEach((item) => {
        if (item.intersectionRatio > 0.1) {
          this.$refs.countTo1.start();
          this.$refs.countTo2.start();
          this.$refs.countTo3.start();
          this.$refs.countTo4.start();
        }
      })
    })
    // 获取所有 countToWrapper 标签 开始观察
    const countToWrapper = document.getElementById('countToWrapper')
    io.observe(countToWrapper)
  },
  data () {
    return {
      //工作系统个数
      WorkNum: 10,
      //食材个数
      FoodNum: 10,
      //原作角色个数
      NpcNum: 10,
      //剧章数量
      ChNum: 1,
    }
  }
}
</script>

<style scoped>
.one.mcb-wrap {
  width: 100%
}

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start
}

.mcb-column,
.mcb-wrap,
.section {
  background: no-repeat 0 0;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-repeat: no-repeat
}

.mcb-wrap {
  float: left;
  position: relative;
  z-index: 1;
  box-sizing: border-box
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

.equal-height .mcb-wrap .mcb-wrap-inner {
  align-items: stretch
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

.equal-height .mcb-wrap .mcb-column-inner {
  height: calc(100% - var(--mfn-column-gap-bottom))
}

.mcb-item-column-inner {
  width: 100%;
  word-break: break-word
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left)
}

.equal-height .column .column_attr {
  height: 100%;
  box-sizing: border-box
}

.column_attr.align_center {
  text-align: center
}

.column.column_divider .mcb-item-divider-inner {
  margin-bottom: 0 !important;
  height: auto !important
}

.column_divider .hr_dots,
.column_divider .hr_wide,
.column_divider .hr_zigzag,
.column_divider hr {
  margin-bottom: 0
}

.four.columns,
.one-fourth.column {
  width: 25%
}

.google_font {
  margin-bottom: 15px
}

.section>.mcb-background-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.column_attr.bg-contain,
.mcb-section.bg-contain,
.mcb-wrap.bg-contain {
  background-size: contain;
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

@media only screen and (max-width: 959px) {
  .section {
    background-attachment: scroll !important;
  }
}

@media only screen and (max-width: 767px) {

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

  .mobile-one.mcb-wrap {
    width: 100%;
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    margin: 0;
    width: 100%;
    clear: both;
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

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    margin: 0;
    width: 100%;
    clear: both;
  }

  .mobile-one.column {
    width: 100%;
  }

  .content_wrapper .mcb-column-inner {
    margin: 0 0 20px;
    height: auto !important;
  }
}
</style>