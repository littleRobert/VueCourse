<template>
  <div>
    <div class="dialog-wrap">
      <transition name="drop-back">
        <div class="dialog-cover" v-if="isShow" @click="closeMyself" ></div>
      </transition>
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
  .drop-enter-active, .drop-back-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active, .drop-back-leave-active {
    transition: all .3s ease;
  }
  .drop-back-enter-to, .drop-back-leave{
    opacity: 1;
  }
  .drop-enter {
    transform: translateY(-100px);
    opacity: 0;
  }
  .drop-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 450px;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -225px;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>


