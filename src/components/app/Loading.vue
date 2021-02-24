<template>
  <div class="three-dot-loading">
    <span class="three-dot-loading--bounce1"></span>
    <span class="three-dot-loading--bounce2"></span>
    <span class="three-dot-loading--bounce3"></span>
  </div>
</template>

<style lang="scss" scoped>
@keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.three-dot-loading {
  display: flex;

  span {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.4rem;
    border-radius: 100%;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
    animation: bouncedelay 1.2s infinite ease-in-out both;
  }

  &--bounce1 {
    background-color: rgb(233, 48, 48);
    -webkit-animation-delay: (-0.32s) !important;
    animation-delay: (-0.32s) !important;
  }

  &--bounce2 {
    background-color: #f78;
    -webkit-animation-delay: (-0.16s) !important;
    animation-delay: (-0.16s) !important;
  }

  &--bounce3 {
    background-color: #f00;
  }
}
</style>