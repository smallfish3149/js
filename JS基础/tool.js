//获取样式
function getStyle (obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else return obj.currentStyle[name];
}

//移动动画
function move (obj,attr,targe,speed,callback){
    clearInterval(obj.timer);
    //获取元素当前位置
    var current = parseInt(getStyle(obj,attr));
    //判断速度正负
    if(current>targe) speed = -speed;
    //开启一个定时器来执行动画效果
    obj.timer = setInterval(function(){
        //获取原来的值
        var oldValue =  parseInt(getStyle(obj,attr));
        //在原来的值加上
        var newValue = oldValue + speed;
        if((speed<0 && newValue<targe) || (speed >0 && newValue >targe)){
            newValue = targe;
        }
        obj.style[attr] = newValue + "px";
        if(newValue == targe) clearInterval(obj.timer);
    },10)
    callback && callback();
}

//向一个元素添加class属性值
function addClassName(obj,classname){
    if(!hasClass(obj,classname)) {
        obj.className += " "+classname;
        return true;
    }else return false;
}

//判断一个函数中是否有指定class
function hasClass(obj,classname){
        //var classname =  '\\b'+classname +'\\b';
        var flag = new RegExp("\\b"+classname+"\\b");   //正则表达式
        var resoult = flag.test(obj.className);
        return resoult;
}

//删除一个元素中指定的class
function removeClass(obj,classname){
    if(hasClass(obj,classname)){
    var flag = new RegExp("\\b"+classname+"\\b"); 
    obj.className = obj.className.replace(flag,""); 
    }else return false;
}

//切换一个类
function toggleClass(obj,classname){
    if(hasClass(obj,classname)){
        removeClass(obj,classname);
    }else {
        addClassName(obj,classname);
    }

}