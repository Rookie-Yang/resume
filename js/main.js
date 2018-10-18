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
},1000)

window.onscroll = function(xxx){
  if(window.scrollY>20){
    TopNavBar.classList.add('sticky')
  }
  else{
    TopNavBar.classList.remove('sticky')    
  }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0;i<liTags.length;i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active')
  }
}