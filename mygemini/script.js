const input = document.getElementById("input");
const send = document.getElementById("send");
const historyList = document.getElementById("historyList");
const chat = document.getElementById("chat");

/* Add your Gemini API key here */

const API_KEY = "AIzaSyA5-r8aE9bjIP04C7SlQaqQSMkGqM9zKMw";


send.addEventListener("click", sendMessage);


/* Enter key support */

input.addEventListener("keydown", function(event){

if(event.key === "Enter"){
event.preventDefault();
sendMessage();
}

});


async function sendMessage(){

let question = input.value.trim();

if(question === ""){
return;
}

/* Add question to sidebar */

let li = document.createElement("li");
li.textContent = question;
historyList.appendChild(li);


/* Show user message */

let userMsg = document.createElement("div");
userMsg.className = "message";
userMsg.innerHTML = "<b>You:</b> " + question;

chat.appendChild(userMsg);

input.value = "";


/* Show loading */

let thinking = document.createElement("div");
thinking.className = "message";
thinking.innerHTML = "<b>Gemini:</b> Thinking...";

chat.appendChild(thinking);


try{

let response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{ text: question }
]
}
]
})
});

let data = await response.json();

let answer = data.candidates[0].content.parts[0].text;


/* Show answer */

thinking.innerHTML = "<b>Gemini:</b> " + answer;

}catch(error){

thinking.innerHTML = "Error getting response";

}

}