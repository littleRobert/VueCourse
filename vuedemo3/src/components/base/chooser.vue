<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <ul>
        <li
          v-for="(item, index) in choices"
          @click="chosenSeletcion(index)"
          :class="{ active:index === nowIndex }"
          :title="item.label"
        >{{ item.label }}</li>
      </ul>
    </div>
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
      nowIndex:0
    }
  },
  //获取自定义属性的值
  props: {
    choices: {
      type: Array,
      default: [{
        label: 'null',
        value: 0
      }]
    }
  },
  //方法
  methods: {
    chosenSeletcion (index) {
      this.nowIndex = index;
      this.$emit('on-change', this.choices[index])
    }
  }
}
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>


