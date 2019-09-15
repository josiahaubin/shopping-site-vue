<template>
  <div class="game col-4 border rounded" @click="viewGame()">
    <h4>{{gameProps.title}}</h4>
    <img :src="gameProps.coverImg" class="img-fluid" />
    <h5>${{gameProps.price}} - ESRB:{{gameProps.rating}}</h5>
  </div>
</template>


<script>
export default {
  name: "game",
  props: ["gameProps"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    viewGame() {
      this.$router.push({
        name: "game",
        params: { gameId: this.gameProps._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
p {
  text-align: left;
}
.game {
  cursor: pointer;
}
</style>