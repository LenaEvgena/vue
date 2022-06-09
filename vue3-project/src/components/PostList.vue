<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item
      :key="post.id"
      v-for="post in posts"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h3 v-else style="color: red">Список постов пуст</h3>
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
