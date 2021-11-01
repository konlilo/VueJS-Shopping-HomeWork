<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ item.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('del-item')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入modalMixin 元件，@表示在src資料夾底下
import modalMixin from "@/mixins/modalMixin";
export default {
  //   props: [delItem],
  props: {
    //product:{} 做型態驗證
    delItem: {
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
      item: {},
    };
  },
  watch: {
    delItem() {
      this.item = this.delItem;
    },
  },
  // 使用mixins:[] ， 引入其他元件也會用到的程式碼。
  mixins: [modalMixin],
};
</script>
