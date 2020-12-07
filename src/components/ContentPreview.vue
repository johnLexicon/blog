<template>
  <div class="word-wrap text-center text-success">
    <h1 class="text-dark">Content Preview</h1>
    <h2>{{ post.title }}</h2>
    <p class="word-wrap">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
    name: 'ContentPreview',
    props: ['post']
}
</script>

<style scoped>
    .word-wrap{
        word-break: break-all;
    }
</style>