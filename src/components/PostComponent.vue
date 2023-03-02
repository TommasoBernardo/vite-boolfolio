
<script>
export default {
    name: 'PostComponent',
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<template lang="">
    <div class="col-5 post-card mt-3 border" v-for="post in posts">                       
        <img :src="post.image" class="card-img-top" alt="#">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.content.substr(0, 120)}}</p>
            <a href="#" class="btn btn-primary">Show more</a>
        </div>
    </div>
</template>

