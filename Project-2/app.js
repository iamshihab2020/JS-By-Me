function deleteMe(){
    document.querySelector('#myResult').value = ""
}


function calc(newVal){
    document.querySelector('#myResult').value += newVal
}


function result(){
    var a = document.querySelector('#myResult').value 
    var b = eval(a)
    document.querySelector('#myResult').value = b
}