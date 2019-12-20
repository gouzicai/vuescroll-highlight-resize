import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import hljs from 'highlight.js'
import csharp from 'highlight.js/lib/languages/cs';
hljs.registerLanguage('csharp', csharp);
import 'highlight.js/styles/atom-one-dark-reasonable.css'  //导入代码高亮样式
//自定义一个代码高亮指令
Vue.directive('highlight', function (el) {
    let highlight = el.querySelectorAll('pre code');
    highlight.forEach((block) => {
        hljs.highlightBlock(block)
    })
})
Vue.prototype.$html_encode = function () {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
    ops: {}, // 在这里设置全局默认配置
    name: 'vue-scroll' // 在这里自定义组件名字，默认是vueScroll
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
