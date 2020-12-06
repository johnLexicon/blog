<template>
  <div>
     <h1>Create Post</h1>
     <!-- Default form contact -->
<form class="text-center border border-light p-5">
    <input type="text" id="title" name="title" required class="form-control mb-4" placeholder="Title...">
    <div class="form-group">
        <textarea class="form-control rounded-0" required id="content" rows="20" placeholder="Blog message..."></textarea>
    </div>
    <button class="btn btn-success btn-block" type="submit">Create</button>
</form>
<!-- Default form contact -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>