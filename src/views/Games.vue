<template>
  <div class="games container-fluid">
    <h3 class="my-4">Current Titles</h3>
    <div class="row">
      <Game v-for="game in games" :key="game._id" :gameProps="game" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from "../components/Game";
export default {
  name: "games",
  data() {
    return {};
  },
  mounted() {
    this.getGames();
  },
  computed: {
    games() {
      return this.$store.state.games;
    }
  },
  methods: {
    getGames() {
      this.$store.dispatch("getGames");
    }
  },
  components: { Game }
};
</script>
