var project    = project || {};
project.create  = project.create || {};

$.extend(project.create, {
  init: function(){
    project.create.initCombox();
    project.create.initDatebox();
    project.create.initForm();
  },
  initCombox: function(){
    $("#requesterUnitId").combobox({
    	url:'ectAGEAgencyCompByProController.cmd?method=getAgencyByUser',
    	valueField:'agencyId',
    	textField:'agencyName',
    	onSelect:function(record){
    		var url='ectAGEAgencyUserController.cmd?method=getUserByAgencyCode&agencyCode='+record.agencyId;
    		$('#requesterUnitManagerId').combobox('reload', url); 
    		$('#requesterUnitId').combobox('setValue', record.agencyId);	
    		document.getElementById('requesterUnitName').value=record.agencyName;		
    	},
    	onLoadSuccess: function () { 
            var val = $('#requesterUnitId').combobox("getData");
            if(val.length>0){
            	$('#requesterUnitId').combobox('select',val[0].agencyId);
            	document.getElementById('requesterUnitName').value=val[0].agencyName;
            }
        }
    });
    $("#requesterUnitManagerId").combobox({
    	valueField:'userId',   
        textField:'userName',
        onSelect:function(record){
    		$('#requesterUnitManagerId').combobox('setValue', record.userId);
    		document.getElementById('requesterUnitManagerName').value=record.userName;		
    	},
    		onLoadSuccess: function () { //加载完成后,设置选中第一项
            var val = $('#requesterUnitManagerId').combobox("getData");
            if(val.length>0){
            	$('#requesterUnitManagerId').combobox('select',val[0].userId);
            	document.getElementById('requesterUnitManagerName').value=val[0].userName;
            }
        }
    });
    $("#procurementMode").combobox({
    	onSelect:function(record){
    		var value = $("#procurementMode").combobox('getValue');
    		if(value != "ZB"){
          $('#time1, #time2, #time3, #time4').hide();
        
    			document.getElementById("time1").style.display="none";
    			document.getElementById("time2").style.display="none";
    			document.getElementById("time3").style.display="none";
    			document.getElementById("time4").style.display="none";
    			$("#pubTime").datebox({
    				required:false 
    			});
    			$("#endBuyTime").datebox({
    				required:false  
    			});
    			$("#closeBidTime").datebox({
    				required:false  
    			});
    			$("#startDecryptTime").datebox({
    				required:false  
    			});
    			$("#openBidTime").datebox({
    				required:false 
    			});
    			$("#bidTime").datebox({
    				required:false 
    			});
    			$("#decisionDownTime").datebox({
    				required:false 
    			});
    		}else{
    			document.getElementById("time1").style.display="block";
    			document.getElementById("time2").style.display="block";
    			document.getElementById("time3").style.display="block";
    			document.getElementById("time4").style.display="block";
    			$("#pubTime").datebox({
    				required:true,
    				missingMessage:"日期必须填写" 
    			});
    			$("#endBuyTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#closeBidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#startDecryptTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#openBidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#bidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#decisionDownTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    		}
    	},
  
    	onLoadSuccess: function(param){
    		var value = $("#procurementMode").combobox('getValue');
    		if(value != "ZB"){
    			document.getElementById("time1").style.display="none";
    			document.getElementById("time2").style.display="none";
    			document.getElementById("time3").style.display="none";
    			document.getElementById("time4").style.display="none";
    			$("#pubTime").datebox({
    				required:false 
    			});
    			$("#endBuyTime").datebox({
    				required:false  
    			});
    			$("#closeBidTime").datebox({
    				required:false  
    			});
    			$("#startDecryptTime").datebox({
    				required:false  
    			});
    			$("#openBidTime").datebox({
    				required:false 
    			});
    			$("#bidTime").datebox({
    				required:false 
    			});
    			$("#decisionDownTime").datebox({
    				required:false 
    			});
    		}else{
    			document.getElementById("time1").style.display="block";
    			document.getElementById("time2").style.display="block";
    			document.getElementById("time3").style.display="block";
    			document.getElementById("time4").style.display="block";
    			$("#pubTime").datebox({
    				required:true,
    				missingMessage:"日期必须填写" 
    			});
    			$("#endBuyTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#closeBidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#startDecryptTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#openBidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#bidTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    			$("#decisionDownTime").datebox({
    				required:true, 
    				missingMessage:"日期必须填写" 
    			});
    		}
    	}
    });
    $("#isSelf").combobox({
    	onSelect:function(record){
    		var value = $("#isSelf").combobox('getValue');
    		if(value == "Y"){
    			$('#requesterUnitId').combobox('disable').val('');
      
    			$('#requesterUnitManagerId').combobox('disable');
    			document.getElementById("requesterUnitManagerId").value="";
    			document.getElementById("requesterUnitName").value="";
    			document.getElementById("requesterUnitManagerName").value="";
    			$('#requesterUnitId').combobox('select',null);
    			$('#requesterUnitManagerId').combobox('select',null);
    		}else{
    			$('#requesterUnitId').combobox('enable');
    			$('#requesterUnitManagerId').combobox('enable');
    			$("#requesterUnitId").combobox({
    				onLoadSuccess: function () { 
    			        var val = $('#requesterUnitId').combobox("getData");
    			        if(val.length>0){
    			        	$('#requesterUnitId').combobox('select',val[0].agencyId);
    			        	document.getElementById('requesterUnitName').value=val[0].agencyName;
    			        }
    			    }
    			});
    			$("#requesterUnitManagerId").combobox({
    				onLoadSuccess: function () { //加载完成后,设置选中第一项
    			        var val = $('#requesterUnitManagerId').combobox("getData");
    			        if(val.length>0){
    			        	$('#requesterUnitManagerId').combobox('select',val[0].userId);
    			        	document.getElementById('requesterUnitManagerName').value=val[0].userName;
    			        }
    			    }
    			});
    		}
    	}
    });
  },
  initDatebox: function(){
    $("#startTime").datetimebox({
    	formatter: project.util.formatLongD
    });
    $("#stopTime").datetimebox({
    	formatter:project.util.formatLongD
    });
    $("#pubTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#endBuyTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#closeBidTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#startDecryptTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#openBidTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#bidTime").datebox({
    	formatter:project.util.formatD
    	//required:true 
    });
    $("#decisionDownTime").datebox({
    	formatter:project.util.formatD
    });
  },
  initForm: function(){
    $('#projectCreation').form({
    	url:'ectCNProjectController.cmd?method=persisit',
    	onSubmit:function(){
        var currentTime = (new Date()).getTime();
        var formJson = $('#projectCreation').serializeJSON();
        console.log(formJson.chooseBased);
        formJson.projectName = $.trim(formJson.projectName);
    	  
        var errors = [];
    	  if(formJson.projectName === ''){
    	  	errors.push("项目名称不能为空！");
    	  }
    	  if(formJson.projectName.length > 32){
    	  	errors.push("项目名称不能超过32个字符！");
    	  }
        
    	  if(formJson.projectYear == 0){
    	  	errors.push("请选择项目所属年份！");
    	  }
        
    	  if(formJson.projectCode.length <1 ){
    	  	errors.push("项目编号不能为空！");
    	  	
    	  }
    	  if(formJson.projectCode.length > 32){
    	  	errors.push("项目编号不能超过32个字符！");
    	  	
    	  }
    	  if(formJson.procurementMode == 0){
    	  	errors.push("请选择采购方式！");
    	  	
    	  }
    	  if(formJson.productClasses == 0){
    	  	errors.push("请选择物资类型！");
    	  	
    	  }
    	  if(formJson.spendingType == 0){
    	  	errors.push("请选择开支类型！");
    	  	
    	  }
    	  if(formJson.procurementStyle == 0){
    	  	errors.push("请选择是否公开采购！");
    	  	
    	  }
    	  if(formJson.budgetMoney.length == ''){
    	  	errors.push("预算总金额不能为空!");
    	  	
    	  }
    	  if(isNaN(formJson.budgetMoney)){
    	  	errors.push("预算总金额必须为数字!");
    	  	
    	  }
    	  if(formJson.needDepartment==0){
    	  	errors.push("请选择需求部门！");
    	  	
    	  }
    	  if(formJson.startTime.length<1){
    	  	errors.push("必须填入应答开始时间!");
    	  	
    	  }
    	  if(project.util.checkTime(formJson.startTime) < currentTime){
    	  	errors.push("应答开始时间应大于当前时间!");
    	  	
    	  }
    	  if(formJson.purchaseType==0){
    	  	errors.push("请选择采购类型！");
    	  	
    	  }
    	  if(formJson.stopTime.length<1){
    	  	errors.push("必须填入应答截至时间!");
    	  	
    	  }
    	  if(project.util.checkTime(formJson.startTime)>project.util.checkTime(formJson.stopTime)){	
    	  	 errors.push("应答开始时间应小于应答截至时间!");
    	  	 
    	    }
          
    	  if(formJson.createUnit.length<1){
    	  	errors.push("创建单位不能为空！");
    	  	
    	  }
    	  if(formJson.createUnit.length>32){
    	  	errors.push("创建单位不能超过32个字符！");
    	  	
    	  }
    	  if(formJson.createDepartment.length<1){
    	  	errors.push("创建部门不能为空！");
    	  	
    	  }
    	  if(formJson.createDepartment.length>32){
    	  	errors.push("创建部门不能超过32个字符！");
    	  	
    	  }
    	  if(formJson.oaFileNumber.length>32){
    	  	errors.push("采购方案审批OA公文文号不能超过32个字符！");
    	  	
    	  }
    	  if(formJson.determinStyle==0){
    	  	errors.push("请选择采购方式决策方式！");
    	  	
    	  }
    	  if(formJson.determinMan.length<1){
    	  	errors.push("采购方式决策人不能为空！");
    	  	
    	  }
    	  if(formJson.determinMan.length>32){
    	  	errors.push("采购方式决策人不能超过32个字符！");
    	  	
    	  }
    	  if(formJson.chooseBased.length<1){
    	  	errors.push("采购方式选择依据不能为空！");
    	  	
    	  }
    	  if(formJson.chooseBased.length>100){
    	  	errors.push("采购方式选择依据不能超过100个字符！");
    	  	
    	  }
    	  if(formJson.remarkProject.length>200){
    	  	errors.push("项目描述不能超过200个字符！");
    	  	
    	  }
        
        if(errors.length === 0)
          return true;
        
          alert(JSON.stringify(errors));
          return false;
      },
      success:function(data){
    	  if(data=='1'){
    	    errors.push("增加成功");
          var url = window.opener.location.href;
    	  	window.opener.location.href = url;
    	    self.close();
    	  }else{
    		  errors.push("增加失败!");
    	  }
      }
    });
  },
  onSubmit: function(){
    $('#projectCreation').submit();
  }
});

$(function () { 
  project.create.init();
});