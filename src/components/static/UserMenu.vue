<template>
  <div class="user-menu" :class="color">
<!--  <div class="user-menu b-white">-->
<!--    <router-link class="item-menu" :to="{ name: 'dashboard'}">-->
    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'dashboard'}">
      <i class="fa-light fa-puzzle-piece"></i>
      <span>{{ $t("menuUser.manager") }}</span>
    </router-link>
    <div @click="showSubMenu" data-parent="company" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-address-card"></i>
        <span>{{ $t("menuUser.company") }}</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="company" class="sub-item-menu none">
      <router-link class="item-menu" :to="{ name: 'company-client'}">
        <i class="fa-light fa-address-card"></i>
        <span>{{ $t("menuUser.company") }}</span>
      </router-link>
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-users"></i>
        <span>{{ $t("menuUser.employees") }}</span>
      </router-link>
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-crate-empty"></i>
        <span>{{ $t("menuUser.tax") }}</span>
      </router-link>
    </div>

    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'company-no-client'}">
      <i class="fa-light fa-cloud"></i>
      <span>{{ $t("menuUser.cloud") }}</span>
    </router-link>

    <!--   sub   -->
    <div @click="showSubMenu" data-parent="webinars" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-calendar-days"></i>
        <span>{{ $t("menuUser.webinar") }}</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="webinars" class="sub-item-menu none">
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-calendar-days"></i>
        <span>{{ $t("menuUser.future") }}</span>
      </router-link>
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-clapperboard-play"></i>
        <span>{{ $t("menuUser.recordings") }}</span>
      </router-link>
    </div>

    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'consultation'}">
      <i class="fa-light fa-comments-question-check"></i>
      <span>{{ $t("menuUser.consult") }}</span>
    </router-link>


    <!--   sub invoice  -->
    <div @click="showSubMenu" data-parent="invoice" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-file-invoice"></i>
        <span>{{ $t("menuUser.invoice") }}</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="invoice" class="sub-item-menu none">
      <router-link class="item-menu" :to="{ name: 'dashboard'}">
        <i class="fa-light fa-file-invoice"></i>
        <span>{{ $t("menuUser.invoice") }}</span>
      </router-link>
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-list-ul"></i>
        <span>{{ $t("menuUser.list-service") }}</span>
      </router-link>
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-user-tie-hair"></i>
        <span>{{ $t("menuUser.contractors") }}</span>
      </router-link>
    </div>


    <!--   sub invoice  -->
    <div @click="showSubMenu" data-parent="e-doc" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-print"></i>
        <span>{{ $t("menuUser.e-doc") }}</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="e-doc" class="sub-item-menu none">
      <router-link class="item-menu" :to="{ name: 'company-no-client'}">
        <i class="fa-light fa-print"></i>
        <span>{{ $t("menuUser.e-doc") }}</span>
      </router-link>
    </div>


    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'company-no-client'}">
      <i class="fa-light fa-folders"></i>
      <span>{{ $t("menuUser.additional") }}</span>
    </router-link>

    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'company-no-client'}">
      <i class="fa-light fa-gamepad-modern"></i>
      <span>{{ $t("menuUser.take-a-break") }}</span>
    </router-link>
    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'company-no-client'}">
      <i class="fa-light fa-phone-plus"></i>
      <span>{{ $t("menuUser.support") }}</span>
    </router-link>

    <router-link class="item-menu" @click="hideAllSubDiv" :to="{ name: 'company-no-client'}">
      <i class="fa-light fa-rocket-launch"></i>
      <span>{{ $t("menuUser.mia-start") }}</span>
    </router-link>
  </div>
</template>

<script>

import {useInfoStore} from "@/stores/info.store";

export default {
  name: "UserMenu",
  computed: {
    color () {
      return useInfoStore().getActiveColor
    }
  },
  methods: {
    showSubMenu: (event) => {
      const target = event.target;
      target.childNodes[1].classList.toggle('fa-rotate-180');
      const all = document.querySelectorAll('.sub-item-menu');
      const l = all.length;
      for (let i = 0; i < l; i++) {
        if (all[i].dataset.menu === target.dataset.parent) {
          all[i].classList.toggle('none');
        } else {
          all[i].previousElementSibling.childNodes[1].classList.remove('fa-rotate-180');
          all[i].classList.add('none');
        }
      }
    },
    hideAllSubDiv(){
      const all = document.querySelectorAll('.sub-item-menu');
      const l = all.length;
      for (let i = 0; i < l; i++) {
        all[i].previousElementSibling.childNodes[1].classList.remove('fa-rotate-180');
        all[i].classList.add('none');
      }
    }
  },
  mounted() {
    const link = document.querySelector('.router-link-active:not(.link-white)');
    if(link){
      if(link.parentElement.previousElementSibling && link.parentElement.previousElementSibling.classList.contains('item-menu-has-children')){
        link.parentElement.previousElementSibling.childNodes[1].classList.add('fa-rotate-180');
        link.parentElement.classList.remove('none')
      }
    }
  }
}
</script>

<style scoped>
.user-menu {
  overflow: auto;
}

.user-menu a {
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 300;
  display: flex;
  align-items: center;
}

.item-menu {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1px 10px
}

.item-menu i {
  width: 20px;
  margin-right: 10px;
}

.sub-item-menu {
  padding-left: 30px;
}

.item-menu-has-children {
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.item-menu-has-children div i {
  width: 20px;
  margin-right: 10px;
}

.item-menu-has-children * {
  pointer-events: none
}
.router-link-active{
  background: var(--active-color);
  color: #fff;
}

</style>
