// 录音
	function record(){
		layer.open({
			type:1,
			title:'添加语音',
			content:$("#addVoice"),
			shadeClose: true //点击遮罩关闭
		})
	}

	function controlRecord(obj){
		var src=$(obj).attr("src")
		var srcTail=src.substring(src.length-3);
		if(srcTail == 'png'){//开始录音
			$(obj).attr("src","images/record.gif")
		}else{//结束录音
			$(obj).attr("src","images/record.png")
		}
	}
	// 添加链接
	function showlinkLayer(){
		layer.open({
			type:1,
			title:'选择添加链接方式',
			content:$("#chosetypePup"),
			shadeClose: true, //点击遮罩关闭
			btn:['确定','取消'],
			scrollbar: false,
			yes:function(index,layero){
				//按钮【确定】的回调
				layer.close(index);
				var typeId=$("#chosetypePup").find("input[name='choseType']:checked").attr("id")
				if(typeId == 'choseInput'){
					//弹出选择添加链接方式的弹窗
					layer.open({
						type:1,
						title:'手动添加链接',
						content:$("#inputLinks"),
						shadeClose: true, //点击遮罩关闭
						btn:['保存','取消'],
						scrollbar: false,
						yes:function(index,layero){
							//按钮【确定】的回调
							var website=$("#website").val();
							var match = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
							if(!match.test(website) && website!= ''){
								layer.msg('请输入正确的链接地址');
								return
							}
							layer.close(index);
						},
						cancel:function(index,layero){
							//按钮【取消】的回调
							layer.close(index);
						}
					})
				}else if(typeId == 'choseGet'){
					//弹出获取链接的弹窗
					layer.open({
						type:1,
						title:'获取链接',
						content:$("#linksChosewrapper"),
						shadeClose: true, //点击遮罩关闭
						btn:['保存','取消'],
						scrollbar: false,
						yes:function(index,layero){
							//按钮【确定】的回调
							layer.close(index);
						},
						cancel:function(index,layero){
							//按钮【取消】的回调
							layer.close(index);
						}
					})
				}
			},
			cancel:function(index,layero){
				//按钮【取消】的回调
				console.log("取消")
			}
		})
	}

	function editmediaddtxt(obj){
		var curVal=$(obj).parents(".mediaddItem").children("p").text();
		console.log(curVal)
		var str = '<textarea name="" id="" cols="30" rows="5"  placeholder="请输入回复文字...">'+curVal+'</textarea>';
    	layer.open({
			type:1,
			title:'编辑回复文字',
			content:str,
			shadeClose: true, //点击遮罩关闭
			btn:['保存','取消'],
			scrollbar: false,
			yes:function(index,layero){
				//按钮【确定】的回调
				layer.close(index);
			},
			cancel:function(index,layero){
				//按钮【取消】的回调
				layer.close(index);
			}
		})
	}