<template>
  <div class="row no-gutters">
      <div class="col-lg-6">
          <div class="container login-div">
              <div>
                   <img  src="../assets/logo1.png" width="100" height="100" alt=" logo" class="">
              </div>

              <div class="mt-4">
                  <h4 style="line-height: 35px;">Welcome to<br/>
                  <span style="font-weight: bold;">Adeos </span>Admin</h4>
              </div>

              <div class="mt-4">
                  <h4 style="color: #7648A3;">LogIn</h4>
              </div>

               <form class="form-group" @submit="handleSubmit">

                    <div class="form-group input-container mt-4">
                        <i class="mdi mdi-email icon"></i>
                        <input
                            class="form-control input-style"
                            type="text"
                            v-model="email"
                             v-bind:class="{'form-control' : true, 'is-invalid' : !validEmail(email) && emailBlured}"
                             v-on:blur="emailBlured = true"
                            placeholder="Email Address"
                            id="email"
                        />
                         <div class="invalid-feedback">A valid email is required</div>
                    </div>
                   
                    <div class="text-right forgot-width">
                        <router-link to="/forgotpassword" style="text-decoration: none;" ><small class="" style="cursor: pointer; color: #000000;">Forgot Password?</small></router-link>
                    </div>
                     <div class="form-group input-container">
                            <i class="mdi mdi-lock icon"></i>
                            <input
                                class="form-control input-style"
                                type="password"
                                v-model="password"
                                 v-bind:class="{'form-control' : true, 'is-invalid' : !validPassword(password) && passwordBlured}"
                                 v-on:blur="passwordBlured = true"
                                placeholder="Password"
                                    id="password"
                            />
                          <div class="invalid-feedback">This field is required</div>    
                     </div>
                    
                    <button :disabled="signOK" class="btn btn_submit mt-1" type="submit">Login</button>
                </form> 



          </div>  
      </div>
      <div class="col-lg-6 d-none d-md-block">
          <div>
              <img  src="../assets/woman.png" class="img-fluid" alt="woman" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            emailBlured: false,
            password: '',
            passwordBlured: false,
            signOK: false,
            valid: false,
            valid1: false 
        }
    },
    methods:{
        validEmail: function(email){
                 var re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email.toLowerCase())
            },
        validPassword: function(password){
            return password
            },
         validate: function(){
            this.emailBlured = true;
                if(this.validEmail(this.email)){
                this.valid = true
                }
            },
            validatePassword: function(){
            this.passwordBlured = true;
                if(this.validPassword(this.password)){
                this.valid1 = true
                }
            },
        handleSubmit(event){
            event.preventDefault()
              this.validate()
                this.validatePassword()
                 if(this.valid == true && this.valid1 == true){
                     this.signOK = true
                      const user = {
                            "email": this.email,
                            "password": this.password
                        }
                      console.log(user)
                       this.$router.push('/dashboard')
                       this.signOK = false
                      
                 } 
        }
    }
}
</script>

<style scoped>
 .btn:focus{
     outline: 0 none;
     box-shadow: none;
 }
    .login-div{
        padding: 40px 50px;
    }
    .btn_submit{
        background: #7648A3;
        border-radius: 5px;
        color: #fff;
        padding: 10px 40px;
        transition: all .5s ease-in;
    }
 .input-container {
    position: relative;
    }
  .icon {
        position: absolute;
        top: 0;
        left: 0;
        padding: 12px;
        text-align: center;
        background: #cfb5e9;
        border-radius: 5px 0 0 5px;
        color: #7648A3;
        width: 45px;
    }
    .input-style {
        border: 1px solid #7648A3;
        border-radius: 5px;
        width: 70%;
        padding: 23px 5px 23px 55px;
    }
    .input-style:focus{
        box-shadow: none;
        outline: 0 none;
        border: 1px solid #7648A3; 
    }
    .forgot-width{
        width: 70%;
    }

    @media screen and (max-width: 767px) {
        .forgot-width{
            width: 100%
        }
        .input-style{
            width: 100%;
        }
    }
</style>