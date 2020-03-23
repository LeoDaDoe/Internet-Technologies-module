function enterValue(inp){
    document.form.textview.value = document.form.textview.value+inp;
}
function cal(){
    document.form.textview.value = eval(document.form.textview.value);
}
function clean(){
    document.form.textview.value ="";
}
function backsp(){
    var temp = document.form.textview.value;
    document.form.textview.value = temp.substring(0,temp.length-1) 
}