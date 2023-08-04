function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copytext = document.getElementById(copyId).innerHTML;
    inputElement.value = copytext;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.
    display="block";
    setTimeout(function(){
        document.getElementById("alert").style.
        display = "none"
    }, 1000)
}
