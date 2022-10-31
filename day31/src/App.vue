<template>
    <div>
      <h1>{{ title }}</h1>
      <pre>{{ JSON.stringify(heroinfo, null, 1) }}</pre>
      <form>
          <div class="mb-3">
              <label for="htitle" class="form-label">Hero Title</label>
              <input v-model="heroinfo.title" type="text" class="form-control" id="htitle">
          </div>
          <div class="mb-3">
              <label for="fname" class="form-label">First Name</label>
              <input v-model="heroinfo.firstname" type="text" class="form-control" id="fname">
          </div>
          <div class="mb-3">
              <label for="lname" class="form-label">Last Name</label>
              <input v-model="heroinfo.lastname" type="text" class="form-control" id="lname">
          </div>
          <div class="mb-3">
              <label for="hcity" class="form-label">City</label>
              <input v-model="heroinfo.city" type="text" class="form-control" id="hcity">
          </div>
          <div class="mb-3">
              <label for="hpower" class="form-label">Power</label>
              <input v-model="heroinfo.power" type="number" class="form-control" id="hpower">
          </div>
          <div class="mb-3">
              <label for="htype" class="form-label">Type</label>
                &nbsp;
              <select v-model="heroinfo.type">
                <label for="hpower" class="form-label">Hero Type</label>
                <option value="" selected >Select Here</option>
                    <option value="Avengers">Avengers</option>
                    <option value="Justice League">Justice League</option>
                    <option value="Indic-hero">Indic Hero</option>
              </select>
          </div>
          <div class="mb-3">
                <input type="radio" v-model="heroinfo.gender" value="Male"> Male
                <input type="radio" v-model="heroinfo.gender" value="Female"> Female
         </div>
            <br>
        <div class="mb-3">
                <label for="hcf" class="form-label">Hero Can Fly</label>
                <input true-value="can fly" false-value="can't fly" v-model="heroinfo.canfly" type="checkbox" id="hcf">
        </div>

          <br><button type="submit" class="btn btn-primary">Register</button>
        </form>
       
    
        
    </div>
</template>
   
  <script>
  export default {
  data(){
    return {
      title : "Forms and Data",
      heroinfo : {
        title : '',
        firstname : '',
        lastname : '',
        city : '',
        power : '',
        type : '',
        gender : '',
        canfly: '',
      },
   
    }
  }
  }
  </script>
   
  <style></style>