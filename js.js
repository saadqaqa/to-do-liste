var idel = document.getElementsByClassName("fa-trash");
for (var i = 0; i < idel.length; i++) {
idel[i].addEventListener("click",deleteTask);
}
var vars = document.getElementsByClassName("fa-user-edit");
for (var i = 0; i < vars.length; i++) {
vars[i].addEventListener("click",editTaskico);
}

function deleteTask(){
    var conf =confirm("Are u sure?")   
      if(conf)
        this.parentElement.parentElement.remove();
}

var list = document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
list[i].children[0].addEventListener("click",editTask);
}

function editTask(){
    this.setAttribute("contenteditable","")

}
function editTaskico(){
    this.parentElement.parentElement.children[0].setAttribbute("contenteditable","")

}
document.getElementById("btnadd").addEventListener("click",add)
function add(){
    var task=document.getElementById("ctn").textContent
    document.getElementById("ulg").innerHTML+='<li class="list-group-item"> <span> '+task+'</span><div class="icons"><i class="fas fa-trash" title="delete" onclick="deleteTask"></i> <i class="fas fa-user-edit " title="edit"></i</div></li>'

    if(task!=""){
    document.getElementById("ctn").textContent=""}
else{
    alert("Task not avalable");
}
}
document.getElementById("search").addEventListener("keyup",chercher)
function chercher(){
    var cle=this.value
    for (var i = 0; i < list.length; i++){
        if(!list[i].children[0].textContent.trim().toUpperCase().includes(cle.toUpperCase())){
            list[i].style.display="none"
        }else{
            list[i].style.display="block"
        }
    }
}
