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
                    <h2>Films:</h2>
                </div>
                <div class="col-6 single-post card mt-3" v-for="post in posts">
                        <img :src="post.image" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> {{ post.title }}</h5>
                            <h5 class="card-date"> {{ post.date }}</h5>
                            <p class="card-text">{{ post.content.substr(0, 160) }}</p>
                            <a href="#" class="btn btn-primary">show more</a>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>