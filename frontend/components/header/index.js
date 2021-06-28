import Vue from 'vue';

Vue.component('header-component', {
	template: require('./header.html').default,
	props: ['title']
});
