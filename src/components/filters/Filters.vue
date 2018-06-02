<template>
  <div class="row justify-content-center">
     <div class="col-6">
       <h2>Filters and Mixins and HHTP</h2>
      <p>{{ text | toUppercase | to-lowercase }}</p>
     </div>

     <div class="col-6">
         <h2>HTTP</h2>
         <div class="form-group">
           <label for="">Username</label>
           <input type="text" class="form-control" v-model="user.username">
         </div>
         <div class="form-goup">
           <label for="">Email</label>
           <input type="email" class="form-control" v-model="user.useremail">
         </div>
         <div class="form-group">
           <button type="button" class="btn btn-default" @click="submit">Submit</button>
         </div>
         <div class="form-group">
           <button type="button" class="btn btn-default" @click="fetchData">Fetch data</button>
         </div>
         <ul class="list-group">
           <li class="list-group-item" v-for="user in users">{{ user.username }} - {{ user.useremail}}</li>
         </ul>
       </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello there',
        user: {
          username: '',
          useremail: ''
        },
        users: []
      }
    },
    methods: {
      submit() {
        this.$http
          .post('newUser.json', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
        });
      },
      fetchData() {
        this.$http.get('newUser.json')
            .then(response => {
              return response.json();
            }, error => {
              console.log(error);
            })
            .then( data => {
              this.users = data;
              console.log(this.users);
            });
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>
