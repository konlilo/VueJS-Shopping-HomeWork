<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  v-model="tempProduct.imageUrl"
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  @change="uploadFile"
                  ref="fileInput"
                  type="file"
                  id="customFile"
                  class="form-control"
                />
              </div>
              <img class="img-fluid" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  v-model="tempProduct.title"
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    v-model="tempProduct.category"
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">單位</label>
                  <input
                    v-model="tempProduct.unit"
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    v-model="tempProduct.origin_price"
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    v-model="tempProduct.price"
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  v-model="tempProduct.description"
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  v-model="tempProduct.content"
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    v-model="tempProduct.is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <!-- 按鈕觸發 emit 事件向外傳遞 ，
          $emit( '自訂事件名稱', 要傳遞的參數 ) -->
          <button
            @click="$emit('update-product', tempProduct)"
            type="button"
            class="btn btn-primary"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from "@/mixins/modalMixin";
export default {
  // 做型態驗證時，props 須為物件{} 型態
  props: {
    //product:{} 做型態驗證
    product: {
      type: Object, //型態物件
      default() {
        //default 表示 預設值
        return {}; //都沒有時，預設 回傳 物件
      },
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {
        // 可以給tempProduct空物件 v-model 自動會新增加入
      }, //由外層傳遞近來並接收資料
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  methods: {
    uploadFile() {
      // 使用$refs 抓取 圖檔的 Dom 元素
      // console.dir(this.$refs.fileInput); //使用console.dir 查看會發現在files 裡的陣列中
      const uploadedFile = this.$refs.fileInput.files[0];
      // console.log(uploadedFile);

      // 根據api 傳統圖片表單上傳 如下網址
      // https://github.com/hexschool/vue3-course-api-wiki/wiki/%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0-%5B%E9%9C%80%E9%A9%97%E8%AD%89%5D#%E4%B8%8A%E5%82%B3%E5%9C%96%E7%89%87

      // 以下為 另外撰寫方法與去解決傳統 圖片表單 上傳

      // 傳送圖檔為 enctype="multipart/form-data" 格式
      // 所以需 new 一個 FormData() 型態;
      const formData = new FormData();
      // name = file-to-upload
      // 將type = file 的 name 屬性 及圖檔 寫入 FormData 型態中
      // FormData.append( "name名稱", 所要帶入的參數[此範例為圖檔] )
      formData.append("file-to-upload", uploadedFile);

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        // console.log(res.data);
        //API 串接成功 執行以下
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>
