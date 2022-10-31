<template>
  <div>
    <h1>{{title}} version {{version}}</h1>
  </div>
</template>


<script>

  export default {
    name: "HomeComp",
    props: ['title', 'version']
}
</script>


<style>
</style>