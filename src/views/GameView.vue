<template>
  <div class="game-view container-fluid">
    <div class="row">
      <div class="offset-3 col-6 bg border rounded">
        <h4>{{game.title}}</h4>
        <img :src="game.coverImg" class="img-fluid" />
        <h5 class="mt-1">${{game.price}} - ESRB:{{game.rating}}</h5>
        <p>{{game.description}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "game-view",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getGameById", { gameId: this.$route.params.gameId });
  },
  computed: {
    game() {
      return this.$store.state.activeGame;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
p {
  text-align: left;
  padding: 10px;
}
.bg {
  background-color: lightgray;
}
</style>