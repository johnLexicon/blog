<template>
  <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <a href="#" @click.prevent="$router.go(-1)">Back to previews</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BlogPost',
    created() {
        this.retrievePost(this.$route.params.postId);
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async retrievePost(postId){
            try{
                const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                this.post = result.data;
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>