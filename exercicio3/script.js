let nacionalidade = prompt('Escreva aqui sua nacionalidade').toLowerCase()

if(nacionalidade === 'brasileira' || nacionalidade === 'brasileiro'){
    console.log('A pessoa é brasileira')
}else if(nacionalidade === 'argentina' || nacionalidade === 'argentino'){
     console.log('A pessoa é argentina')
}else if(nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio'){
     console.log('A pessoa é uruguaia')
}else if(nacionalidade === 'chilena' || nacionalidade === 'chileno'){
     console.log('A pessoa é chilena')
 }else if(nacionalidade === 'colombiana' || nacionalidade === 'colombiano'){
     console.log('A pessoa é colombiana')
 }else{    
     console.log('Nacionalidade não encontrada')
 }