<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-5">
    <form @submit.prevent="signIn" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="user.username"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <span style="color: blue">可輸入:dimcjo6u4@gmail.com 進行測試</span>

        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="user.password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <span style="color: blue">可輸入:a0958762789 進行測試</span>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        isLoading: false, //進度賭取條狀態 true:顯示，false:不顯示
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        // 登入成功執行以下
        if (res.data.success) {
          // 解析賦值or 賦值解構 提取res.data內的token,expired
          const { token, expired } = res.data;
          // console.log(token, expired);

          //將 token 與 expired 放進瀏覽器的cookie裡
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          // 透過 $router.push() ，跳轉道 /dashboard 頁面
          this.$router.push("/dashboard/products");
        }
      });
    },
  },
};
</script>
