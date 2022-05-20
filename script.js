
document.getElementById('theme-b').classList.add(localStorage.getItem('theme'))
themeIcon = document.getElementById("theme-icon")
const theme = () => {
    const currentTheme = localStorage.getItem('theme')
    document.getElementById('theme-b').classList.remove(localStorage.getItem('theme'))  
    if(currentTheme == 'bg-dark'){
        localStorage.setItem('theme', 'bg-light')
    }else if(currentTheme == 'bg-light'){
        localStorage.setItem('theme', 'bg-dark')
    }else{
        localStorage.setItem('theme', 'bg-dark')
    }
    document.getElementById('theme-b').classList.add(localStorage.getItem('theme'))
    
    
    if(localStorage.getItem('theme') == 'bg-dark'){
        themeIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin"  style="color:rgb(5, 171, 212);"></i>'
    }else{
        themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce"  style="color:rgb(5, 171, 212);"></i>'
    }
}



    let openNavb;
const openNav = () => {
    if(!openNavb) {
        document.getElementById('sidebar').style = `display: block;`
        document.querySelector('body').style = `overflow: hidden;`
        openNavb = true;
    } else if(openNavb) {
        document.getElementById('sidebar').style = `display: none;`
        document.querySelector('body').style = `overflow: none;`
        openNavb = false;
    }
}

if(localStorage.getItem('theme') == 'bg-dark'){
    themeIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin" style="color:rgb(5, 171, 212);"></i>'
}else{
    themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce"  style="color:rgb(5, 171, 212);"></i>'
}
