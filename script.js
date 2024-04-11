
//Student's Data
//maximum book number is 3
const std1={
    name:"Miss President",
    bookTaken:2,
    stdID:"020bim007",
    takenDate:"2022-Mangsir-5",
    toBeReturned:"2022-Poush-5",
    pwd:"123abc",
    email:"abc@gmail.com"

};

const std2={
    name:"First Gentleman",
    bookTaken:1,
    stdID:"021MIT013",
    takenDate:"2022-Mangsir-15",
    toBeReturned:"2022-Poush-25",
    pwd:"123abc",
    email:"abc@gmail.com"
};

const std3={
    name:"Miss President",
    bookTaken:2,
    stdID:"020bim007",
    takenDate:"2022-Mangsir-5",
    toBeReturned:"2022-Poush-5",
    pwd:"123abc",
    email:"abc@gmail.com"
};

const std4={
    name:"Miss Prime Minister",
    bookTaken:2,
    stdID:"020bim007",
    takenDate:"2022-Mangsir-5",
    toBeReturned:"2022-Poush-5",
    pwd:"123abc",
    email:"abc@gmail.com"
};

const std5={
    name:"Mr King",
    bookTaken:2,
    stdID:"020bim007",
    takenDate:"2022-Mangsir-5",
    toBeReturned:"2022-Poush-5",
    pwd:"123abc",
    email:"abc@gmail.com"
};
const userRecord=[std1,std2,std3,std4,std5]


//element
usernameInput=document.querySelector(".username-input")
emailInput=document.querySelector(".email-input")
pwdInput=document.querySelector(".pwd-input")
submitBtn=document.querySelector(".submit-btn")
homeContent=document.querySelector(".home-content")
aboutContent=document.querySelector(".about-content")
servicesContent=document.querySelector(".services-content")
contactContent=document.querySelector(".contact-content")
home=document.querySelector(".home")
about=document.querySelector(".about")
services=document.querySelector(".services")
contact=document.querySelector(".contact")
loginbtn=document.querySelector(".loginbtn")
formBox=document.querySelector(".form-box")

//variable
var find=0;

//if each navbar is clicked
home.addEventListener("click",()=>{
    homeContent.classList.add("show")
    aboutContent.classList.remove("show")
    contactContent.classList.remove("show")
    servicesContent.classList.remove("show")
    formBox.classList.remove("show")
})

about.addEventListener("click",()=>{
    aboutContent.classList.add("show")
    homeContent.classList.remove("show")
    contactContent.classList.remove("show")
    servicesContent.classList.remove("show")
    formBox.classList.remove("show")
})

contact.addEventListener("click",()=>{
    contactContent.classList.add("show")
    homeContent.classList.remove("show")
    aboutContent.classList.remove("show")
    servicesContent.classList.remove("show")
    formBox.classList.remove("show")
})

services.addEventListener("click",()=>{
     
    servicesContent.classList.add("show")
    homeContent.classList.remove("show")
    aboutContent.classList.remove("show")
    contactContent.classList.remove("show")
    formBox.classList.remove("show")
})

loginbtn.addEventListener("click",()=>{
    formBox.classList.add("show")
    homeContent.classList.remove("show")
    aboutContent.classList.remove("show")
    contactContent.classList.remove("show")
    servicesContent.classList.remove("show")

})

//if the user is in the list of users
//  for checking if there is the data of user or not 
submitBtn.addEventListener("click",function(e){
        e.preventDefault()
        for(i=0;i<userRecord.length;i++){
            console.log(userRecord[i].name)
            if(userRecord[i].name===usernameInput.value){
                console.log("I have found it")

                //you may find another system for this in tuts
                if(userRecord[i].email!=="" && userRecord[i].pwd!=="" && userRecord[i].pwd===pwdInput.value &&  userRecord[i].email===emailInput.value){
                    console.log("Succeed")
                }
                else{
                    console.log("Please give correct email address and password!")
                }
                break; 
            }
            else{
                console.log("No such data!") 
            }
        }

})

//if you want to issue another book, if there is fine or not ,list of books in the library
