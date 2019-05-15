import React from 'react';

import Piada from './Piada'

// no div vamos renderizar os cinco react componentes
function App() {
  return (
    <div>
      <Piada
        pergunta="Qual é a melhor coisa sobre a Suiça?"
        resposta="A bandeira é uma grande plus"
      />

      <Piada
        pergunta="já ouviu falar do matematico que tem medo de numeros negativos?"
        resposta="nunca ouvi falar"
      />


      <Piada pergunta="o que cai em pé e corre deitado?" resposta="a chuva" />
      <Piada
        pergunta="Qual será o seu REACT ao meu Currículo?"
        resposta="vou me esforçar para te surpreender nao sei o que "


      />
    </div>
  );
}

export default App;
