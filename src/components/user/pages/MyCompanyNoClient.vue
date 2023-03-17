<template>
  <div class="page-head">
    <h1 class="title-page">{{ $t("title_page.company") }}
    </h1>
  </div>
  <div class="top-head">
    <h2><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("title_page.company") }}</h2>
    <button class="connect-company">{{ $t('company.company_is_auth') }}</button>
  </div>
  <div class="body-content">
    <div class="section-input">
      <label>{{ $t('company.name_company') }}</label>
      <input type="text" v-model=name_company :placeholder="$t('company.name_company')">
      <label>{{ $t('company.nip') }}</label>
      <input type="text" v-model="nip" :placeholder="$t('company.nip')">
      <label>{{ $t('company.address') }}</label>
      <input type="text" v-model="address" :placeholder="$t('company.address')">

      <div class="line-three-inp">
        <div>
          <label>{{ $t('company.index') }}</label>
          <input type="text" v-model="index" :placeholder="$t('company.index')">
        </div>
        <div>
          <label>{{ $t('company.city') }}</label>
          <input type="text" v-model="city" :placeholder="$t('company.city')">
        </div>
        <div>
          <label>{{ $t('company.country') }}</label>
          <input type="text" v-model="country" :placeholder="$t('company.country')">
        </div>
      </div>

      <label>{{ $t('company.bank_details') }}</label>
      <input type="text" v-model="bank_details" :placeholder="$t('company.bank_details')">
      <label>{{ $t('company.bank_name') }}</label>
      <input type="text" v-model="bank_name" :placeholder="$t('company.bank_name')">
      <label>{{ $t('company.swift') }}</label>
      <input type="text" v-model="swift" :placeholder="$t('company.swift')">
    </div>
    <div class="section-input-bottom">
      <button @click="update">{{$t('company.btn')}}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {settings} from "@/setting";
import {useAuthStore} from "@/stores";
import {createToaster} from "@meforma/vue-toaster";

const toaster = createToaster();
const user = useAuthStore().getDataUser

export default {
  name: "MyCompany",
  data() {
    return {
      name_company: "",
      nip: "",
      address: "",
      index: "",
      city: "",
      country: "",
      bank_details: "",
      bank_name: "",
      swift: "",
      company_is_auth: "",
    }
  },
  methods:{
    getInfo(){
      axios.get(`${settings.serverUrl}/company/get/${useAuthStore().userId}`).then(res => {
        if (res.status === 200 && res.data.status === true) {
          this.nip = res.data.company.nip
          const info = JSON.parse(res.data.company.info);
          this.name_company = info.name_company
          this.address = info.address
          this.index = info.index
          this.city = info.city
          this.country = info.country
          this.bank_details = info.bank_details
          this.bank_name = info.bank_name
          this.swift = info.swift
        }else{
         console.log("else")
         console.info(res)
        }
      }).catch(function (e) {
        if(e.response.status === 401){
          console.info('handler 401!!')
          useAuthStore().refreshTokens()
        }
        console.log(e)
      })
    },
   async update(){
      await axios.post(`${settings.serverUrl}/company/create`, {
        userId: user.id,
        nip: this.nip,
        info: JSON.stringify({
          name_company: this.name_company,
          nip: this.nip,
          address: this.address,
          index: this.index,
          city: this.city,
          country: this.country,
          bank_details: this.bank_details,
          bank_name: this.bank_name,
          swift: this.swift,
        })
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
        toaster.error("error created",{
          position: "top",
          duration: 3000
        });
      })
    }
  },
  mounted() {
   this.getInfo()
  }
}
</script>

<style scoped>
.section-input{
  width: 100%;
  max-width: 50%;
}
.section-input input{
  padding: 0px 15px;
  margin-bottom: 30px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.section-input label{
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}
.top-head{
  background: #fff;
  border-radius: 5px;
  padding: 7px 20px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.top-head button, .section-input-bottom button{
  padding: 10px 15px;
  background: var(--btn-back-second);
  color: #fff;
  font-size: 0.8rem;
  line-height: 0.8rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.top-head h2{
  font-size: 1.2rem;
  color: #48465b;
  font-weight: 500;
  margin: 0 35px 0 0;
}
.top-head i{color: var(--active-color)}
.section-input input:focus{
  outline: none;
  border-bottom: 1px solid var(--active-color);
}
.line-three-inp{
  display: flex;
  justify-content: space-between;
}
.line-three-inp div{
  width: 100%;
  max-width: 32%;
}
@media screen and (max-width: 770px) {
  .section-input{
    max-width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .line-three-inp{flex-wrap: wrap}
  .line-three-inp div{max-width: 100%}
  .section-input-bottom{text-align: center}
}
@media screen and (max-width: 400px) {
  .top-head h2{ margin: 0 0 15px 0; display: block;text-align: center; width: 100%}
  .top-head{justify-content: center}
}
</style>
