<template>
  <div>
    <h1>Previews</h1>
    <input v-model="searchCriteria" class="form-control w-25" placeholder="Search title..." type="text">
    <div v-if="!isLoaded">
      <p>Retrieving post previews...</p>
    </div>
    <!-- Grid row -->
    <div v-else class="row my-4" v-for="post in filteredPosts" :key="post._id">
      <Card :post="post" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from '@/components/Card';

export default {
  name: 'Previews',
  components: {
    Card
  },
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
          "https://us-central1-blog-webapi.cloudfunctions.net/api/posts/?justpreviews=true"
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