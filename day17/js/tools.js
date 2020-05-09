/*
			 * 参数:
			 * 	obj:要执行动画的对象
			 * 	attr:要改变的样式 如:left top width height
			 * 	target:执行动画的目标位置
			 * 	speed:移动的速度
			 * 	callback:回调函数,这个函数将会在动画执行完毕后执行
			 */
			function move(obj,attr,target,speed,callback){
				
				clearInterval(obj.timer);	
				
				var current = parseInt(getStyle(obj,attr));
					if(current > target){
						speed = -speed;
					}
					obj.timer = setInterval(function(){
						var oldValue = parseInt(getStyle(obj,attr));
						
						var newValue = oldValue + speed;
						
						//向左移动,判断newValue小于target
						//向右移动,判断newValue大于target
						if((speed > 0 && newValue > target) || (speed < 0 && newValue < target)){
							newValue = target;
						}
							//attr是变量 只能用[]形式传参数
						obj.style[attr] = newValue + "px";
							
						if(newValue == target){
							clearInterval(obj.timer);
							//动画执行完毕,调用回调函数
							callback && callback();
						}
					},30)
			}
			function getStyle(obj,name){
					if(window.getComputedStyle){
						//正常浏览器的方式,具有getComputedStyle()方法
						return getComputedStyle(obj , null)[name];
					}else{
						//IE8的方式,没有getComputedStyle()方法
						return obj.currentStyle[name];
					}
					
					//return window.getComputedStyle?getComputedStyle(obj , null)[name]:obj.currentStyle[name];
				}