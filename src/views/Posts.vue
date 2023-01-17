<template>
  <div>
    <search></search>
    <div class="posts-wrapper">
      <post-box
        v-for="(post, id) in posts"
        :key="id"
        :post="post"
      >
      </post-box>

      <div
        class="no-results-message-container"
        v-if="!posts.length"
      >
        <p>{{ noResultsMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/SearchBar.vue";
import PostBox from "../components/PostBox.vue";

export default {
  components: {
    Search,
    PostBox,
  },
  data() {
    return {
      noResultsMessage: "There are no posts by this author",
    };
  },
  created() {
    this.$store.dispatch("getAllPosts");
    this.$store.dispatch("getAllUsers");
    this.$store.dispatch("getAllComments");
  },

  computed: {
    posts() {
      return this.$store.getters.filteredPosts;
    },
  },
};
</script>

<style scoped>
.posts-wrapper {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .posts-wrapper {
    padding: 20px 50px;
  }
}

@media only screen and (min-width: 1200px) {
  .posts-wrapper {
    padding: 20px 100px;
  }
}

.no-results-message-container {
  background-color: #ffffff;
  padding: 15px;
}

.no-results-message-container p {
  margin: 0px;
}
</style>
