<template>
  <b-table :data="data" :columns="columns" bordered striped></b-table>
</template>

<script>
/*
export default ({
  data() {
    return {
      data: [],
      columns: [ ]
    }
  }
});
*/

import { mapState, mapActions } from 'vuex';

export default {
  name: 'data',
  computed: {
    //return this.$store.state.posts
    ...mapState(['data', 'columns'])
  },
  mounted () {
    this.$store.dispatch('getData')
  },
  methods: {
    ...mapActions(['getData'])
  }
}
</script>
