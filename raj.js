function fun()
{

	var x = document.getElementById("name").value;
	var lakshman;
	if(x==null || x=="")
	{
	lakshman="Please Enter Name";
	document.getElementById("seetha").style.color="red";
    document.getElementById("seetha").innerHTML = lakshman;
}else
{
	document.getElementById("seetha").style.color="green";
	document.getElementById("seetha").innerHTML = x;
}
}

