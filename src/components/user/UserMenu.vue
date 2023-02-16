<template>
  <div class="user-menu b-white">
    <router-link class="item-menu" :to="{ name: 'dashboard'}">
      <i class="fa-light fa-puzzle-piece"></i>
      <span>Manager usług</span>
    </router-link>
    <div @click="showSubMenu" data-parent="company" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-address-card"></i>
        <span>Moja firma</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="company" class="sub-item-menu none">
      <router-link class="item-menu" to="">
        <i class="fa-light fa-address-card"></i>
        <span>Moja firma</span>
      </router-link>
      <router-link class="item-menu" to="">
        <i class="fa-light fa-users"></i>
        <span>Pracownicy firmy</span>
      </router-link>
      <router-link class="item-menu" to="">
        <i class="fa-light fa-crate-empty"></i>
        <span>Moje podatki</span>
      </router-link>
    </div>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-cloud"></i>
      <span>MOJA CHMURA</span>
    </router-link>

    <!--   sub   -->
    <div @click="showSubMenu" data-parent="webinars" class="item-menu-has-children">
      <div>
        <i class="fa-light fa-calendar-days"></i>
        <span>Webinary</span>
      </div>
      <i class="fa-light fa-chevron-down"></i>
    </div>
    <div data-menu="webinars" class="sub-item-menu none">
      <router-link class="item-menu" to="">
        <i class="fa-light fa-calendar-days"></i>
        <span>Przyszłe</span>
      </router-link>
      <router-link class="item-menu" to="">
        <i class="fa-light fa-clapperboard-play"></i>
        <span>Nagrania</span>
      </router-link>
    </div>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-comments-question-check"></i>
      Konsultacje
    </router-link>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-file-invoice"></i>
      <span>Faktury</span>
    </router-link>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-print"></i>
      E-Dokumenty
    </router-link>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-folders"></i>
     <span> Usługi dodatkowe</span>
    </router-link>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-gamepad-modern"></i>
      Zrób sobie przerwę
    </router-link>

    <router-link class="item-menu" to="">
      <i class="fa-light fa-rocket-launch"></i>
      MIA START
    </router-link>
  </div>
</template>

<script>

export default {
  name: "UserMenu",
  methods: {
    showSubMenu: (event) => {
      const target = event.target;
      target.childNodes[1].classList.toggle('fa-rotate-180');
      const all = document.querySelectorAll('.sub-item-menu');
      const l = all.length
      for (let i = 0; i < l; i++) {
        if (all[i].dataset.menu === target.dataset.parent) {
          all[i].classList.toggle('none')
        } else {
          all[i].previousElementSibling.childNodes[1].classList.remove('fa-rotate-180');
          all[i].classList.add('none')
        }
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.user-menu a {
  padding: 10px 20px;
  font-size: 1.6rem;
  font-weight: 300;
  display: flex;
  align-items: center;
}

.w-100 {
  width: 100%;
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
  padding: 5px 20px;
  font-size: 1.6rem;
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

</style>
