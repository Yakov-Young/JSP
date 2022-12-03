let numberOne = 5, numberTwo = 10, sum, string;
sum = numberOne + numberTwo;
document.write("Выражение: \"" + numberOne + " + " + numberTwo + "\"." +
"<br \/>Ответ: " + sum);
 
document.write(
"<br \/> Функция для преобразования строки в верхний регистр: \"stringObj.toUpperCase()\"" +
"<br \/>Функция для преобразования строки в нижний регистр: \"stringObj.toLowerCase()\"");
 
string = "Hello From Kemorovo";
document.write("<br \/> Пример работы:<br \/>" +
"Исходная строка -"+ string + "<br \/>"
 + string.toLowerCase() + "- нижний регистр<br \/>" +
  string.toUpperCase() + " - верхний регистр");
 
document.write("<br \/>" + "5 - 10 = " + (numberOne - numberTwo));
document.write("<br \/>" + "5 * 10 = " + (numberOne * numberTwo));
document.write("<br \/>" + "5 / 10 = " + (numberOne / numberTwo));
document.write("<br \/>" + "5 % 10 = " + (numberOne % numberTwo));
document.write("<br \/>" + "5^10 = " + (Math.pow(numberOne, numberTwo)));
document.write("<br \/>" + "++5 = " + (++numberOne));
numberOne = 5;
document.write("<br \/>" + "--5 = " + (--numberOne));
numberOne = 5;
 
function BtnClick1(){
    alert("Сибиряков Матвей, ПИ-202");
}
 
var str = "";
 
function BtnClick2(){
    str = str + document.getElementById("input").value;
    result82.innerHTML = str;
}
 
function BtnClick3(){
    str = "";
    result82.innerHTML = str;
}
