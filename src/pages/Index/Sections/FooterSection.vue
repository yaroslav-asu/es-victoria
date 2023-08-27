<template>
  <div class="contact_section">
    <div class="limiter">
      <div class="col">
        <p class="col_title">
          {{ $t('footer.support') }}
        </p>
        <a class="text" href="">{{ $t('footer.contactUs') }}</a>
        <a class="text" href="">{{ $t('footer.deliveryAndPayment') }}</a>
        <p class="col_title">
          {{ $t('footer.account') }}
        </p>
        <a class="text" href="">{{ $t('footer.login') }}</a>
        <a class="text" href="">{{ $t('footer.deliveryAndPayment') }}</a>
      </div>
      <div class="col">
        <p class="col_title">
          {{ $t('footer.clothes') }}
        </p>
        <div class="row">
          <div class="col">
            <a class="text" href="">{{ $t('clothes.tshorts') }}</a>
            <a class="text" href="">{{ $t('clothes.shoes') }}</a>
            <a class="text" href="">{{ $t('clothes.shorts') }}</a>
            <a class="text" href="">{{ $t('clothes.accessories') }}</a>
            <a class="text" href="">{{ $t('clothes.bags') }}</a>
          </div>
          <div class="col">
            <a class="text" href="">{{ $t('clothes.underwear') }}</a>
            <a class="text" href="">{{ $t('clothes.jewelry') }}</a>
            <a class="text" href="">{{ $t('clothes.watches') }}</a>
            <a class="text" href="">{{ $t('clothes.jeansAndTrousers') }}</a>
          </div>
        </div>
      </div>
      <div class="col contact_col">


        <div class="col">
          <p class="col_title">
            {{ $t('footer.ourAddresses') }}
          </p>
          <p class="text">
            {{ $t('footer.firstAddress') }}
            <br>
            {{ $t('footer.beograd') }}
          </p>
          <p class="text">
            {{ $t('footer.secondAddress') }}
            <br>
            {{ $t('footer.novisad') }}
          </p>
        </div>

      </div>
      <div class="col contact_col">
        <div class="col">
          <p class="col_title">
            {{ $t('footer.contactNumbers') }}
          </p>
          <a href="tel:+381-64-0000000" class="text">
            +381-64-0000000
          </a>
          <a href="tel:+381-64-0000001" class="text">
            +381-64-0000001
          </a>
        </div>

      </div>
    </div>

  </div>
  <footer class="footer">
    <div class="limiter">
      <div class="payment_methods">
        <img src="~/assets/footer/payment/mir.svg" alt="Payment system">
        <img src="~/assets/footer/payment/visa.svg" alt="Payment system">
        <img src="~/assets/footer/payment/mastercard.svg" alt="Payment system">
        <img src="~/assets/footer/payment/dolyame.svg" alt="Payment system">
        <img src="~/assets/footer/payment/tinkoff.svg" alt="Payment system">
        <img src="~/assets/footer/payment/sberpay.svg" alt="Payment system">
        <img src="~/assets/footer/payment/split.svg" alt="Payment system">
        <img src="~/assets/footer/payment/russianPost.svg" alt="Payment system">
        <img src="~/assets/footer/payment/ems.svg" alt="Payment system">
        <img src="~/assets/footer/payment/cdek.svg" alt="Payment system">
      </div>
      <div class="row">
        <p class="copyright">
          © ES VICTORIA, 2023
        </p>
        <LanguageSwitcher/>
      </div>


    </div>
  </footer>
</template>

<script>
import {defineComponent} from 'vue'
import LanguageSwitcher from "src/composnents/LanguageSwitcher.vue";

export default defineComponent({
  name: "FooterSection",
  components: {LanguageSwitcher},
  data() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.contact_section {
  border-top: 1px solid #eaeaea;

  .limiter {
    display: flex;
    justify-content: space-between;
    padding-top: 3.6rem !important;
    padding-bottom: 8.1rem !important;


    .col {
      display: flex;
      flex-direction: column;
      gap: 15px;

      &.contact_col {
        justify-content: center;
        align-items: center;

        .col_title {
          font-size: 18px;
        }

        .text {
          font-size: 16px;
        }

        .col {
          flex-grow: unset;
        }

      }

      .col_title {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }

      .text {
        font-size: 14px;
        line-height: 17px;
        color: rgba(#000000, 0.6);
      }
    }
  }
}

.footer {
  background-color: rgba(#000000, 0.05);
  padding: 60px 0;

  .limiter {
    .payment_methods {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-bottom: 25px;
    }

    .row {
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    //.copyright {
    //  text-align: center;
    //}
  }
}
</style>
