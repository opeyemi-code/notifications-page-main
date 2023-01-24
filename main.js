const markAllBtn = document.getElementById('mark-all-btn');

const notificationMsgs = document.querySelectorAll('.notification-msg');

const newMsgLength = document.getElementById('unread-msg-length');

//function to mark all unread Messages
markAllBtn.addEventListener('click', ()=>{
  
  const unreadNotificationMsgs = document.querySelectorAll('.unread-msg');
  
  for (const msg of unreadNotificationMsgs){
    if(msg.classList.contains('unread-msg')){
      msg.classList.remove('unread-msg');
    }
  }
  newMsgLength.innerText = 0;
})

//function to read notification message and reduce the length of unread messages
notificationMsgs.forEach(msg => msg.addEventListener('click', (e) =>{
  const num = newMsgLength.innerText;
  
  if (e.currentTarget.classList.contains('unread-msg')){
    e.currentTarget.classList.remove('unread-msg');
      newMsgLength.innerText = num - 1;

  }
}))



