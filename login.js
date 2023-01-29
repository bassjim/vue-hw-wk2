import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
const path = 'bassjim';

const app = createApp({
    data(){
        return{
            user:{
                "username": '',
                "password": '',
            }
        }
    },
    methods:{
        login(){
            console.log(this,user);
            const url =`${site}admin/signin`;
            axios.post(url,this,user)
            .then(res => {
                const {expire,token} = res.data
                document.cookie=`myToken=${token};expires=${new Date(expired)};`

            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    mounted(){
        console.log('mounted');
        console.log(`${site}admin/signin`);
        
    }
});
app.mount('#app')