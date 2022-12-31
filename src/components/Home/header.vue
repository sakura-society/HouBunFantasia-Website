<template>
  <div id="title" class="slide header">
    <img class="logo" src="https://kirara.sakurakoi.top/images/logo.svg" alt="" width="80%" height="auto">
    <a id="slider-1-slide-1-layer-0" class="rs-layer rev-btn rs-pxl-5" href="https://fantia.jp/fanclubs/24531"
      target="_blank">
      <span
        style="margin-right: 8px; text-align: left; line-height: 13px; letter-spacing: 0px; font-weight: 700; font-size: 13px;"
        data-stylerecorder="true">
        官方主页
      </span>
      <i class="fa fa-long-arrow-right" data-stylerecorder="true"
        style="text-align: left; letter-spacing: 0px; font-weight: 400;">
      </i>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slide {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  box-sizing: border-box;
  transform-style: inherit;
}

.title {
  width: 50%;
  padding: 5%;
  border-radius: 5px;
  background: rgba(240, 230, 220, .7);
}


.header {
  text-align: center;
  font-size: 175%;
  color: #fff;
}

#title {
  background-image: url("https://s2.loli.net/2022/12/29/FvL9gaBXmzQtMl1.gif");
  position: relative;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  background-position: center center;
}

#title h1 {
  transform: translateZ(.25px) scale(.75);
  transform-origin: 50% 100%;

}



@media only screen and (max-width:767px) {
  .rev-btn {
    z-index: 10;
    background-color: rgb(102, 204, 255);
    font-family: Inter;
    height: auto;
    width: auto;
    color: rgb(255, 255, 255);
    text-decoration: none;
    white-space: nowrap;
    min-height: 0px;
    min-width: 0px;
    max-height: none;
    max-width: none;
    text-align: left;
    line-height: 13px;
    letter-spacing: 0px;
    font-weight: 700;
    font-size: 13px;
    padding: 12px 26px;
    border-radius: 30px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
    border-width: 0px;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .logo {

    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: auto;
    transform: translate(-50%, -50%);

  }

  .slide {
    min-height: 80vh !important;
  }

}

@media only screen and (min-width:767px) {
  .rev-btn {
    z-index: 10;
    background-color: rgb(102, 204, 255);
    font-family: Inter;
    height: auto;
    width: auto;
    color: rgb(255, 255, 255);
    text-decoration: none;
    white-space: nowrap;
    min-height: 0px;
    min-width: 0px;
    max-height: none;
    max-width: none;
    text-align: left;
    line-height: 13px;
    letter-spacing: 0px;
    font-weight: 700;
    font-size: 13px;
    padding: 12px 26px;
    border-radius: 30px;
    transform-origin: 50% 50%;
    opacity: 1;
    transform: translate(0px, 0px);
    visibility: visible;
    border-width: 0px;
    float: right;
    top: 80%;
    left: 80%;
    position: absolute;
  }

  .logo {

    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 50%;
    transform: translate(-50%, -50%);

  }
}
</style>