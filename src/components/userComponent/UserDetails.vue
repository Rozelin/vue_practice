<template>
  <div class="row">
    <div class="col-md-12">
      <h1>User details: {{id}}</h1>

      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://placeimg.com/100/100/people">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }} aka {{ user.username }}</h5>
          <ul class="card-text">
            <p>User Address:</p>
            <li>City: {{ user.address.city }}</li>
            <li>Street: {{ user.address.street }}</li>
            <li>Suite: {{ user.address.suite }}</li>
            <li>Phone: {{ user.phone }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        user: this.$route.query
        }
     }
  }
</script>
