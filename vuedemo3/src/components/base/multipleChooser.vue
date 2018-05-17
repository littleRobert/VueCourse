<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item, index) in selections"
        @click="toggleSelection(index)"
        :title="item.label"
        :class="{ active : checkActive(index) }"
      >{{ item.label }}</li>
    </ul>
    <div class=""></div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  //获取自定义属性的值
  props: {
    selections: {
      type: Array,
      default: [{
        label: '123',
        value: 0
      }]
    }
  },
  //变量
  data () {
    return {
      nowIndexes:[]
    }
  },
  //方法
  methods: {
    toggleSelection (index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)
      }else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index
        })
      }
      let nowSelections = _.map(this.nowIndexes, (idx) => {
        return this.selections[idx]
      })
      this.$emit('onchange', nowSelections)
    },
    //是否添加active
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
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


