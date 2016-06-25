var _is_Select_SignCert_803592850_$="0";
var selectCert = '';

//获得用户列表
function getuserlist(){
	try {
		if(_is_Select_SignCert_803592850_$=="1"){
			return  true;
		}
		 var bResults = '';
         bResults = ztb.GetUserList();
         if(!bResults){
        	 alert("您可能未插入电子钥匙！");
        	 return false;
         }else{
        	 var result = bResults.split("&&&");
        	 if(result.length == 2){
        		 selectCert = result[0].split("||")[1];
        		 return selectCert;
        	 }else{
        		 alert("请使用一把电子钥匙");
        		 return false;	 
        	 }
         }
         _is_Select_SignCert_803592850_$="1";
        return true;
    } catch (e) {
    	_is_Select_SignCert_803592850_$="0";
    	try{
    		var errorDesc=ztb.GetAppLastError();
    		if(errorDesc.indexOf("0xa0071002")>-1){
    		//用户取消选择证书
    		}else if(errorDesc.indexOf("0xa0071001")>-1){
    			alert("证书库中没有可用的证书,您可能未插入钥匙！");
    		}else{
    			alert(errorDesc);
    		}
    	}catch (e1) {
    		alert("您可能没安装浏览器版签名驱动，请安装工具栏下方弹出的cab工具");
    	}
        return false;
    }
}

//获得证书
function getkeycert(){
	try {
		if(!getuserlist()){
			return false;
        }
        var keyCert = ztb.GetKeyCert(getuserlist());
        return keyCert;
		} catch (e) {
			alert(ztb.GetAppLastError());
			clearCert();
			return false;
		}
}

//数据加密
function encryptdata(id,cert)
{
	var signmsg ;
	if(document.getElementById(id).value!=""&&document.getElementById(id).value!=null){
		signmsg = ztb.EncryptMessage(document.getElementById(id).value,cert);
		if (signmsg !="" && signmsg !=null) {
			document.getElementById(id).value = signmsg;
			return true;
		}else{
			//alert("请重新填写各价格信息后，点击提交！");
			return false;
		}
	}
}

function encryptdataTV(value,cert)
{
	var signmsg ;
	if(value!=""&&value!=null){
		signmsg = ztb.EncryptMessage(value,cert);
		return    signmsg;
	}else{
		return "";
	}
}

//文件加密
function encryptfile(localUrl,codeUrl,serverCert){
	var signmsg ;
	signmsg = ztb.EncryptBiddingFile(localUrl,codeUrl,serverCert);	
	return signmsg;
}

function clearCert() {
	try {
		_is_Select_SignCert_803592850_$="0";
        //var b=CryptoAgent.CFCA_ClearUseCerts(true);
        return b;
    } catch (e) {
    	_is_Select_SignCert_803592850_$="0";
    	try{
    		alert(CryptoAgent.CFCA_GetLastErrorDesc());
    	} catch (e1) {
    	}
        return false;
    }
}