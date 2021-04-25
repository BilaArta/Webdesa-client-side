<template>
   <v-footer
    variant="absolute"
    padless
    dark
  >
    <v-row
      class="pa-4"
    >
      <v-col
        cols="12"
        sm=6
        md=6
        lg=6
      >
        <p class="text-lg-h5"><b> Alamat Kantor :</b></p>
        <p class="ml-4 mt-n2">Jl. Pantai Pasut, Br. Dinas Tibubiu Kaja, Desa Tibuiu,<br> Kecamatan Kerambitan, Tabanan, Bali (82161)</p>
      </v-col>
      <v-col
        cols="12"
        sm=6
        md=6
        lg=6  
      >
        <p class="text-lg-h5"><b>Hubungi kami pada :</b></p>
        <ul class="ml-4 mt-n2">
          <li>Email : official@desatibubiu.id</li>
          <li>Instagram : desatibubiu</li>
          <li>Telp/WA : 085738552683/ 082189456324</li>
        </ul>
      </v-col>
    </v-row>
      <v-card-text class="black">
        ©{{ new Date().getFullYear() }} — <strong>Desa Tibubiu</strong>
      </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data : () => ({
    icons: [
        'mdi-email',
        'mdi-instagram',
      ],
  })
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