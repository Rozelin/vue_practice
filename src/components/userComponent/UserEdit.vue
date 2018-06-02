<template>
  <div class="row">
    <div class="col-md-6 col-offset-3">
      <h2>Edit user details. User {{userId}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: this.$route.params.id
      }
    }
  }
</script>
