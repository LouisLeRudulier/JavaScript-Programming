function DateNow()
{
    var date = new Date();
    document.getElementById("result").innerHTML = date.toUTCString();
}
