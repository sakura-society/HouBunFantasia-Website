<template>
  <h2 style="display: flex; justify-content: center; align-items: center;margin: 20px auto;font-size: 1.5rem;">
    <span class="slogan__highlight" style="visibility: visible; animation-name: fadeIn;">
      加入我们
    </span>
  </h2>
  <table class="rwd-table col col--auto">
    <tr>
      <th>职位</th>
      <th>简介</th>
      <th>类别</th>
      <th>数量</th>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>游戏开发</td>
      <td data-th="简介">负责游戏系统功能、剧情、玩法框架的设计及优化</td>
      <td data-th="类别">程序</td>
      <td data-th="数量">2-5</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>角色设计</td>
      <td data-th="简介">游戏角色的贴图制作，并能够制作与设计符合漫画角色中的待机、移动、攻击等动作</td>
      <td data-th="类别">美术</td>
      <td data-th="数量">2-8</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>游戏场景</td>
      <td data-th="简介">游戏场景的制作，能够尽量用像素贴图还原漫画中的场景</td>
      <td data-th="类别">美术</td>
      <td data-th="数量">4-6</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>系统策划</td>
      <td data-th="简介">根据游戏项目的系统架构编写系统及玩法功能文档</td>
      <td data-th="类别">策划</td>
      <td data-th="数量">1-2</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>剧情任务策划</td>
      <td data-th="简介">可以参考漫画剧情线设计规划制作，根据剧情策划提供的内容，细化任务流程，进行任务的设计和制作</td>
      <td data-th="类别">策划</td>
      <td data-th="数量">1-2</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior_Y">暂</span>本地化制作</td>
      <td data-th="简介">负责游戏内文本内容的本地化工作（包括翻译及校对支持）</td>
      <td data-th="类别">运营</td>
      <td data-th="数量">2-4</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>音乐制作</td>
      <td data-th="简介">负责游戏的背景音乐制作</td>
      <td data-th="类别">美术</td>
      <td data-th="数量">2-4</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior">缺</span>总策划</td>
      <td data-th="简介">负责所有的策划制作与审核，需要比较了解芳文社的大部分漫画</td>
      <td data-th="类别">策划</td>
      <td data-th="数量">1-2</td>
    </tr>
    <tr>
      <td data-th="职位"><span class="prior_G">饱和</span>总程序</td>
      <td data-th="简介">负责所有的程序制作与审核，需要比较了解Unity的使用</td>
      <td data-th="类别">程序</td>
      <td data-th="数量">1-2</td>
    </tr>
  </table>
  <p class="description">职位申请审核并不严格，可以放心申请！qwq</p>
  <p class="description">一人可申请多职，但是需要很好的安排职位工作哦！qwq</p>
  <p class="description">所有职位均为兼职，在有时间时上工即可！</p>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
  line-height: inherit !important;
}

.description {
  font-size: .875rem;
  font-style: italic;
  line-height: 1.25rem;
  text-align: center;
  margin: 20px auto;
}

.video {
  box-shadow: 0 2px 6px var(--ifm-background-surface-color-dark);
  border-radius: 0.375rem;
}

.description {
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

span.slogan__highlight {
  background: #3392ea;
  border-radius: 0.375rem;
  color: #fff;
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

.prior {
  height: 20px;
  position: relative;
  top: -1px;
  display: inline-block;
  margin-right: 4px;
  padding: 0 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  background: #ff6b6b;
}

.prior_Y {
  height: 20px;
  position: relative;
  top: -1px;
  display: inline-block;
  margin-right: 4px;
  padding: 0 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  background: #fc9b0b;
}

.prior_G {
  height: 20px;
  position: relative;
  top: -1px;
  display: inline-block;
  margin-right: 4px;
  padding: 0 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  background: #65d47d;
}

.rwd-table {
  margin: 1em 0;
  min-width: 300px;
  display: table;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.rwd-table th {
  display: none;
  border: none;
}

.rwd-table td {
  display: block;
  border: none;
}

.rwd-table td:first-child {
  padding-top: 0.5em;
}

.rwd-table td:last-child {
  padding-bottom: 0.5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}

@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

@media (min-width: 480px) {

  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }

  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }

  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}

.rwd-table {
  margin: 20px auto;
  background: #34495e;
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #46637f;
}

.rwd-table th,
.rwd-table td {
  margin: 0.5em 1em;
}

@media (min-width: 480px) {

  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}

.rwd-table th,
.rwd-table td:before {
  color: var(--ifm-color-primary-lightest);
}
</style>