<template>
  <ValidationProvider :vid="vid" :name="$attrs.name || $attrs.label" :rules="rules">
      <b-field
        slot-scope="{ errors, valid }"
        v-bind="$attrs"
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        :message="errors"
      >
        <b-input v-model="innerValue" v-bind="$attrs" class="b-input"></b-input>
      </b-field>
  </ValidationProvider>
</template>

<script>

import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal;
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>


<style lang="scss" scoped>
.input {
  background: green !important;
  width: 320px;
  border: 1px solid green;

}

</style>