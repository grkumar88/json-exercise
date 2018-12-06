function fun() {
	var xhttp = new XMLHttpRequest();
	var examID = document.getElementById("exam");
	var showText = '';
	
	xhttp.onreadystatechange=function() {
		if(this.readyState==4 && this.status==200) {
			var x = this.responseText;
			y = JSON.parse(x);
			showText+="<table class='json'>";
				showText+="<tr><th colspan=8 class='thead'>user details</th></tr>";
				showText+="<tr class='rhead'><th>ID</th>";
				showText+="<th>Name</th>";
				showText+="<th>User Name</th>";
				showText += "<th>Email</th>";
				showText += "<th>Address</th>";
				showText += "<th>Phone</th>";
				showText += "<th>Website</th>";
				showText += "<th>Company</th></tr>";

				y.forEach(function(jsontext) {
				showText += "<tr class='chead'><td>"+jsontext.id+"</td>";
				showText += "<td>"+jsontext.name+"</td>";
				showText +="<td>"+jsontext.username+"</td>";
				showText += "<td>"+jsontext.email+"</td>";
				showText += "<td>"+jsontext.address.street+"<br/>"+jsontext.address.suite+"<br/>"+jsontext.address.city+"<br/>"+jsontext.address.zipcode+"<br/>"+jsontext.address.geo.lat+"<br/>"+jsontext.address.geo.lng+"</td>";
				showText += "<td>"+jsontext.phone+"</td>";
				showText += "<td>"+jsontext.website+"</td>";
				showText += "<td>"+jsontext.company.name+"<br/>"+jsontext.company.catchPhrase+"<br/>"+jsontext.company.bs+"</td></tr>";
			});
			showText+="</table>";
			examID.innerHTML = showText;
			
		}
	};
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
	xhttp.send();
}

function arrayfunction() {
	var dataArray=[{ "id": 1, "name": "Leanne Graham", "username": "Bret"}, { "id": 3, "name": "Clementine Bauch", "username": "Samantha"}];
	dataArray.forEach(function(name1){
		console.log(name1.name);
	});
}