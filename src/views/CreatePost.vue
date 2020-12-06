<template>
  <div class="d-flex">
    <div class="col-md-6 col-lg-6">
        <AppForm @on-create-post="createPost" :post="post" />
    </div>  
    <div class="col-md-6 col-lg-6 text-center text-wrap text-muted">
        <h1>{{ post.title }}</h1>
        <p class="word-wrap">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '@/components/Form'

export default {
  name: "CreatePost",
  components: {
      AppForm: Form
  },
  data() {
    return {
      post: {
          title: '',
          body: ''
      },
    };
  },
  methods: {
      async createPost() {
          try{
            const result = await axios.post('http://localhost:9999/api/posts/', Object.assign({}, this.post));
            console.log(result);
            this.post = {title: '', body: ''};
            this.$router.push({name: 'Previews'});
          }catch(err) {
              console.log(err);
          }
      }
  }
};
</script>

<style>
    .word-wrap{
        word-break: break-all;
    }
</style>