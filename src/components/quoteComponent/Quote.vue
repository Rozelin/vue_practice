<template>
  <div>
    <p>Some additionla data before slot</p>
    <slot name="title"></slot>
    <p>And even more data after slot</p>
    <hr>
    <slot name="content"></slot>
    <slot></slot>
    <slot name="subtitle">This is a default value for unused slot</slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    padding: 20px;
    margin-bottom: 20px;
    background: pink;
    box-shadow: 0 0 10px -1px rgba(0,0,0,.8);
    border-radius: 10px;
    text-align: center;
    margin: auto;
  }
  /* Styles for content inside SLOT shall be passed in component which contains slot */
  h3 {
    color: red;
  }
</style>
