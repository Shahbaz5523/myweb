function checkdata()
{
	var u = document.getElementById("User").value;
	var e = document.getElementById("Email").value;
	var p = document.getElementById("Pass").value;
	if(u in localStorage)
			{
				var arr = localStorage.getItem(u);
				var arr2 = JSON.parse(arr);
				if (e === arr2[2] && p ===arr2[3]) 
				{
					alert("Hi " + u)
				}
				else
				{
					alert("Email and Password not Match");
					return false;
				}
			}
			else
			{
				alert("User Not Found");
				return false;
			}
		
}