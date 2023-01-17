import Vue from "vue";
import Vuex from "vuex";
import httpService from "../api/http-service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    comments: [],
    filteredPosts: [],
  },

  getters: {
    filteredPosts: (state) => {
      return state.filteredPosts;
    },
    allUsers: (state) => {
      return state.users;
    },
    postAuthor: (state) => (userId) => {
      let result = state.users.find((user) => user.id === userId);
      return result;
    },
    postComments: (state) => (postId) => {
      let result = state.comments.filter(
        (comment) => comment.postId === postId
      );
      return result;
    },
  },

  mutations: {
    getAllPosts: (state, posts) => {
      state.posts = posts;
      state.filteredPosts = posts;
    },
    getAllUsers: (state, users) => {
      state.users = users;
    },
    getAllComments: (state, comments) => {
      state.comments = comments;
    },
    getFilteredPosts: (state, authorIds) => {
      if (!authorIds.length) {
        state.filteredPosts = state.posts;
      }
      state.filteredPosts = state.posts.filter((post) =>
        authorIds.includes(post.userId)
      );
    },
  },

  actions: {
    async getAllPosts({ commit }) {
      let response = await httpService.getAllPosts();
      commit("getAllPosts", response.data);
    },
    async getAllUsers({ commit }) {
      let response = await httpService.getAllUsers();
      commit("getAllUsers", response.data);
    },
    async getAllComments({ commit }) {
      let response = await httpService.getAllComments();
      commit("getAllComments", response.data);
    },
    getFilteredPosts({ commit }, { authorIds }) {
      commit("getFilteredPosts", authorIds);
    },
  },
});
