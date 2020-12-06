<template>
  <div class="d-flex">
    <div class="col-md-6 col-lg-6">
        <h1>Create Post</h1>
        <!-- Default form contact -->
        <form @submit.prevent="createPost" class="text-center border border-light p-5">
          <input
            v-model="post.title"
            type="text"
            id="title"
            name="title"
            required
            maxlength="50"
            class="form-control mb-4"
            placeholder="Title..."
          />
          <div class="form-group">
            <textarea
              v-model="post.body"
              class="form-control rounded-0"
              required
              id="content"
              rows="20"
              placeholder="Blog message..."
            ></textarea>
          </div>
          <button class="btn btn-success btn-block" type="submit">Create</button>
        </form>
    </div>  
    <div class="col-md-6 col-lg-6 text-center text-wrap">
        <h1>{{ post.title }}</h1>
        <p class="word-wrap">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "CreatePost",
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