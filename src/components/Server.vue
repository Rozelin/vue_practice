<template>
  <li class="clearfix">
    Server # {{ id }}.
    Status: <span :class=" status === 'Normal' ? 'text-info' : 'text-danger'">{{ status }}</span>
    <a class="btn btn-primary float-right" @click="$emit('resetStatus', 'Normal')" :disabled=" status === 'Normal' ? true : false ">Reset status</a>

    <div class="form-group">
      <label for="sel1">Set status:</label>
      <select class="form-control" :id="id" @change="$emit('resetStatus', $event.target.value)">
        <option>Critical</option>
        <option>Unknown</option>
        <option>Urgent</option>
        <option>Some funny status</option>
      </select>
    </div>

  </li>
</template>

<script>
  export default {
    props: {
      'id': Number,
      'status': String
    }
  }
</script>
