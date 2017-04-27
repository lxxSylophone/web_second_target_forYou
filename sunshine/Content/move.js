
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,1)[name];
	}
}

var timer=null;
function startMove(obj,attr,itarget)
{
	clearInterval(obj.timer);
  obj.timer=setInterval(function(){
	  if(attr=='opacity')
	  {
		   var cur=parseFloat(getStyle(obj,attr))*100;
	  }
	  else
	   {var cur=parseInt(getStyle(obj,attr));}
		var speed=(itarget-cur)/12;
		speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==itarget)
		{
			clearInterval(obj.timer);
		}
		else
		{ 
		   if(attr=='opacity')
		   { 
		     obj.style.filter='alpha(opacity:'+(cur+speed)+')';
			 obj.style.opacity=(cur+speed)/100;
			   }
		   else
			{obj.style[attr]=cur+speed+'px';}
		}
		},30);
	
}
