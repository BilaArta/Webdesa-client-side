<template>
    <div>
        <v-row
            v-for="(item, i) in news"
            :key="i"
            no-gutters
        >
        <v-fab-transition

        >
            <v-btn
                v-show="fab"
                color="primary"
                fixed
                dark
                bottom
                right
                fab
                icon
                @click="btnTopScroll"
            >
                <v-icon color="black">mdi-chevron-up</v-icon>
            </v-btn>
        </v-fab-transition>
            <v-col cols="3">
                <v-card 
                    v-if="i == 0"
                    elevation="4"
                    outlined
                    class="pa-4"
                >
                    <p class="subtitle-2" v-text="'Pencarian berdasarkan judul berita :'"></p>
                    <v-autocomplete
                        v-model="selectedJudul"
                        :items="judul"
                        clearable
                        filled
                        label="Judul Berita"
                    ></v-autocomplete>
                    <p class="subtitle-2" v-text="'Pencarian berdasarkan jenis berita :'"></p>
                    <v-select
                        v-model="selectedJenis"
                        :items="jenis"
                        clearable
                        filled
                        chips
                        label="Jenis Berita"
                    ></v-select>
                    <p class="subtitle-2" v-text="'Urutkan berdasarkan berita :'"></p>
                    <v-btn-toggle
                        v-model="sorting"
                        mandatory
                    >
                        <v-btn>Terakhir</v-btn>
                        <v-btn>Terbaru</v-btn>
                    </v-btn-toggle>
                </v-card>
            </v-col>
            <v-col cols="9">
                    <News :datasets="item" :loading="loading" ></News>
            </v-col>
            <!-- <v-col cols="3">

            </v-col> -->
        </v-row>
            <div class="text-center">
                <v-pagination
                    v-model="pagination.current"
                    :length="pagination.total"
                    @input="onPageChange"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
    </div>
</template>

<script> 
import {getBerita, getBeritaTable, searchBeritaByJenis, searchBeritaBySorting, searchBeritaByJenisAndSorting} from "@Plugins/api";
import News from "./GetBerita";
export default {
    data : () => ({
        fab : false,
        news: [],
        sorting: 0,
        isSorted: false,
        isSearcingByJenis: false,
        loading: true,
        pagination: {
            current: 1,
            total: 0,
        },
        jenis: [],
        judul: [],
        selectedJudul: '',
        selectedJenis: '',
        breakPoint: "",
    }),
    methods : {
        onPageChange(){
            this.loading = true;
            window.scrollTo(0,0);
            if(this.isSorted && this.isSearcingByJenis){
                this.getSearchingAndSortedData();
            }else if(this.isSorted){
                this.getSortingData()
            }else if(this.isSearcingByJenis){
                this.getSearchingByJenis()
            }else{
                this.getDataBerita()
            }
        },
        handleScroll () {
            // console.log(event);
            this.fab = window.scrollY > 0;
        },
        btnTopScroll(){
            this.fab = false
            window.scrollTo(0,0)
        },
        getJudulAndJenis(){
            getBeritaTable().then((res) => {
                let judul = res.map(item => {
                    return item.judul;
                })
                let jenis = res.map(item => {
                    return item.jenis;
                })
                this.judul = judul;
                this.jenis = jenis;
            })
        },
        getDataBerita(){
            getBerita(this.pagination.current)
                .then(data => {
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.news =  data.data  
                    this.loading = false
                })
        },
        getSearchingByJenis(){
            searchBeritaByJenis(this.pagination.current, this.selectedJenis)
            .then(data => {
                this.pagination.current = data.current_page
                this.pagination.total = data.last_page
                this.news =  data.data  
                this.jenis
                this.loading = false
            })
        },
        getSortingData(val){
            searchBeritaBySorting(this.pagination.current, val)
                .then(data => {
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.news =  data.data
                    this.loading = false
                })
        },
        getSearchingAndSortedData(){
            searchBeritaByJenisAndSorting(this.pagination.current, this.selectedJenis ,true)
                .then(data => {
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.news =  data.data
                    this.loading = false
                })
        }

    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.loading = true
        // this.breakPoint = this.$vuetify.breakpoint.name
        this.getJudulAndJenis();
        getBerita(this.pagination.current)
            .then(data => {
                this.pagination.current = data.current_page
                this.pagination.total = data.last_page
                this.news =  data.data  
                this.loading = false
                console.log(data.data);
            })
    },
    watch:{
        breakPoint(){
            console.log(this.$vuetify.breakpoint.name);
        },
        selectedJenis(){
            console.log(this.selectedJenis);
            this.loading = true;
            this.news = [];
            this.pagination.current = 1
            if(!this.selectedJenis){
                if(this.isSorted){
                    this.getSortingData(true);
                }else{
                    this.getDataBerita();
                }
                this.isSearcingByJenis = false;
            }else{
                if(this.isSorted){
                    this.getSearchingAndSortedData();
                    this.isSearcingByJenis = true
                }else{
                    this.getSearchingByJenis();
                    this.isSearcingByJenis = true
                }
            }
        },
        sorting(){
            console.log(this.sorting);
            this.loading = true;
            this.news = [];
            this.pagination.current = 1
            if(this.sorting == 1){
                if(this.isSearcingByJenis){
                    this.getSearchingAndSortedData();
                    this.isSorted = true;
                }else{
                    this.getSortingData(true);
                    this.isSorted = true;
                }
            }else{
                if(this.isSearcingByJenis){
                    this.getSearchingByJenis();
                }else{
                    this.getDataBerita();
                }
                this.isSorted = false;
            }
        }
    },
    
    components: {
        News
    },
}
</script>

<style>
.mt {
    margin-top: 12px;
    background-color: #dcdde1;
}
.sticky-card {
  position: fixed;
  z-index: 1; 
  width: 300px;
  max-width: 300px;
}

</style>