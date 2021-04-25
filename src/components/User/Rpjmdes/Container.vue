<template>
    <v-row>
        <v-col
            sm="1"
            md="2"
            lg="2"
            xl="2"
        >
        </v-col>
        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="8"
            xl="8"
        >
            <div class="pa-4 mt-n6">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Pencarian RPJMDES"
                    single-line
                    hide-details
                ></v-text-field>
            </div>
            <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                :loading="loading"
                hide-default-footer
                loading-text="Mohon Tunggu..."
                class="elevation-4 pa-4 mb-4"
            >
                <template v-slot:[`item.link`]="{ item }">
                    <a :href="item.link">Lihat File </a>
                </template>
            </v-data-table>
        </v-col>
        <v-col
            sm="1"
            md="2"
            lg="2"
            xl="2"
        >
        </v-col>
    </v-row>
</template>

<script>

import {getRpjmdes} from "@Plugins/api";

export default {
    data : () => ({
        items : [],
        search: '',
        loading : true,
        headers : [
            {
                text : "Nama file",
                value : "name",
                
            },
            {
                text : "Di Upload pada",
                value : "date"
            },
            // {
            //     text : "Di Upload oleh",
            //     value : "created_by"
            // },
            { text: 'File', value: 'link' },
        ],
        path : process.env.VUE_APP_STORAGE 

    }),
    methods: {
        async getData() {
            this.loading = true
            await getRpjmdes().then((result) => {
                let link = result.map(item => {
                    var link =  this.path + item.file
                    item.link = link

                    if(item.created_at != null){
                        let date = item.created_at.split('T')
                        item.time = date[1].slice(3,8)
                        item.date = date[0]
                    }
                    return item
                })
                this.items = link
                this.loading = false
            })
            // console.log(this.items);
        },
        btnLink(e){
            console.log(e);
        },
    },
    created() {
        this.getData()

    }

}
</script>

<style>

tr:nth-child(even) {background: #f1f2f6}

@media only screen and (max-width: 600px) {
    
    tr td:last-child {
        margin-bottom: 12px;
        border-bottom: 1.5px solid black !important;
    }
}



</style>