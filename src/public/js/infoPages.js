window.addEventListener('load',showPage);

   function showPage(){

    
    const navSlide = ()=>{
        const nava = document.querySelector('nav');
        const burger= document.querySelector('.burger');
        const blackNav = document.querySelector('.black-nav');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        let offsetY=0;
       
        burger.addEventListener('click',()=>{
             // toggle Nav
            
             nava.classList.remove('shrink');
            nav.classList.toggle('nav-active');    
            blackNav.classList.toggle('nav-active');
           
            
    
             //Animate Links
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation='';
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                   
                }
                
            });

            
            //Burger Animation
    
            burger.classList.toggle('toggle');
            burger.style.overflowY="hidden";

            if(document.querySelector('.nav-active')===null){
                document.querySelector('*').style.overflowY="";
                window.scrollTo(0,offsetY-100);
            }else{
                offsetY=window.pageYOffset;
                window.scrollTo(0,0);
                document.querySelector('*').style.overflowY="hidden";
            }

            
        })
       
    
    }
    
    const shrinkNav = ()=>{
        const nava = document.querySelector('nav');
        
           
            window.addEventListener('scroll', function(){
                if(document.querySelector('.nav-active')===null){
                        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                            nava.classList.add('shrink');
                        } else {
                            nava.classList.remove('shrink');
                        }

                }
            });

        

    };
    
   
    
    
    
    const app = ()=>{
        navSlide();
        shrinkNav();
    }

    setTimeout(() => {   
        app();

    }, 100);
           
       
        
}
    
