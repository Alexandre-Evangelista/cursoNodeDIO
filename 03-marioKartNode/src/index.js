const player1 = {
    NOME : "Mario",
    VELOCIDADE : 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS:0,
}

const player2 = {
    NOME : "Bowser",
    VELOCIDADE : 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS:0,
}

async function rollDice(){
   return Math.floor(Math.random() * 6)+1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result
        switch(true){
        case random< 0.33:
        result = "RETA"
        break;
        case random< 0.66:
        result = "CURVA"
        break;
        default:
        result = "CONFRONTO";
}
return result;
}

async function logRollResult(characterName,block,diceResult,attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult+attribute}`)
}


async function playRaceEngine(character1,character2) {
    for(let round = 1;round<=5;round++){
        console.log('\n-------------------------------')
        console.log(`🏁 rodada ${round}`);

        //sortear bloco
        let block= await getRandomBlock();
        console.log(`bloco ${block}`);
    
        //rolar dados
        let diceResult1= await rollDice();
        let diceResult2= await rollDice();

        //teste de habilidade
        let totalTestSkill1=0;
        let totalTestSkill2=0;

            if(block === 'RETA'){
                totalTestSkill1=diceResult1+character1.VELOCIDADE
                totalTestSkill2=diceResult2+character2.VELOCIDADE

                await logRollResult(character1.NOME,'VELOCIDADE',diceResult1,character1.VELOCIDADE)
                await logRollResult(character2.NOME,'VELOCIDADE',diceResult2,character2.VELOCIDADE)

                if(totalTestSkill1>totalTestSkill2){
                    console.log(`${character1.NOME} marcou 1 PONTO!!`);
                    character1.PONTOS++;
                }else if(totalTestSkill1<totalTestSkill2){
                    console.log(`${character2.NOME} marcou 1 PONTO!!`);
                    character2.PONTOS++;
                }else{
                    console.log('Ninguém marcou ponto!!')
                }

            }
            if(block === 'CURVA'){
                totalTestSkill1=diceResult1+character1.MANOBRABILIDADE
                totalTestSkill2=diceResult2+character2.MANOBRABILIDADE

                await logRollResult(character1.NOME,'MANOBRABILIDADE',diceResult1,character1.MANOBRABILIDADE)
                await logRollResult(character2.NOME,'MANOBRABILIDADE',diceResult2,character2.MANOBRABILIDADE)

                if(totalTestSkill1>totalTestSkill2){
                    console.log(`${character1.NOME} marcou 1 PONTO!!`);
                    character1.PONTOS++;
                }else if(totalTestSkill1<totalTestSkill2){
                    console.log(`${character2.NOME} marcou 1 PONTO!!`);
                    character2.PONTOS++;
                }else{
                    console.log('Ninguém marcou ponto!!')
                }

            }
            if(block === 'CONFRONTO'){
                let powerResult1=diceResult1+character1.PODER
                let powerResult2=diceResult2+character2.PODER
                console.log(`${character1.NOME} confrontou com ${character2.NOME}🥊`)
                
                await logRollResult(character1.NOME,'PODER',diceResult1,character1.PODER)
                await logRollResult(character2.NOME,'PODER',diceResult2,character2.PODER)
                
                if(powerResult2<powerResult1 && character2.PONTOS>0){
                    character2.PONTOS--;
                    console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto!`)
                }
                if(powerResult2>powerResult1 && character1.PONTOS>0){
                    character1.PONTOS--;
                    console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto!`);
                }
                if(powerResult1===powerResult2 ||(character2.PONTOS===0 && character1.PONTOS ===0)){
                    console.log('Nemhum ponto foi perdido!!')
                }
            
            }
        }       
    
}

async function winner(character1,character2) {
    console.log(`resultado final`)
    console.log(`${character1.NOME}:${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}:${character2.PONTOS} ponto(s)`)
    
    if(character1.PONTOS>character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`)
    }else if(character1.PONTOS<character2.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`)
    }else{
        console.log(`\n${character2.NOME} e ${character1.NOME} empataram! `)
    }
}

(async function main() {
    console.log(`🏁🚨 Corrrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    await playRaceEngine(player1,player2);
    await winner(player1,player2);

})()

