<template>
  <!-- Grid column -->
  <div class="col-lg-12 col-md-12">
    <!--Panel-->
    <div class="card text-center">
      <div class="card-body">
        <h4 class="card-title">{{ post.title }}</h4>
        <p class="card-text">{{ post.preview + '...' }}</p>
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
  <!-- Grid row -->
</template>

<script>
export default {
    name: 'Card',
    props: ['post']
};
</script>

<style>
</style>