<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button @click="openModal(true)" type="button" class="btn btn-primary">
      新增商品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              @click="openModal(false, item)"
              class="btn btn-outline-primary btn-sm"
            >
              編輯
            </button>
            <button
              @click="openDelProductModal(item)"
              class="btn btn-outline-danger btn-sm"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- props 由外傳到內 前內後外 -->
  <!-- emit 事件接收 內部元件 資料，
    @內部所自訂事件名稱 = 外層的f()名稱-->
  <pagination :pages="pagination" @emit-pages="getProducts"></pagination>

  <product-modal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProdcut"
  ></product-modal>
  <del-modal
    ref="delModal"
    :delItem="tempProduct"
    @del-item="delProduct"
  ></del-modal>
</template>
<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
import Pagination from "../components/pagination.vue";
export default {
  data() {
    return {
      products: [], //產品列
      pagination: {}, //分頁
      tempProduct: {}, //暫存產品
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  // 內層要使用emitt時，使用inject 把資料讀進來，就不須再import emitter套件
  inject: ["emitter"],
  methods: {
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        // isNew=false ， 則為編輯商品
        this.tempProduct = { ...item };
      }

      this.isNew = isNew;
      // 使用$refs 綁定 productModal Dom元素
      const productComponent = this.$refs.productModal;
      // 執行 productModal 元件 內部的 f(){}
      productComponent.showModal();
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true; //顯示讀取條
      this.$http.get(api).then((res) => {
        this.isLoading = false; //關閉讀取條
        // console.log(res.data);
        // 將axios 撈回來的資料 放進data() 裡
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    updateProdcut(item) {
      this.isLoading = true;
      this.tempProduct = item;

      let api = ""; //API 初始化
      let httpMethod = ""; //api (get,post,put,delete)方法初始化

      if (this.isNew) {
        // 新增商品
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        httpMethod = "post";
      } else {
        // 編輯商品
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }

      const productComponent = this.$refs.productModal;
      // 將$http.post屬性 改成 $http[httpMethod] 變數方式達到動態更改傳送
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        console.log(res);
        this.isLoading = false;
        productComponent.hideModal();

        if (res.data.success) {
          this.getProducts();
          // 成功後觸發 跨元件溝通 emitter.emit('自訂事件名稱',所要傳的參數)
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功",
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: res.data.message.join("，"),
          });
        }
      });
    },
    // 開啟刪除 Modal
    delProduct() {
      this.isLoading = true;
      const delComponent = this.$refs.delModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res.data);
        this.isLoading = false;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
