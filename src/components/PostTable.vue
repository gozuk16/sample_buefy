<template>
  <div class="container">
    <div class="tile is-ancestor mt-5">
      <div class="tile is-12 is-parent">
        <div class="tile is-child box">
        <p class="title">Post Table</p>
        <b-table :data="data" :columns="columns" striped></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      data: [],
      columns: []
    }
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get('/data', {}) .then(response => { this.data = response.data })
      this.$api.get('/columns', {}) .then(response => { this.columns = response.data })
    },
  }
});
</script>
