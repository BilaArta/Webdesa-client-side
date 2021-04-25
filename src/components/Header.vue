<template>
    <header class=" mr-0">
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
                <v-icon id="cv" color="black">mdi-chevron-up</v-icon>
            </v-btn>
        </v-fab-transition>
        <v-app-bar
            class="pl-2 pr-2"
        >
            <v-app-bar-nav-icon 
                dark 
                class="d-flex d-sm-none"
                @click="drawer = true"
            >
            </v-app-bar-nav-icon>
            <v-img 
                src="@/assets/logo.png"
                eager
                max-height="50px"
                max-width="50px"
                class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-none"
            >
            </v-img>

            <v-spacer></v-spacer>

            <v-toolbar-title class="white--text">WEBSITE DESA TIBUBIU</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex">

                <v-spacer></v-spacer>
                
                <router-link to="/">
                    <v-btn
                        
                        elevation="4"
                        tile
                        class="mr-2"
                    >
                        Profile Desa              
                    </v-btn>
                </router-link>
                <router-link to="/berita">
                    <v-btn
                        
                        elevation="4"
                        tile
                        class="mr-2"
                    >
                        Berita              
                    </v-btn>
                </router-link>
                <div class="d-none d-lg-flex d-xl-flex">
                    <router-link to="/strukturOrganisasi">
                        <v-btn
                            
                            elevation="4"
                            tile
                            class="mr-2"
                        >
                            Struktur Organisasi       
                        </v-btn>
                    </router-link>
                    <router-link to="/sejarah">
                        <v-btn
                            
                            elevation="4"
                            tile
                            class="mr-2"
                        >
                            Sejarah Desa       
                        </v-btn>
                    </router-link>
                    <router-link to="/rpjmdes">
                        <v-btn
                           
                            elevation="4"
                            tile
                        >
                            RPJMDES       
                        </v-btn>
                    </router-link>
                </div>

                <v-menu
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                           
                            elevation="4"
                            tile
                            v-bind="attrs"
                            v-on="on"
                            class="hidden-lg-and-up"
                        >
                        Lainnya <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list >
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
                        <v-list-item-title class="ml-4 text-subtitle-2 black--text"><b>Profile Desa</b></v-list-item-title>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                
                <v-list-item>
                    <router-link to="/berita">
                        <v-list-item-action class="text-subtitle-2 ml-4 black--text"><b>Berita</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                    <router-link to="/sejarah">
                        <v-list-item-action class="text-subtitle-2 ml-4 black--text"><b>Sejarah Desa</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                    <router-link to="/strukturOrganisasi">
                        <v-list-item-action class="text-subtitle-2 ml-4 black--text"><b>Struktur Organisasi Desa</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <router-link to="/rpjmdes">
                        <v-list-item-action class="text-subtitle-2 ml-4 black--text"><b>RPJMDES</b></v-list-item-action>
                     </router-link>
                </v-list-item>
                <v-divider></v-divider>
                <div v-if="token">
                    <v-list-item>
                        <router-link to="/">
                            <v-list-item-action 
                                class="text-subtitle-2 ml-4 black--text"
                                elevation="4"
                                small
                                tile
                                @click="logout"
                            >
                                <b>Logout</b>
                            </v-list-item-action>
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
        fab : false,
        items: [
            {title: "Sejarah Desa", path:"sejarah"},
            { title: 'Struktur Organisasi', path: 'strukturOrganisasi' },
            { title: 'RPJMDES', path: 'rpjmdes' },
        ],
    }),
    methods: {
        logout(){
            logout()
            this.$emit('updateToken', false)
        },
        handleScroll () {
            // console.log(event);
            this.fab = window.scrollY > 0;
        },
        btnTopScroll(){
            this.fab = false
            window.scrollTo(0,0)
        },
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    }

    
    
}
</script>

<style>

a {
    text-decoration: none;
}   

.v-app-bar {
    background-color: #ff3f34 !important; 
}


#fab {
    color: rgb(60, 58, 58);
    background-color: grey !important;
    opacity: 30%;
}


</style>