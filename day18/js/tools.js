//定义一个函数,用来向一个元素中添加指定的class属性值
				/*
				 * 参数:
				 * 	obj 要添加class属性的元素
				 * 	cn 要添加的class值
				 */
				function addClass(obj,cn){
					if(!hasClass(obj,cn)){						
						obj.className += " " + cn;
					}
				}
				/*
				 * 判断一个元素中是否含有指定的class属性值
				 * 如果有则返回true 否则返回false
				 */
				function hasClass(obj,cn){
					//创建正则表达式
					//var reg = /\bb2\b/;
					var reg = new RegExp("\\b"+cn+"\\b");
					//alert(reg);
					return reg.test(obj.className);
				}
				/*
				 * 删除一个元素中的指定class属性
				 */
				function removeClass(obj , cn){
					var reg = new RegExp("\\b"+cn+"\\b");
					
					obj.className = obj.className.replace(reg,"");
					
				}
				/*
				 * 切换一个类
				 * 如果元素中有该类,则删除
				 * 如果元素中没有该类,则删除
				 */
				function toggleClass(obj,cn){
					if(hasClass(obj,cn)){
						removeClass(obj,cn);
					}else{
						addClass(obj,cn);
					}
				}