// Toggle SideBar
    function openSideBar(){
        const element = document.getElementById('SideBar');
        element.classList.add('activeSideBar')
    }
    function closeSideBar(){
        const element =document.getElementById('SideBar');
        element.classList.remove('activeSideBar')
    }
// Toggle SideBar

// Auto Typing Words 
    var typed = new Typed(".autoType",{
        strings: ["Programmer.", "UI Designer.", "Quick Learner."],
        typeSpeed : 80,
        backSpeed : 40,
        forwordSpeed: 20,
        loop:true
    })
// Auto Typing Words 

// Onscroll revel navBar 
    window.addEventListener('scroll', ()=>{
        const navBar = document.getElementById('navBar');
        navBar.classList.toggle('active-NavBar', window.scrollY > 40)
    })

// CRUD Form Data Send 
const BASE_URL = 'http://localhost:3000';
    async function sendInformation(){
        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;
        const email = document.getElementById('userEmail').value;
        const subject = document.getElementById('Subject').value;
        const message = document.getElementById('Msg').value;

        const response = fetch(BASE_URL+'/user', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({
                "Name": name,
                "Phone": phone,
                "Email":email,
                "Subject":subject,
                "Message":message
            })
        });
        const data = response.json();
    }

    
    