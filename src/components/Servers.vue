<template>
  <div class="row">
    <div class="col-md-12">
        <ul class="list-group">
            <app-server class="list-group-item"
                    v-for="server in servers"
                    :id="server.id"
                    :status="server.status"
                    :key="server.id"
                    @resetStatus="server.status = $event">
            </app-server>
        </ul>
    </div>
  </div>
</template>

<script>
  import Server from './Server';

  export default {
    data: function() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Super'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Critical'},
          {id: 5, status: 'Normal'}
        ]
      }
    },
    components: {
      appServer: Server
    }
  }
</script>
