<template>
  <div
    ref="toast"
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <span
        :class="`bg-${msg.style}`"
        class="p-2 rounded me-2 d-inline-block"
      ></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>
<script>
import Toast from "bootstrap/js/dist/toast";
export default {
  name: "Toast",
  props: ["msg"],
  mounted() {
    //   當觸發吐司元件，並生成時 並開啟6秒，之後消失
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 6000,
    });
    toast.show();
  },
};
</script>
