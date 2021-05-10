<template>
  <div class="container">
    <div class="tile is-ancestor mt-5">
      <div class="tile is-12 is-parent">
        <div class="tile is-child box">
        <p class="title">Post Table</p>
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
              <b-switch v-model="props.row.flag" @input="onFlag($event, props.row.first_name)" true-value="True" false-value="False" :rounded="false" type="is-success" passive-type="is-danger">
                {{ props.row.flag }}
              </b-switch>
            </b-table-column>
          </b-table>
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
    onFlag: function(event, serviceName) {
      console.log('onFlag');
      console.log(event);
      console.log(serviceName);
/*
      console.log(event.target);
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
      console.log(event.target.type);
*/
    },
  }
});
</script>
