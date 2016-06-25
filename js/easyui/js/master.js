//表格全屏显示
function fullScreen(tableId){
	var screenHeight = $(document).height()-20;
	var screenWidth = $(document).width();
	$("#"+tableId).height(screenHeight);
	$("#"+tableId).width(screenWidth);
};

function screenSize(tableId){
	var screenHeight = 400;
	var screenWidth = $(document).width();
	$("#"+tableId).height(screenHeight);
	$("#"+tableId).width(screenWidth);
};