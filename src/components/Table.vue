<template>
  <b-table :data="data" :columns="columns" bordered striped></b-table>
</template>

<script>
import axios from 'axios';

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
    getData: function(){
      const axiosRequest = axios.create({
        baseURL: 'http://localhost:3000/',
        responseType: 'application/json'  
      });
      axiosRequest.get('/data', {})
        .then(response => {
          this.data = response.data
        })
        .catch(err => {
          console.log('err:', err)
        });
      axiosRequest.get('/columns', {})
        .then(response => {
          this.columns = response.data
        })
        .catch(err => {
          console.log('err:', err)
        });
    },
  }
});
</script>
