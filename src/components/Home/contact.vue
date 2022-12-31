<template>
  <div class="section mcb-section mfn-default-section mcb-section close-button-left default-width show-on-scroll"
    style="">
    <div class="mcb-background-overlay">
    </div>
    <div class="section_wrapper mcb-section-inner mcb-section-inner">
      <div class="wrap mcb-wrap mcb-wrap one tablet-one mobile-one valign-top bg-contain clearfix"
        data-desktop-col="one" data-tablet-col="tablet-one" data-mobile-col="mobile-one"
        style="padding:60px 40px 20px;background-color:#292b32;background-image:url(/image/event8-wrap-bg5.svg);background-repeat:no-repeat;background-position:center bottom;border-radius: 30px;">
        <div class="mcb-wrap-inner mcb-wrap-inner">
          <div class="column mcb-column mcb-item three-fifth tablet-three-fifth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix mobile_align_center" style="padding:30px 4% 0;">
                <h4 class="themecolor">
                  遇到问题?
                </h4>
                <h2>
                  <span style="color: #fff;">
                    请附上详细信息联系我们!
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="column mcb-column mcb-item two-fifth tablet-two-fifth mobile-one column_column" style="">
            <div class="mcb-column-inner mcb-column-inner mcb-item-column-inner">
              <div class="column_attr mfn-inline-editor clearfix mobile_align_center" style="padding:30px 4% 0;">
                <h3>
                  <a href="mailto:contact@sakurakoi.top">
                    <span style="color: #fff;">
                      contact@sakurakoi.top
                    </span>
                  </a>
                </h3>
                <p>
                </p>
                <hr class="no_line" style="margin: 0 auto 15px auto">
                <p>
                </p>
                <p>
                  <span style="color: #fff;">
                    收到邮件后我们将在3个工作日内回复（时间可能有浮动）
                  </span>
                </p>
                <p>
                  <span style="color: #fff;">
                    请注意辨别回复邮件的邮箱是否为我们的工作邮箱
                  </span>
                </p>
                <p>
                </p>
                <hr class="no_line" style="margin: 0 auto 15px auto">
                <a class="button  has-icon button_right button_size_2 button_theme" href="/license">
                  <span class="button_icon">
                    <i class="fa fa-long-arrow-alt-right" aria-hidden="true">
                    </i>
                  </span>
                  <span class="button_label">
                    联系方式
                  </span>
                </a>
                <p>
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
export default {

}
</script>

<style scoped>
.mcb-column,
.mcb-wrap,
.section {
  background: no-repeat 0 0;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-repeat: no-repeat
}

.section {
  position: relative;
  box-sizing: border-box;
  margin-top: 30px;
}

.section>.mcb-background-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0
}

.mcb-wrap,
.mcb-wrap-inner,
.section_wrapper {
  display: flex;
  align-items: flex-start;
  display: flex;
  align-items: flex-start
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

.column_attr.bg-contain,
.mcb-section.bg-contain,
.mcb-wrap.bg-contain {
  background-size: contain
}

.one.mcb-wrap {
  width: 100%
}

.mcb-wrap {
  float: left;
  position: relative;
  z-index: 1;
  box-sizing: border-box
}

.mcb-wrap-inner {
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  align-self: stretch
}

.three-fifth.column {
  width: 60%
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

.mcb-item-column-inner {
  width: 100%;
  word-break: break-word
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left)
}

.two-fifth.column {
  width: 40%
}

body .button {
  color: #fff;
  background-color: #6cf;
  border-color: #6cf
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
    max-width: 550px !important;
    max-width: 700px !important;
    padding-left: 33px !important;
    padding-right: 33px !important
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    width: 100%;
    clear: both;
    width: 100%;
    clear: both;
    margin: 0;
    width: 100%;
    clear: both
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