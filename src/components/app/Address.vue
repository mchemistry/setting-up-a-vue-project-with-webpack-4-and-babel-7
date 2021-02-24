<template>
  <div class="is-flex is-align-items-center address-container">
     <Location style="width: 20px;" />
    <span class="ml-1 address-name"><span v-html="addressName"></span></span>
      <a :href="linkToMap" class="mx-1 go-to-map">
        MAP&#x2197;
      </a>
  </div>
</template>

<script>
import Location from "./icons/Location.vue";
export default {
  components: {
    Location,
  },
  props: {
      addressName: {
          type: String,
          default: ''
      },
      linkToMap: {
          type: String,
          default: 'https://www.google.com/maps?ll=20.279926,106.066725&z=16&t=m&hl=vi&gl=US&mapclient=embed&daddr=TAM+QUANG+Tam+Quang+%C3%9D+Y%C3%AAn+Nam+%C4%90%E1%BB%8Bnh@20.2799262,106.0667246'
      }
  }
};
</script>


<style lang="scss" scoped>
.address-container {
    color: #031D35;
    font-size: 15px;
    position: relative;
    left: 0;
    .address-name {
        font-size: 12px;
        line-height: 1.5;
    }
    .location {
        width: 40px;
        height: 40px;
    }
}
.go-to-map {
    padding: 4px 4px 4px 6px;
    background: #2469c4;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    font-size: 12px;
    &:hover {
        background: #45b4e4;
        transition: background 0.3s;
    }
}
</style>