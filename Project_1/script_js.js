function checkpassword()
{
   var password1 = document.getElementById("pass").Value;
   var password2 = document.getElementById("Re-enter").Value;

   if(password1!="")
   {
       alert("Please enter the password");
   }
   else if (password2!='')
   {
       alert("Please enter the password again");
   }

   else if (password1 ! = password2)
   {
       alert("Password does not match enter again");
   }
   else{
       alert("password match sucessfully!!!");
   }
}