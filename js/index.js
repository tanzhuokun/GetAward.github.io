	var oBtn = document.getElementById('btn');
	var aLi = document.getElementsByTagName('li');
	var oTooltips = document.getElementById('tooltips');
	var oConfirm = document.getElementById('confirm');
	var oContent = document.getElementById('content');
	var oImg = document.getElementById('img');
	var nowIndex = 0;//定义滚动指定的li
	oBtn.onclick = function(){
		var number = getRandom(10,28);//获取中奖随机号码
		//抽奖背景切换
	var	scrollLi = setInterval(function(){
     colorChange(aLi,nowIndex);
     	 nowIndex++;
     	 //中奖or为中奖内容设置
if(nowIndex==number)
{
	clearInterval(scrollLi);
	oTooltips.style.display = "block";
	
	if(aLi[nowIndex%9].innerHTML=="很遗憾~"){
	oContent.innerHTML ='sorry~ 大明&nbsp;' + aLi[nowIndex%9].innerHTML;
	oImg.src="img/fool.png"
		nowIndex = 0;
	}else{
	oContent.innerHTML ='恭喜~ 大明 获得了' + aLi[nowIndex%9].innerHTML;
	oImg.src="img/love.png"
		nowIndex = 0;
	}
}

	},100)
		
	}
	
//改变颜色
function colorChange(aLi,nowIndex){
	 //把所有li背景设置为白色
      for (var i= 0;i<aLi.length;i++) {
      	aLi[i].style.backgroundColor = "white"
      }
      //背景
		aLi[(nowIndex+1)%9].style.backgroundColor = "red";
}
	
//点击确认后消失
oConfirm.onclick = function(){
	oTooltips.style.display = "none";
}
	//获取随机获奖数字
	function getRandom(min,max){
		return Math.floor(Math.random()*(max-min+1) + min)
	}
	
