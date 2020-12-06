<template>
  <div>
    <h1>Previews</h1>
    <div v-if="!isLoaded">
      <p>Retrieving post previews...</p>
    </div>
    <!-- Grid row -->
    <div v-else class="row my-4" v-for="post in posts" :key="post.id">
      <!-- Grid column -->
      <div class="col-lg-12 col-md-12">
        <!--Panel-->
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">{{ post.title }}</h4>
            <p class="card-text">{{ post.body }}</p>
            <router-link
              :to="{ name: 'BlogPost', params: { postId: post.id } }"
              class="btn btn-success btn-sm"
              >Read more</router-link
            >
          </div>
        </div>
        <!--/.Panel-->
      </div>
      <!-- Grid column -->
    </div>
    <!-- Grid row -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.retrievePosts();
  },
  data() {
    return {
      posts: [],
      isLoaded: false,
    };
  },
  methods: {
    async retrievePosts() {
      try {
        setTimeout(async () => {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          this.posts = result.data;
          this.isLoaded = true;
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>