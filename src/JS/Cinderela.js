async function proximaCena() {
  // prometendo que próxima cena será em 1s e esperando-a
  await new Promise(resolve => setTimeout(resolve, 1000));
}
function exibeCena(descricao) {
  console.log(descricao);
}

async function Cinderela() {
  const FadaMadrinha = {
    nome: 'Whitney Houston',
    realizaPedido: function() {
      return {
        nome: 'Cinderela',
        vestido: 'Nobre',
        transporte: 'Carruagem',
        olhaRelogio: function() {
          // 01/02/1901 - 23:59
          const data = new Date(1, 1, 1, 23, 59);
          const hora = data.getHours();
          const minutos = data.getMinutes();
          if (hora <= 23) {
            exibeCena('Ainda é cedo...');
          }
          if (hora === 23 && minutos > 50) {
            exibeCena('Eita, quase meia-noite, sai daí Cinderela!');
          }
        }
      }
    }
  };

  let Protagonista = FadaMadrinha.realizaPedido();
  exibeCena('Cinderela está pronta para o baile!');
  await proximaCena();

  // supre o requisito da entrada no baile?
  if (Protagonista.vestido === 'Nobre') {
    exibeCena('Cinderela surpreende todos ao chegar no baile!');
  }
  const Principe = {
    convidarParaDancar: function(nome) {
      exibeCena(`Príncipe convida ${nome} para dançar!`);
    }
  };
  Principe.convidarParaDancar(Protagonista.nome);
  await proximaCena();

  Protagonista.olhaRelogio();
  await proximaCena();
  exibeCena('Na pressa, Cinderela deixa seu sapato de cristal...');
  await proximaCena();

  const possiveisDonas = ['Ciclana', 'Fulana', 'Cinderela', 'Beltrana'];
  // Passa pelas possiveis donas do sapato procurando Cinderela
  for (let atual = 0; atual < possiveisDonas.length; atual++) {
    if (possiveisDonas[atual] === 'Cinderela') {
      exibeCena('Dona do sapatinho encontrada!');
      break;
    } else {
      exibeCena(`- ${possiveisDonas[atual]} não é a dona do sapatinho!`);
    }
  }
  exibeCena('Príncipe encontrou sua princesa e viveram felizes para sempre!');
}

// Bota história pra rodar
Cinderela();