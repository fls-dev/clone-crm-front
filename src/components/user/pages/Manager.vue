<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Invoice List Widget -->

    <div class="card mb-6">
      <div class="card-widget-separator-wrapper">
        <div class="card-body card-widget-separator">
          <div class="row gy-4 gy-sm-1">
            <div class="col-sm-6 col-lg-3">
              <div
                  class="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                <div>
                  <h4 class="mb-0">24</h4>
                  <p class="mb-0">Clients</p>
                </div>
                <div class="avatar me-sm-6">
                            <span class="avatar-initial rounded-3">
                              <i class="ri-user-line text-heading ri-26px"></i>
                            </span>
                </div>
              </div>
              <hr class="d-none d-sm-block d-lg-none me-6" />
            </div>
            <div class="col-sm-6 col-lg-3">
              <div
                  class="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                <div>
                  <h4 class="mb-0">165</h4>
                  <p class="mb-0">Invoices</p>
                </div>
                <div class="avatar me-lg-6">
                            <span class="avatar-initial rounded-3">
                              <i class="ri-pages-line text-heading ri-26px"></i>
                            </span>
                </div>
              </div>
              <hr class="d-none d-sm-block d-lg-none" />
            </div>
            <div class="col-sm-6 col-lg-3">
              <div
                  class="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                <div>
                  <h4 class="mb-0">$2.46k</h4>
                  <p class="mb-0">Paid</p>
                </div>
                <div class="avatar me-sm-6">
                            <span class="avatar-initial rounded-3">
                              <i class="ri-wallet-line text-heading ri-26px"></i>
                            </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <h4 class="mb-0">$876</h4>
                  <p class="mb-0">Unpaid</p>
                </div>
                <div class="avatar">
                            <span class="avatar-initial rounded-3">
                              <i class="ri-money-dollar-circle-line text-heading ri-26px"></i>
                            </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Invoice List Table -->
    <div class="card">
      <div class="card-datatable table-responsive">
        <table class="invoice-list-table table">
          <thead>
          <tr>
            <th></th>
            <th></th>
            <th>#ID</th>
            <th>#</th>
            <th>Client</th>
            <th>Total</th>
            <th class="text-truncate">Issued Date</th>
            <th>Balance</th>
            <th>Invoice Status</th>
            <th class="cell-fit">Actions</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import {useAuthStore} from "@/stores";
import {useInfoStore} from "@/stores/info.store";
import {onMounted, onUnmounted} from "vue";
const auth = useAuthStore()
export default {
  name: "Manager.vue",
  methods:{
    topScroll(){
    }
  },
  setup() {
    let originalClass = '';

    onMounted(() => {
      originalClass = document.documentElement.className;
      document.documentElement.className = 'light-style layout-navbar-fixed layout-menu-fixed layout-compact';
    });

    onUnmounted(() => {
      document.documentElement.className = originalClass;
    });
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
