<template>
  <div class="hello">
    <div data-testid="countValue">
      {{ count }}
    </div>
    <button @click="decrement" data-testid="decrementButton">Decrease</button>
    <button @click="increment" data-testid="incrementButton">Increase</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
