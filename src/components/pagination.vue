<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          @click.prevent="preBtn"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
        class="page-item"
      >
        <a @click.prevent="updatePage(page)" class="page-link" href="#">
          {{ page }}</a
        >
      </li>
      <li class="page-item">
        <a
          @click.prevent="nextBtn"
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("emit-pages", page);
      console.log(page);
    },
    //分頁 下一頁
    nextBtn() {
      if (this.pages.has_next) {
        this.$emit("emit-pages", this.pages.current_page + 1);
      }
    },
    //分頁 上一頁
    preBtn() {
      if (this.pages.has_pre) {
        this.$emit("emit-pages", this.pages.current_page - 1);
      }
    },
  },
};
</script>
