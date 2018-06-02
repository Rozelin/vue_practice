<template>
  <div>
    <div>Blue  text content</div>
    <button class="btn btn-default" @click="navigate"> Blue redirect Button</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push('/user/user-form');
    }
  }
}

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
