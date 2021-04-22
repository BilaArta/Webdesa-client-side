<template>
    <div>
         <v-tabs horizontal>
            <v-tab>
                Kelola Berita
            </v-tab>
            <v-tab>
                Input Berita
            </v-tab>
            <v-tab>
                Input Rpjmdes
            </v-tab>
            <!-- <v-tab>
                Surat Penduduk
            </v-tab> -->
            
            <v-tab-item>
                <v-card 
                    flat   
                >
                    <Tableberita ></Tableberita>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card 
                    flat
                    class="pa-4"    
                >
                    <Form></Form>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card 
                    flat
                    class="pa-4"    
                >
                    <Rpjmdes></Rpjmdes>
                </v-card>
            </v-tab-item>
            <!-- <v-tab-item>
                <v-card flat>
                    <TableSurat></TableSurat>
                </v-card>
            </v-tab-item> -->


         </v-tabs>
    
    </div>


</template>

<script>
import Form from "./InputBerita";
import Tableberita from "./TabelBerita";
import { getUser } from "@Plugins/api";
// import TableSurat from './Surat/Container';
import Rpjmdes from './InputRpjmdes';

export default {
    components: {
        Form,
        Tableberita,
        // TableSurat,
        Rpjmdes
    },
    data: () => ({
        dataset: [],
        loading: false,
        admin: {},
    }),
    created(){
    // if(!localStorage.getItem('token')){
    //   this.$router.push({name: "Home"})
    // }
    },
    methods: {
        checkUser(){
            getUser().then((res) => console.log(res.data))
        }
    }
}
</script>

<style>
.sidenav {
    height: 500px;
    width: 160px;
    position: static;
    padding-top: 20px;
    background-color: #f1f2f6;

}

.sidenav li a {
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: block;
}
</style>