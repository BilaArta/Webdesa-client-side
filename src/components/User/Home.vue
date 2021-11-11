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
                <p class="text-center text-lg-h3 black--text"><b>OM SWASTYASTU <br>SELAMAT DATANG DI WEBSITE DESA TIBUBIU</b></p>
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
                    class="mt-n4"
                >
                    <p class="text-lg-h3"><b> Visi & Misi</b></p>
                    <hr>
                    <p class="text-lg-h6 text-justify mt-4"><span class="ml-8"></span> Sebagai dokumen perencanaan penjabaran dari Dokumen Rencana Pembangunan Jangka Menengah Desa, maka seluruh rencana program dan kegiatan pembangunan yang akan dilaksanakan oleh Desa secara bertahap dan berkesinambungan harus dapat mengantarkan tercapainya Visi dan Misi Desa. Berdasarkan perkembangan situasi dan kondisi DesaTibubiu saat ini, dan terkait dengan Rencana Pembangunan Jangka Menengah Desa (RPJM-Desa), maka untuk pembangunan Desa Tibubiu pada periode 6 (Enam )tahun kedepan (tahun 2019-2025), disusun visi dan misi sebagai berikut :</p>
                    
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
                >
                    <img class="mt-n4" src="@/assets/Goals.svg" alt="Visi & Misi" width="100%" height="200">
                </v-col>

                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="6"
                    justify="center"
                >
                    <p class="text-lg-h3 text-center"><b>Visi</b></p>
                    <hr>
                    <p class="text-lg-h6 text-justify pa-4"> <span class="ml-8"></span> Terwujudnya Peningkatan Kesejahteraan Masyarakat Desa Tibubiu melalui Pembangunan di segala bidang menitikberatkan pada sektor pertanian dan sektor pariwisata dalam arti luas.</p> 
                    
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="6"
                    justify="center"
                >
                    <p class="text-lg-h3 text-center"><b>Misi</b></p>
                    <hr>
                    <p class="text-lg-h6 text-justify pa-4">    
                        <ol>
                            <li>Mewujudkan Pemerintahan Desa yang berkualitas, bersih dan berwibawa.</li>
                            <li>Mewujudkan pemenuhan sosial dasar yang mumpuni dan berkeadilan.</li>
                            <li>Mewujudkan infrastruktur desa yang baik.</li>
                            <li>Mewujudkan pelestarian seni dan budaya berdasarkan kearifan lokal serta optimalisasi peran kelembagaan di Desa.</li>
                            <li>Penguatan potensi ekonomi secara optimal dengan pengembangan sektor ekonomi lokal Desa.</li>
                        </ol>
                    </p>
                </v-col>
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
                    class="mt-n4"
                >
                    <p class="text-lg-h3"><b> Tujuan</b></p>
                    <hr>
                    <p class="text-lg-h6 text-center mt-4">Adapun tujuan dari Visi & Misi di atas sebagai berikut :</p>
                    <p class="text-lg-h6 text-justify">    
                        <ol>
                            <li>Terwujudnya Tata Kelola Pemerintahan Desa yang berkualitas, bersih dan berwibawa.</li>
                            <li>Terwujudnya Pola Perencanaan Desa yang baik, berkualitas dan partisipatif.</li>
                            <li>Terwujudnya Sistem Sosial Politik Desa yang baik dan berkualitas.</li>
                            <li>Terwujudnya masyarakat yang Nasionalis, cinta tanah air dan memahami arti Pancasila sebagai dasar negara.</li>
                            <li>Terwujudnya kualitas pendidikan yang berkualitas baik untuk seluruh masyarakat Desa.</li>
                            <li>Terwujudnya lingkungan yang bersih dan sehat yang didasari kesadaran bersama, saling memiliki dan gotong royong.</li>
                            <li>Terwujudnya desa yang tangguh dan tanggap bencana.</li>
                            <li>Terbangunnya sarana prasarana infrastruktur Desa yang berkualitas baik.</li>
                            <li>Terwujudnya Desa yang mampu melestarikan dan mengembangkan kesenian dan kebudayaan lokalnya secara mandiri dan berkelanjutan.</li>
                            <li>Terwujudnya peran aktif kelembagaan Desa dalam setiap tahapan pembangunan Desa.</li>
                            <li>Terwujudnya Perekonomian Desa yang kuat dan mandiri melalui BUMDesa.</li>
                            <li>Terwujudnya sektor pertanian di Desa yang maju dan sejahtera.</li>
                            <li>Terwujudnya peningkatan kualitas kelompok-kelompok ekonomi yang ada di Desa.</li>
                            
                        </ol>
                    </p>
                </v-col>
                <v-col
                    cols="auto"
                    md="1"
                    justify="center"
                    align="center"
                >
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    justify="center"
                    class="pa-4"
                >
                    <p class="text-lg-h3 text-center"><b>Produktifitas Masyarakat Desa Tibubiu</b></p>
                    <hr>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    lg="6"
                    justify="center"
                >
                    <v-carousel 
                        cycle
                        height="400px"
                        width="100%"
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                        v-for="(item,i) in images1"
                            :key="i"
                            eager
                        >
                        <v-img :src="item.src" height="400px" width="100%" eager/>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    lg="6"
                    justify="center"
                    class="pa-4"
                >
                    <p class="text-justify">Masyarakat Desa Tibubiu berjumlah sekitar 1600 jiwa. Kreaktifitas yang beragam dari masyarakatnya melahirkan usaha-usaha yang beragam di Desa Tibubiu seperti : pengolahan jagung & beras, jajanan tradisional & modern, Kerajinan membuat ingka(piring khas Bali) dari kertas, dan kerajinan membuat sanggah.</p>
                    <img class="" src="@/assets/finance_1.svg" alt="Visi & Misi" width="100%" height="200px">
                    <hr>
                    
                </v-col>
            </v-row>
            <v-row no-gutters class="mb-4">
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    lg="6"
                    justify="center"
                    class="pa-4"
                >
                    <p class="text-justify">Desa Tibubiu juga memiliki sumber daya alam yang cukup melimpah & indah mengingat Desa Tibubiu berada di daerah pesisir pantai selatan Bali. Masyarakat memanfaatkan sumber daya alam tersebut dengan menangkap ikan di laut dan membuat destinasi wisata untuk turis domestik maupun internasional.</p>
                    <img class="" src="@/assets/finance_2.svg" alt="Visi & Misi" width="100%" height="200px">
                    <hr>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                    lg="6"
                    justify="center"
                >
                    <v-carousel 
                        cycle
                        height="400px"
                        width="100%"
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                        v-for="(item,i) in images2"
                            :key="i"
                            eager
                        >
                        <v-img 
                            :src="item.src" 
                            height="400px" 
                            width="100%" 
                            eager
                            aspect-ratio="1"
                        />
                        </v-carousel-item>
                    </v-carousel>
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
                name: 'First pic'
            },
            {
                src: require('@/assets/img4.jpg'),
                name: 'Second pic'
            },
            {
                src: require('@/assets/img5.jpg'),
                name: 'Third pic'
            },
            {
                src: require('@/assets/img6.jpg'),
                name: 'Fourth pic'
            },
        ],
        images1 : [
            {
                src: require('@/assets/profile/U_1.png'),
                name : '1'
            },
            {
                src: require('@/assets/profile/U_2.png'),
                name : '2'
            },
            {
                src: require('@/assets/profile/U_3.png'),
                name : '3'
            },
            {
                src: require('@/assets/profile/U_4.png'),
                name : '4'
            },
        ],
        images2 : [
            {
                src: require('@/assets/profile/T_1.png'),
                name : '1'
            },
            {
                src: require('@/assets/profile/T_2.png'),
                name : '2'
            },
            {
                src: require('@/assets/profile/T_3.png'),
                name : '3'
            },
            {
                src: require('@/assets/profile/T_4.jpg'),
                name : '4'
            },
            {
                src: require('@/assets/profile/T_5.png'),
                name : '5'
            },
            {
                src: require('@/assets/profile/T_6.png'),
                name : '6'
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