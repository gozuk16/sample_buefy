<template>
  <!--b-table :data="data" :columns="columns" striped-->
  <b-table :data="data" striped>
    <b-table-column field="id" label="ID" v-slot="props">
      <span>{{ props.row.id }}</span>
    </b-table-column>
    <b-table-column field="first_name" label="First Name" v-slot="props">
      <span>{{ props.row.first_name }}</span>
    </b-table-column>
    <b-table-column field="last_name" label="Last Name" v-slot="props">
      <span>{{ props.row.last_name }}</span>
    </b-table-column>
    <b-table-column field="date" label="Date" v-slot="props">
      <span>{{ props.row.date }}</span>
    </b-table-column>
    <b-table-column field="gender" label="Gender" v-slot="props">
      <span>{{ props.row.gender }}</span>
    </b-table-column>
    <b-table-column centered field="flag" label="Flag" v-slot="props">
      <span class="tag" :class="type(props.row.flag)">{{ props.row.flag }}</span>
    </b-table-column>
  </b-table>
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
    type(value) {
      if (value == "True") {
        return 'is-success'
      } else if (value == "False") {
        return 'is-danger'
      } else {
        return 'is-warning'
      }

    }
  }
});
</script>
