<template>
  <div class="page-content">
    <div class="container-fluid">

      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
            <h4 class="mb-sm-0">Starter</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                <li class="breadcrumb-item active">Starter</li>
              </ol>
            </div>

          </div>
        </div>
      </div>
      <!-- end page title -->

    </div>
    <!-- container-fluid -->
  </div>
<!--  <div class="page-head">-->
<!--    <h1 class="title-page"><i class="fa-light" :class=this.$route.meta.iconPage></i> {{$t("title_page.dashboard")}}</h1>-->
<!--  </div>-->
<!--  <div class="body-content">-->
<!--    <div class="services">-->
<!--      <div class="box-service back-mia">-->
<!--       <div class="serv-head green-head">-->
<!--         <p>{{ $t('manager.box_1_title') }}</p>-->
<!--       </div>-->
<!--        <div class="serv-body green">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_1_str_1') }}</span>-->
<!--            <span class="b-span">{{ $t('manager.box_1_str_2') }}</span>-->
<!--            <span>{{ $t('manager.box_1_str_3') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv green-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_1')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="line100"></div>-->
<!--    <div class="services-three line-1">-->
<!--      <div class="box-service back-fak">-->
<!--        <div class="serv-head orange-head">-->
<!--          <p>{{ $t('manager.box_2_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body orange">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_2_str_1') }}</span>-->
<!--            <span>{{ $t('manager.box_2_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv orange-btn" :to="{ name: 'invoices'}">{{ $t('manager.btn_2')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="box-service back-cons">-->
<!--        <div class="serv-head blue-head">-->
<!--          <p>{{ $t('manager.box_3_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body blue">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_3_str_1') }}</span>-->
<!--            <span>{{ $t('manager.box_3_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv blue-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_2')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="box-service back-acc">-->
<!--        <div class="serv-head purple-head">-->
<!--          <p>{{ $t('manager.box_4_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body purple">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_4_str_1') }}</span>-->
<!--            <span>{{ $t('manager.box_4_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv purple-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_2')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="box-service back-docs">-->
<!--        <div class="serv-head briz-head">-->
<!--          <p>{{ $t('manager.box_5_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body briz">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_5_str_1') }}</span>-->
<!--            <span class="b-span">{{ $t('manager.box_5_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv briz-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_1')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="box-service mia-start">-->
<!--        <div class="serv-head laguna-head">-->
<!--          <p>{{ $t('manager.box_6_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body laguna">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_6_str_1') }}</span>-->
<!--            <span>{{ $t('manager.box_6_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv laguna-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_2')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="box-service back-sant">-->
<!--        <div class="serv-head red-head">-->
<!--          <p>{{ $t('manager.box_7_title') }}</p>-->
<!--        </div>-->
<!--        <div class="serv-body red">-->
<!--          <p class="desc">-->
<!--            <span>{{ $t('manager.box_7_str_1') }}</span>-->
<!--            <span @click="topScroll">{{ $t('manager.box_7_str_2') }}</span>-->
<!--          </p>-->
<!--          <router-link class="btn-serv red-btn" :to="{ name: 'consultation'}">{{ $t('manager.btn_2')}}</router-link>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->


<!--  </div>-->
</template>

<script>
import {useAuthStore} from "@/stores";
import {useInfoStore} from "@/stores/info.store";
const auth = useAuthStore()
export default {
  name: "Manager.vue",
  methods:{
    topScroll(){
    }
  },
  mounted() {
    useAuthStore().getDataUser
    // console.log(useAuthStore().accessToken)
  }
}
</script>

<style scoped>
.services{
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
.box-service{
  background-position: bottom 15px left 15px;
  background-repeat: no-repeat;
  background-size: 60px;
}

.services>.box-service{
  width: 100%;
  max-width: 500px;
  animation: wave 30s infinite linear;
  font-size: 1.1rem;
}
.services-three{
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  display: flex;
  gap: 15px;
  justify-content: center;
}
.services-three>.box-service{
  width: 100%;
  max-width: 32%;
  animation: wave 30s infinite linear;
  font-size: 1rem;
}
.serv-head{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  text-align: center;
}
.serv-head p{
  margin: 0;
}
.green {
  background: linear-gradient(200deg, rgba(0, 221, 78, 0.55), rgba(89, 255, 148, 0.15));
}
.orange{
  background: linear-gradient(200deg, rgba(255, 146, 52, 0.55), rgba(255, 184, 123, 0.15));
}
.blue{
  background: linear-gradient(200deg, rgba(44, 119, 244, 0.55), rgba(131, 195, 250, 0.15));
}
.purple{
  background: linear-gradient(200deg, rgba(191, 52, 255, 0.55), rgba(216, 132, 255, 0.15));
}
.briz{
  background: linear-gradient(200deg, rgba(117, 145, 243, 0.55), rgba(0, 222, 204, 0.15));
}
.laguna{
  background: linear-gradient(200deg, rgba(1, 197, 152, 0.55), rgba(2, 231, 178, 0.15));
}
.red{
  background: linear-gradient(200deg, rgba(217, 34, 34, 0.55), rgba(255, 0, 0, 0.15));
}

.green-head{
  background: linear-gradient(to right, #00DD4E, #59FF94);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.orange-head{
  background: linear-gradient(to right, #FF9234, #FFB87B);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.blue-head{
  background: linear-gradient(to right, #2C77F4, #83C3FA);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.purple-head{
  background: linear-gradient(to right, #BF34FF, #D884FF);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.briz-head{
  background: linear-gradient(to right, #7591f3, #00decc);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.laguna-head{
  background: linear-gradient(to right, #01c598, #02e7b2);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.red-head{
  background: linear-gradient(to right, #d92222, #ff0000);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.green-btn{
  background: #00DD4E;
  color: #fff;
}
.orange-btn{
  background: #FF9234;
  color: #fff;
}
.blue-btn{
  background: #2c77f4;
  color: #fff;
}
.purple-btn{
  background: #BF34FF;
  color: #fff;
}
.briz-btn{
  background: #7591f3;
  color: #fff;
}
.laguna-btn{
  background: #01c598;
  color: #fff;
}
.red-btn{
  background: #d92222;
  color: #fff;
}
.back-mia {
  background-image: url("@/assets/icon-manager/acc.png");
}
.back-fak {
  background-image: url("@/assets/icon-manager/fak.png");
}
.back-cons {
  background-image: url("@/assets/icon-manager/cons.png");
}
.back-acc{
  background-image: url("@/assets/icon-manager/cl.png");
}
.back-docs {
  background-image: url("@/assets/icon-manager/docs_blue.png");
}
.mia-start {
  background-image: url("@/assets/icon-manager/miastart_rocket.png");
}
.back-sant {
  background-image: url("@/assets/icon-manager/bank_s.png");
}

.serv-body{
  border-radius: 0 0 13px 13px;
  background-size: 200% 200%;
  -webkit-animation: waweAn 5s ease infinite;
  -moz-animation: waweAn 5s ease infinite;
  -o-animation: waweAn 5s ease infinite;
  animation: waweAn 5s ease infinite;
  overflow: hidden;
  position: relative;
  padding: 0 15px;
}
.serv-body .desc{
  margin: 30px auto 50px auto;
  text-align: center;
  line-height: 1.8rem;
}
.serv-body .desc span{
  color: rgb(45, 55, 115);
  font-weight: 300;
  display: block;
}
.serv-body .desc .b-span{
  font-weight: 700;
}
.btn-serv{
  display: block;
  text-align: center;
  padding: 10px;
  width: 160px;
  margin: 0 auto 30px auto;
  border-radius: 20px;
  font-size: 1rem;
}
.h20{height: 20px; width: 100%}

@media screen and (max-width: 1200px) {
  .services-three>.box-service{max-width: 350px;}
}

</style>
