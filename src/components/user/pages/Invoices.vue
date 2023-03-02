<template>
  <div class="page-head">
    <h1 class="title-page"><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("title_page.invoices") }}</h1>
  </div>
  <div class="body-content">
    <h2 class="title-h2">{{ $t("title_page.invoices") }}</h2>

    <div class="show-hide" @click="isShow($event)" data-show-hide="title1">
      <i class="fa-light fa-angles-right"></i>
      <p>{{ $t("invoices-rate.sh_1_title") }}</p>
    </div>
    <div class="show-hide-content none" data-show-hide="title1">
      <p><span class="circle">1</span>{{ $t('invoices-rate.sh_1_l1') }}</p>
      <p class="mb-20"><span class="circle">2</span>{{ $t('invoices-rate.sh_1_l2') }}</p>
      <p class="mb-20"><span class="circle">3</span>{{ $t('invoices-rate.sh_1_l3') }}</p>
      <p class="mb-20"><span class="circle">4</span>{{ $t('invoices-rate.sh_1_l3') }}</p>
    </div>
    <div class="h30"></div>
    <div class="invoice-line">
      <div class="col">
        <div class="head-rate demo">
          TARYFA PROBNA
        </div>
        <div class="body-rate">
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l1") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l2") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l3") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l4") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l5") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l6") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{$t('invoices-rate.l7')}}<br>{{$t('invoices-rate.l7-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{$t('invoices-rate.l8')}}<br>{{$t('invoices-rate.l8-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l9") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l10") }}</p>
          </div>
          <div class="demo-date mt-5">{{ $t('invoices-rate.date_ex') }}</div>
          <p class="price">{{$t('invoices-rate.free')}}</p>
          <div class="center">
            <button class="btn-demo btn">{{ $t('invoices-rate.get-service') }}</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="head-rate invoice-s">
          FAKTURY S
        </div>
        <div class="body-rate">
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l1") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l2") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l3") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l4") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l5") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{ $t("invoices-rate.l6") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{$t('invoices-rate.l7')}}<br>{{$t('invoices-rate.l7-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{$t('invoices-rate.l8')}}<br>{{$t('invoices-rate.l8-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{ $t("invoices-rate.l9") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{ $t("invoices-rate.l10") }}</p>
          </div>
          <div class="fake-date"></div>
          <p class="price"><span>9</span>.99 zł / {{$t('invoices-rate.month')}}</p>
          <div class="center">
            <button class="btn-inv-s btn">{{ $t('invoices-rate.get-service') }}</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="head-rate invoice-m">
          FAKTURY M
        </div>
        <div class="body-rate">
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l1") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l2") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l3") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l4") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l5") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l6") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{$t('invoices-rate.l7')}}<br>{{$t('invoices-rate.l7-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{$t('invoices-rate.l8')}}<br>{{$t('invoices-rate.l8-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{ $t("invoices-rate.l9") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/minus.png">
            <p>{{ $t("invoices-rate.l10") }}</p>
          </div>
          <div class="fake-date"></div>
          <p class="price"><span>14</span>.99 zł / {{$t('invoices-rate.month')}}</p>
          <div class="center">
            <button class="btn-inv-m btn">{{ $t('invoices-rate.get-service') }}</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="head-rate invoice-l">
          FAKTURY L
        </div>
        <div class="body-rate">
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l1") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l2") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l3") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l4") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l5") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l6") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{$t('invoices-rate.l7')}}<br>{{$t('invoices-rate.l7-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{$t('invoices-rate.l8')}}<br>{{$t('invoices-rate.l8-1')}}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l9") }}</p>
          </div>
          <div class="el-rate">
            <img src="@/assets/img/plus.png">
            <p>{{ $t("invoices-rate.l10") }}</p>
          </div>
          <div class="fake-date"></div>
          <p class="price"><span>19</span>.99 zł / {{$t('invoices-rate.month')}}</p>
          <div class="center">
            <button class="btn-inv-l btn">{{ $t('invoices-rate.get-service') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Invoices",
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

.invoice-line {
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

.head-rate {
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

.body-rate{
  padding: 20px;
}
.el-rate {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 15px;
}

.el-rate img {
  width: 20px;
  margin-right: 10px
}

.el-rate p {
  margin: 0;
  font-size: 1rem;
  color: #646c9a;
  font-weight: 300;
}
.demo-date{
  color: #2CCAF4;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  min-height: 20px;
}
.mt-5{margin-bottom: 5px}
.fake-date{height: 20px}
.price{
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color: #646c9a;
  margin:0 0 15px 0;
}
.price span{
  font-size: 2.3rem;
}

.demo {
  background: linear-gradient(to right, #2CCAF4, #C3F2FF)
}

.invoice-s {
  background: linear-gradient(to right, #F3646C, #FCC4C7);
}

.invoice-m {
  background: linear-gradient(to right, #FF9234, #FFB87B);
}

.invoice-l {
  background: linear-gradient(to right, #BA90F3, #E0CCFB);
}
.btn{
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
.btn-demo {
  background-color: #2CCAF3;
}
.btn-inv-s {
  background-color: #F2656E;;
}
.btn-inv-m {
  background-color: #FF9234;
}
.btn-inv-l {
  background-color: #BA90F3;
}

@media screen and (max-width: 1367px) {
  .col{max-width: 350px;}
  .invoice-line{flex-wrap: wrap;justify-content: center;}
}
@media screen and (max-width: 1030px) {
  .col{max-width: 330px;}
}
</style>
