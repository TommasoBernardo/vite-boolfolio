
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
        <div class="col-6 single-post card mt-3" v-for="post in posts">
            <img :src="post.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> {{ post.title }}</h5>
                    <h5 class="card-date"> {{ post.date }}</h5>
                    <p class="card-text">{{ post.content.substr(0, 160) }}</p>
                    <a href="#" class="btn btn-primary">show more</a>
                </div>
        </div>
</template>

