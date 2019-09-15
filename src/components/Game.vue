<template>
  <div class="game col-4 border rounded">
    <h4>{{gameProps.title}}</h4>
    <img :src="gameProps.coverImg" class="img-fluid" />
    <h5>${{gameProps.price}} - ESRB:{{gameProps.rating}}</h5>
    <p>{{gameProps.description}}</p>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
p {
  text-align: left;
}
</style>