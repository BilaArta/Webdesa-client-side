<template>
    <div>
        <div class="text-center">
            <v-progress-circular
                    :size="140"
                    :width="14"
                    class='mt-12'
                    color="grey"
                    indeterminate
                    v-show="loading"
            ></v-progress-circular>
        </div>
        <v-row
            v-for="(item, i) in news"
            :key="i"
            class="pt-4"
            no-gutters
        >
            <v-col
                cols="12"
                class="mt-n4 pa-4 d-flex d-sm-none"
                v-if="i == 0"
            >
            
                <v-dialog
                    
                    v-model="dialog"
                    hide-overlay
                    transition="dialog-top-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="pa-4"
                            color="#f1f2f6"
                            light
                            v-bind="attrs"
                            v-on="on"
                            block
                        >
                        Pencarian Berita
                        </v-btn>
                    </template>
                    <v-card>
                        <v-toolbar
                        light
                        color="#f1f2f6"
                        >
                        <v-btn
                            icon
                            light
                            @click="dialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Pencarian berita</v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-4">
                            <p class="subtitle-2" v-text="'Pencarian berdasarkan judul berita :'"></p>
                            <v-autocomplete
                                v-model="selectedJudul"
                                :items="judul"
                                clearable
                                filled
                                dense
                                label="Judul Berita"
                            ></v-autocomplete>
                            <p class="subtitle-2" v-text="'Pencarian berdasarkan jenis berita :'"></p>
                            <v-select
                                v-model="selectedJenis"
                                :items="jenis"
                                clearable
                                filled
                                chips
                                dense
                                label="Jenis Berita"
                            ></v-select>
                            <p class="subtitle-2" v-text="'Urutkan berdasarkan berita :'"></p>
                            <v-btn-toggle
                                v-model="sorting"
                                mandatory
                                dense
                                tile
                            >
                                <v-btn>Terbaru</v-btn>
                                <v-btn>Terlama</v-btn>
                            </v-btn-toggle>
                        </div>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col 
                class="d-none d-sm-flex"
                sm="3"
                md="3"
                lg="3"
                xl="3"
            >
                
                <v-card 
                    v-if="i == 0"
                    elevation="4"
                    outlined
                    class="pa-4 sticky-card"
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
                        tile
                        id="btnToggle"
                    >
                        <v-btn>Terbaru</v-btn>
                        <v-btn>Terlama</v-btn>
                    </v-btn-toggle>
                </v-card>
                <v-card
                    v-else
                >

                </v-card>
            </v-col>
            <v-col 
                cols="12"
                sm="9"
                md="9"
                lg="9"
                xl="9"
            >
                <v-skeleton-loader
                    type="card"
                    :loading="loading"
                    class="mb-4"
                >
                    <News :datasets="item" :loading="loading" >

                    </News>
                </v-skeleton-loader>
            </v-col>
        </v-row>

        <div class="text-center pa-4 mb-2">
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
        dialog: false,
        
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
                    this.dialog = false
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
                this.dialog = false
            })
        },
        getSortingData(val){
            searchBeritaBySorting(this.pagination.current, val)
                .then(data => {
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.news =  data.data
                    this.loading = false
                    this.dialog = false
                })
        },
        getSearchingAndSortedData(){
            searchBeritaByJenisAndSorting(this.pagination.current, this.selectedJenis ,true)
                .then(data => {
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.news =  data.data
                    this.loading = false
                    this.dialog = false
                })
        }

    },
    created() {
        this.loading = true
        // this.breakPoint = this.$vuetify.breakpoint.name
        this.getJudulAndJenis();
        getBerita(this.pagination.current)
            .then(data => {
                this.pagination.current = data.current_page
                this.pagination.total = data.last_page
                this.news =  data.data  
                this.loading = false
            })

    },
    watch:{
        breakPoint(){
            console.log(this.$vuetify.breakpoint.name);
        },
        selectedJenis(){
            console.log(this.selectedJenis);
            this.loading = true;
            this.news = this.dummy;
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
.v-progress-circular {
  margin: 1rem;
}

.mt {
    margin-top: 12px;
    background-color: #dcdde1;
}
.sticky-card {
    position: fixed;
    z-index: 1;
    width: calc(25% - 4px);
}

#btnToggle {
  flex-direction: column;
}

#fab {
    color: rgb(60, 58, 58);
}

</style>
