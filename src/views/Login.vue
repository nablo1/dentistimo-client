<template>
  <div>
    <body>
      <div class="modal-dialog text-center background">
        <div class="col-sm-8 main-section">
          <div class="modal-content fixPos">
            <div class="col-12 cusImage">
              <img src="https://i.ibb.co/6ZrYYfF/Logo-Vector.png" />
            </div>
            <div class="col-12">
              <div class="logForm">
                <form @submit.prevent="loginAdmin()">
                  <div class="logform">
                    <input
                      v-model="passcode.code"
                      type="password"
                      placeholder="Enter passcode"
                      name="passcode"
                      required
                    /><br />
                    <center>
                      <b-button type="submit" variant="primary"
                        >Sign in</b-button
                      >
                      &nbsp;
                      <b-button type="button" variant="outline-primary" href="/"
                        >Cancel</b-button
                      >
                    </center>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
  import axios from 'axios'
  const swal2 = require('sweetalert2')
  export default {
    data() {
      return {
        passcode: {
          code: '',
        },
      }
    },
    methods: {
      /* The developement team has initialized a pass code that's hardcoded and given to the product owner, or admins
        and can be updated in a later time.
        once the api request is sent a token is saved in the local storage and lasts for one hour
        */
      async loginAdmin() {
        try {
          const response = await axios.post(
            'http://localhost:3000/api/login',
            this.passcode
          )
          const token = response.data.token
          localStorage.setItem('jwt', token)
          if (token) {
            this.$router.push('/')
            location.reload()
          }
        } catch (err) {
          swal2.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          console.log(err.response)
        }
      },
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  body {
    background: url('https://i.ibb.co/r0kSL7Z/jj-ying-7-JX0-bfiux-Q-unsplash.jpg');
    font-family: 'Source Sans Pro', sans-serif;
  }
  .main-section {
    margin: 0 auto;
    margin-top: 130px;
    padding: 0;
  }
  .modal-content {
    background-color: white;
    opacity: 0.95;
    padding: 0 18px;
    box-shadow: 0px 0px 3px #848484;
  }
  .cusImage img {
    height: 115px;
    width: 88px;
    box-shadow: 0px 0px 2px #848484;
    margin-top: -50px;
    margin-bottom: 40px;
  }
  .logForm {
    margin-bottom: 25px;
    border-radius: 5px;
  }
  .logForm input {
    height: 42px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .btn {
    background-color: blue;
    color: white;
    padding-left: 10px;
    height: 40px;
  }
  .divider {
    width: 5px;
    height: auto;
    display: inline-block;
  }
</style>
