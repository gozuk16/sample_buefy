<template>
  <b-table :data="data" :columns="columns" bordered striped></b-table>
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
