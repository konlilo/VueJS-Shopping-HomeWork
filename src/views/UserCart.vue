<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                ></div>
              </td>
              <td>
                <a
                  @click.prevent="getProduct(item.id)"
                  href="#"
                  class="text-dark"
                  >{{ item.title }}</a
                >
              </td>
              <td>
                <div v-if="!item.price" class="h5">
                  {{ item.origin_price }} 元
                </div>
                <del v-if="item.price" class="h6"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div v-if="item.price" class="h5">
                  現在只要{{ item.price }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    @click="getProduct(item.id)"
                    type="button"
                    class="btn btn-outline-secondary"
                  >
                    查看更多
                  </button>
                  <button
                    @click="addCart(item.id)"
                    :disabled="status.loadingItem === item.id"
                    type="button"
                    class="btn btn-outline-danger"
                  >
                    <div
                      v-if="status.loadingItem === item.id"
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品明</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      @click="removeCartItem(item.id)"
                      :disabled="status.loadingItem === item.id"
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <!-- 用v-model 綁 input-text 的 item.qty 再透過@change 方法 送後端 -->
                      <input
                        v-model.number="item.qty"
                        @change="updateCart(item)"
                        :disabled="status.loadingItem === item.id"
                        type="number"
                        min="1"
                        class="form-control"
                      />
                      <div class="input-group-text">
                        / {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼 例:good168"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 訂單表單建立 -->
    <div class="my-5 row justify-content-center">
      <Form v-slot="{ errors }" @submit="createOrder" class="col-md-6">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            v-model="form.user.email"
            rules="email|required"
            name="email"
            :class="{ 'is-invalid': errors['email'] }"
            type="email"
            id="email"
            class="form-control"
          ></Field>
          <!-- Field，ErrorMessage 的name 屬性 需與 errors 名稱對應 -->
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            v-model="form.user.name"
            rules="required"
            name="姓名"
            :class="{ 'is-invalid': errors['姓名'] }"
            type="text"
            id="name"
            class="form-control"
          ></Field>

          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">電話</label>
          <Field
            v-model="form.user.tel"
            rules="required"
            name="電話"
            :class="{ 'is-invalid': errors['電話'] }"
            type="text"
            id="tel"
            class="form-control"
          ></Field>

          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            v-model="form.user.address"
            rules="required"
            name="地址"
            :class="{ 'is-invalid': errors['地址'] }"
            type="text"
            id="address"
            class="form-control"
          ></Field>

          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            v-model="form.message"
            class="form-control"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "", //對應品項id
      },
      cart: {},
      coupon_code: "", //折購碼
      // 訂單資料
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        console.log("products: ", res);
        this.isLoading = false;
      });
    },
    // 進入商品介紹
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    // 加入購物車
    addCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };

      this.$http.post(api, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        console.log(res);
        this.getCart();
      });
    },
    // 取得購物車內容
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    // 更新購物車
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = "";
        this.getCart();
      });
    },
    // 加入折價券
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const conpon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: conpon }).then((res) => {
        console.log(res);
        this.getCart();
        this.isLoading = false;
      });
    },
    // 移除購物車(單個)
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, "移除購物車品項");
        this.status.loadingItem = "";
        this.getCart();
        this.isLoading = false;
      });
    },
    // 新增訂單
    createOrder() {
      this.isLoading = true;

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res);
        this.isLoading = false;
        this.$router.push(`/user/checkout/${res.data.orderId}`);
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
