var navbar = document.getElementById('navbar');
var previousProject = document.getElementById('prevProjBtn');
var nextProject = document.getElementById('nextProjBtn');
var projTxt = document.getElementById('projectText')
var arrProjs = ["iphone1.png","iphone2.png","iphone3.png"] 
var arrTexts = ["Discover the epitome of user-friendly design with our calorie tracker project. Navigating the intricate landscape of nutrition has never been more effortless. Our interface is a harmonious blend of simplicity and functionality, ensuring a seamless experience for users of all levels. Dive into a visually appealing dashboard that transforms complex nutritional data into clear insights. Intuitively log your meals, track your progress, and explore a wealth of nutritional information with a few clicks. Effortlessly empowering your wellness journey, our calorie tracker redefines convenience in the pursuit of a healthier, more balanced lifestyle.","Embark on a transformative health journey with my calorie tracker project. This intuitive tool transcends mere numbers, offering a holistic approach to mindful eating. Seamlessly blending user-friendly design with powerful functionality, our calorie tracker becomes a trusted companion in your wellness quest. Dive into a world where every bite is a conscious choice, and each nutritional detail is elegantly presented. Elevate your health experience with this project — not just a calorie tracker, but a personalized guide on your path to a healthier, more balanced lifestyle.","Presenting my latest weather forecasting project, a streamlined solution tailored to provide users with precise and up-to-date weather predictions for the next 24 hours. Our project focuses on simplicity and accuracy, delivering a one-day forecast with essential details on temperature, precipitation, and atmospheric conditions. With a clean interface and real-time updates, our weather forecasting tool is designed for those who seek quick and reliable insights to plan their day effectively."]
var projectImage = document.getElementById("projectImage")
var imageCounter = 2
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
    projectImage.style.opacity = 0;
    projTxt.style.color = 'rgba(255, 255, 255, 0)';
    setTimeout(() => 
    {
        if (button == previousProject)
    {
        switch (imageCounter)
        {
            case 0:
                imageCounter = 2
                projectImage.src = "img/"+ arrProjs[imageCounter]
                projTxt.textContent = arrTexts[imageCounter]
                break;
            case 1:
                imageCounter = 0
                projectImage.src = "img/"+  arrProjs[imageCounter]
                projTxt.textContent = arrTexts[imageCounter]
                break;
            case 2:
                imageCounter = 1
                projectImage.src = "img/"+  arrProjs[imageCounter]
                projTxt.textContent = arrTexts[imageCounter]
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
                projTxt.textContent = arrTexts[imageCounter]
                break;
            case 1:
                imageCounter = 2
                projectImage.src = "img/"+  arrProjs[imageCounter]
                projTxt.textContent = arrTexts[imageCounter]
                break;
            case 2:
                imageCounter = 0
                projectImage.src = "img/"+  arrProjs[imageCounter]
                projTxt.textContent = arrTexts[imageCounter]
                break;
        }
    }
    projectImage.style.opacity = 1;
    projTxt.style.color = 'rgba(255, 255, 255, 1)';
    }, 500);
}
function toggleElements() {
    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');

    // Плавно скрываем первый элемент
    element1.style.opacity = 0;
    element1.style.pointerEvents = 'none';

    element2.style.opacity = 1;
    element2.style.pointerEvents = 'auto';
}