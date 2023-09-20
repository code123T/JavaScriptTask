function myFunction(){
let text =prompt("Xais Olunur Yasinizi Daxil Edin")
if(text>=19 && text<=50){
window.alert("Sizin yasiniz 18 yasdan boyukdu sehifeye giris edildi.")
}
else if(text>=1 && text<=17){
window.alert("Sizin yasiniz 18 yasdan kicikdir sehifeye giris edilmedi!")
}
document.getElementById('demo1').innerHTML=text
}