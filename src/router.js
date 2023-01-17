import Vue from "vue";
import Router from "vue-router";
import Posts from "./views/Posts.vue";
import Post from "./views/Post.vue";

Vue.use(Router);

const routes = [
  {
    path: "/posts",
    name: "posts",
    component: Posts,
    alias: "/",
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
    props: true,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
