let datos=[]
console.log(datos)

function agregarRegistro() {
   let nombre=document.getElementById('username').value
   let edad=document.getElementById('edad').value
   let pass=document.getElementById('password').value

   let persona={"User":nombre, "edad":edad, "Pass":pass}

   datos.push(persona)
   console.log(datos)
   document.getElementById('username').value=""
   document.getElementById('edad').value=""
   document.getElementById('password').value=""

   datos.forEach(function(x){
      console.log(x)
      console.log(x.User)
   })



}

function validarUser() {
   let sw=false;
   let nombre=document.getElementById('username').value
   let pass=document.getElementById('password').value

   
   datos.forEach(function(x){
      if (x.User==nombre&& x.Pass==pass) {
         location.href='gabo.html'
         sw=true
      } 
   })
   if (sw==false) {
      alert("El usuario aun no esta creado y/o credenciales/usuario incorrectas");
   }

   
}