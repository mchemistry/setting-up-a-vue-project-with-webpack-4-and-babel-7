<template>
  <div class="contact-container">
    <div class="contact__side-left">
      <p class="contact-side__title py-3 mb-3">
        Nhận tư vấn hỗ trợ
      </p>
      <ValidationObserver ref="observer" class="contact-side-left">
        <section class="section p-0" slot-scope="{ validate }">
          <div class="mb-4">
            <BInputWithValidation
              rules="required"
              type="text"
              label="Họ Tên"
              name="name"
              placeholder="Nhập tên của bạn ..."
              v-model="name"
            />
          </div>

          <div class="mb-4">
            <BInputWithValidation
              rules="required|numeric"
              type="text"
              name="phone"
              label="Số điện thoại"
              v-model="phone"
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
            />
          </div>

          <div class="buttons">
            <button class="button is-success" @click="validate().then(submit)" :disabled="errors.any()">
              <span>Submit</span>
            </button>

            <button class="button" @click="resetForm">
              <span>Reset</span>
            </button>
          </div>
        </section>
      </ValidationObserver>
    </div>
    <p class="contact-side__title py-3 my-3">
      chúng tôi trên google map
    </p>
    <div class="contact__side-right">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.4911878713538!2d106.06453591554185!3d20.279926186408797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136754b6af1b95d%3A0xac4ec23fd4188177!2sTAM%20QUANG!5e0!3m2!1svi!2s!4v1614127124824!5m2!1svi!2s"  style="border:0;" allowfullscreen="" loading="lazy" allow></iframe>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BInputWithValidation from "./app/BInputWithValidation.vue";
import Loading from "./app/Loading.vue";

export default {
  name: "BuefyForm",
  components: {
    Loading,
    ValidationObserver,
    BInputWithValidation,
  },
  data: () => ({
    name: "",
    phone: "",
    subject: "",
  }),
  methods: {
    submit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.name = "";
      this.phone = "";
      this.subject = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style lang="scss">
@import "~normalize.css";
@import "~reset-css/_reset.scss";
.contact-side__title {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #e6e3e3a2;
  text-transform: uppercase;
  display: none;
}

.contact-container {
  display: flex;
  width: 100%;
  height: auto;
  margin: 10px;
  border-radius: 5px;
  padding: 15px;
  background-image: linear-gradient(to right,#c5adf1, #a5725e );
  .contact__side-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    section {
      div {
        label {
          font-size: 14px;
          font-weight: 500;
        }
        .control {
          input {
            font-size: 14px;
          }
          textarea {
            font-size: 14px !important;
          }
        }
      }
      button {
        font-size: 14px;
        width: 100px;
      }
    }
  }
  .contact__side-right{
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
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
}

@media screen and (max-width: 600px) {
  .contact-side__title {
    display: block;
  }

  
  .contact-container {
    flex-direction: column;
    width: auto;
    padding: 0 15px 15px 15px !important;
    height: 800px !important;
    margin: 0 5px;

    .contact__side-left {
      margin-top: 10px;
    }

    .contact__side-right {
      margin: 10px 0;
    }
  }
}

* {
  box-sizing: border-box;
}

html body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
</style>
