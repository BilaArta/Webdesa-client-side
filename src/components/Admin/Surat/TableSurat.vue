<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="datasets"
            :search="search"
            :loading="loading"
            loading-text="Loading..."
            item-key="id"
            class="elevation-1"
        >
            <template v-slot:[`item.actions`]='{ item }'>
                <v-btn
                    color="primary"
                >
                    <v-icon
                        small
                        @click="editNews(item.id)"
                    >
                        mdi-pencil
                    </v-icon> 
                </v-btn>
                <v-btn
                    color="red"
                    dark
                >
                    <v-icon
                        small
                        @click="deleteBerita(item.id)"
                    >
                        mdi-delete
                    </v-icon>          
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>

import {getPendudukSurat} from "@Plugins/api";
export default {
    data : () => ({
        headers: [
            {
                text : "Id",
                value : "id",
                filterable: false,
            },
            {
                text : "Nama",
                value : "nama"
            },
            {
                text : "NIK",
                value : "nik"
            },
            {
                text : "Tanggal Lahir",
                value : "tanggalLahir",
            },
            {
                text : "Gender",
                value : "gender"
            },
            {
                text : "Alamat",
                value : "alamat"
            },
            {
                text : "Surat dibuat",
                value : "created_at",
            },
            {
                text : "Subjek Surat",
                value : "subjek"
            },
            {
                text : "Deskripsi Surat",
                value : "deskripsi"
            },
            { 
                text: 'Actions', 
                value: 'actions', 
                sortable: false 
            },
        ],
        datasets : [],
        search : '',
        loading : true,
    }),
    created() {
        this.loading = true;
        getPendudukSurat().then((result) => {
            this.datasets = result;
        }).catch((err) => console.log(err))
        this.loading = false
    },
    methods: {
        editNews(item) {
            this.dialog = true;
            this.editData = item
            console.log(item);
        },
        deleteBerita(item) {
            console.log(item);
            // deleteBerita(item);
            alert(`${item} telah dihapus`)
        },
        close(){
            this.dialog = false
        },
        
    },
}
</script>

<style>

</style>