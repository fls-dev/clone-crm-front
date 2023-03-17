<template>
  <div class="page-head">
    <h1 class="title-page">{{ $t("title_page.company") }}</h1>
  </div>
  <div class="top-head">
    <p><i class="fa-light" :class=this.$route.meta.iconPage></i> {{ $t("company.name_company") }}: <span class="company-name">{{name_company}}</span></p>
  </div>
  <div class="body-content">
<!-- name_company   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.type_of_ownership') }}</label>
          <input type="text" :value="type_of_ownership" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.personnel_VAT') }}</label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            VAT UE
          </label>
          <label class="check-lab"><input class="checkbox" type="checkbox" :value="personnel_VAT">
            {{ $t('company.employees') }}
          </label>
      </div>
    </div>
<!-- nip   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.nip') }}</label>
        <input type="text" :value="nip" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.tax_system') }}</label>
        <input type="text" :value="not_specified" disabled>
      </div>
    </div>
<!-- company   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.name_company') }}</label>
        <input type="text" :value="name_company" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.krs') }}</label>
        <input type="text" :value="krs" disabled>
      </div>
    </div>
<!-- Street   -->
    <div class="line">
      <div class="l-inp">
        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.street') }}</label>
            <input type="text" :value="street" disabled>
          </div>
          <div>
            <label>{{ $t('company.house') }}</label>
            <input type="text" :value="house" disabled>
          </div>
          <div class="not-mb">
            <label>{{ $t('company.apartment') }}</label>
            <input type="text" :value="apartment" disabled>
          </div>
        </div>
      </div>
      <div class="r-inp">
        <label>REGON</label>
        <input type="text" :value="regon" disabled>
      </div>
    </div>
<!-- Street   -->
    <div class="line">
      <div class="l-inp">
        <div class="line-three-inp">
          <div>
            <label>{{ $t('company.index') }}</label>
            <input type="text" :value="index" disabled>
          </div>
          <div>
            <label>{{ $t('company.city') }}</label>
            <input type="text" :value="city" disabled>
          </div>
          <div class="not-mb">
            <label>{{ $t('company.country') }}</label>
            <input type="text" :value="country" disabled>
          </div>
        </div>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.phone') }}</label>
        <input type="text" :value="phone" disabled>
      </div>
    </div>
<!-- Surname   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.surname') }}</label>
        <input type="text" :value="surname" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.add_phone') }}</label>
        <input type="text" :value="add_phone" disabled>
      </div>
    </div>
<!-- name   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.name') }}</label>
        <input type="text" :value="name" disabled>
      </div>
      <div class="r-inp">
        <label>E-mail</label>
        <input type="text" :value="email" disabled>
      </div>
    </div>


    <p class="title-com">{{ $t('company.t_commercial') }}</p>

<!-- contract_number   -->
      <div class="line">
        <div class="l-inp">
          <label>{{ $t('company.contract_number') }}</label>
          <input type="text" :value="contract_number" disabled>
        </div>
        <div class="r-inp">
          <label>{{ $t('company.contract_pay_date') }}</label>
          <input type="text" :value="contract_pay_date" disabled>
        </div>
      </div>

<!-- service_cost   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.service_cost') }}</label>
        <input type="text" :value="service_cost" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.payment_form') }}</label>
        <input type="text" :value="payment_form" disabled>
      </div>
    </div>
<!-- service_cost   -->
    <div class="line">
      <div class="l-inp">
        <label>{{ $t('company.bank_details') }}</label>
        <input type="text" :value="bank_details" disabled>
      </div>
      <div class="r-inp">
        <label>{{ $t('company.bank_name') }}</label>
        <input type="text" :value="bank_name" disabled>
      </div>
    </div>
    <div class="section-input-bottom">
      <button>{{$t('company.btn')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCompany",
  data() {
    return {
      name_company: "Mia Consult Group",
      nip: "1000000032",
      not_specified: "not_specified",
      address: "",
      index: "",
      city: "",
      country: "",
      bank_details: "1324231412",
      bank_name: "",
      swift: "",
      company_is_auth: "",
      type_of_ownership:"Individual entrepreneur",
      street: "Vogla",
      house: "28",
      apartment: "Apartment",
      surname: "Surname",
      name: "Pavel",
      contract_number: "contract_number",
      contract_pay_date: "10",
      service_cost: "service_cost",
      personnel_VAT: "",
      krs: "krs",
      regon: "regon",
      phone:"phone",
      add_phone:"add_phone",
      email:"email",
      payment_form: "cash"
    }
  }
}
</script>

<style scoped>
.section-input input:not([type="checkbox"]){
  padding: 0px 15px;
  margin-bottom: 30px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.section-input label:not(.check-lab){
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}

.title-com{font-size: 1.2rem;margin: 0 0 30px 0;}

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
.line{
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}
.l-inp, .r-inp{
  width: 100%;
  max-width: 49%;
}

.line input:not([type="checkbox"]){
  padding: 0px 15px;
  margin-top: 5px;
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  outline-color: var(--active-color);
}
.line label:not(.check-lab){
  display: block;
  text-align: left;
  color: var(--active-color);
  margin-bottom: 5px;
  font-size: .8rem;
}
.checkbox{
  margin-right: 5px;
}
.check-lab {
  color: var(--font-color);
  cursor: pointer;
  display: block;
  margin: 0 15px 0 0;
  font-size: .8rem;
}

@media screen and (max-width: 770px) {
  .l-inp, .r-inp{
    max-width: 100%;
  }
  .title-com{
    font-size: 1.2rem;
    margin: 15px 0;
  }
  .line{margin-bottom: 15px;gap: 15px;}
  .line-three-inp,.line{flex-wrap: wrap}
  .line-three-inp div:not(.not-mb){max-width: 100%; margin-bottom: 15px;}
  .line-three-inp div{max-width: 100%;}
    .section-input-bottom{text-align: center}
}
</style>
