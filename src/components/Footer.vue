<template>
  <footer id="Footer" class="clearfix" role="contentinfo">
    <div class="widgets_wrapper center">
      <div class="container">
        <div class="column mobile-one tablet-two-fifth two-fifth">
          <div class="mcb-column-inner">
            <aside id="block-9" class="widget widget_block widget_media_image">
              <figure class="block-image size-large is-resized">
                <img src="https://avatars.githubusercontent.com/u/78027509?s=200&v=4" alt="" width="73" height="73" />
              </figure>
            </aside>
          </div>
        </div>
        <div class="column mobile-one tablet-two-fifth two-fifth">
          <div class="mcb-column-inner">
            <aside id="block-12" class="widget widget_block">
              <div class="is-layout-flex container-5 block-columns">
                <div class="is-layout-flow block-column" style="flex-basis: 50%">
                  <div class="is-layout-flow block-group">
                    <div class="block-group__inner-container">
                      <div style="height: 35px" aria-hidden="true" class="block-spacer"></div>
                      <p>
                        <strong> Related Links </strong>
                      </p>
                      <ul>
                        <li v-for="RelatedLink in RelatedLinks" v-bind:key="RelatedLink">
                          <a :href="RelatedLink.url" target="_blank">
                            {{ RelatedLink.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="is-layout-flow block-column" style="flex-basis: 50%">
                  <div class="is-layout-flow block-group">
                    <div class="block-group__inner-container">
                      <div style="height: 35px" aria-hidden="true" class="block-spacer"></div>
                      <p>
                        <strong> Site links </strong>
                      </p>
                      <ul>
                        <li v-for="Sitelink in Sitelinks" v-bind:key="Sitelink">
                          <a :href="Sitelink.url" target="_blank">
                            {{ Sitelink.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_copy">
      <div class="container">
        <div class="column one mobile-one">
          <div class="mcb-column-inner">
            <div class="copyright">
              <div class="copyright">
                © 2021 - 2022
                <a href="https://docs.sakurakoi.top" target="_blank">
                  HoubunFantasiaProductionTeam
                </a>
                . All rights reserved.
                <br />
                Supported by
                <a href="https://www.sakurakoi.top" target="_blank">
                  Sakura Society
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      Sitelinks: [
        {
          name: "kancolle-ohuraiN",
          url: "https://colle.sakurakoi.top/",
        },
        {
          name: "SakuraSnow Forum",
          url: "https://forum.sakurakoi.top/",
        },
        {
          name: "misaka' home",
          url: "https://misaka.sakurakoi.top/",
        },
      ],
      RelatedLinks: [
        {
          name: "Docs",
          url: "https://docs.sakurakoi.top",
        },
      ],
    };
  },
};
</script>

<style scoped>
#Footer,
#Footer .widget_recent_entries ul li a {
  color: #292b32;
}

#Footer {
  background-color: #fff;
}

#Footer {
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
}

#Footer .widgets_wrapper {
  padding: 60px 0;
}

#Footer .widgets_wrapper {
  padding: 15px 0;
}

.container,
.section_wrapper {
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.two-fifth.column {
  width: 40%;
}

.column,
.columns {
  float: left;
  margin: 0;
}

#Footer .widgets_wrapper .mcb-column-inner {
  margin-bottom: 0;
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left);
}

.widget {
  margin: 30px 0;
  position: relative;
}

.block-image img {
  height: auto;
}

.block-image.has-custom-border img,
.block-image img {
  box-sizing: border-box;
}

.block-image img {
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
}

.widget {
  margin: 30px 0;
  position: relative;
}

.two-fifth.column {
  width: 40%;
}

.column,
.columns {
  float: left;
  margin: 0;
}

#Footer .widgets_wrapper .mcb-column-inner {
  margin-bottom: 0;
}

.mcb-column-inner {
  position: relative;
  margin: var(--mfn-column-gap-top) var(--mfn-column-gap-right) var(--mfn-column-gap-bottom) var(--mfn-column-gap-left);
}

.widget {
  margin: 30px 0;
  position: relative;
}

.block-columns.container-5 {
  flex-wrap: nowrap;
}

body .is-layout-flex {
  flex-wrap: wrap;
  align-items: center;
}

body .is-layout-flex {
  display: flex;
}

@media (min-width: 782px) {
  .block-columns {
    flex-wrap: nowrap !important;
  }

  .block-columns:not(.is-not-stacked-on-mobile)>.block-column[style*="flex-basis"] {
    flex-grow: 0;
  }
}

.block-columns {
  display: flex;
  margin-bottom: 1.75em;
  box-sizing: border-box;
  flex-wrap: wrap !important;
  align-items: normal !important;
}

body .is-layout-flex>* {
  margin: 0;
}

.block-column {
  flex-grow: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;
}

.block-group {
  box-sizing: border-box;
}

.block-spacer {
  clear: both;
}

#Footer a:not(.button):not(.icon_bar) {
  color: #292b32;
}

@media only screen and (max-width: 767px) {

  #Footer .footer_copy,
  #Footer .widgets_wrapper.center {
    text-align: center;
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

  .mobile-one.column {
    width: 100%;
  }

  #Footer .footer_copy,
  #Footer .widgets_wrapper.center {
    text-align: center;
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

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 550px !important;
  }

  .section_wrapper,
  .container,
  .four.columns .widget-area {
    max-width: 700px !important;
    padding-left: 33px !important;
    padding-right: 33px !important;
  }

  .container .column,
  .section_wrapper .column,
  .section_wrapper .mcb-wrap {
    margin: 0;
    width: 100%;
    clear: both;
  }

  #Footer .footer_copy .copyright {
    float: none;
    margin: 0 0 10px;
  }
}
</style>
