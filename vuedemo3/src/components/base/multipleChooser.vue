<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="item in selections">{{ item.label }}</li>
    </ul>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  //自定义组件
  components: {

  },
  //变量
  data () {
    return {

    }
  },
  //获取自定义属性的值
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  //方法
  methods: {

  }
}
</script>

<style scoped>

</style>


