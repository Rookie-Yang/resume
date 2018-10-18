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
