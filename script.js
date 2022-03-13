// variable and constants

let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.cart');
let navbar = document.querySelector('.navbar');
let scrollBtn = document.querySelector('.scroll-btn');


window.ad


scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})




// Event handlers


document.getElementById('search-btn').addEventListener('click', () => {
    searchForm.classList.toggle('active-search');
    cart.classList.remove('active-cart');
    navbar.classList.remove('active-menu');
})

document.getElementById('cart-btn').addEventListener('click', () => {
    cart.classList.toggle('active-cart');
    searchForm.classList.remove('active-search');
    navbar.classList.remove('active-menu');
})

document.getElementById('menu-btn').addEventListener('click', () => {
    navbar.classList.toggle('active-menu');
    cart.classList.remove('active-cart');
    searchForm.classList.remove('active-search');
})


window.onscroll = () => {

    if(window.pageYOffset > 100){
        scrollBtn.classList.add("scroll-active");
    }else {
        scrollBtn.classList.remove("scroll-active");
    }

    searchForm.classList.remove('active-search');
    cart.classList.remove('active-cart');
    navbar.classList.remove('active-menu');
}



let links = document.querySelectorAll('.link');

links.forEach((item) => {
    item.addEventListener('click', () => {
        let el = document.getElementById(`${item.getAttribute('data-link')}`);
        el.scrollIntoView({behavior: "smooth", block: "center"});
        // console.log(link.getAttribute('data-target'));
        
    })
})


AOS.init();



// Scrollspy


let section = document.querySelectorAll('section');
let link = document.querySelectorAll('.link');

section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top > offset && top < offset + height) {
        link.forEach(li => {
            li.classList.remove('active-link');
            document.querySelector('.link[href*='+id+']').classList.add('active-class');
        })
    }


})
