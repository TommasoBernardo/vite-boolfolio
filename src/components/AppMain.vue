<script>
import axios from 'axios'
export default {
    name: 'AppMain',
    data(){
        return{
            post:[],
            loading:false,
            urlAddress: '',
        }
    },
    
    methods: {
            getPosts() {
                axios.get(this.urlAddress, {
                    params:{

                    }
                })
                .then( function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.warn(error);
                });
            }
        },
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