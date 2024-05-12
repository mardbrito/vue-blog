<script setup>
import { ref } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostItem from '@/components/PostItem.vue'

const postStore = usePostsStore()
const postFilter = ref('all')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'bookmarked' : 'all'
}
</script>

<template>
  <div>
    <button @click="setPostFilter">
      {{ postFilter === 'all' ? 'Bookmarked posts' : 'All posts' }}
    </button>
  </div>

  <div v-if="postFilter === 'all'">
    <div v-for="post in postStore.sorted" :key="post.id">
      <div class="wrapper">
        <PostItem :post="post" />
      </div>
    </div>
  </div>
  <div v-else>
    <div v-for="post in postStore.bookmarked" :key="post.id">
      <div class="wrapper">
        <PostItem :post="post" />
      </div>
    </div>
  </div>
</template>
