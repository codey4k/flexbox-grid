document.addEventListener('DOMContentLoaded', ()=>{
            
        
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