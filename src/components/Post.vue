<template>
  <div class="post">
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function(){
      this.$api.get('/posts', {}) .then(response => { this.posts = response.data })
    },
  }
}
</script>
