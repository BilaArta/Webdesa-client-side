<template>
  <v-footer padless>
    <v-col
      class="text-center white--text"
      cols="12"
      
    >
      {{ new Date().getFullYear() }} — <strong>@BilaArta</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

html {
    height: 100%;
}

.footer {
    height: 160px;
    position: relative;
    bottom: 0;
    width: 100%;
}
.v-footer {
      background-color: #ff3f34 !important; 
}

.footer div {
    margin-top: 40px;
}

</style>