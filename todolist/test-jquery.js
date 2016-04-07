(function() {
    var div = $('#div1');
    var input = $('#input1');
    var ol = $('#ol1');
    var former = $('#toDo');
    function countDo() {
      console.log(ol.children());
      var len = ol.children().length;
      div.html('待办事项共'+ len +'项');
    }
    former.submit(function(e) {
    	var val = input.val();
       ol.append('<li>'+val+'  <a href="#" class="deleteLi">X</a></li>');
       countDo();
       input.val('');
       return false;
    });
    ol.on('click','.deleteLi', function(e) {
    	$(this).parent().remove();
    	countDo();
    });
})()
