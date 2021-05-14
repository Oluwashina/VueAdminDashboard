<template>
  <div class="container">
        
    
        <div class="row justify-content-center">
            <div class="col-lg-5">


                <div class="text-center mt-5">
                <img src="../assets/email.svg"  width="100" height="100" alt="notify" />
                </div>

               <div class="text-center mt-3">
                    <h5 style="font-weight: bold;">Forgot your password?</h5>
                    <p class="mt-3">Enter your registered email address below to receive password reset instructions.</p>
                </div>

               <div class="form-group">
                <input
                    type="text"
                    v-model="email"
                    class="form-control input-style mt-4"
                     v-bind:class="{'form-control' : true, 'is-invalid' : !validEmail(email) && emailBlured}"
                      v-on:blur="emailBlured = true"
                    placeholder="johndoe@email.com"
                    required
                />
                <div class="invalid-feedback">This field is required</div>
        </div>

        <div class="text-center mt-3">
         <button @click="Send()" :disabled="signOK" class="btn btn__submit" style="color: #fff" type="submit">Send</button>
         </div>


            <!-- naviagtion link -->
            <div class="text-center mt-4">
                <p style="font-size: 15px;">Remember Password? <router-link to="/" style="text-decoration: none;" >Back to Login</router-link></p>
            </div>







            </div>
        </div>

              


                        
    
  </div>
</template>

<script>
import iziToast from 'izitoast'
export default {
  title () {
    return `Astrapolaris MFB — ${this.title}`
  },
    data(){
     return{
         signOK: false,
         title: 'Forgot Password',
         email: "",
         emailBlured: false,
         valid: false
     }
    },
    methods:{
        validEmail: function(email){
                var re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase())
        },
        validate: function(){
            this.emailBlured = true;
            if(this.validEmail(this.email)){
            this.valid = true
            }
        },
        Send(){
            this.validate()
            if(this.valid == true){
                this.signOK = true
                const user = {
                    "email": this.email
                }
            this.$store.dispatch("ForgotPassword", user)
            .then(()=>{
                this.signOK = false
                this.email = ''
                this.emailBlured = false
                 iziToast.success({
                    message: 'Check your email for password reset instructions!!!',
                    progressBar: true,
                    position: 'bottomRight'
                  })
                
            })
            .catch((err)=>{
                this.signOK = false;
                console.log(err)
                iziToast.error({
                    message: 'User not valid!',
                    progressBar: true,
                    position: 'topRight'
                  })
                 
              })  
            }
        }
    },
    
}
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}

.input-style {
  padding: 23px 20px;
  background: #fff;
  border: 1px solid #7648A3;
}
.input-style:focus {
  border: 1px solid #7648A3;
  background: #fff;
  box-shadow: none;
  outline: 0 none;
}


.btn__submit{
  background: #7648A3;
    padding: 12px 40px;
    border-radius: 5px;
    width: 100%;
    color: #fff;
    outline: none;
    text-transform: uppercase;
}
</style>