<template>
  <div>
       <Appbar :title="title" />
       <div class="container-fluid">
            <h5>Welcome Here!</h5>
       </div>
     
  </div>
</template>

<script>
import Appbar from '../components/Appbar'
export default {
    data(){
        return{
            title: 'Overview',   
        }
    },
    components:{
        Appbar,
    },
}
</script>

<style>

</style>