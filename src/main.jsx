import React from 'react' // importa o react
import ReactDOM from 'react-dom/client' // importa tb o ReactDOM Document Object Model, O REACT PODE SER UTILIZADO NA CRIAÇÃO DE INTERFACES
//DOM "DOCUMENT OBJECT MODEL, QUE É A REPRESENTAÇÃO DO NOSSO HTML ATRAVEZ DO JAVASCRIPT"
// O REACT É UM PACOTE RESPONSAVEL PELO CORE, CORAÇÃO DO REACT ONDE TEM AS FUNCIONALIDADES COMPARTILHADAS ENTRE TODAS ESSAS INTERFACES
// REACTDOM É A INTEGRAÇÃO DO REACT, CORE DO REACT COM A DOM "ReactDOM Document Object Model"
// QUANDO AGENTE IMPORTA O REACT DOM, ESTAMOS ENTRANDO COM REACT PARA FUNCIONAR NO AMBIENTE WEB NO BROWSER

import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')).render( // foi chamado um metodo createRoot de dentro do ReactDom, onde o createRoot recebe um parametro onde qual é o elemento raiz da nossa pagina html, no caso é o root, o react vai criar o html, css e todo javascript da nossa aplicação dentro desse div root que é nosso elemento raiz do html. Esse arquivo chama o metodo render, e dentro de render veremos que é utilizado uma sintaxe semelhante ao html, sendo utilizado componentes do react, renderizando o componente interno do react que é o StrictMode, e dentro do StrictMode está renderizando "Mostrar em tela" o nosso App, arquivo importado, que nada mais é do que uma função que retorna um html
  <React.StrictMode>                                         
    <App />
  </React.StrictMode>,
)

//O REACT NADA MAIS ESTA FAZENDO DO QUE JOGAR O CONTEUDO DO COMPONENTE STRICTMODE, DO JAVASCRIPT PARA DENTRO DO NOSSO GETELEMENTBYID ROOT PARA DENTRO DO HTML NO CASO O INDEX.HTML
//A MAGICA DO REACT E DE TODAS AS BIBLIOTECAS DE CONSTRUÇÃO DE SPA ESTA EM CRIAR O HTML E TUDO QUE O USUÁRIO INTERAGE A APRTIR DO JAVASCRIPT