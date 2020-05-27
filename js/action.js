$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		var todotext =$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todotext + "</li>");
	}
});
$("#icon").on("click",function(){
	$("input[type='text']").fadeToggle(100);
});