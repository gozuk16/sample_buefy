<template>
  <div class="post">
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Post',
  computed: {
    //return this.$store.state.posts
    ...mapState(['posts'])
  },
  mounted () {
    this.$store.dispatch('getPosts')
  },
  methods: {
    ...mapActions(['getPosts'])
  }
}
</script>
