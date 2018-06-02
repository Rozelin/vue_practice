<template>
    <div class="container">
        <form  v-if="!formIsSubmitted">
            <div class="row justify-content-center">
                <div class="col-6">
                  <h3 v-highlight:background="'red'">User data</h3>
                    <form>
                      <div class="form-group">
                        <label>Full name</label>
                        <div class="form-row">
                         <div class="col">
                           <input type="text" class="form-control" placeholder="First name" v-model="userForm.firstName">
                         </div>
                         <div class="col">
                           <input type="text" class="form-control" placeholder="Last name" v-model="userForm.lastName">
                         </div>
                       </div>
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email"
                               class="form-control"
                               placeholder="Enter email"
                               v-model="userForm.email">
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                               class="form-control"
                               placeholder="Password"
                               v-model.lazy="userForm.password">
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input"
                                 type="checkbox"
                                 value="false"
                                 id="storeData"
                                 checked="false"
                                 v-model="storeData">
                          <label class="form-check-label" for="storeData">
                            Store my data
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary" @click.prevent="formIsSubmitted = !formIsSubmitted">Submit</button>
                      </div>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row justify-content-center" v-if="formIsSubmitted">
            <div class="col-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userForm.email }}</p>
                        <p>Password: {{ userForm.password }} </p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          userForm: {
            lastName: '',
            firstName: '',
            email: '',
            password: ''
          },
          storeData: false,
          formIsSubmitted: false
        };
      },
      computed: {
        fullName() {
          return `${this.userForm.firstName} ${this.userForm.lastName}`;
        }
      }
    }
</script>
