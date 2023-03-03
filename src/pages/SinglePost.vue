
<script>
    import AppPost from '../components/AppPost.vue';
    import axios from 'axios';
export default {
    name:'SinglePost',
    components: {
        AppPost,
    },
    data(){
        return{
            posts:null,
            loading:false,
            urlAddress: 'http://127.0.0.1:8000/api/posts',
        }
    },
    
    methods: {
            getPost() {
                axios.get(this.urlAddress + `/api/posts/${this.$route.params.slug}`, {
                    params:{

                    }
                })
                .then((response)=>{
                    this.post = response.data.results;
                })
                .catch(function(error){
                    console.warn(error);
                });
            }
        },

    created(){
        this.getPost();
    }
}
</script>

<template lang="">

    <div class="row">
        <AppPost :post="post" />
    </div>
</template>

<style lang="">
    
</style>