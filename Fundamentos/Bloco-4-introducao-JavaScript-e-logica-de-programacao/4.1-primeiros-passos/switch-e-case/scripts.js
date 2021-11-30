let condition = "aprovada";

switch (condition){
    case "aprovada":
        console.log("Parabéns");
        break;

    case "lista":
        console.log("você esta na lista de espera");
        break;
        
    case "reprovada":
        console.log("Infelizmente não foi dessa vez.")
        break;
        
    default:
        console.log("não se aplica");    
}