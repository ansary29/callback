var value = 11
function timer()
{
    var ele = document.getElementById("root");
    ele.innerHTML=--value;
    if(value == 0)
    {
        ele.innerHTML="Happy Independance Day!!!";
        value=11;
        return;
    }
    setTimeout(timer, 1000);
}