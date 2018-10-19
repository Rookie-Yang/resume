protflioAll.onclick = function(){
  protflioBar.className = 'bar state-1'
}
protflioFramework.onclick = function(){
  protflioBar.className = 'bar state-2'
}
protflioVallina.onclick = function(){
  protflioBar.className = 'bar state-3'
}

setTimeout(function(){
  siteWelcome.classList.remove('active')
},1000)//1s后执行代码

window.onscroll = function(xxx){//用户滑动后触发
  if(window.scrollY>20){//获取用户滚动高度
    TopNavBar.classList.add('sticky')
  }
  else{
    TopNavBar.classList.remove('sticky')    
  }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')//接受一个选择器，返回选择器对应所有元素
for(let i=0;i<liTags.length;i++){
  liTags[i].onmouseenter = function(x){//当鼠标进入时会触发改元素
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){//当鼠标离开时会触发改元素
    x.currentTarget.classList.remove('active')
  }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')

for(let i=0; i<aTags.length;i++){
  aTags[i].onclick = function(x){
    x.preventDefault()//阻止默认动作
    let a = x.currentTarget//得到a标签
    let href = a.getAttribute('href')//$siteAbout//获取用户在标签上写的原文，href是浏览器加过http协议
    let element = document.querySelector(href)///接受一个选择器，返回选择器1个元素
    let top = element.offsetTop//得到element距离页面顶部固定距离

    let n = 20 //一共移动多少次
    let duration = 500/n //多少时间移动一次
    let currentTop = window.scrollY
    let targetTop = top -80
    let distance = (targetTop - currentTop)/ n
    let i=0
    let id = setInterval(()=>{
      if(i === n){
        window.clearInterval(id)
        return
      }
      i++
      window.scrollTo(0,currentTop + distance * i)
    },duration)
   // window.scrollTo(0,top - 80)//x不变 Y滑动到top-80位置 
  }
}