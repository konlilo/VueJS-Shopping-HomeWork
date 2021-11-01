<template>
  <div
    class="toast-container position-absolute pe-3 top-3 top-0 end-0"
    style="z-index: 1050"
  >
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>
<script>
import Toast from "@/components/Toast.vue";

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  // 內層要使用emitt時，使用inject 把資料讀進來，就不須再import emitter套件
  inject: ["emitter"],
  mounted() {
    //   pust-message 事件觸發時 emitter 會將 外部的message 的 style,title,content屬性push 到messages陣列中
    this.emitter.on("push-message", (message) => {
      const { style = "success", title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
