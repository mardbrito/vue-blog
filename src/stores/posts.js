import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state() {
    return {
      posts: JSON.parse(localStorage.getItem('vue-posts')) || []
    }
  },
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    bookmarked: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Unknow',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
      localStorage.setItem('vue-posts', JSON.stringify(this.posts))
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
      localStorage.setItem('vue-posts', JSON.stringify(this.posts))
    },
    bookmarkPost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
      localStorage.setItem('vue-posts', JSON.stringify(this.posts))
    }
  }
})
