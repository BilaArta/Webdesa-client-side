<template>
    <v-row style="height : 700px" class="mt-8">
        <v-col
            cols="1"
            sm="1"
            md="2"
            lg="2"
            xl="3"
        >
        </v-col>
        <v-col
            cols="10"
            sm="10"
            md="8"
            lg="8"
            xl="6"
            align="center"
        >
            <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="admin.email"
                    label="Email"
                    required
                    dense
                    type="email" 
                    :rules="rules"
                >
                </v-text-field>
                <v-text-field
                    v-model="admin.password"
                    label="Password"
                    required
                    dense
                    type="password"
                >
                </v-text-field>
            </v-form>
            <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit()"
            >
            Submit
            </v-btn>   
        </v-col>
        <v-col
            cols="1"
            sm="1"
            md="2"
            lg="2"
            xl="3"
        >
        </v-col>
    </v-row>
</template>


<script>

// import Login from "./Login";
// import Register from "./Register";
import { login } from "../plugins/api";

export default {
    props: ['updateToken'],
    components: {
        // Login, 
        // Register,
    },
    data: () => ({
        admin: {},
        valid: true,
        rules: [
            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        submit() {
            if (this.$refs.loginForm.validate()) {
                login(this.admin.email, this.admin.password)
                    .then((res) => {
                        // console.log(res);
                        this.$emit('updateToken', true)
                        this.$router.push({name: 'Dashboard Admin', params: {id: res.data}})
                    })
                    .catch((err) => console.log(err))
            }   
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        }
    },
    mounted(){
        console.log('admin page');
    }
}
</script>