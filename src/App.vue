<template>
    <div class="container">
      <h1>Router</h1>
      <hr>
      <app-navigation></app-navigation>
      <br><br>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  import Navagation from './components/Navigation.vue';

  export default {
    components: {
      'app-navigation': Navagation
    }
  }
</script>

<style scoped>
.fade-enter { opacity: 0;  }
.fade-enter-active { transition: opacity 1s;  }
.fade-leave {}
.fade-leave-active { transition: opacity 1s;    opacity: 0; }

.slide-enter-active { animation: slide-in 1s ease-out forwards; }
.slide-leave-active { animation: slide-out 1s ease-out forwards; }
@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
