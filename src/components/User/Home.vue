<template>
    <div>
        <v-row 
            id="intro"
            align="center"
            justify="center"
            class="mt-2"
            no-gutters
        >
            <v-col 
                cols="3" 
                align="center"
            >
                <v-img 
                    src="@/assets/logo.png"
                    max-height="200"
                    max-width="200"
                    eager
                >
                </v-img>
            </v-col>
            <v-col cols="6">
                <p class="text-center text-lg-h3 black--text"><b>Om Swastyastu <br>Selamat Datang di Website Desa Tibubiu</b></p>
            </v-col>
            <v-col cols="3" align="center">
                <v-img 
                    src="@/assets/logo.png"
                    max-height="200"
                    max-width="200"
                    eager
                >
                </v-img>
            </v-col>
            
        </v-row>
        <v-carousel 
            cycle
            height="600px"
            width="100%"
            show-arrows-on-hover
            id="carousel"
        >
            <v-carousel-item
            v-for="(item,i) in items"
                :key="i"
                eager
            >
            <v-img :src="item.src" height="700px" width="100%" eager/>
            </v-carousel-item>
        </v-carousel>
        <div id="visimisi" class="mt-4">
            <v-row 
                class="pa-4"
            >
                <v-col
                    cols="auto"
                    md="1"
                    justify="center"
                    align="center"
                >
                </v-col>
                <v-col
                    cols="12"
                    md="10"
                    justify="center"
                    align="center"
                    class="mt-n8"
                >
                    <p class="text-lg-h3"> Visi & Misi</p>
                    <hr>
                    <p class="text-lg-h6 text-justify "><span class="ml-8"></span> Sebagai dokumen perencanaan penjabaran dari Dokumen Rencana Pembangunan Jangka Menengah Desa, maka seluruh rencana program dan kegiatan pembangunan yang akan dilaksanakan oleh Desa secara bertahap dan berkesinambungan harus dapat mengantarkan tercapainya Visi dan Misi Desa. Berdasarkan perkembangan situasi dan kondisi DesaTibubiu saat ini, dan terkait dengan Rencana Pembangunan Jangka Menengah Desa (RPJM-Desa), maka untuk pembangunan Desa Tibubiu pada periode 6 (Enam )tahun kedepan (tahun 2019-2025), disusun visi dan misi sebagai berikut :</p>
                    
                </v-col>
                <v-col
                    cols="auto"
                    md="1"
                    justify="center"
                    align="center"
                >
                </v-col>
                <v-col 
                    align="center"
                    justify="center"
                    cols="12"
                    class="mt-n12"
                >
                    <img class="mt-n4 mb-n4" src="@/assets/Goals.svg" alt="Visi & Misi" width="100%" height="350px">
                </v-col>

                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="6"
                    justify="center"
                    class="mt-n8"
                    
                >
                    <p class="text-lg-h3 text-center">Visi</p>
                    <hr>
                    <p class="text-lg-h6 text-justify pa-4"> <span class="ml-8"></span> Peningkatan Kesejahteraan Masyarakat Desa Tibubiu Melalui Pembangunan Di Segala Bidang Yang Menitik Beratkan Pada Sektor Pertanian Dan Sektor Pariwisata Dalam Arti Luas.</p> 
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="6"
                    justify="center"
                    class="mt-n8"
                    
                >
                    <p class="text-lg-h3 text-center">Misi</p>
                    <hr>
                    <p class="text-lg-h6 text-justify pa-4">    
                        <ol>
                            <li>Mewujudkan Pemerintahan Desa yang berkualitas, bersih dan berwibawa.</li>
                            <li>Mewujudkan pemenuhan sosial dasar yang mumpuni.</li>
                            <li>Mewujudkan infrastruktur desa yang baik dan memadai.</li>
                            <li>Mewujudkan kelembagaan. Kesenian, kebudayaan masyarakat desa yang sejahtera.</li>
                            <li>Penguatan potensi ekonomi skala desa secara optimal dengan pengembangan sektor ekonomi pedesaan.</li>
                        </ol>
                    </p>
                </v-col>
            </v-row>
        </div>
        
    </div>
</template>

<script>
export default {
    data : () => ({
        items : [

            {
                src: require('@/assets/img3.jpeg'),
                name: 'Third pic'
            },
            {
                src: require('@/assets/img4.jpg'),
                name: 'Fourth pic'
            },
            {
                src: require('@/assets/img5.jpg'),
                name: 'Five pic'
            },
            {
                src: require('@/assets/img6.jpg'),
                name: 'Six pic'
            },
        ],
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
    })
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#intro {
    z-index: 1;
    position: absolute;
    width: 100%;
}

#carousel {
    position: relative;
}
</style>