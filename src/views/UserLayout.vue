<template>
  <div class="h-100">
    <HeaderUser />
  <div class="header-menu-h"></div>
  <div class="main-layout">
    <div class="sidebar" :class="color">
<!--    <div class="sidebar b-white">-->
      <UserMenu />
    </div>
    <div class="content">
     <div class="area">
       <router-view />
     </div>
      <div class="footer">
        2022 © MIA CONSULT GROUP Sp. z o.o. | v3.2 | NIP: 1133018235 |Oferta |Regulamin |Cookies | Support: support@mcgroup.pl
      </div>
    </div>
  </div>
<!--    <div class="footer">-->
<!--      2022 © MIA CONSULT GROUP Sp. z o.o. | v3.2 | NIP: 1133018235 |Oferta |Regulamin |Cookies | Support: support@mcgroup.pl-->
<!--    </div>-->
  </div>

</template>

<script>


import Manager from "@/components/user/pages/Manager.vue";
import Consultations from "@/components/user/pages/Consultation.vue";
import UserMenu from "@/components/user/UserMenu.vue";
import HeaderUser from "@/components/user/HeaderUser.vue";
import LogoBox from "@/components/static/LogoBox.vue";
import {useUsersStore} from "@/stores";
import {useInfoStore} from "@/stores/info.store";

export default {
  name: "LayoutAdmin",
  components: {LogoBox, HeaderUser, UserMenu, Manager,Consultations},
  data() {
    return {

    }
  },
  computed: {
    color () {
      return useInfoStore().getActiveColor
    }
  },
  methods:{

  },
  mounted() {
    // console.log(this.$route)
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
  height: 100%;
  padding: 20px 0;
  width: 300px;
  overflow: auto;
}

.content{
  background: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}
.area{
  padding: 20px;
}
.footer{
  color: white;
  background: #313131;
  width: 100%;
  padding: 15px;
  text-align: center;
}
.h-100{
  height: 100%;
  /*overflow: hidden;*/
  width: 100%;
}
.header-menu-h{height: 65px;width: 100%}

@media screen and (max-width: 1020px){
  .sidebar{display: none}
  .w-side, .p-side{margin: 0}
  .header-menu{width: 100%}
  .footer{width: 100%}
}
</style>
