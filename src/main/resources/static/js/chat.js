const chat_form = document.getElementById("chat-form");
const chat_input = document.getElementById("chat-input");
const chat_btn = document.getElementById("chat-btn");
const chat_log = document.getElementById("chat-log");

chat_form.addEventListener("submit", send_chat)

function send_chat(event){
    if(chat_input.value != ""){
        const new_chat_wrapper = document.createElement("div");
        new_chat_wrapper.classList.add("chat-wrapper");

        const new_chat_box = document.createElement("div");
        new_chat_box.classList.add("chat-box");

        const new_chat = document.createElement("div");
        new_chat.classList.add("chat-bubble");
        new_chat.innerText = chat_input.value;

        new_chat_wrapper.appendChild(new_chat_box);
        new_chat_wrapper.appendChild(new_chat);
        chat_log.appendChild(new_chat_wrapper);

        chat_log.scrollTop = chat_log.scrollHeight;
        chat_input.value = "";
        chat_btn.disabled = true;
    }
    
}

//create dummy response
const receive_btn = document.getElementById("response");
receive_btn.addEventListener("click",receive_chat);

const response = [  "안녕~", "잘가","잘자", "???", "좋습니다",
                    "챗다가 무언가 대답한다~", "챗다는 가끔 이렇게 길게 대답한다", 
                    "임시로 만들어진 대답", "챗다가 당신의 질문에 대해 곰곰히 생각하고있다...",
                    "챗다가 당신의 대답에 매우 놀랐다!"] 

function receive_chat(event){
    chat_btn.disabled = false;

    const new_response_wrapper = document.createElement("div");
    new_response_wrapper.classList.add("chat-wrapper");

    const new_response_box = document.createElement("div");
    new_response_box.classList.add("chat-box");

    const new_response = document.createElement("div");
    new_response.classList.add("chat-bubble");
    new_response.innerText = response[Math.floor(Math.random() * response.length)];

    new_response_wrapper.appendChild(new_response);
    new_response_wrapper.appendChild(new_response_box);
    chat_log.appendChild(new_response_wrapper);

    chat_log.scrollTop = chat_log.scrollHeight;
}
//
