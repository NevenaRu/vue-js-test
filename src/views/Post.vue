<template>
  <div class="wrapper">
    <!-- Post details -->
    <div class="post-container">
      <div class="author-info">
        <div>
          <img
            src="../assets/avatar.png"
            class="img-fluid avatar-img" />
        </div>
        <div class="author-name">
          {{ author.name }}
        </div>
      </div>
      <hr />
      <div>
        <h4>{{ postData.title }}</h4>
        <p class="post-body">{{ postData.body }}</p>
      </div>
      <hr />

      <!-- Comments section -->
      <div class="comments-container">
        <div class="comments-header">
          <h5>Comments ({{ comments.length }})</h5>
        </div>
        <div
          v-for="(comment, id) in comments"
          :key="id"
          class="comment-box">
          <div class="author-info">
            <div>
              <img
                src="../assets/avatar.png"
                class="img-fluid avatar-img" />
            </div>
            <div class="author-name">
              {{ comment.email }}
            </div>
          </div>

          <div class="comment-body">
            <p>{{ comment.body }}</p>
          </div>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import httpService from "../api/http-service";

export default {
  data() {
    return {
      id: null,
      postData: {},
      author: {},
      comments: [],
    };
  },
  methods: {
    getPostId() {
      this.id = this.$route.params.id;
    },
    async getPostData(id) {
      let response = await httpService.getPostData(id);
      this.postData = response.data;
      this.getAuthor(this.postData.userId);
      this.getPostComments(this.id);
    },
    async getAuthor(authorId) {
      let response = await httpService.getUser(authorId);
      this.author = response.data;
    },
    async getPostComments(postId) {
      let response = await httpService.getPostComments(postId);
      this.comments = response.data;
    },
  },
  created() {
    this.getPostId();
    this.getPostData(this.id);
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .wrapper {
    padding: 20px 50px;
  }
}

@media only screen and (min-width: 1200px) {
  .wrapper {
    padding: 20px 100px;
  }
}

.post-container {
  background-color: white;
  margin-bottom: 10px;
  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .post-container {
    margin: 0px;
  }
}

.post-container .author-info {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
}

.post-container .author-info .avatar-img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.post-container .author-info .author-name {
  align-self: flex-end;
  font-size: 20px;
}

.comments-container .comments-header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.comments-container .comment-box .author-name {
  font-size: 18px;
}

.comments-container .comment-box .comment-body {
  text-align: left;
}

.comments-container .comment-box .comment-body p {
  margin: 10px 0px;
}

.comments-container .comment-box:last-child {
  margin-bottom: 0px;
}

.comments-container .comment-box:last-child hr {
  display: none;
}
</style>
