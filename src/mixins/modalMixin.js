import Modal from "bootstrap/js/dist/modal.js";

export default {
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  // mounted() 為DOM 元素載入完執行以下
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
