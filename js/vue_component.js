Vue.component('tes',{
    template: '<div v-on:mouseover = "changename()" v-on:mouseout="originalename();"><h1>Custom component created by <span id="name">{{name}}</span></h1></div>',
    data: function(){
        return {
            name: "Niomic"
        }
    },
    methods:{
        changename: function(){
            this.name = "Satria";
        },
        originalename: function(){
            this.name = "Rahmat";
        }
    }
});

var vm = new Vue({
    el: '#component1'
});

var vm1 = new Vue({
    el: '#component2'
})