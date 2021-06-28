const Vue = require('vue');
require('../components/header');

// Vue.component('test-component', {
// 	template: '<div>{{ hi }}</div>',
// 	data() {
// 		return {
// 			hi: 'Hello world'
// 		}
// 	}
// });

// Run Vue
(async () => {
    new Vue({
        el: '#app'
    });
})()