<template>
  <div>
    <h1>Previews</h1>
    <input v-model="searchCriteria" class="form-control w-25" placeholder="Search title..." type="text">
    <div v-if="!isLoaded">
      <p>Retrieving post previews...</p>
    </div>
    <!-- Grid row -->
    <div v-else class="row my-4" v-for="post in filteredPosts" :key="post._id">
      <!-- Grid column -->
      <div class="col-lg-12 col-md-12">
        <!--Panel-->
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">{{ post.title }}</h4>
            <p class="card-text">{{ post.preview }}</p>
            <router-link
              :to="{ name: 'BlogPost', params: { postId: post._id } }"
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
      searchCriteria: '',
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(p => p.title.toUpperCase().match(this.searchCriteria.toUpperCase()));
    }
  },
  methods: {
    async retrievePosts() {
      try {
        const result = await axios.get(
          "http://localhost:9999/api/posts/?justpreviews=true"
        );
        this.posts = result.data;
        this.isLoaded = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

</style>