var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${','}']; //把默认的{{}}改成ES6的模板字符串${}
Vue.config.devtools = true;
var routes = require('./routes');

var router = new VueRouter(routes);
var App = new Vue({
    el:'#app',
    router:router
})
//router.map(require('./routes'));
//router.start(App, '#app');
//router.go({"path":"/"})