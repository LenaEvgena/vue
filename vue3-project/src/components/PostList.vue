<template>
  <div>
    <h3>Список Пользователей</h3>
    <post-item :key="post.id" :post="post" v-for="post in posts" />
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
};
</script>

<style scoped></style>
