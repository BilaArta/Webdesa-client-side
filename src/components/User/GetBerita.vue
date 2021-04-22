<template>
  <div>
        <v-skeleton-loader
            type="card"
            :loading="loading"
            class="mb-4"
        >
            <v-card
                elevation="4"
                outlined
                class="pa-4"
            >
                <v-card-title>
                    <v-chip
                        label
                    >
                        {{datasets.judul}}
                    </v-chip>
                </v-card-title>
                <v-card-subtitle>
                    {{datasets.jenis}}
                    {{datasets.admin}}
                </v-card-subtitle>
                <hr class="mt-n3 mb-n2">
                <v-card-text>
                    <span>{{getDate[0]}}</span>
                    <br>
                    <span class="black--text">
                        {{datasets.deskripsi.slice(0, 100)}}
                    </span>
                </v-card-text>
                <v-img
                    height="auto"
                    width="auto"
                    alt="Card image"
                    :src="path+datasets.file"
                >
                    <!-- :src="path + datasets.file" -->
                </v-img>
            </v-card>
        </v-skeleton-loader>
  </div>
</template>

<script>
export default {
    props: ['datasets', 'loading'],
    data : () => ({
        path: process.env.VUE_APP_STORAGE,
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
                return [null]
            }
        }   
    },
    created(){
        console.log(this.datasets);
    },
}
</script>

<style>

</style>