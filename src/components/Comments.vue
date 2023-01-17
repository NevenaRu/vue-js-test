<template>
  <div>
    <div
      v-if="showComments"
      class="collapse"
      :id="`postComments${postId}`"
    >
      <div class="comments-header">
        <h5>Comments ({{ comments.length }})</h5>
      </div>

      <div
        v-for="(comment, id) in comments"
        :key="id"
        class="comment-box"
      >
        <div class="author-info">
          <div>
            <img
              src="../assets/avatar.png"
              class="img-fluid avatar-img"
            />
          </div>
          <div class="author-name">
            {{ comment.email }}
          </div>
        </div>

        <div class="comment-body">
          {{ comment.body }}
        </div>

        <hr />
      </div>
    </div>
    <div class="comments-toggle">
      <hr />
      <a
        type="button"
        data-toggle="collapse"
        :href="`#postComments${postId}`"
        @click="toggleComments"
        :toggleButtonTitle="`${
          showComments
            ? (toggleButtonTitle = 'Hide comments')
            : (toggleButtonTitle = 'Show comments')
        }`"
        >{{ toggleButtonTitle }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postId: null,
    comments: [],
  },
  data() {
    return {
      showComments: false,
      toggleButtonTitle: "",
    };
  },
  methods: {
    toggleComments() {
      this.showComments = !this.showComments;
    },
  },
};
</script>

<style scoped>
.comment-box {
  margin-bottom: 15px;
}

.comments-header {
  display: flex;
  justify-content: flex-start;
}

.author-info {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.author-info .avatar-img {
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-info .author-name {
  align-self: flex-end;
}

.comment-body {
  text-align: left;
}

.comment-box:last-child {
  margin-bottom: 0px;
}

.comment-box:last-child hr {
  display: none;
}

.comments-toggle a {
  font-size: 15px;
  color: black;
}

.comments-toggle hr {
  margin: 5px;
}

a,
a:hover {
  color: #000000;
  text-decoration: none;
}
</style>
