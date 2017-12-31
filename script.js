document.addEventListener('DOMContentLoaded', ()=>{
    
    
    let viewport = document.getElementById('viewport')
    viewport.innerHTML = window.innerWidth + "px"
    window.addEventListener('resize', function(){
        viewport.innerHTML = window.innerWidth + "px"
    })
    
    // console.log(window.innerWidth)       
        
    window.addEventListener('scroll',()=>{
        const scroll = document.documentElement.scrollTop || document.body.scrollTop,
              menu   = document.getElementsByClassName('menu')
        
        if(scroll >= 48){
            menu[0].classList.add('fixed')
        }
        else{
            if(menu[0].classList.contains('fixed')){
                menu[0].classList.remove('fixed')
            }
        }
        
    })
})