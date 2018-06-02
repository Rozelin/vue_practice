<template>
  <div class="row">
  <div class="col-12">
    <h2>Animations</h2>
    <hr>
    <div class="form-group">
      <button class="btn btn-default" @click="show = !show">Show alert</button>
    </div>
    <transition name="fade">
      <div class="alert alert-info" v-if="show">This is some info</div>
    </transition>
    <transition name="fade" appear>
      <div class="alert alert-danger" v-if="show">This is some info</div>
    </transition>
    <transition name="slide" appear>
      <div class="alert alert-warning" v-if="show">This is some info</div>
    </transition>
    <transition
        appear
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
        >
      <div class="alert alert-info" v-if="show">This is some info</div>
    </transition>
  </div>
  <div class="col-12">
    <a class="btn btn-warning" @click="isConfirmed = true">Confirm Leave</a>
    <a href="#data" class="btn btn-info">Go to hashTag</a>
    <div class="highBlock"></div>
    <p id="data" class="alert alert-danger">Here you go!!</p>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        isConfirmed: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.isConfirmed) {
        next();
      }  else {
        if (confirm('Are you sure?')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>

<style scoped>
  .fade-enter { opacity: 0;  }
  .fade-enter-active { transition: opacity 1s;  }
  .fade-leave {}
  .fade-leave-active { transition: opacity 1s;    opacity: 0; }

  .slide-enter {}
  .slide-enter-active { animation: slide-in 1s ease-out forwards; }
  .slide-leave {}
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
  .highBlock {
    height: 700px;
  }
</style>
