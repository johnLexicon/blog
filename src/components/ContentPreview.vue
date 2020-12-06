<template>
  <div class="word-wrap text-center text-success">
    <h1>{{ post.title }}</h1>
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