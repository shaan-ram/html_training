<template>
  <h1>{{title.toUpperCase()}}</h1>
  <h2>{{firstname}} {{lastname}}</h2>
  <h3>{{line}}</h3>
  <hr class="line">
  <h2 v-text="title"></h2>
  <h4 v-html="line"></h4>
  <div v-bind:class="dynamicClass">
    SpiderMan
  </div>
  <button v-bind:disabled="show">Click Here</button>
  <input type="checkbox" v-model="show">
  <input type="text" v-model="title">

  <div v-bind:class="['box','sqr']">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis consectetur porro excepturi quibusdam reprehenderit fugit nisi nam quisquam corrupti rerum ad fuga dignissimos repellendus nulla assumenda ipsum totam, sint ex!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis consectetur porro excepturi quibusdam reprehenderit fugit nisi nam quisquam corrupti rerum ad fuga dignissimos repellendus nulla assumenda ipsum totam, sint ex!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis consectetur porro excepturi quibusdam reprehenderit fugit nisi nam quisquam corrupti rerum ad fuga dignissimos repellendus nulla assumenda ipsum totam, sint ex!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis consectetur porro excepturi quibusdam reprehenderit fugit nisi nam quisquam corrupti rerum ad fuga dignissimos repellendus nulla assumenda ipsum totam, sint ex!
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      title: "Ironman",
      firstname: "Tony",
      lastname: "Stark",
      line: " <span><u>Love You <em>3000 </span>",
      dynamicClass: "box",
      show: false
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: grey;
  border: 2px solid red;
  margin-top: 60px;
  padding: 20px;
}
.box{
  background-color: rgb(143, 128, 128);
  color: rgb(135, 7, 7);
  height: 100px;
  width: 100px;
  line-height: 100px;
  margin: 10px;
  font-weight: bold;
}
.sqr{
  overflow: auto;
  width: 400px;
  height: 150px;
  line-height: normal;
  text-align: left;
}
.line{
  width: 80%;
}

</style>
