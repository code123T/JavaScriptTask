
function myFunction(){
let text = "OK Buttonuna Klik ederk dark moduna kecid ede bilersiniz";
 if(confirm(text)==true){
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 document.getElementById('demo').innerHTML=text;
}