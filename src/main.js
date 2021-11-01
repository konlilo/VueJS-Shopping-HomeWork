import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";

// 安裝 npm i vue3-loading-overlay 讀取條套件後 import 引入
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// 匯入 npm 所安裝的 vee-validate 表單驗證套件
// 匯入 defineRule ，使用自定義
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// AllRules 引入全部驗證規則
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
// 使用 ctrl + 左鍵 點擊進入 @vee-validate/i18n/dist/locale/zh_TW.json 查看需要引入的規則
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import App from "./App.vue";
import router from "./router";
import { currency, date } from "./methods/filters";
import $httpMessageState from "./methods/pushMessageState";

// 設定vee-validate 表單驗證規則
// 只用 forEach 使用全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  // 載入繁體中文語系
  generateMessage: localize({ zh_TW: zhTW }),
  // 當輸入任何內容直接進行驗證
  validateOnInput: true,
});
//  設定預設語系
setLocale("zh_TW");

const app = createApp(App);

// $httpMessageState 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
// 宣告成vue的靜態變數或方法 app.config.globalProperties.自定義變數名稱 =xxx;
app.config.globalProperties.$filters = {
  currency,
  date,
};

// 此函釋的用途是整合Ajax 的錯誤事件，統一整理發送給予Toast處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios);
app.use(router);

// 使用app.component() 進行全域註冊，表示在app 裡面 所有元件都可使用。
app.component("Loading", Loading);
// 使用app.component() 進行全域註冊，註冊表單驗證元件
app.component("Field", Field);
app.component("Form", Form);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
