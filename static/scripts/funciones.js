function validar(){
	user=document.getElementById("usuario");
	pwd=document.getElementById("contrasena");
		if(user.value==""){
			 alert("El campo Usuario esta vacio");
			 user.focus();
			 return false;
		}
		else{
		    if(pwd.value==""){
			   alert("El campo Contraseña esta vacio");
			   pwd.focus();
			   return false;
			}
			else
			{
				emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				if(emailRegex.test(user.value)){
					if(validar_clave(pwd.value)){
						return true;
					}else{
						return false;
					}
				}
				else{
					alert("Correo incorrecto");
					return false;
				}
			}
			}
}

function validar_clave(contrasenna)
{
	if(contrasenna.length >= 8)
	{		
		var mayuscula = false;
		var minuscula = false;
		var numero = false;
		var caracter_raro = false;
		
		for(var i = 0;i<contrasenna.length;i++)
		{
			if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
			{
				mayuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
			{
				minuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
			{
				numero = true;
			}
			else
			{
				caracter_raro = true;
			}
		}
		if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
		{
			return true;
		}else{
			alert("La contraseña debe tener minimo una mayuscula, una minuscula, un número y un caracter raro");
			return false;
		}
	}
	alert("La contraseña debe tener mas de 8 caracteres alfanumericos")
	return false;
}