<template>
    <div class="box">
      <h1>{{ title }}</h1>
      <h2>Power {{ power }}</h2>
      <button @click="power++">Increase Power</button>
      <h3>{{ message }}</h3>
    </div>
</template>
  <script>
    export default {
     data(){
        return {
        title : "Welcome to Vue Training",
        power : 4,
        message : "Hero is not ready to fight"
      }
     },
     watch : {
      /* power(npower){
        // console.log(this.power)
        // console.log(npower)
        if(npower >= 5){
          this.message = "Hero is ready to fight"
        }
      } */
      power : {
        handler(npower){
          if(npower >= 5){
          this.message = "Hero is ready to fight"
        }
        },
        immediate : true
      }
     }
    }
  </script>
<style>
    .box{
        padding: 30px;
        color: cadetblue;
    }
</style>