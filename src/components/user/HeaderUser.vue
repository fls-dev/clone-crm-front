<template>
  <div class="header-menu p-side">
  <div class="item"></div>
  <div class="item">
    <span class="mr-15"><i class="fa-light fa-2x fa-file-invoice"></i> : 30</span>
    <span class="mr-15"><i class="fa-light fa-2x fa-list-check"></i> : 30</span>
    <span><i class="fa-light fa-2x fa-bullhorn"></i> : 30</span>
  </div>
  <div class="item">
    <div class="head-info">
      <div class="auth-name"><span>Klient:</span> Pavel Misko</div>
      <img class="user-avatar" src="@/assets/img/no-photo.svg">
      <i class="fa-light fa-sign-out fa-2x" aria-hidden="true"></i>
    </div>
  </div>
</div>
  <div class="mobile">
    <div class="logo"><span>C</span>LONE<span>CRM</span></div>
    <div>
      <i class="fa-light fa-bars fa-3x mr-15"></i>
      <i class="fa-light fa-ellipsis-vertical fa-3x"></i>
    </div>
  </div>
</template>

<script>
import LogoBox from "@/components/static/LogoBox.vue";

export default {
  name: "HeaderUser",
  components: {LogoBox}
}
</script>

<style scoped>
@media screen and (min-width: 1020px){
  .mobile{display: none}
  .header-menu{
    position: fixed;
    top: 0;
    color: white;
    background: #313131;
    width: calc(100% - var(--width-sidebar));
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    align-items: center;
    z-index: 1;
  }
}
@media screen and (max-width: 1020px){
  .mobile{
    width: 100%;
    padding: 0px 20px;
    background: #313131;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    color: white;
  }
  .mobile i{cursor: pointer}
  .header-menu{
    display: none;
  }
}
</style>
