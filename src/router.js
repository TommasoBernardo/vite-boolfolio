import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import PostsIndex from './pages/PostsIndex.vue';
import SinglePost from './pages/SinglePost.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs
        },

        {
            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },
        {
            path: '/post/:slug',
            name: 'post',
            component: SinglePost
        },
    ]
});
export { router };