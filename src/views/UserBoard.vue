<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/user/cart" class="navar-brand">商城(前台)</router-link>
      <div class="text-end">
        <router-link to="/dashboard/products" class="navar-brand"
          >後臺系統</router-link
        >
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <toast-messages></toast-messages>
    <router-view></router-view>
  </div>
</template>
<script>
import ToastMessages from "../components/ToastMessages.vue";
import emitter from "@/methods/emitter";
export default {
  data() {
    return {};
  },
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
};
</script>
