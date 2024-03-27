const elemToggleFunc = function(elem)
{
    elem.toggle("active");

}

const navbar = document.querySelector("[data-navbar]")
const overlay = document.querySelector("[data-overlay]")
const navCloseBtn = document.querySelector("[data-nav-Close]")
const navOpenBtn= document.querySelector("[data-nav-open-btn]")
const navbarLinks = document.querySelector("[data-nav-link]")

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

for (let i =0; i < navbarLinks.length;i++)
{
    navElemArr.push(navbarLinks[i]);
}

for (let i =0; i < navElemArr.length; i++)
{
    navElemArr[i].addEventListener("click", function ()
    {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

const header =  dpcument.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active")
});
