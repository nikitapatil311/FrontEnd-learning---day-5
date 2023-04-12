let s1 = /\W/;
let n = "42%";
let sen = "coding!";
let res = n.match(s1);
let res1 = sen.match(s1);
document.getElementById("demo").innerHTML = res;
document.getElementById("demo1").innerHTML = res1;


let s2 = "2001: A space is good";
let r = /\D/g;
let res3 = s2.match(r).length;
document.getElementById("demo2").innerHTML = res3;


let s3 = "white. white . white !!!";
let r1 = /\s/;
let res4 = s3.match(r1).length;
document.getElementById("demo3").innerHTML = res4;


let s4 = "white. white . white !!!";
let r2 = /\s/;
let res5 = s4.match(r2).length;
document.getElementById("demo4").innerHTML = res5;


let s5 = "aaaah";
let s6 = "aah";
let r3 = /a{3,5}h/;
let res6 = r3.test(s5);
let res7 = r3.test(s6);
document.getElementById("demo5").innerHTML = res6;
document.getElementById("demo6").innerHTML = res7;


let s7 = "haaaah";
let s8 = "haah";
let s9 = "h" + "a".repeat(100)+"h";
let r4 = /ha{3,}h/;
let res8 = r4.test(s7);
let res9 = r4.test(s8);
let res10 = r4.test(s9);
document.getElementById("demo7").innerHTML = res8;
document.getElementById("demo8").innerHTML = res9;
document.getElementById("demo9").innerHTML = res10;


let s10 = "haaaaaah";
let s11 = "haaah";
let s12 = "h" + "a".repeat(100) + "h";
let r5 = /ha{3 }h/;
let res11 = r5.test(s10);
let res12 = r5.test(s11);
let res13 = r5.test(s12);
document.getElementById("demo10").innerHTML = res11;
document.getElementById("demo11").innerHTML = res12;
document.getElementById("demo12").innerHTML = res13;


let s13 = "color";
let s14 = "colour";
let r6 = /colo ? r/;
let res14 = r6.test(s13);
let res15 = r6.test(s14);
document.getElementById("demo13").innerHTML = res14;
document.getElementById("demo14").innerHTML = res15;


