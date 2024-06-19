React:

É uma biblioteca para construção de interfaces altamente interativas.

* Interfaces Web
* Mobile
* Dispositivos de TV
* Realidade Virtual

React é uma biblioteca que quando acoplada a outras bibliotecas que executam em ambientes diferentes, não só na Web, podem controlar interfaces de usuário em qualquer lugar que o usuário esteja interagindo com alguma coisa visual.


O React é uma biblioteca, e não um framework.

Rendering Patterns (Padrões de renderização)

Conceito de SPA (Single Page Application) "É um conceito de se trabalhar com a parte visual da aplicação diferente das aplicações tradicionais.


SPA (Single Page Application) é um conceito que foi introduzido em meados de 2011, 2012. Foi uma das ferramentas pioneiras a adotar esse conceito.


Padrão Server Side Rendering (SSR)

Toda vez que um usuário requisita uma pagina da aplicação, essa pagina é recebida pelo nosso servidor, o servidor contem todo o código de back and quanto front end, o back  interpreta o pedido do browser, ele cria\faz a busca no banco de dados, cria todo o HTML para mostrar a listagem de usuários no browser e devolve o HTML, CSS, JS pronto do servidor  para o navegador carregar.

O site é acessado e enquanto esse site não processou nossas requisição a tela fica branca.


Conceito atualmente utilizado é o SPA, onde o browser acessa uma rota, a rota busca no back end os dados "listagem de usuários" porém no back end não possui todas as instruções para a construção do html, javascript, css da página, o back end não fica mais responsável pela construção visual da tela, o back end vai retorna quais são os dados do usuário que são precisas, que são necessárias para mostrar em tela, porém elas não são retornadas em formato de html, elas são retornadas em modelos de JSON "JavaScript Object Notation" (É uma estrutura de dados com objetivo de disponibilizar dados, trafegar dados entre duas fontes diferentes entre uma fonte e um destino, e o JSON é uma estrutura universal, praticamente todas as tecnologias, todas as linguagens conseguem entender/interpretar JSON. Conseguimos enviar dados de uma aplicação Java para uma aplicação Python em JSON e as duas conseguem entender essa informação.
O conceito do SPA é o back end retornar os dados do usuário em formato de JSON, e a segunda aplicação separada, uma ou mais e quantas interfaces diferentes para o usuário que a aplicação Front end, que é a aplicação responsável por obter os dados em JSON e converter para html, css e javascript. É nesse momento que entra o React e outras tecnologias.

A partir do momento que agente começa a utilizar o conceito de SPA, agente passa a ter a possibilidade de ter múltiplos front ends, todos consumindo a mesma fonte de dados e consumindo os dados em JSON "ESTRUTURA UNIVERSAL"  e a partir desses dados criar uma interface para o usuário. Tendo ganhos em performance, manutenabilidade


Bundlers & Compilers "Conceitos"

Nem sempre os browsers irão suportar a versão atualizada do JavaScript, sendo assim foram criadas varias ferramentas para fazer com que o código seja convertido de um JavaScript mais moderno para um JavaScript mais antigo em ambientes mais específicos.


Compilers = compiladores de código, ferramentas que convertem o código de um formato para outro.
Código executado no navegador porem o navegador não suporta algumas funcionalidade do JavaScript, onde precisa converter a versão mais atualizada do JavaScript para uma versão que o navegador entenda.

O mais Famoso é o Babbel

Converte uma sintaxe do JavaScript para uma versão compatível com todos os browsers.

Bundlers.

Distribuir a aplicação em múltiplos arquivos, não queremos que tenha apenas um arquivo JavaScript, queremos que tenha vários arquivos onde um vai referenciando o outro e aplicação  vai sendo completada, criando a aplicação com vários arquivos JavaScript e quando somados montam a estrutura da aplicação.
Como essa técnica não era suportada pelos browser onde os browser não poderiam importar vários arquivos JavaScript.
Limitação de IMPORTAÇÃO/EXPORTAÇÃO de arquivos JavaScript.
O Blander mais famoso é o webpack.

Extensões de arquivos .JS .HBS .PNG . CJS . JPG

O webpack converte tudo isso para arquivos únicos

.js, .css, .jpg, .png.

Basicamente ele faz o processo de entender as importações/exportações entre o arquivo e gerar um arquivo de bandler


Site Can I use "caiuse.com", fala o que os Browser Já suportam ou não de sintaxe de JavaScript

es modules, a forma pelo qual os browsers conseguem importar exportar arquivos.

Nos browsers atuais, já suportam a importação e exportação de módulos javascript e com isso não precisamos mais utilizar o webpack.

Outras soluções que podem ser usadas.
 Vite " vitejs.dev". utiliza por padrão os ECMAS Scripts models nativos, onde não é necessário o Bundler. O próprio vite faz a listagem de compiler, ele não precisa do Babel para executar, ele tem um compilador interno do próprio Vite.
snowpack "snowpack.dev"


Primeiro projeto real utilizando o Vite.


Instalação do Node.js "nodejs.org/en"
Baixar a versão LTS

Em conjunto utilizar um version management, onde permite controlar múltiplas versões do node, atualizar e voltar versões de uma maneira mais fácil, assim podemos ter vários projetos executando na maquina com varias versões de node

nvm for Windows: https://github.com/coreybutler/nvm-windows/releases
instalar via interface gráfica

no terminal digitar os comando:

nvm dir "listar os comandos do nvm"
node -v "mostra a versão do node"
nvm list availiable " lista as versões disponíveis do Node"
nvm install 8.12.0 "para instalar uma versão em especifico do node "
nvm use e a versão a ser utilizada " para setar a versão a ser utilizada"

n install lts "Para instalar a versão LTS do Node"
node -v " para verificar a versão do node instalado"
npm -v " node "packagement management "



Criar o projeto com o Vite

no terminal entrar na pasta que irá conter os arquivos do projeto e digitar o seguinte comando:

npm create vite@latest  "criar o projeto"
de um nome para o projeto
 react "escolher o template ou framework utilizado"
react " template com react puro sem java script"
acesse a pasta e abra no vscode.


Primeiros conceitos do React

No terminal, na pasta do projeto, como administrador

npm install " para instalar as dependências" ou npm i

npm run dev "para executar o projeto"


CONCEITO DE COMPONENTE

É A FORMA DE DESACOPLAR UM PEDAÇO DA NOSSA INTERFACE PARA QUE AQUILO SE TORNE REPETITIVEL OU SE TORNE ALGO MAIS FACIL DE DAR MANUNTENÇÃO PORQUE É UM PEAÇO MENOR DA APLICAÇÃO
UM COMPONENTE PODEMOS ENTEDER COMO UM PEDACINHO/PARTE DA INTERFACE DA APLICAÇÃO QUE PODE SER REPETIDA VARIAS VEZES COM INFORMAÇÕES DIFERENTES
TODOS OS COMPONENTES DEVERÃO TER A EXTENÇÃO JSX JAVASCRIPT + XML
ARQUIVO JAVASCRIPT QUE CONTEM UM HTML

// NO REACT NÃO PODEMOS TER VARIOS COMPONENTES UM ABAIXO DO OUTRO SE NÃO TIVERMOS UM ELEMENTO POR VOLTA DELES
// não podemos ter multiplos elementos embaixo do return sem ter um elemento por volta deles


//COMPONENTE = É UMA FUNÇÃO QUE RETORNA UM HTML
// TODOS OS COMPONENTES DA APLICAÇÃO REACT RETORNA UM ARQUIVO COM EXTENÇÃO jsx 
// jsx = Javascript + xml " sempre contem um arquivo HTML DENTRO DELE"

cONCEITO DE COMPONENTE NADA MAIS É DO QUE TER UM ARQUIVO QUE ABSTRAI PARTE DA NOSSA INTERFACE EM OUTRO ARQUIVO E ISSO PODE SER REPETIDO VARIAS VEZES DENTRO DA APLICAÇÃO


CONCEITO DE PROPRIEDADES

INFORAMÇÕES QUE PODEM SER PASSADAS PARA COMPONENTES


Projeto Ignite Feed

A importação do CSS NÃO É FEITA PELO INDEX.HTML
Todas as importações partirão do arquivo javascript



Escopo de uma função.
Variaveis que são definidas dentro de uma função, não são compartilhadas com as outras funções.
