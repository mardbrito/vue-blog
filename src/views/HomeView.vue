<script setup>
import PostItem from '@/components/PostItem.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
</script>

<template>
  <div v-for="post in postStore.posts" :key="post.id">
    <div class="wrapper">
      <PostItem :post="post" />
    </div>
  </div>
</template>
