<script setup>
import { reactive, computed } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { useRouter } from 'vue-router'

const postStore = usePostsStore()
const router = useRouter()
const post = reactive({
  title: '',
  body: ''
})

const isFormInvalid = computed(() => {
  return post.title === '' || post.body === ''
})

const handleSubmit = () => {
  postStore.addPost(post)
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit">
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
