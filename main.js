//  changing navbar styles on scroll

window.addEventListener('scroll' , () => {
    document.getElementById('navG').classList.toggle
    ('window-scroll', window.scrollY > 50)
})