<template>
  <div class="search-container">
    <div class="search-input">
      <input
        type="text"
        class="form-control"
        id="searchAuthors"
        aria-describedby="searchAuthors"
        placeholder="Search for authors"
        v-model="searchQuery"
        @keyup="getQueryResults"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      authorIds: [],
    };
  },
  methods: {
    getQueryResults() {
      this.searchResults = this.users.filter(
        (user) =>
          user.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1
      );
      if (this.searchResults) {
        this.$store.dispatch("getFilteredPosts", {
          authorIds: this.getAuthorsId(this.searchResults),
        });
      }
    },
    getAuthorsId(results) {
      return results.map((e) => e.id);
    },
  },
  computed: {
    users() {
      return this.$store.getters.allUsers;
    },
  },
};
</script>

<style scoped>
.search-container {
  background: #6a938b;
  color: #faf6d7;
  display: flex;
  flex-direction: row;
  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .search-container {
    justify-content: center;
  }
}

.search-container .search-input {
  width: 300px;
}
</style>
