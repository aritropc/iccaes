const navSlide= () => {
    const burger= document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-links')
    const navlinks= document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        
        nav.classList.toggle('nav-active')
        navlinks.forEach((link,index)=>{
            if (link.style.animation) {
                link.style.animation=''
            }
            else{
                link.style.animation='navLinkFade 0.5s ease forwards '+(index/7+0.3)+'s'
            }
        })
    })
    
}

navSlide()

window.addEventListener("scroll",()=>{
    let header= document.querySelector("nav")
    header.classList.toggle("sticky",window.scrollY>0)
})
