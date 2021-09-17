$(document).ready(function(){
 $ ('# nombre de usuario'). blur (function () {// el evento blur ocurrirá cuando el objeto pierda el foco.
	if($(this).val()==''){  //var $user=$('#username').val();
	 $ ('# usuario'). text ('El nombre de usuario no puede estar vacío');
    $('#username').focus();	
	return false;
	}else if(($(this).val().length)<3){
	 $ ('# usuario'). text ('El nombre de usuario no puede tener menos de 3 caracteres');
    $('#username').focus();		
	return false;		
	}else if(!($(this).val().match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/))){
	 $ ('# user'). text ('¡El nombre de usuario solo permite caracteres chinos, letras inglesas, números, guiones bajos!');
    $('#username').focus();		
	return false;	   
   }		
});
$('#password').blur(function(){
	if($(this).val()==''){
	 $ ('# passw'). text ('La contraseña no puede estar vacía');	
	$('#password').focus();
	return false;
	}else if(($(this).val().length)<6){
	 $ ('# passw'). text ('la contraseña no puede tener menos de 6 caracteres');	
	return false;		
	}else if(!($(this).val().match(/^[\u4E00-\u9FA5a-zA-Z0-9_]{0,}$/))){
	 $ ('# passw'). text ('¡La contraseña solo permite caracteres chinos, letras en inglés, números, guiones bajos!');
  	$('#password').focus();	
	return false;	   
   }		
});
$('#repassword').blur(function(){
       if ($ ('# contraseña'). val ()! = ($ (this) .val ())) {// Confirmar contraseña
	 $ ('# repassw'). text ('¡Las contraseñas son inconsistentes!');	
	$('#repassword').focus();
	return false;  
   }	
});
$('#email').blur(function(){
   if($(this).val()==''){
	 $ ('# mail'). text ('El buzón no puede estar vacío');
    $('#email').focus();	
	return false;
   }else if(!($(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/))){
	 $ ('# mail'). text ('¡Ingrese el formato de correo electrónico correcto!');
    $('#email').focus();		
	return false;	   
   }	
});
$('#validate').blur(function(){
	if($(this).val()==''){
         $ ('# code'). text ('¡El código de verificación no puede estar vacío!');
    $('#validate').focus();
	return false;
   }
});  	
	
 //Registrarse
$('#register_submit').click(function(){
   var $user=$('#username').val();
   var $passw=$('#password').val();
   var $repassw=$('#repassword').val();
   var $email=$('#email').val();
   var $validate=$('#validate').val();
		$.ajax({
		type:'POST',
		dataType: 'json',
		url:'register.php',
		data:{
			'user':$user,
			'passw':$passw,
			'email':$email,
			'code':$validate
		},
		success:function(msg){
         if(msg == "0"){
			 $ ('# usuario'). text ('El nombre de usuario ya existe');
			$('#username').focus();			
			}else if(msg == "1"){
				 $ ('# user'). text ('Se puede usar el nombre de usuario');		
				 $ ('# mail'). text ('El buzón ya existe');	
				$('#email').focus();	
			}else if(msg == "2"){
				$('#user').text('');		
				$('#mail').text('');	
				 $ ('# código'). text ('Error de código de verificación');
				$('#validate').focus();
			}else if(msg == "3"){
				  $('#user').text('');
				  $('#passw').text('');	
				  $('#repassw').text('');	
				  $('#mail').text('');
				   alerta ('Registro exitoso');		
			}
		}
		});
});	
 //registrado
});