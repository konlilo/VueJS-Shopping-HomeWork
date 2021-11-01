<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/user/cart">前台商城</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/dashboard/products" class="nav-link"
          >產品</router-link
        >
        <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
        <router-link to="/dashboard/coupons" class="nav-link"
          >優惠券</router-link
        >
        <a @click.prevent="logout" class="nav-link" href="#">登出</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
