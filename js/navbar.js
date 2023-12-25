var navbar = document.getElementById('navbar');
var previousProject = document.getElementById('prevProjBtn');
var nextProject = document.getElementById('nextProjBtn');
var arrProjs = ["iphone1.png","iphone2.png","iphone3.png"] 
var projectImage = document.getElementById("projectImage")
var imageCounter = 0
console.log(navbar)
window.onscroll = function() 
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        navbar.classList.add('scrolled-nav-bar');
    } 
    else 
    {
        navbar.classList.remove('scrolled-nav-bar');
    }
};

function anotherProject(button)
{
    if (button == previousProject)
    {
        switch (imageCounter)
        {
            case 0:
                imageCounter = 2
                projectImage.src = "img/"+ arrProjs[imageCounter]
                break;
            case 1:
                imageCounter = 0
                projectImage.src = "img/"+  arrProjs[imageCounter]
                break;
            case 2:
                imageCounter = 1
                projectImage.src = "img/"+  arrProjs[imageCounter]
                break;
        }
    }
    else
    {
        switch (imageCounter)
        {
            case 0:
                imageCounter = 1
                projectImage.src = "img/"+ arrProjs[imageCounter]
                break;
            case 1:
                imageCounter = 2
                projectImage.src = "img/"+  arrProjs[imageCounter]
                break;
            case 2:
                imageCounter = 0
                projectImage.src = "img/"+  arrProjs[imageCounter]
                break;
        }
    }
}
