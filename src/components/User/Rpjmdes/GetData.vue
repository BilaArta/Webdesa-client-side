<template>
  <div>
      <h1>Hello</h1>
  </div>
</template>

<script>
import {getRpjmdes} from "@Plugins/api";

export default {
    data :() => ({
        rpjmdes : [],
    }),
    created() {
        console.log('haii haii');
        getRpjmdes().then((result) => {
            console.log(result)
        })
    }
}
</script>

<style>

</style>