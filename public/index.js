function Clicked(){
    var socket = io();
var user = {
    username:document.getElementById('username').value,
    password:document.getElementById('password').value,
    firstname:document.getElementById('firstname').value,
    lastname:document.getElementById('lastname').value,
    teacher:document.getElementById('teacher').value,
    parent:document.getElementById('parent').value
};
console.log(user);
socket.emit('userInfo',user);
}