import axios from "axios"
import { setHeaderToken, removeHeaderToken } from "../utils/auth";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API


export function login(email, password) {
    return new Promise((resolve, rejected) => {
        axios.post('/login', {email, password})
            .then((res) => {  
                let token = res.data.token;
                localStorage.setItem('token', token);
                setHeaderToken(token);
                resolve(res.data)
            })
            .catch((err) => rejected(err))
    })
}

export function getBerita(params){
    return new Promise((resolve,reject) => {
        axios.get(`/berita?page=${params}`)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })
}

// @Return searching data
export function searchBeritaByJudul(params, judul){
    return new Promise((resolve,reject) => {
        axios.get(`/searchBerita?page=${params}&judul=${judul}`)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })
}

export function searchBeritaBySorting(params, desc){
    return new Promise((resolve,reject) => {
        axios.get(`/searchBerita?page=${params}&desc=${desc}`)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })
}

export function searchBeritaByJenis(params, jenis){
    return new Promise((resolve,reject) => {
        axios.get(`/searchBerita?page=${params}&jenis=${jenis}`)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })
}
export function searchBeritaByJenisAndSorting(params, jenis, desc){
    return new Promise((resolve,reject) => {
        axios.get(`/searchBerita?page=${params}&jenis=${jenis}&desc=${desc}`)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })
}

// @End Return searching data

export function sendMail(req){
    return new Promise((resolve, rejected) => {
        axios.post('send-mail', req)
            .then(result => resolve(result))
            .catch(err => rejected(err));
    })
}

export function getCategories(){
    return new Promise((resolve, rejected) => {
        axios.get('categories')
            .then(result => resolve(result))
            .catch(err => rejected(err))
    })
}

export function getBeritaTable(){ 
    return new Promise((resolve,reject) => {
        axios.get(`/allBerita`) 
            .then(result => resolve(result.data))
            .catch(err => reject(err)) 
    })
}

export function inputBerita(news){
    return new Promise((resolve,rejected) => {
        axios.post('/berita', news)
            .then(result => resolve(result.data))
            .catch(err => rejected(err));
    })
}

export function inputRpjmdes(file){
    return new Promise((resolve,rejected) => {
        axios.post('/rpjmdes', file)
            .then(result => resolve(result.data))
            .catch(err => rejected(err));
    })
}

export function getRpjmdes(){
    return new Promise((resolve,rejected) => {
        axios.get('/rpjmdes')
            .then(result => resolve(result.data))
            .catch(err => rejected(err));
    })
}

export function getPdf(file){
    return new Promise((resolve,rejected) => {
        axios.get('/rpjmdes/'+ file)
            .then(result => resolve(result.data))
            .catch(err => rejected(err));
    })
}

export function deleteBerita(news){
    return new Promise((resolve, reject) => {
        axios.delete(`/berita/${news}`)
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export function updateBerita(news){
    return new Promise((resolve, reject) => {
        axios.put(`/berita/${news}`)
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export function logout() {
    return new Promise(() => {
        removeHeaderToken();
    })
}

export function getUser(){
    return new Promise((resolve, rejected) => {
        axios.get('user')
            .then((res) => resolve(res.data))
            .catch((err) => rejected(err))
    })
}

export function checkWarga(nik){
    
    return new Promise((resolve, rejected) => {
        axios.get(`/penduduk/${nik.nik}`)
            .then((res) => {
                console.log(res.data)
                resolve(res.data)
            })
            .catch(err => {
                rejected(err)
            })
    })
}

export function getPenduduk(){
    return new Promise((resolve, reject) => {
        axios.get('/penduduk')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

export function getSuratPenduduk(id){
    return new Promise((resolve, reject) => {
        axios.get(`/penduduk/${id}/getSurat`)
            .then((result) => {
                // console.log(result);
                resolve(result.data);
            })
            .catch((err) => reject(err))
    })
}

export function getPendudukSurat(){
    return new Promise((resolve, reject) => {
        axios.get(`/PendudukSurat`)
            .then((result) => resolve(result.data))
            .catch((err) => reject(err))
    })
}