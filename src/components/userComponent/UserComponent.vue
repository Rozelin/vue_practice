<template>
  <div class="row component-container">
    <div class="col-md-12"><h1>All users</h1></div>

    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="user in allUsers" :key="user.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{user.name}} aka <i>{{user.username}}</i></h5>
          <h6 class="card-subtitle mb-2 text-muted">{{user.company.name}}</h6>
          <p class="card-text">{{user.company.catchPhrase}}</p>
          <p class="card-text">{{user.company.bs}}</p>
          <router-link :to="`/user/${user.id}/edit`" class="card-link" exact>Edit profile</router-link>
          <br>
          <router-link :to="{ name: 'Userdetails',
                              params: { id: user.id },
                              query: { name: user.name,
                                       username: user.username,
                                       address: { city: user.address.city,
                                                  street: user.address.street,
                                                  suite: user.address.suite },
                                       phone: user.phone }}"
                              class="card-link" exact>View profile</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        allUsers: []
      };
    },
    created() {
      this.$http.get('/src/assets/users.json')
        .then(response => {
          return response.json();
        }, error => {
          console.log(error);
        })
        .then( data => {
          this.allUsers = data;
        });
    }
  }
</script>
