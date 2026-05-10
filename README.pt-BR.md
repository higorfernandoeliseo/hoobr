
# projeto Hoobr

## "Hub de Projetos Open-Source Brasil"

O projeto é uma forma de centralizar bibliotecas, ferramentas e iniciativas de código aberto criadas por desenvolvedores do Brasil, facilitando a descoberta, o suporte e a colaboração em projetos nacionais.

É exibido no card de cada projeto o nome do projeto, autor, descrição, linguagens usadas, categoria, e o estado de desenvolvimento.

Ela funciona como um hub dai o nome Hoobr ele uitiliza o backend de banco de dados com um arquivo JSON onde os projetos que serão adicionados pela comunidade por meio desse arquivo.

Para subir um projeto na plataforma é feito por meio fork no projeto e clonando ele localmente para editar o arquivo JSON e subindo novamente para o Github e abrindo um pull request onde é analisado e no fim é mesclado o banco de dados com alteração adicionando o projeto na pagina inicial da plataforma.

Ele possui um sistema de busca bem simples para pesquisar tanto nome do projeto como na descrição.

## Funcionalidades

- Exibição dos projetos Adicionados recentemente na home.
- Busca para nome de projetos e descrição.
- Exibição das Llinguagens usadas no projeto.
- Categorias na lateral dos projetos.
- Exibição se o projeto esta abandonado ou não.

## Tecnologias usadas:
![HTML5 Logo](https://img.shields.io/badge/HTML-f06529?logo=html5&logoColor=white&labelColor=f06529)
![CSS](https://img.shields.io/badge/CSS-1293D8?logo=css&logoColor=fff)
![JavaScript Logo](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)

## Definir estado de desenvolvimento

Para definir o estado de desenvolvimento no arquivo `projects.json` na pasta `assets/db` você pode definir uma entrada no objeto JSON status abaixo de categoria:

0 = em desenvolvimento
1 = abandonado


## Test-drive

Para testar você pode testar no browser pelo endereço: `https://higorfernandoeliseo.github.io/hoobr/`

## Reportar erro:

Se você quiser relatar um problema ou sugerir uma nova funcionalidade, fique à vontade para criar uma issue neste repositório.
