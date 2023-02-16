<template>
  <div class="h-100">
    <HeaderUser />
  <div class="header-menu-h"></div>
  <div class="main-layout">
    <div class="sidebar b-white">
      <LogoBox />
      <UserMenu />
    </div>
    <div class="content w-side">
      <div class="page-head">
        <h1 class="title-page"><i class="fa-light" :class=this.$route.meta.iconPage></i> {{this.$route.meta.titlePage}}</h1>
      </div>
      <router-view />
    </div>
  </div>
    <div class="footer p-side">
      2022 © MIA CONSULT GROUP Sp. z o.o. | v3.2 | NIP: 1133018235 |Oferta |Regulamin |Cookies | Support: support@mcgroup.pl
    </div>
  </div>

</template>

<script>


import Manager from "@/components/user/pages/Manager.vue";
import Consultations from "@/components/user/pages/Consultations.vue";
import UserMenu from "@/components/user/UserMenu.vue";
import HeaderUser from "@/components/user/HeaderUser.vue";
import LogoBox from "@/components/static/LogoBox.vue";

export default {
  name: "LayoutAdmin",
  components: {LogoBox, HeaderUser, UserMenu, Manager,Consultations},

  methods:{

  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.main-layout {
  height: 100%;
  min-height: 100%;
  display: flex;
}
.sidebar {
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0; bottom: 0;
}
.content{
  background: #f2f2f2;
  padding: 20px 20px 160px 20px;
  width: 100%;
  overflow: auto;
  min-height: 80vh;
}
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: #313131;
  width: calc(100% - var(--width-sidebar));
  padding: 15px;
  text-align: center;
}
.h-100{
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.header-menu-h{height: 65px;width: 100%}
.footer-h{height: 30px;width: 100%}

@media screen and (max-width: 1020px){
  .sidebar{display: none}
  .w-side, .p-side{margin: 0}
  .header-menu{width: 100%}
  .footer{width: 100%}
}
</style>
