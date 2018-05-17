<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据预测</h2>
      <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">
        购买数量：
      </div>
      <div class="sales-board-line-right">
        <v-counter></v-counter>
      </div>
    </div>
  </div>
</template>

<script>
  import VCounter from '../../components/base/counter'
  export default {
    components: {
      VCounter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

