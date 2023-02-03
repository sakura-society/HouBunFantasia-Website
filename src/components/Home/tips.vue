<template>
  <div
    class="section mcb-section mfn-default-section mcb-section event8-radius close-button-left default-width show-on-scroll"
    style="padding-top:100px;padding-bottom:210px;background-color:#292b32">
    <div class="mcb-background-overlay">
    </div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner">
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item one tablet-one mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_center" style="">
                <h5>
                  <span style="color: #0089f7;">
                    ●
                  </span>
                  Tips
                  <span style="color: #fff;">
                    <div class="quotes_box_and_tips">
                      <div class="single_tips_box visible ">
                        <h3>
                        </h3>
                        <p>
                        </p>
                        <h3>
                          <span style="color:#FFF;">
                            <!--todo 添加随机输出条目，但是还要考虑i18n问题-->
                            <div v-html="returnString"></div>
                          </span>
                        </h3>
                        <p>
                        </p>
                      </div>
                      <div class="clear">
                      </div>
                    </div>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item one-second tablet-one-second mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix mobile_align_center" style="">
                <h2>
                  <span style="color: #fff;">
                    EVENT
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-second tablet-one-second mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix align_right mobile_align_center" style="">
                <p>
                  <a class="button  has-icon button_right button_size_2" href="/download">
                    <span class="button_icon">
                      <i class="fas fa-long-arrow-alt-right" aria-hidden="true">
                      </i>
                    </span>
                    <span class="button_label">
                      PLAY
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top clearfix" data-desktop-col="one"
        data-tablet-col="tablet-one" data-mobile-col="mobile-one" style="">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_qwq" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-qwq-inner">
              <div class="qwq">
                <div class="qwq_bg" style="background-color:#494949;border-color:;border-width:;">
                  <div class="qwq_wrapper" style="padding:50px 30px 35px;">
                    <img class="scale-with-grid" src="/image/HomeEVENT/2.png" alt="">
                    <hr class="no_line" style="margin: 0 auto 40px auto">
                    <p class="big">
                      还原原作
                    </p>
                    <p>
                      致力于还原原作中的剧情和场景！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_qwq" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-qwq-inner">
              <div class="qwq">
                <div class="qwq_bg" style="background-color:#ffcb62;border-color:;border-width:;">
                  <div class="qwq_wrapper" style="padding:50px 30px 35px;">
                    <img class="scale-with-grid" src="/image/HomeEVENT/1.png" alt="">
                    <hr class="no_line" style="margin: 0 auto 40px auto">
                    <p class="big">
                      <span style="color:#300843;">
                        烹饪/露营
                      </span>
                    </p>
                    <p>
                      <span style="color:#300843;">
                        为了更好的还原摇曳露营，
                        <br>
                        我们添加了烹饪系统与露营系统！
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_qwq" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-qwq-inner">
              <div class="qwq">
                <div class="qwq_bg" style="background-color:#0089f7;border-color:;border-width:;">
                  <div class="qwq_wrapper" style="padding:50px 30px 35px;">
                    <img class="scale-with-grid" src="/image/HomeEVENT/3.png" alt="">
                    <hr class="no_line" style="margin: 0 auto 40px auto">
                    <p class="big">
                      打工吧！xx大人！
                    </p>
                    <p>
                      为了还原点兔及其他原作中的打工，
                      <br>
                      我们专门设计了一套特殊的打工系统
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one-fourth tablet-one-fourth mobile-one column_qwq" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-qwq-inner">
              <div class="qwq">
                <div class="qwq_bg" style="background-color:#ff6060;border-color:;border-width:;">
                  <div class="qwq_wrapper" style="padding:50px 30px 35px;">
                    <img class="scale-with-grid" src="/image/HomeEVENT/4.png" alt="">
                    <hr class="no_line" style="margin: 0 auto 40px auto">
                    <p class="big">
                      邀约
                    </p>
                    <p>
                      可以尽情的与原作角色进行约会
                      <br>
                      贴，都可以贴！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item one tablet-one mobile-one column_divider" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-divider-inner">
              <hr class="no_line" style="margin: 0 auto 60px auto">
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
      tipData: [
        {
          cn: "<p>注意！有饱腹度设定哦，在饱腹度低于20%时吃下的料理效果会变成1.5倍，在饱腹度接近满值时吃下的料理只会有0.5倍的效果qwq</p>"
        },
        {
          cn: "<p>这个游戏其实连主策划都没(在2023.1.27时都只有程序一人www)</p>"
        },
        {
          cn: "<p>严重缺人中！</p>"
        },
        {
          cn: "<p>这个游戏在前期受到了<a style=\"color: #348cff\" target=\"_blank\" href=\"https://space.bilibili.com/1585955812\">芳文观星台</a>的很多帮助，请多多支持ta们！</p>"
        },
      ],
      returnString: "<p>严重缺人中！</p>"
    }
  },

  created () {
    this.returnString = this.tipData[Math.round(Math.random() * this.tipData.length)].cn
  }

}
</script>

<style scoped>
.quotes_box_and_tips h3,
.quotes_box_and_tips .signature,
.quotes_box_and_tips .signature span i {
  color: #FFF !important
}

.quotes_box_and_tips h3 {
  color: #fff;
  font-size: 22px;
  padding-bottom: 10px
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

.mcb-column,
.mcb-wrap,
.section {
  background: no-repeat 0 0;
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

.mcb-wrap-inner {
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  align-self: stretch;
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

.mcb-item-column-inner {
  width: 100%;
  word-break: break-word
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left)
}

.column_attr.align_center {
  text-align: center
}

.quotes_box_and_tips {
  background: #292b32 no-repeat left bottom !important;
  background-position: 20px bottom;
  background-color: #2484c6;
  margin: 10px 0;
  padding: 15px 0;
  width: 100%;
  color: #eee;
  font-size: 14px;
  clear: both
}

.quotes_box_and_tips .single_tips_box,
.quotes_box_and_tips .single_quotes_box {
  width: 100%;
  float: left;
  padding: 0 1.49%
}

.quotes_box_and_tips .clear {
  clear: both
}

.clear {
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0
}

.clear,
.clearfix:after {
  clear: both
}

.event8-radius {
  border-radius: 0 0 30px 30px
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

.one-second.column {
  width: 50%
}

.button.has-icon {
  white-space: nowrap
}

.button_right .button_icon {
  float: right
}

.button .button_icon {
  float: left
}

.button-custom .button.has-icon .button_label {
  padding: 0;
  margin-left: 10px
}

.button-custom .button .button_label {
  padding: 0
}

.button_right.has-icon .button_label {
  margin: 0 20px 0 0
}

.button.has-icon .button_label {
  margin-left: 20px;
  white-space: normal
}

.column_attr.align_right {
  text-align: right
}

.four.columns,
.one-fourth.column {
  width: 25%
}

.column,
.columns {
  float: left;
  margin: 0
}

.qwq,
.qwq_bg {
  height: 100%
}

.qwq,
.qwq a,
.qwq a:hover,
.qwq h1 a,
.qwq h2 a,
.qwq h3 a,
.qwq h4 a,
.qwq h5 a,
.qwq h6 a {
  color: #fff
}

.qwq {
  text-align: center;
  border-color: transparent
}

.qwq .qwq_bg {
  -webkit-transition: all .4s ease-in-out;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  box-sizing: border-box;
  border: 2px solid transparent
}

.qwq .qwq_wrapper {
  -webkit-transition: all .4s ease-in-out;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  text-decoration: none;
  padding: 40px 30px
}

.content_wrapper img,
img.scale-with-grid {
  max-width: 100%;
  height: auto
}

hr.no_line {
  background: none;
  color: transparent
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

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    width: 100%;
    clear: both;
    margin: 0;
  }

  .mobile-one.mcb-wrap {
    width: 100%
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
}
</style>