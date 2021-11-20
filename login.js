let nombres=[{"Nombre":"admin","pass":"123"}]
console.log(nombres)


function validarUser() {
   let sw=false;
   let nombre=document.getElementById('username').value
   let pass=document.getElementById('password').value

   
   nombres.forEach(function(x){
      if (x.Nombre==nombre&& x.pass==pass) {
         location.href='gabo.html'
         sw=true
      } 
   })
   if (sw==false) {
      alert("El usuario aun no esta creado y/o credenciales/usuario incorrectas");
   }

   
}





/*function login() {
   
location.href='registro.html'
}*/