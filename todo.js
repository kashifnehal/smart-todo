// var h =document.createElement('h1')
// var myvalue = document.createTextNode('hello world')
// h.appendChild(myvalue)
// document.querySelector('h1').appendChild(h)

// var val=5;

// while(val>5)
// {
//     console.log(val);
//     val--;
// }

var ul = document.getElementById('list')
var li;

var addbutton = document.getElementById('add')
addbutton.addEventListener('click',additem);

var removebutton = document.getElementById('remove')
removebutton.addEventListener('click',removeitem);

var deletebutton = document.getElementById('delete')
deletebutton.addEventListener('click',deleteitem);



function additem(){
    var input = document.getElementById('input');
    var item = input.value; 
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);
    if(item === ''){
        return false;
    }else{
        // ---create li----
        li = document.createElement('li');

        // -------create checkbox---------
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // ----create label------
        var label = document.createElement('label');

        // ---add Element in web page----
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)

        // --placing---
        ul.insertBefore(li,ul.childNodes[0])
        

        // setTimeout(() => {
        //     li.className = 'visual';
        // },100);

        input.value = ''
    }

}

function removeitem(){
    // console.log('remove clicked')
    li = ul.children
    for(let i=0;i<li.length;i++){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i])
        }
    }
}

function deleteitem(){
    li = ul.children
    for(let i=0;i<li.length;i++){
        while(li[i]){
            ul.removeChild(li[i]) 
        }       
    }
}













