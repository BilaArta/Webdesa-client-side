<template>
    <header class=" mr-0">
        <v-app-bar
            class="pl-2 pr-2"
        >
            <v-app-bar-nav-icon 
                dark 
                class="d-flex d-sm-none"
                @click="drawer = true"
            >
            </v-app-bar-nav-icon>
            <v-spacer></v-spacer>

            <v-toolbar-title class="white--text">WEBSITE DESA TIBUBIU</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex">
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

                    <v-menu
                        open-on-click
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
                                    <router-link :to="'/'+item.path" class="mr-2 ml-2 black--text">
                                        {{ item.title }}    
                                    </router-link>
                            </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    
                    <v-btn
                        v-if="token"
                        elevation="4"
                        small
                        tile
                        class="mr-2 ml-2 black--text"
                        @click="logout"
                    >
                        Logout                
                    </v-btn>
                </div>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            color="#f1f2f6"
        >
            <v-list
                nav
                dense
            >
                <v-subheader class="ml-n2 text-h5 black--text"><b>Pilih Menu</b></v-subheader>
                <hr>
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >

                <v-list-item>
                    <router-link to="/">
                        <v-list-item-title class="ml-4 text-subtitle-2 "><b>Profile Desa</b></v-list-item-title>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                
                <v-list-item>
                    <router-link to="/berita">
                        <v-list-item-action class="text-subtitle-2 ml-4"><b>Berita</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                    <router-link to="/sejarah">
                        <v-list-item-action class="text-subtitle-2 ml-4"><b>Sejarah Desa</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                    <router-link to="/strukturOrganisasi">
                        <v-list-item-action class="text-subtitle-2 ml-4"><b>Struktur Organisasi Desa</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <router-link to="/potensiMasyarakat">
                        <v-list-item-action class="text-subtitle-2 ml-4"><b>Potensi Masyarakat</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <router-link to="/rpjmdes">
                        <v-list-item-action class="text-subtitle-2 ml-4"><b>RPJMDES</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                <div v-if="token">
                    <v-list-item>
                        <router-link to="/">
                            <v-list-item-action class="text-subtitle-2 ml-4"
                            elevation="4"
                            small
                            tile
                            @click="logout"><b>Logout</b></v-list-item-action>
                        </router-link>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
import { logout} from "@Plugins/api";
export default {
    props:['updateToken', 'token'],
    watch: {

    },
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {title: "Profile Desa", path:""},
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

a {
    text-decoration: none;
}   

.v-app-bar {
    background-color: #ff3f34 !important; 
}

</style>