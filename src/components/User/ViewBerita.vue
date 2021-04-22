<template>
    <div>
        <v-fab-transition>
            <v-btn
                id="fab"
                v-show="fab"
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
        <v-row
            v-for="(item, i) in news"
            :key="i"
            class="pt-4"
            no-gutters
        >
            <v-col
                cols="12"
                class="mt-n4 pa-4 d-flex d-sm-none"

            >
                <v-dialog
                    
                    v-if="i == 0"
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
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
                        <v-btn>Terakhir</v-btn>
                        <v-btn>Terbaru</v-btn>
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
                    <News :datasets="item" :loading="loading" ></News>
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
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
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
    width: calc(25% - 4px);
}

#btnToggle {
  flex-direction: column;
}

#fab {
    color: rgb(60, 58, 58);
}

</style>