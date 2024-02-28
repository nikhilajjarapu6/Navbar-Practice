var navbar = document.querySelector('.navbar');
var list = document.querySelectorAll('.list');

list.forEach((item,index) => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Preventing the default action 

        const icons = item.querySelectorAll('i'); // Select only the i elements within the clicked list item
        icons.forEach(icon => {
            var content = icon.getAttribute('data-value');
            contentAlt(content);
        });

        
       const indicator = document.querySelector(".indicator");
       indicator.style.transform = `translateX(calc(${index * 60}px))`;
    });
});

function contentAlt(content) {
    var header = document.getElementById('h3');
    if(content){
    header.textContent = `${content.charAt(0).toUpperCase() + content.slice(1)}`;}
    // header.textContent=`${content.slice(0)}`
    
}



// function contentAlt(content) {
//     var header = document.getElementById('h3');
//     switch (content) {
//         case 'home':
//             header.textContent = 'Home';
//             break;
//         case 'profile':
//             header.textContent = 'Profile';
//             break;
//         case 'search':
//             header.textContent = 'Search';
//             break;
//         case 'notifications':
//             header.textContent = 'Notifications';
//             break;
//         case 'settings':
//             header.textContent = 'Settings';
//             break;
        
//     }
// }

// function contentAlt(content) {
//     var header=document.getElementById('h3')
//     if (content === 'home') {
//         console.log("home");
//         header.textContent='Home'
//     } else if (content === 'profile') {
//         console.log("profile");
//         header.textContent='Profile'
//     } 
//     else if (content === 'search') {
//         console.log("profile");
//         header.textContent='search'
//     } 
//     else if (content === 'notifications') {
//         console.log("profile");
//         header.textContent='notifications'
//     } 
//     else if (content === 'settings') {
//         console.log("profile");
//         header.textContent='settings'
//     } 
    
    
// }



// list.forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevents the default action 
//         const icon=event.currentTarget.querySelector('i');
//         const activeIcon = event.currentTarget.querySelector('.activeIcon');
        
//         document.querySelectorAll('.activeIcon').forEach(active => {
//             active.classList.remove('activeIcon');
//         });
        
//         // Add the 'activeIcon' class to the corresponding active icon
//         activeIcon.classList.add('activeIcon');
//     });
// });










// list.forEach(e => {
//     e.addEventListener('clciked', function(event) {   //adding event listener to every element
//         console.log(event);                           //event listener will return some event so 
//         event.preventDefault();
//         console.log('clicked');
//     });
// });

// list.forEach(e => {
//     e.addEventListener('mouseover', function(event) {
//         console.log(event.type); // Log the type of event triggered
//         console.log('hovered');
//     });
// });


