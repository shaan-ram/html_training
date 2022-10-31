<template>
    <div>
        <h1>{{ title }}</h1>
        <button v-on:click="myfun">ClickMe</button>&nbsp;
        <button @click="myfun">ClickMe</button>
        <h2>Power :{{power}}</h2>
        <!-- <button @click="power++">increase power</button> &nbsp;
        <button @click="power--">decrease power</button> -->
        <button @click="increasePower">increase power</button> &nbsp;
        <button @click=" decreasePower">decrease power</button> &nbsp;
        <button @click="setPower(9)" >Set power</button>
        <br>
        <br>
        <input @input= "setPower($event)" type="range">
    </div>
</template>


<script>
    export default {
  data(){
    return{
      title: "Methods Events Computed",
      power: 0
    }
  },
  methods:{
    myfun(){
        alert("You clicked")
    },
    increasePower(){
        this.power++
    },
    decreasePower(){
        this.power--
    },
    setPower(evt){
        this.power= evt.target.value
    }
  }
}
</script>


<style>

</style>