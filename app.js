
var list = document.getElementById("list")

function addtodo(){
    var todo = document.getElementById("todo")

    var li = document.createElement("li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    
    var delBut = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBut.appendChild(delText)
    delBut.setAttribute("class", "but")
    delBut.setAttribute("onclick", "deleteitem(this)")
    delBut.appendChild(delText)



    var editBut = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBut.appendChild(editText)
    editBut.setAttribute("onclick", "edititem(this)")

    li.appendChild(delBut)
    li.appendChild(editBut)

    list.appendChild(li)

    todo.value =  "" 
    
}
function deleteitem(h){
    h.parentNode.remove()
}

function edititem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    
    e.parentNode.firstChild.nodeValue = editValue
}


function deleteAll(){
    list.innerHTML = ""
}