<template>
  <div>
   <h1>{{title}}</h1>
   <input type="range" min="1" max="10" v-model="power">
   <h1 v-if="power === '1'">Power is 1</h1>
   <h1 v-if="power === '2'">Power is 2</h1>
   <h1 v-if="power === '3'">Power is 3</h1>
   <h1 v-if="power === '4'">Power is 4</h1>   
   <h1 v-else-if="power >= '5'">max</h1>  
   <input type="checkbox" v-model="show">
   <fieldset v-show="show">
    <legend>Terms and conditions</legend>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rerum soluta asperiores sequi perspiciatis commodi minus dolor assumenda aspernatur, quasi, modi vel aperiam tenetur perferendis recusandae libero nostrum iusto voluptatum! </p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum voluptate eaque impedit quam facere unde omnis totam! Maxime, odit. Dolorum aliquam eligendi voluptate aut vero rerum sequi magni deserunt.</p>
   </fieldset> <br>
   <input type="number" min="1" max='>1' v-model="fower">
   <input type="range" min="1" max= '>1' v-model="fower">
   <h1 v-if="power === '4'">{{fower}}</h1>

  </div>
</template>

<script>

export default {
  data(){
    return{
      title: "Welcome",
      power: '4',
      show: true,
      fower: ''
    }
  }
}

</script>

<style>

</style>
