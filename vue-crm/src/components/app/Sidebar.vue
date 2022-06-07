<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <RouterLink
      v-for="link in links"
      :key="link.url"
      tag="li"
      class="waves-effect waves-orange pointer"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#">{{ link.title }}</a>
    </RouterLink>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" },
    ],
  }),
};
</script>

<style scoped>
.app-sidenav > a {
  padding: 15px;
  height: 50px;
}
.app-sidenav > a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.app-sidenav > a.active {
  background-color: rgba(0, 0, 0, 0.05);
}
ul {
  display: flex;
  flex-direction: column;
}
a {
  color: black;
}
</style>
