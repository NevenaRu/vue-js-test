<template>
  <div class="post-box">
    <div class="author-info">
      <div>
        <img
          src="../assets/avatar.png"
          class="img-fluid avatar-img"
        />
      </div>
      <div
        class="author-name"
        v-if="author"
      >
        {{ author.name }}
      </div>
    </div>
    <hr />
    <div>
      <router-link
        :to="postLink"
        target="_blank"
        ><h4>{{ post.title }}</h4></router-link
      >
      <p class="post-body">{{ post.body }}</p>
    </div>
    <comments
      :comments="comments"
      :postId="post.id"
    ></comments>
  </div>
</template>

<script>
import Comments from "../components/Comments.vue";

export default {
  components: {
    Comments,
  },
  props: {
    post: {},
  },
  computed: {
    author() {
      return this.$store.getters.postAuthor(this.post.userId);
    },
    comments() {
      return this.$store.getters.postComments(this.post.id);
    },
    postLink() {
      return { name: "post", params: { id: this.post.id } };
    },
  },
};
</script>

<style scoped>
.post-box {
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 15px;
}

.post-box .author-info {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
}

.post-box .author-info .avatar-img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.post-box .author-info .author-name {
  align-self: flex-end;
  font-size: 20px;
}

.post-box hr {
  margin-top: 5px;
}

.post-box .post-body {
  text-align: justify;
}

.post-box:last-child {
  margin-bottom: 0px;
}

a,
a:hover {
  color: #000000;
  text-decoration: none;
}
</style>
