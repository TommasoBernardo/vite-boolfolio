<script>
export default {
    name: 'AppPost',
    data(){
        return{

        }
    },
    props:{
        'post':{
            type: Object,
            required: true,
        },
    },
}
</script>

<template lang="">
    <div class="container">
        <div class=" single-post card  w-100 p-3" >
            <img :src="post.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> {{ post.title }}</h5>
                <h5 class="card-date"> {{ post.date }}</h5>
                <p class="card-text">{{ post.content.substr(0, 160) }}</p>
                <router-link :to="{name: 'post', params:{slug: post.slug}}" class="btn btn-primary">show more</router-link>
            </div>
    </div>
    </div>

</template>


<style lang="">
    
</style>