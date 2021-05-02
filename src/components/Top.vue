<template>
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">One</p>
            ここにOneの何かを出す
          </div>
          <div class="tile is-child box">
            <p class="title">Two</p>
            <Post />
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">テーブルサンプル</p>
            <Table />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Table from '@/components/Table.vue';
import Post from '@/components/Post.vue';

export default{
  name: "Top",
  components: {
    Post,
    Table
  }
}
</script>
