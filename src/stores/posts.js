import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'This great book!',
          body: 'tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit',
          author: 'Sarah Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 2,
          title: 'Coding is fun!?',
          body: 'tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit',
          author: 'Jon Doe',
          created_at: '06/04/2023',
          is_saved: false
        },
        {
          id: 3,
          title: 'Vue js VS React',
          body: 'tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit',
          author: 'Jon Doe',
          created_at: '12/30/2022',
          is_saved: false
        },
        {
          id: 4,
          title: 'Video games',
          body: 'tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit',
          author: 'Jon Doe',
          created_at: '05/01/2023',
          is_saved: false
        }
      ]
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
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    bookmarkPost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
