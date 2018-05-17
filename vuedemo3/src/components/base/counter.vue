<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="filtNumbert">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>
<script>

export default {
  //自定义组件
  components: {

  },
  //变量
  data () {
    return {
      number: this.min
    }
  },
  //获取自定义属性的值
  props: {
    max: {
      type: Number,
      default: 4
    },
    min: {
      type: Number,
      default: 1
    }
  },
  //方法
  methods: {
    filtNumbert () {
      let
    },
    minus () {
      if (this.number <= this.min) {
        return
      }else {
        this.number --
      }
    },
    add () {
      if (this.number >= this.max) {
        return
      }else {
        this.number ++
      }
    }
  }
}
</script>

<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float:left
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height:23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-align: center;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>


