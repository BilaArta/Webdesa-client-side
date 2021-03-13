<template>
    <header class=" mr-0">
        <v-app-bar
            class="pl-8 pr-8"
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
                        Berita              
                    </v-btn>
                </router-link>
                <router-link to="/">
                    <v-menu
                        open-on-hover
                        offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            v-if="!token"
                            elevation="4"
                            medium
                            v-bind="attrs"
                            v-on="on"
                            class="mr-2 ml-2"
                            >
                            Profile <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                link
                            >
                            <v-list-item-title>
                                    {{ item.title }}    
                            </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                        
                </router-link>
                <router-link to="/berita">
                    <v-btn
                        v-if="!token"
                        elevation="4"
                        medium
                        
                    >
                        Data Desa              
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
import { logout} from "@Plugins/api";
export default {
    props:['updateToken', 'token'],
    watch: {

    },
    data: () => ({
        items: [
            { title: 'Visi & Misi' , path: 'visimisi'},
            { title: 'Sejarah Desa', path: 'sejarahDesa' },
            { title: 'Struktur Organisasi', path: 'strukturOrganisasi' },
            { title: 'RPJMDES', path: 'rpjmdes' },
        ],
    }),
    methods: {
        logout(){
            logout()
            this.$emit('updateToken', false)
        }
    },
    
    
}
</script>

<style>

.v-toolbar__content a{
    text-decoration: none;
}   

</style>