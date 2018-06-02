<template>
  <div>
    <h3>New content</h3>
    <slot name="title"></slot>
    <p>normally when componen is abandoned, this get destroyed, and all the data inside is destroyed as well. If you need to preserve componen state, use keep-alive> directive around your component</p>
      <p>But within keep-alive directive Destroyed life hook is lost. Instead of it we can use Activated and Inactivated lifehooks.</p>
    <!-- <button @click="increment">Increment</button> with classical function <br>
    <button @click="decrement">Decrement</button> with classical function <br> -->
    <button @click="incrementMutation">Increment</button> with State Mutation <br>
    <button @click="decrementMutation">Decrement</button> with State Mutation <br>



    <p>{{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])
  },
  methods: {
    // increment() {
    //   this.$store.state.counter++;
    //   this.$store.state.click++;
    // },
    // decrement() {
    //   this.$store.state.counter--;
    //   this.$store.state.click++;
    // },
    ...mapMutations([
      'incrementMutation',
      'decrementMutation'
    ])
  },
  destroyed() {
    console.log('Destroyed');
  },
  deactivated() {
    console.log("Deactivated");
  },
  activated() {
    console.log('Activated');
  }
}

</script>
