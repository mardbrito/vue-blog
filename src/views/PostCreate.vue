<script setup>
import { reactive, computed } from 'vue'

const post = reactive({
  title: 'my title',
  body: ''
})

const isFormInvalid = computed(() => {
  return post.title === '' || post.body === ''
})
</script>

<template>
  <div class="wrapper">
    <form>
      <h3>Create a new post</h3>
      <div>
        <label>Post title</label>
        <input type="text" v-model="post.title" />
      </div>
      <div>
        <label>Post body</label>
        <textarea rows="7" v-model="post.body"></textarea>
      </div>
      <div>
        <button :disabled="isFormInvalid">Add</button>
      </div>
    </form>
  </div>
</template>
