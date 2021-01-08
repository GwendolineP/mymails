document.getElementById('compteur').textContent = document.getElementsByClassName('row message').length;
for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click", 
    function(){
     this.parentNode.remove();
     document.getElementById('compteur').textContent = document.getElementsByClassName('row message').length;
    }
    )
   }
