function gets(gets){
     gets = 'Pedro de Alcantara Francisco Antonio Joao Carlos Xavier de Paula Miguel Rafael Joaquim Jose Gonzaga Pascoal Cipriano Serafim'
}

let L = gets();

if(L.length <=80){
    console.log('YES');
}else if(L.length > 80){
    console.log('NO');
}