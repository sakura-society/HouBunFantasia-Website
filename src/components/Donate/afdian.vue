<template>
  <h2 style="display: flex; justify-content: center; align-items: center;margin: 20px auto;font-size: 1.5rem;">
    <span class="slogan__highlight" style="visibility: visible; animation-name: fadeIn;">
      爱发电赞助
      (前15位)
    </span>
  </h2>
  <main class="main">
    <div class="sponsor-item" v-for="afadian of afadianInfo" :key="afadian.user.user_id">
      <div class="left">
        <div class="avatar" :style="{ backgroundImage: 'url(' + afadian.user.avatar + ')' }">
        </div>
      </div>
      <div class="middle">
        <div class="name">{{ afadian.user.name }}</div>
        <div class="platform">爱发电</div>
      </div>
      <div class="right">
        <div class="amount">
          ￥{{ afadian.all_sum_amount }}
        </div>
      </div>
    </div>
  </main>
  <h2 style="display: flex; justify-content: center; align-items: center;margin: 20px auto;font-size: 1.5rem;">
    <span class="slogan__highlight" style="visibility: visible; animation-name: fadeIn;">
      其他平台赞助
    </span>
  </h2>
  <main class="main">
    <div class="sponsor-item" v-for="Other of OtherInfo" :key="Other.name">
      <div class="left">
        <div class="avatar" :style="{ backgroundImage: 'url(' + Other.ProPho + ')' }">
        </div>
      </div>
      <div class="middle">
        <div class="name">{{ Other.name }}</div>
        <div class="platform">{{ Other.platform }}</div>
      </div>
      <div class="right">
        <div class="amount">
          ￥{{ Other.allSumAmount }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import request from '../../utils/request';
export default {
  data () {
    return {
      afadianInfo: null,
      OtherInfo: [
        {
          name: 'BeaBloom:)',
          platform: 'QQ',
          ProPho: 'http://q.qlogo.cn/g?b=qq&nk=2693632245&s=0',
          allSumAmount: '130',
        },
      ]
    }
  },
  created () {
    this.getAfadianInfo()
  }, methods: {
    getAfadianInfo () {
      let url = "/api/afdian"
      request.get(url)
        .then(res => {
          this.afadianInfo = res.data.list
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}
</script>

<style scoped>
h2 {
  line-height: inherit !important;
}

span.slogan__highlight {
  background: #3392ea;
  border-radius: 0.375rem;
  color: #fff;
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

.main {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  -webkit-transition-property: background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, filter, backdrop-filter;
  -o-transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, -webkit-box-shadow, transform, -webkit-transform, filter, backdrop-filter;
  -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -o-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  -webkit-transition-duration: .15s;
  -o-transition-duration: .15s;
  transition-duration: .15s;
  grid-gap: 1.25rem;
  gap: 1.25rem;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -ms-flex-line-pack: start;
  -webkit-align-content: flex-start;
  align-content: flex-start;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}


.main .sponsor-item {
  -ms-grid-column-span: span 12 / span 12;
  grid-column: span 12 / span 12;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main .sponsor-item .left .avatar {
  background-size: cover;
  border-radius: .5rem;
  height: 3rem;
  width: 3rem;
  opacity: .7;
}

.main .sponsor-item .right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  .main>div {
    border-radius: .75rem;
    padding: 1.25rem;
  }

  .main .sponsor-item .left .avatar {
    height: 3.5rem;
    width: 3.5rem;
  }

  .main .sponsor-item .right {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.main .sponsor-item .left {
  margin-right: .5rem;
}

.main .sponsor-item .middle {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  overflow: hidden;
}

.main .sponsor-item .middle .name {
  overflow: hidden;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main .sponsor-item .middle .platform {
  font-size: .875rem;
  line-height: 1.25rem;
  opacity: .5;
}

.main>div {
  --tw-bg-opacity: 1;
  background-color: rgba(191, 198, 213, var(--tw-bg-opacity));
  border-radius: .5rem;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0/.1), 0 4px 6px -4px rgb(0 0 0/.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: rgb(2 39 86 / 10%);
  --tw-shadow: var(--tw-shadow-colored);
  padding: .75rem;
}

@media (min-width: 640px) {
  .main {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .main .sponsor-item {
    -ms-grid-column-span: span 6 / span 6;
    grid-column: span 6 / span 6;
  }
}

@media (min-width: 1024px) {
  .main {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  .main .sponsor-item {
    -ms-grid-column-span: span 4 / span 4;
    grid-column: span 4 / span 4;
  }
}
</style>