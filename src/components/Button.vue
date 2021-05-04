<template>
  <section>
    <div class="columns">
      <div class="column is-four-fifths">
        <p class="title">One</p>
      </div>
      <div class="column level-right">
        <div class="buttons">
          <b-button v-on:click="reload"
                    type="is-info is-light" size="is-small" icon-right="reload" />
        </div>
      </div>
    </div>

    <div>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    }
  },
  mounted: function() {
    //this.reload();
  },
  methods: {
    reload() {
      this.msg = "押されたよ"
    },
  }
}
</script>
