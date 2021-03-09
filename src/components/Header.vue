<template>
    <header class="ml-1 mr-1">
        <v-app-bar
        class="pl-4 pr-4"
        >
            <v-app-bar-nav-icon>LOGO</v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>WEBSITE DESA TIBUBIU</v-toolbar-title>

            <v-spacer></v-spacer>
                <router-link to="/berita">
                    <v-btn
                        v-if="!token"
                        elevation="4"
                        medium
                        
                    >
                        Beranda              
                    </v-btn>
                </router-link>
                <router-link to="/surat">
                    <v-btn
                        v-if="!token"
                        elevation="4"
                        medium
                        tile
                        class="mr-2 ml-2 black--text"
                        color="grey lighten-4"
                    >
                        Cetak Surat
                    </v-btn>
                </router-link>
                <v-btn
                    v-if="token"
                    elevation="4"
                    small
                    tile
                    class="mr-2 ml-2 black--text"
                    color="grey lighten-4"
                    @click="logout"
                >
                    Logout                
                </v-btn>
        </v-app-bar>
    </header>
</template>

<script>
import { logout } from "../plugins/api";
export default {
    props:['updateToken', 'token'],
    watch: {

    },
    data: () => ({

    }),
    methods: {
        logout(){
            logout()
            this.$emit('updateToken', false)
        }
    }
    
}
</script>

<style>

.v-toolbar__content a{
    text-decoration: none;
}   

</style>