<template>
  <div>
    <v-card
        elevation="4"
        outlined
        tile
    >
        <v-list-item 
            two-line
            class="mb-3"
        >
            <v-list-item-content>
            <span class="box ml-n4 mt-n16" ></span>
            <p class="date text-overline  mt-n4 "> <b>{{getDate[0]}}</b> </p>
                <v-list-item-title class="headline">
                    {{datasets.judul}}
                </v-list-item-title>
                
                <v-list-item-subtitle
                    class="mt-n1"
                >
                    <v-chip
                        label
                        small
                    >
                        <v-icon left>
                            mdi-label
                        </v-icon>
                        {{datasets.jenis}} 
                    </v-chip>  
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <hr class="mt-n3 mb-n2 ">
        <v-card-text>
            <span class="black--text" v-if="!readMore">
                {{datasets.deskripsi.slice(0, 120)}}...
            </span>
                <p class="" v-if="!readMore" @click="readMore=true">
                    Baca selengkapnya
                </p>
            <span class="black--text" v-if="readMore">
                {{datasets.deskripsi}}
            </span>
            <p class="" v-if="readMore" @click="readMore=false">
                Sembunyikan
            </p>
        </v-card-text>
        <v-img
            height="auto"
            width="auto"
            alt="Card image"
            :src="path+datasets.file"
            class="ml-2 mr-2"
        >
            
        </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ['datasets', 'loading'],
    data : () => ({
        path: process.env.VUE_APP_STORAGE,
        readMore : false,
    }),
    computed: {
        getDate:{
            get: function (){
                if(this.datasets.created_at != null){
                    let date = this.datasets.created_at.split('T')
                    let time = date[1].slice(3,8)
                    date = date[0]
                    return [date, time]
                }
                return ['2021-04-21', 'asd']
            }
        }   
    },
    created(){
        // console.log(this.datasets);
    },
}
</script>

<style>
.box {
    float: left;
    position: absolute;
    opacity: 90%;
    width: 116px;
    height: 24px;
    background-color: red;
    
    /* border: 1px solid rgba(0, 0, 0, .2); */
}

.date {
    z-index: 1;
    float: left;
    position: sticky;
    color : white
}



</style>