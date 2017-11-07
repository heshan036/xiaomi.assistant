
$(function(){

	//全选、全不选			
	$('#choseAll').click(function(){
		if($(this).is(":checked")){
			$('input[name="tr_item"]').attr("checked",true);
		}else{
			$('input[name="tr_item"]').attr("checked",false);
		}
	});
	$('input[name="tr_item"]').click(function(){
		var prosum = $('.table_grouptr').length;
		var procount = 0;
		$('input[name="tr_item"]').each(function(){
			if($(this).is(":checked")){
				procount++;
			}
		})
		if(prosum == procount){	
			$('#choseAll').attr("checked",true)
		}else{
			$('#choseAll').attr("checked",false)
		}	
	})
})
//判断是否全选
function chooseItem(){	
	


}