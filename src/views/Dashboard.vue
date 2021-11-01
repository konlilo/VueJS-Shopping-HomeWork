<template>
  <NavBar></NavBar>
  <div class="container-fluid mt-3 position-relative">
    <toast-messages></toast-messages>
    <router-view />
  </div>
</template>
<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
    ToastMessages,
  },
  // provide() 讓內層可以使用外層元件的功能
  provide() {
    return {
      emitter,
    };
  },
  created() {
    //   從瀏覽器 cookie中 取得 token
    // 可參考 MDN.doc  https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // console.log(token);

    // 將取出的token 放進  headers 裡做傳遞
    // 可參考axios API https://github.com/axios/axios#global-axios-defaults
    this.$http.defaults.headers.common.Authorization = token;

    // 使用axios 串接 是否登入的API
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
