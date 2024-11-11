// // task1
// let time = prompt("1-12 ге шейін сан еңгізіңіз")

// if(time>3 || time<=5){
// alert("Ай:"+ time + "\n" +"Маусым:Spring")
// }else if(time>6 || time<=8){
// alert("Ай:"+ time + "\n" +"Маусым:Summer")
// }else if(time>9 || time<=11){
//     alert("Ай:"+ time + "\n" +"Маусым:Autunm")
// }else if(time>1 || time>2 || time<=12){
//     alert("Ай:"+ time + "\n" +"Маусым:Winter")
// }else{
//     alert("Берілген cандарды еңгізіңіз!")
// }

//task 2

let sanA = +prompt("1-ші санды енгізіңіз:");
let sanB = +prompt("2-ші санды енгізіңіз:");


if(sanA > sanB){
    alert(sanA + " саны " + sanB + " санынан үлкен");
}else if (sanA < sanB){
    alert(sanA + " саны " + sanB + " санынан кіші");
}else{
    alert("Сандар тең");
}

let ortashaMan = (sanA + sanB) / 2;
alert("Орташа мән: " + ortashaMan);



