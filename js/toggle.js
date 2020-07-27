let toggleNavStatus = false;

let toogleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); //we used querySelectorAll() bcos we need to select all links not just one. 


    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        //we have to loop getSidebarLinks bcos its an array 
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1"; 
        }

        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true )
    {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        //we have to loop getSidebarLinks bcos its an array 
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0"; 
        }
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

}

// // ALTERNATIVE TO USING onclick() function in the HTML DOM
// let buttonToggle = document.querySelector('.btn-toggle-nav');

// buttonToggle.onclick = toogleNav;
//    //N/B: do not add parenthesis () at the end of the call function above, if not, it runs once the page loads. 





















