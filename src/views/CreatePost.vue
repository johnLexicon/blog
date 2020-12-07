<template>
  <div class="d-flex">
    <div class="col-md-6 col-lg-6">
        <AppForm @on-create-post="createPost" :post="post" />
    </div>  
    <div class="col-md-6 col-lg-6">
        <ContentPreview :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '@/components/Form'
import ContentPreview from '@/components/ContentPreview'

export default {
  name: "CreatePost",
  components: {
      AppForm: Form,
      ContentPreview
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
            const result = await axios.post('https://us-central1-blog-webapi.cloudfunctions.net/api/posts/', Object.assign({}, this.post));
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
</style>