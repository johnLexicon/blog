<template>
  <div>
    <h1>Create Post</h1>
    <!-- Default form contact -->
    <form
      @submit.prevent="$emit('on-create-post')"
      class="text-center border border-light p-5"
    >
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
</template>

<script>
export default {
    name: 'AppForm',
    props: ['post']
};
</script>

<style>
</style>