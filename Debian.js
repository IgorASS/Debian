window.onload = function(){
  console.log("Entrou no window.onload");
  document.getElementById("alto") .addEventListener("click", GerenciarAltoContraste);
  document.getElementById("Extra") .addEventListener("click", GerenciarExtra);
  document.getElementById("Normal") .addEventListener("click", GerenciarNormal);
}
function GerenciarAltoContraste(){
  console.log("funcao gerenciar alto contraste")

  document.getElementById("Body").style.backgroundColor = "black";

  document.getElementById("Oqueé").style.color ="blue";
  document.getElementById("blue1").style.color ="blue";
  document.getElementById("blue2").style.color ="blue";
  document.getElementById("blue3").style.color ="blue";
  document.getElementById("blue4").style.color ="blue";
  document.getElementById("blue5").style.color ="blue";
  document.getElementById("Praque").style.color ="blue";
  document.getElementById("exeuti").style.color ="blue";
  document.getElementById("refe").style.color ="blue";
  document.getElementById("vale").style.color ="blue";
  document.getElementById("nameemail").style.color ="blue";
  document.getElementById("namesenha").style.color ="blue";
  document.getElementById("namechecagem").style.color ="blue";
  document.getElementById("prontuario").style.color ="blue";
  
}
function GerenciarExtra(){

  document.getElementById("Body").style.backgroundColor = "Red";

  document.getElementById("Oqueé").style.color ="green";
  document.getElementById("blue1").style.color ="green";
  document.getElementById("blue2").style.color ="green";
  document.getElementById("blue3").style.color ="green";
  document.getElementById("blue4").style.color ="green";
  document.getElementById("blue5").style.color ="green";
  document.getElementById("Praque").style.color ="green";
  document.getElementById("exeuti").style.color ="green";
  document.getElementById("refe").style.color ="green";
  document.getElementById("vale").style.color ="green";
  document.getElementById("nameemail").style.color ="green";
  document.getElementById("namesenha").style.color ="green";
  document.getElementById("namechecagem").style.color ="green";
  document.getElementById("prontuario").style.color ="green";
}
function GerenciarNormal(){

  document.getElementById("Body").style.backgroundColor = "gray";

  document.getElementById("Oqueé").style.color ="black";
  document.getElementById("blue1").style.color ="black";
  document.getElementById("blue2").style.color ="black";
  document.getElementById("blue3").style.color ="black";
  document.getElementById("blue4").style.color ="black";
  document.getElementById("blue5").style.color ="black";
  document.getElementById("Praque").style.color ="black";
  document.getElementById("exeuti").style.color ="black";
  document.getElementById("refe").style.color ="black";
  document.getElementById("vale").style.color ="black";
  document.getElementById("nameemail").style.color ="black";
  document.getElementById("namesenha").style.color ="black";
  document.getElementById("namechecagem").style.color ="black";
  document.getElementById("prontuario").style.color ="black";
}