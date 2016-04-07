var vm = avalon.define({
	$id: 'myList',//ms-controller
	list: [],
	txt: '',
	add: function(e) {
	   e.preventDefault();
       !!vm.txt.trim() && vm.list.push(vm.txt);
       vm.txt = '';
	}
})
var dd = {
	a: 1,
	b: 2,
	sub: function(){
		var that = this;
		return that.a + that.b;
	}
}
console.log(dd.sub());
