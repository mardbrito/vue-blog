<script setup>
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="header">
      <span>Written by: {{ post.author }} on {{ post.created_at }}</span>
      <div>
        <button @click="postStore.deletePost(post.id)" class="del">delete</button>
        <button class="save">bookmark</button>
      </div>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
