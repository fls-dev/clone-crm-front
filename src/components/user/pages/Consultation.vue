<template>
  <div class="page-head">
    <h1 class="title-page"><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("title_page.consultation") }}
    </h1>
  </div>
  <div class="body-content">
    <h2 class="title-h2">{{ $t("consultation.title_1") }}</h2>
    <div class="sub-title">
      <p class="center">{{ $t("consultation.sub_title_1") }}<br>{{ $t("consultation.sub_title_1_1") }}</p>
    </div>
    <div class="show-hide" @click="isShow($event)" data-show-hide="title1">
      <i class="fa-light fa-angles-right"></i>
      <p>{{ $t("consultation.sh_1_title") }}</p>
    </div>
    <div class="show-hide-content none" data-show-hide="title1">
      <p>{{ $t('consultation.sh_1_l1') }}</p>
      <p class="mb-20">{{ $t('consultation.sh_1_l2_1') }} <b>{{ $t('main.name_company') }}</b>
        {{ $t('consultation.sh_1_l2_2') }}</p>
      <p class="mb-20"><b>{{ $t('consultation.messengers') }}: </b>
        <a href="//api.whatsapp.com/send?phone=+48572285785" target="_blank">WhatsApp</a>,
        <a href="tg://resolve?domain=mcgrouppl" target="_blank">Telegram</a>,
        <a href="viber://chat?number=+48572285785" target="_blank">Viber</a>
      </p>
      <p><b>{{ $t('consultation.by_phone') }}:</b> <a href="tel:+48 512 713 500"> +48 512 713 500</a></p>
      <p class="mb-20">{{ $t('consultation.sh_1_l3') }}</p>
    </div>
    <div class="line100"></div>
    <h2 class="title-consult">{{ $t("consultation.title_2") }}</h2>
    <div class="show-hide mb-20" @click="isShow($event)" data-show-hide="title2">
      <i class="fa-light fa-angles-right"></i>
      <p>{{ $t("consultation.sh_2_title") }}</p>
    </div>
    <div class="show-hide-content none" data-show-hide="title2">
      <p><span class="circle">1</span>{{ $t('consultation.sh_2_l1') }}</p>
      <p class="mb-20"><span class="circle">2</span>{{ $t('consultation.sh_2_l2') }}</p>
      <p class="mb-20"><span class="circle">3</span>{{ $t('consultation.sh_2_l3') }}</p>
      <p class="mb-20"><span class="circle">4</span>{{ $t('consultation.sh_2_l3') }}</p>
    </div>

    <div class="live-box">
      <div class="live-head live">
        <p>LIVE KONSULTACJA</p>
      </div>
      <div class="live-body green">
        <p class="desc">
          <span class="b-span">{{ $t('consultation.live_1') }}</span>
          <span>{{ $t('consultation.live_2') }}</span>
        </p>
        <p class="price"><span>149</span>.99 zł.</p>
        <div class="center">
          <button class="btn btn-live">{{ $t('invoices-rate.get-service') }}</button>
        </div>
      </div>
    </div>

    <div class="line100"></div>
    <h2 class="title-consult">{{ $t("consultation.title_3") }}</h2>
    <div class="show-hide mb-20" @click="isShow($event)" data-show-hide="title3">
      <i class="fa-light fa-angles-right"></i>
      <p>{{ $t("consultation.sh_3_title") }}</p>
    </div>
    <div class="show-hide-content none" data-show-hide="title3">
      <p><span class="circle">1</span>{{ $t('consultation.sh_3_l1') }}</p>
      <p class="mb-20"><span class="circle">2</span>{{ $t('consultation.sh_3_l2') }}</p>
      <p class="mb-20"><span class="circle">3</span>{{ $t('consultation.sh_3_l3') }}</p>
      <p class="mb-20"><span class="circle">4</span>{{ $t('consultation.sh_3_l3') }}</p>
    </div>

    <div class="consult-rate">
      <div class="col">
        <div class="cons-head one">
          <p>5 KONSULTACJI</p>
        </div>
        <div class="cons-body ">
          <p class="desc">
            <span>{{ $t('consultation.col_1_str_1') }}</span>
            <span>{{ $t('consultation.col_1_str_2') }}</span>
            <span>{{ $t('consultation.col_1_str_3') }}</span>
          </p>
          <p class="price"><span>99</span>.99 zł.</p>
          <div class="center color-one"><i class="fa-light fa-circle-exclamation center"></i></div>
          <p class="text-info">{{ $t('consultation.text_cons') }}</p>
          <button class="btn btn-one">{{ $t('invoices-rate.get-service') }}</button>
        </div>
      </div>
      <div class="col">
        <div class="cons-head two">
          <p>15 KONSULTACJI</p>
        </div>
        <div class="cons-body ">
          <p class="desc">
            <span>{{ $t('consultation.col_2_str_1') }}</span>
            <span>{{ $t('consultation.col_1_str_2') }}</span>
            <span>{{ $t('consultation.col_2_str_3') }}</span>
          </p>
          <p class="price"><span>199</span>.99 zł.</p>
          <div class="center color-two"><i class="fa-light fa-circle-exclamation center"></i></div>
          <p class="text-info">{{ $t('consultation.text_cons') }}</p>
          <button class="btn btn-two">{{ $t('invoices-rate.get-service') }}</button>
        </div>
      </div>
      <div class="col">
        <div class="cons-head three">
          <p>25 KONSULTACJI</p>
        </div>
        <div class="cons-body ">
          <p class="desc">
            <span>{{ $t('consultation.col_3_str_1') }}</span>
            <span>{{ $t('consultation.col_1_str_2') }}</span>
            <span>{{ $t('consultation.col_3_str_3') }}</span>
          </p>
          <p class="price"><span>249</span>.99 zł.</p>
          <div class="center"><i class="fa-light fa-circle-exclamation center"></i></div>
          <p class="text-info color-three">{{ $t('consultation.text_cons') }}</p>
          <button class="btn btn-three">{{ $t('invoices-rate.get-service') }}</button>
        </div>
      </div>
      <div class="col">
        <div class="cons-head four">
          <p>POJEDYNCZA KONSULTACJA</p>
        </div>
        <div class="cons-body ">
          <p class="desc">
            <span>{{ $t('consultation.col_4_str_1') }}</span>
            <span>{{ $t('consultation.col_1_str_2') }}</span>
            <span>{{ $t('consultation.col_4_str_3') }}</span>
          </p>
          <p class="price"><span>49</span>.99 zł.</p>
          <div class="center color-four"><i class="fa-light fa-circle-exclamation center"></i></div>
          <p class="text-info">{{ $t('consultation.text_cons') }}</p>
          <button class="btn btn-four">{{ $t('invoices-rate.get-service') }}</button>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "Consultation",
  data() {
    return {
      "str": ""
    }
  },
  methods: {
    isShow(event) {
      const target = event.target;
      target.childNodes[0].classList.toggle('fa-rotate-90');
      const all = document.querySelectorAll('.show-hide-content');
      const l = all.length;
      for (let i = 0; i < l; i++) {
        if (all[i].dataset.showHide === target.dataset.showHide) {
          all[i].classList.toggle('none')
        }
      }
    }
  }
}
</script>

<style scoped>
.title-consult {
  text-align: center;
  font-weight: 500;
  color: #646c9a;
  font-size: 1.5rem;
  margin: 30px auto;
}

.sub-title {
  text-align: center;
  margin: 0 auto 20px auto;
  line-height: 1.5rem;
  font-size: 1.1rem;
}
.sub-title p {margin: 0 auto 30px auto}

.show-hide {
  display: flex;
  align-items: center;
  color: #48465b;
  background-color: #f6f5f5;
  width: 100%;
  min-height: 50px;
  padding: 0 20px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
}

.show-hide * {
  pointer-events: none
}

.show-hide i {
  margin-right: 15px;
  color: var(--font-color);
}

.show-hide-content {
  font-size: 1rem;
  padding: 10px 20px;
}

.show-hide-content p:not(.mb-20) {
  margin: 0 0 5px 0
}

.show-hide-content a {
  color: var(--font-color)
}

.circle {
  display: inline-flex;
  width: 20px;
  height: 20px;
  background: var(--active-color);
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  margin-right: 10px;
}

.live-box {
  width: 100%;
  margin: 0 auto;
  max-width: 730px;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.live-box > .live-head {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  font-size: 1.1rem;
  color: white;
  font-weight: 700;
  text-align: center;
  border-radius: 15px 15px 0 0;
}

.live-body {
  padding: 0 15px 25px 15px;
  text-align: center;
  font-size: 1rem;
}

.desc {
  margin: 20px;
  text-align: center;
  font-size: 1rem;
}

.desc span {
  display: block;
  margin: 5px 0;
}

.live {
  background: linear-gradient(to right, #FF9234, #FFB87B);
}

.b-span {
  font-weight: 700;
}

.price {
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color: #646c9a;
  margin: 0 0 20px 0;
}

.price span {
  font-size: 2.3rem;
}

.btn {
  width: 125px;
  height: 35px;
  display: block;
  margin: 0 auto;
  text-align: center;
  border-radius: 18px;
  border: none;
  font-size: 1rem;
  line-height: 30px;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.btn-live {
  background-color: #FF9234;
  border-color: #FF9234;
  color: #ffffff;
}

.consult-rate {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.col {
  width: 100%;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.cons-head {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 54px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.cons-body {
  padding: 20px;
}
.text-info{
  font-weight: 700;
  text-align: center
}

.one {
  background: linear-gradient(to right, #2C77F4, #83C3FA);
}

.two {
  background: linear-gradient(to right, #00D75F, #37FF90);
}

.three {
  background: linear-gradient(to right, #853FBB, #DD99FF);
}

.four {
  background: linear-gradient(to right, #2CCAF4, #C3F2FF);
}
.btn-one{
  background: #2c77f4;
}
.btn-two{
  background: #00D75F;
}
.btn-three{
  background: #853FBB;
}
.btn-four{
  background: #2CCAF4;
}
.color-one{color: #2c77f4;}
.color-two{color: #00D75F;}
.color-three{color: #853FBB;}
.color-four{color: #2CCAF4;}

@media screen and (max-width: 1367px) {
  .col{max-width: 350px;}
  .consult-rate{flex-wrap: wrap;justify-content: center;}
}
@media screen and (max-width: 1030px) {
  .col{max-width: 330px;}
}
</style>
