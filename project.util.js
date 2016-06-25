var project   = project || {};
project.util  = project.util || {};

$.extend(project.util, {
  checkTime: function(time1){
    if(typeof time1 !== 'string')
      return time1;
    var str1 = time1.replace(/-/g,"/");
    return new Date(str1).getTime();
  },
  formatD: function(date){
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  },
  formatLongD: function(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  }£¬
isJqueryImported: function(){
	if(typeof(jQuery)=="undefined"){
		alert("jQuery is not imported");
	}else{
		alert("jQuery is imported");
	}
  }
});