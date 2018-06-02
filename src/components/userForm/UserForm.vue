<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <h2> File a complaint</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Mail</label>
          <input type="email"
                 class="form-control"
                 placeholder="Enter email"
                 v-model="userData.email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"
                 class="form-control"
                 placeholder="Password"
                 v-model.lazy="userData.password">
                 <small class="form-text text-muted">{{ userData.password }}</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input type="text"
                 class="form-control"
                 placeholder="Age"
                 v-model.number="userData.age">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3" v-model.lazy="message"></textarea>
        </div>

        <div class="form-group">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Send Mail" id="defaultCheck1" v-model="sendMail">
            <label class="form-check-label" for="defaultCheck1">
              Send Mail
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Send Infomail" id="defaultCheck2" v-model="sendMail">
            <label class="form-check-label" for="defaultCheck2">
              Send Infomail
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input"
                   type="radio"
                   id="exampleRadios1"
                   value="Male"
                   v-model="userData.sex">
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="radio"
                   id="exampleRadios2"
                   value="Female"
                   v-model="userData.sex">
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>
        </div>
        <div class="form-group">
          <select class="custom-select" v-model="priority">
            <label>Priority</label>
            <option v-for="option in priorities" :value="option" :selected="option == 'Medium'">{{ option }}</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <hr>

      <div class="card">
        <h5 class="card-header">Your Data</h5>
        <div class="card-body">
          <p class="card-text">Email: {{ userData.email }}</p>
          <p class="card-text">Password: {{ userData.password }} </p>
          <p class="card-text">Age: {{ userData.age }}</p>
          <p class="card-text">Gender: {{ userData.sex }}</p>
          <p style="white-space: pre" class="card-text">Message: {{ message }}</p>
          <ul>
            <p class="card-text">Send mail? </p>
            <li v-for="item in sendMail">{{ item }}</li>
          </ul>
          <p class="card-text">Priority: {{ priority }} </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        userData: {
          age: null,
          email: '',
          password: '',
          sex: ''
        },
        message: 'Default message goes here',
        sendMail: [],
        priorities: ['High', 'Medium', 'Low'],
        priority: ''
      }
    }
  }
</script>
