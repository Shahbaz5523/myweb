function checkdata()
{
	var u = document.getElementById("User");
	var d = document.getElementById("date");
	var e = document.getElementById("Email");
	var p = document.getElementById("Pass");
	var cp = document.getElementById("C_Pass");
	var users = [];
	if(u.value !== "" || e.value !== "" || p.value !=="" || cp.value !=="" || d.value !== "")
	{
		if ((p.value).length<6 || (cp.value).length<6)
		{
			alert("Password Length must be greater then 6 characters.");
			return false;
		}
		else
		{
			if(p.value === cp.value)
			{	
				users = [u.value,d.value,e.value,p.value];
				localStorage.setItem(u.value,JSON.stringify(users));
				alert("Account Sucessfully Created");
				alert("Thanks For Creating New Account.")
			}
		}
	}
	else
	{
		alert("Please Fill The Form Completely");
		return false;
	}
	
}