<template>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a href="" class="nav-link" @click="goBack">Back</a></li>
    <router-link to="/"
                 tag="li"
                 class="nav-item"
                 active-class="active"
                 exact> <a class="nav-link">Home</a>
          </router-link>
    <router-link to="/user/user-form"
                 tag="li"
                 class="nav-item"
                 active-class="active"
                 exact> <a class="nav-link">User Form</a>
          </router-link>
    <router-link to="/user/test-form"
                 tag="li"
                 class="nav-item"
                 active-class="active"
                 exact> <a class="nav-link">Test Form</a>
         </router-link>
     <router-link to="/server-details"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact> <a class="nav-link">Servers</a>
        </router-link>
    <router-link to="/user"
                 tag="li"
                 class="nav-item"
                 active-class="active"
                 exact> <a class="nav-link">User</a>
         </router-link>
     <router-link to="/quotes"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact> <a class="nav-link">Quotes</a>
          </router-link>
      <router-link to="/new-quotes"
                   tag="li"
                   class="nav-item"
                   active-class="active"
                   exact> <a class="nav-link">New Quotes</a>
           </router-link>
     <router-link to="/filters"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact> <a class="nav-link">Filters</a>
          </router-link>
      <router-link :to="{ name: 'Animations', hash: '#data'}"
                   tag="li"
                   class="nav-item"
                   active-class="active"
                   exact> <a class="nav-link">Animations</a>
           </router-link>

  </ul>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
