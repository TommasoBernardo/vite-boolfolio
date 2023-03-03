
<script>
    import AppPost from '../components/AppPost.vue';
    import axios from 'axios';
export default {
    name: 'PostsIndex',
    components: {
        AppPost
    },
    data(){
        return{
            posts:[],
            loading:false,
            urlAddress: 'http://127.0.0.1:8000/api/posts',
        }
    },
    
    methods: {
            getPosts() {
                axios.get(this.urlAddress, {
                    params:{

                    }
                })
                .then((response)=>{
                    this.posts = response.data.results.data;
                })
                .catch(function(error){
                    console.warn(error);
                });
            }
        },

    created(){
        this.getPosts();
    }
}
</script>

<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h2>Films:</h2>
            </div>
        </div>
    </div>
    <AppPost v-for="post in posts" :post="post"/>
</template>


<style lang="">
    
</style>