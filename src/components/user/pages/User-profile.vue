<template>
  <div class="page-head">
    <h1 class="title-page">{{ $t("title_page.profile") }}</h1>
  </div>
  <div class="top-head">
    <p><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("title_page.profile") }}: <span class="company-name">{{name}} {{surname}}</span></p>
  </div>
  <div class="body-content">
    <div class="col-100">
      <div class="col-50">
        <div class="avatar-box">
          <img :src=avatar>
          <p class="name-surname">{{name}} {{surname}}</p>
          <p class="add-avatar">+ Add photo</p>
        </div>
        <div class="line">
          <div class="l-inp">
            <label>Email</label>
            <input type="text" v-model=email>
          </div>
          <div class="r-inp">
            <label>{{ $t('profile.pass') }}</label>
            <div class="input-icons">
            <input class="relative" :type="typePass" v-model=password>
              <i @click="showPassword" v-if="showPass" class="fa-light fa-eye in-input"></i>
              <i @click="showPassword" v-else class="fa-light fa-eye-slash in-input"></i>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="l-inp">
            <label>{{ $t('profile.surname') }}</label>
            <input type="text" v-model=surname>
          </div>
          <div class="r-inp">
            <label>{{ $t('profile.name') }}</label>
            <input type="text" v-model=name>
          </div>
        </div>
        <div class="line-w100">
          <label>{{ $t('profile.position') }}</label>
          <input type="text" v-model=position>
        </div>
        <div class="line">
          <div class="l-inp">
            <label>{{ $t('profile.phone') }}</label>
            <input type="text" v-model=phone>
          </div>
          <div class="r-inp">
            <label>{{ $t('profile.add_phone') }}</label>
            <input type="text" v-model=add_phone>
          </div>
        </div>
      </div>
      <div class="col-50">

      </div>
    </div>
    <div class="section-input-bottom">
      <button @click="update">{{$t('company.btn')}}</button>
    </div>

  </div>
</template>

<script>
import {useAuthStore} from "@/stores";
import {settings} from "@/setting";
import * as CryptoJS from 'crypto-js'
import axios from "axios";
import {createToaster} from "@meforma/vue-toaster";

const toaster = createToaster();
const user = useAuthStore().getDataUser
export default {
  name: "User-profile",
  data() {
    return {
      avatar: settings.serverUrl+user.link_logo,
      email: user.email,
      password: CryptoJS.AES.decrypt(user.password, "a29kaW1AbmVzdEBzZWNyZXRfaw==").toString(CryptoJS.enc.Utf8),
      surname: user.lastName,
      name: user.firstName,
      position: user.position,
      phone: user.phone,
      add_phone: user.add_phone,
      typePass: "password",
      showPass: true,

    }
  },
  methods:{
    showPassword(){
      this.showPass = !this.showPass
      if (this.typePass === "password") {
        this.typePass = "text"
      } else {
        this.typePass = "password"
      }
    },
    async update(){
      await axios.post(`${settings.serverUrl}/user/update`, {
        id: user.id,
        email: this.email,
        password: this.password,
        firstName: this.surname,
        lastName: this.name,
        phone: this.phone,
        add_phone: this.add_phone,
        position: this.position
      }).then(res => {
        console.log(res)
            if (res.status === 200 && res.data.status === true) {
              useAuthStore().user = res.data.user
              toaster.success( this.$t('notifications.update'),{
                position: "top",
                duration: 3000
              });
            }else{
              toaster.error("error update",{
                position: "top",
                duration: 3000
              });
            }

          }).catch(function (error) {
            console.log(error)
            toaster.error("error update",{
              position: "top",
              duration: 3000
            });
          })
    }
  },
  mounted() {
    console.log(this.password)
  }
}
</script>
<!--firstName: "firstName"

group: "USER"

id: 1

lang: ""

lastName: "lastName"

link_logo: "@/assets/img/avatar.png"

phone: "+48519571201"-->
<style scoped>
.line{
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}
.l-inp, .r-inp{
  width: 100%;
  max-width: 49%;
}
.line-w100{margin-bottom: 30px}
.line input, .line-w100 input{
  padding: 0px 15px;
  margin-top: 5px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.line label,.line-w100 label{
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}
.col-100{
  display: flex;
  gap: 0px;
  margin-bottom: 30px;
}
.col-50{
  width: 100%;
  max-width: 49%;
}
.avatar-box{
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #e2e5ec;
  border-radius: 13px;
  margin-bottom: 30px;
  padding: 15px;
}
.name-surname{margin: 5px 0}
.avatar-box img{width: 130px;height: 130px; margin: auto}
.add-avatar{
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
}
.relative{position: relative}
.input-icons{
  position: relative;
  width: 100%;
}
.in-input{
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  color: var(--active-color);
}
</style>
