const body = document.querySelector('body')
const text= document.querySelectorAll('h1,.links a, .text button,p,footer li a')
const theme=document.querySelector('.theme');
var color;
var darktheme =false;
theme.addEventListener('click',(e)=>{
    if (darktheme==false) {
        // bgcolor=null;
        theme.style.backgroundImage = "url('moon.png')";
        body.style.background = "#222831";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color="white";    
        }
        darktheme=true;
        
    } else {
        theme.style.backgroundImage="url('pngwing.com.png')";
        body.style.background='';
        for (let i = 0; i < text.length; i++) {
            text[i].style.color="";    
        }
        footer.style.background.color = '';

        darktheme=false;
    }
    
})