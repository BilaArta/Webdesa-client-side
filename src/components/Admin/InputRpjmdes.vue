<template>
    <v-form
        ref="form"
        lazy-validation
        @submit.prevent="addRpjmdes" 
        method="POST" 
        enctype="multipart/form-data"
    >

        <v-text-field
            v-model="data.name"
            label="Nama File"
            required
            dense
        >
        </v-text-field>
    
        <v-file-input
            accept=".pdf"
            prepend-icon="mdi-file"
            label="Input file pdf"
            ref="file"
            show-size
            v-model="data.file"
        ></v-file-input>
        <v-btn
            color="primary"
            class="mr-4"
            @click="addRpjmdes()"
        >
        Submit
        </v-btn>
    </v-form>
</template>

<script>
import {inputRpjmdes} from "@Plugins/api";

export default {
    data : () => ({
        data : {},
    }),
    methods: {
        addRpjmdes() {
            let data = new FormData;
            data.append('file', this.data.file);
            data.append('name', this.data.name);

            inputRpjmdes(data)
                .then(response => {
                    console.log(response)
                    alert("Berhasil upload RPJMDES")
                })
                .catch(error => {
                    console.log(error)
                    alert(error)
                })
                .finally(() => this.loading = false)
        },
    },
}
</script>

<style>

</style>