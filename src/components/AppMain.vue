<script>
import axios from 'axios'
export default {
    name: 'AppMain',
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

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>ciao</h2>
                </div>
            </div>
        </div>
    </section>
</template>