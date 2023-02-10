<template>
  <h2 style="display: flex; justify-content: center; align-items: center;margin: 20px auto;font-size: 1.5rem;">
    <span class="slogan__highlight" style="visibility: visible; animation-name: fadeIn;">
      联系我们
    </span>
  </h2>
  <table class="rwd-table col col--auto">
    <tr>
      <th>渠道</th>
      <th>链接/账号</th>
    </tr>
    <tr>
      <td data-th="渠道"><span class="prior_G">常驻</span>QQ群</td>
      <td data-th="链接/账号"><a href="https://jq.qq.com/?_wv=1027&k=fhrdx0wa">链接</a></td>
    </tr>
    <tr>
      <td data-th="渠道"><span class="prior_G">常驻</span>Bilibili</td>
      <td data-th="链接/账号"><a href="https://space.bilibili.com/384576146">链接</a></td>
    </tr>
    <tr>
      <td data-th="渠道"><span class="prior">非常驻</span>Twitter</td>
      <td data-th="链接/账号"><a href="https://twitter.com/kaosu_sensei">链接</a></td>
    </tr>
    <tr>
      <td data-th="渠道"><span class="prior">非常驻</span>Discord</td>
      <td data-th="链接/账号"><a href="https://discord.gg/qe8kv5avvV">链接</a></td>
    </tr>
    <tr>
      <td data-th="渠道"><span class="prior_G">常驻</span>邮箱</td>
      <td data-th="链接/账号">contact@sakurakoi.top</td>
    </tr>
  </table>
</template>

<script>
export default {

}
</script>

<style scoped>
h2 {
  line-height: inherit !important;
}

a {
  color: aquamarine;
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