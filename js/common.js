function curDateTime(){
	//var curTime;
	//var curDate;
	var now = new Date();
	var date = new Date(now.getTime() + 10 * 60 * 1000);
    var seperator1 = "-";
    var seperator2 = ":";
    var dateTimeInfo = {};
    var curMonth = now.getMonth() + 1;
    var curDate = now.getDate();
    var strmonth = date.getMonth() + 1;
    var strDate = date.getDate();
    var strMinute = date.getMinutes()
    if (curMonth >= 1 && curMonth <= 9) {
        curMonth = "0" + curMonth;
    }
    if (curDate >= 0 && curDate <= 9) {
        curDate = "0" + curDate;
    }
      
    if (strmonth >= 1 && strmonth <= 9) {
        strmonth = "0" + strmonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strMinute >= 0 && strMinute <= 9) {
        strMinute = "0" + strMinute;
    }
    dateTimeInfo.curYear=now.getFullYear();
    dateTimeInfo.curMonth=curMonth;
    dateTimeInfo.curDate=curDate;
    dateTimeInfo.curTime= now.getHours() + seperator2 + now.getMinutes();
    dateTimeInfo.strYear=date.getFullYear();
    dateTimeInfo.strmonth=strmonth;
    dateTimeInfo.strmonth=strmonth;
    dateTimeInfo.strTime= date.getHours() + seperator2 + strMinute;
    return dateTimeInfo;
   // curTime =  date.getHours() + seperator2 + date.getMinutes();
   // curDate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
}


$(function(){
	$(".dwo").click(function(){
		$(this).parent().find(".dwb-s").click()
	})
})