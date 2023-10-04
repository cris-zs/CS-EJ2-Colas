const queue = ['amarillo','rosa','rojo','verde','azul','negro','morado','blanco'];
let queuePair =[];
let queueOdd = [];
for(i=0;i<queue.length;i++){
    if(i%2 == 0){
        queuePair.push(queue[i]);
    }else{
        queueOdd.push(queue[i]);
    }
} 
console.log(queuePair);
console.log(queueOdd);

//Entradas: cola
//Salida: cola inicial, elementos retirados y cola final

let noTicket =[];
let hasTicket = [];
const queueTickets = [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
];
for(let i = 0;i<queueTickets.length;i++){
    if(queueTickets[i].ticket){
        hasTicket.push(queueTickets[i].user);
    }else{
        noTicket.push(queueTickets[i].user);
    }
}
console.log(noTicket);
console.log(hasTicket);