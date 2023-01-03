function playTheGame() {
   const user = confirm("do you want to play?")
   if(!user){
      // la reponse quand l'utilsateur choisir non
      alert("no problème ,goodby")
      return
   }
   //appel a la fonction generate number
   const computerNumber = generateNumber()
 let  reponse = prompt(" Enter a number")
  //creation d'une variable pour recuperer le number de l'utilisateur 

 const   userNumber = Number(reponse) 
//  la condition sur le number de l'utilisateur et du computer
 while(userNumber != computerNumber){ 
   
 if(!nombre(reponse)){
   alert("sorry not a number ,goodbye")
   return
 }
 
 if(!NombreCompris(reponse)){
   alert("sorry it's a good a number ,goodbye")
 }
 console.log( userNumber , computerNumber)
 if(userNumber === computerNumber){
   alert("WINNER")
   return
}
 if(userNumber > computerNumber){
   alert("your number is bigger than the computer number, guess again")
 }
 if(userNumber < computerNumber){
   alert("your number is smaller than the computer number, guess again")
 }
 reponse = prompt("Enter another number");
 }
 
 console.log("winner".computerNumber)
 }

 //function permetant de verifier si l'utilisateur ne rentre pas un nombre compris entre 0 et 10
function nombre(str){
   const regex = new RegExp(/^[0-9]*$/)
   return regex.test(str)

}
 //function permetant de generer un nombre compris en tre 0 et 10
function NombreCompris(number){
   return number >= 0 && number <=10
}
//generer un nombre aleatoire entre 0 et 10
function generateNumber(){
   return Math.floor(Math.random() * 11)
}
//function permetant de coparer le number de l'utilisateur et de l'odrdinateur
function comparareNumber(userNumber, computerNumber){
   if(userNumber === computerNumber){
      alert("WINNER")
      return
   }
   if(userNumber > computerNumber){
     alert("votre numero est plus grand que pour l'ordinateur ,devinez a nouveau")
   }else if(userNumber < computerNumber){
      alert("votre numero est plus petit que pour l'ordinateur ,devinez a nouveau")

   }

}

