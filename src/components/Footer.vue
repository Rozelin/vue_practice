<template>
        <div class="row">
            <div class="col-md-12">
              <h1>FOOTER</h1>
                <br>
                <button class="btn btn-primary" @click="activeTab = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="activeTab = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="activeTab = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                  <component :is="activeTab"></component>
                </keep-alive>
            </div>
        </div>
</template>

<script>
    import Blue from './tabs/Blue.vue';
    import Green from './tabs/Green.vue';
    import Red from './tabs/Red.vue';

    export default {
      data() {
        return {
          activeTab: 'appRed'
        }
      },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
