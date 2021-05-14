<template>
  <div class="">
       <nav>
      <v-app-bar app height="60px" flat color="white">
          <h4 style="color: #201767;">{{title}}</h4>
        <v-spacer></v-spacer>

        <v-btn icon class="ma-3">
          <v-icon @click="logout()" color="#7648A3">
            mdi-power-standby
          </v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        permanent
        expand-on-hover
        app
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../assets/avatar.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="title">
              Oladele Micheal
              </v-list-item-title>
                <v-list-item-subtitle>Head of Admin</v-list-item-subtitle>
              <v-list-item-subtitle >Admin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          dense
        >
          <v-list-item router-link to="/dashboard" style="text-decoration: none !important;">
            <v-list-item-icon >
              <v-icon  color="#7648A3">mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item  router-link to="/transactions" style="text-decoration: none !important;">
            <v-list-item-icon>
              <v-icon color="#7648A3">mdi-cash</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Transactions</v-list-item-title>
          </v-list-item>
          <v-list-item router-link to="/profile" style="text-decoration: none !important;">
            <v-list-item-icon>
              <v-icon color="#7648A3">mdi-cursor-pointer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
            <v-list-item router-link to="/changepassword" style="text-decoration: none !important;">
            <v-list-item-icon>
              <v-icon color="#7648A3">mdi-lock-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Change Password</v-list-item-title>
          </v-list-item>
            <v-list-item @click="logout()">
            <v-list-item-icon>
              <v-icon color="#7648A3">mdi-power-standby</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="text-center">
             <img src="../assets/logo1.png" width="100" height="100" class="logo mt-5" />
          </div>
      </template>
      </v-navigation-drawer>
       </nav>
   
  </div>
</template>


<script>

export default {
     props: ['title',],
    data(){
        return{
          check: "",
          showRole:  ""
        }
    },
    methods:{
        logout(){
         this.$router.push('/')
       }
    }
   
}
</script>

<style>

</style>