<template>
  <div class="contact-us">
    <div class="contact-container" :style="styleContactContainer" @resize="handleResize($event)">
      <transition name="show-right">
        <div
          v-if="showMessage"
          class="contact-container__notification"
          :style="isSuccess ? styleSucess : styleError"
        >
          <div class="icon mr-4">
            <Success v-if="isSuccess" />
            <Error v-else />
          </div>
          <span v-html="message" style="display: flex; flex-direction: column;">
          </span>
        </div>
      </transition>
      <div class="contact__side-left">
        <p class="contact-side__title py-3 mb-3" :style="styleP">Nhận tư vấn hỗ trợ</p>
        <!-- eslint-disable-next-line vue/no-unused-vars -->
        <ValidationObserver
          ref="observer"
          class="contact-side-left"
          v-slot="{ invalid }"
          tag="div"
        >
          <section class="section p-0">
            <div class="mb-4">
              <BInputWithValidation
                rules="required"
                type="text"
                label="Họ Tên"
                name="name"
                placeholder="Nhập tên của bạn ..."
                v-model="name"
                :disable="loading"
              />
            </div>

            <div class="mb-4">
              <BInputWithValidation
                rules="required|numeric"
                type="text"
                name="phone"
                label="Số điện thoại"
                v-model="phone"
                :disable="loading"
                placeholder="Nhập số điện thoại của bạn ..."
              />
            </div>

            <div class="mb-4">
              <BInputWithValidation
                rules="required"
                name="subject"
                placeholder="Nhập vào nội dung bạn muốn hỗ trợ ..."
                type="textarea"
                label="Nội dung cần hỗ trợ"
                v-model="subject"
                :disable="loading"
              />
            </div>

            <div class="buttons">
              <b-button
                class="button is-success"
                @click="submit()"
                :disabled="invalid || loading"
              >
                <loading v-if="loading" />
                <span v-else>Gửi thông tin</span>
              </b-button>

              <b-button class="button" @click="resetForm">
                <span>Reset</span>
              </b-button>
            </div>
          </section>
        </ValidationObserver>
      </div>
      <p class="contact-side__title py-3 my-3" :style="styleP">chúng tôi trên google map</p>
      <div class="contact__side-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.4911878713538!2d106.06453591554185!3d20.279926186408797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136754b6af1b95d%3A0xac4ec23fd4188177!2sTAM%20QUANG!5e0!3m2!1svi!2s!4v1614127124824!5m2!1svi!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          allow
        ></iframe>
      </div>
    </div>
    <div class="is-flex is-full contact-address mx is-flex-direction-column">
      <div class="is-flex-grow-1">
        <div class="column mt-2">
          <Address address-name="Tòa nhà <span style='font-weight: bold;'><span style='color: #4E3284; '>FA</span><span style='color: #FF5200'>DI</span> TOWER</span>, Tam Quang,Xã Yên Thắng, Huyện Ý Yên,Tỉnh Nam Định."/>
        </div>
        <div class="column mt-2">
           <Address 
              address-name="Ngã tư T50, Đường Nguyễn Tất Thành - Phường Tích Sơn - Thành phố Vĩnh Yên - Vĩnh Phúc."
              link-to-map="https://goo.gl/maps/GuFaaNEWNA2q7YN47"
            />
        </div>
      </div>
      <div class="is-flex-grow-1">
        <div class="column mt-2">
           <Address 
              address-name="Ô BT 1 Khu Đô Thị Hòn Cặp Bè, Bạch Đằng, Thành Phố Hạ Long, Tỉnh Quảng Ninh (CQ)"
              link-to-map="https://goo.gl/maps/WfyYYjmga7vzDv7HA"
            />
        </div>
        <div class="column mt-2">
          <Address 
              address-name="125/7 Trường Chinh, Tân Thới Nhất, Quận 12, TP. HCM."
              link-to-map="https://goo.gl/maps/QExyrvN2yEfH35hTA"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BInputWithValidation from "./app/BInputWithValidation.vue";
import Loading from "./app/Loading.vue";
import Success from "./app/icons/Success.vue";
import Error from "./app/icons/Error.vue";
import Address from './app/Address.vue';

const API_MAILER_ENDPOINT = "http://localhost:3000/success";
const DOMAIN = window.location.hostname;

export default {
  name: "BuefyForm",
  components: {
    Loading,
    ValidationObserver,
    BInputWithValidation,
    Success,
    Error,
    Address,
  },
  data: () => ({
    name: "",
    phone: "",
    subject: "",
    loading: false,
    showMessage: false,
    isSuccess: false,
    message: "",
    width: window.innerWidth,
  }),
   mounted()  {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    styleError() {
      const style = {};
      style.border = `1px solid #ED1B24 !important`;
      style.borderLeft = `5px solid #ED1B24 !important`;
      style.color = "#ED1B24 !important";
      return style;
    },
    styleSucess() {
      const style = {};
      style.border = `1px solid #25AE88 !important`;
      style.borderLeft = `5px solid #25AE88 !important`;
      style.color = "##25AE88 !important";
      return style;
    },
    styleContactContainer() {
      const style = {}
      style.flexDirection = this.width && this.width < 750 ? 'column' : 'row !important'
      style.width      = this.width && this.width < 750 ? 'auto' : '100%'
      style.height = this.width && this.width < 750 ? '800px' : 'auto'
      style.padding = this.width && this.width < 750 ? '0 15px 15px 15px !important' : '15px'
      style.margin = this.width && this.width < 750 ? '10px' : '0 5px !important'
      return style
    },
    styleP() {
      const style = {}
      style.display = this.width && this.width < 750 ? 'block' : 'none'
      return style
    }
  },
  methods: {
    handleResize(event) {
      this.width = event.currentTarget.innerWidth;
      console.log(this.width);
    },
    async submit() {
      const result = await this.$refs.observer.validate();
      if (!result) {
        this.loading = false;
        return;
      }
      this.loading = true;
      fetch(API_MAILER_ENDPOINT)
        .then(res => res.json())
        .then(data => {
          if (data.success === 1) {
            this.showMessage = true;
            this.isSuccess = true;
            this.message =
              "Gửi thông tin thành cồng, chúng tôi sẽ liên hệ sớm nhất với bạn, cảm ơn ban !!";
            this.resetForm();
            setTimeout(() => {
              this.showMessage = false;
            }, 3000);
          } else {
            this.showMessage = true;
            this.isSuccess = false;
            this.message =
              'Đã có lỗi xảy ra, vui lòng thử lại sau :( !';
            setTimeout(() => {
              this.showMessage = false;
            }, 7000);
          }
        })
        .catch(err => {
          this.showMessage = true;
          this.isSuccess = false;
          this.message =
            'Đã có lỗi xảy ra, vui lòng thử lại sau :( !';
          setTimeout(() => {
            this.showMessage = false;
          }, 7000);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    resetForm() {
      this.name = "";
      this.phone = "";
      this.subject = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>

<style lang="scss" scoped>

.address-container {
  color: #031D35;
  font-size: 16px;
  position: relative;
  left: 0;
  .address-name {
      font-size: 13px;
      line-height: 1.5;
      font-weight: 500;
  }
  .location {
      width: 40px;
      height: 40px;
  }
}
.go-to-map {
    padding: 4px 4px 4px 6px !important;
    background: #2469c4;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    font-size: 12px !important;
    &:hover {
        background: #45b4e4 !important;
        transition: background 0.3s;
    }
}


.contact-us {
  width: 100%;
  .contact-address {
    .column {
      width: 100%;
      height: auto;
    }
  }
}

.contact-side__title {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #e6e3e3a2;
  text-transform: uppercase;
  display: none;
}

.show-right-enter-active,
.show-right-leave-active {
  transition: all 0.3s;
}
.show-right-enter, .show-right-leave-to /* .show-right-leave-active below version 2.1.8 */ {
  opacity: 0.5;
  opacity: 0.5;
  transform: translateX(240px);
}

.contact-address {
  width: 100%;
}

.contact-container {
  display: flex;
  background-image: linear-gradient(to right, #c5adf1, #a5725e);
  &__notification {
    position: fixed;
    width: 240px;
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border-radius: 5px;
    background-color: #f2f1f0;
    top: 100px;
    right: 30px;
    z-index: 999999;
    .icon {
      width: 32px;
    }
    span {
      font-size: 14px;
      a {
        margin-top: 5px;
        text-decoration: none;
        &:hover {
          color: blue;
          transition: color 0.3s;
        }
      }
    }
  }
  .contact__side-left {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .contact__side-right {
    flex: 1;
    margin-left: 5px;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    .contact-side__title {
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      border-bottom: 1px solid #e6e3e3a2;
      padding: 10px 0;
      text-transform: uppercase;
      // display: none;
    }
    iframe {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 2px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}


</style>
