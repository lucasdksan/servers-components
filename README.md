# Anotações sobre Servers Components 📕

Este repositório destina-se a testar a funcionalidade dos componentes do servidor e como usar os componentes do servidor junto com os componentes do cliente.

## Introdução

Os componentes de servidor e cliente permitem que os desenvolvedores criem aplicativos que abrangem o servidor e o cliente, combinando a rica interatividade dos aplicativos do lado do cliente com o desempenho aprimorado da renderização tradicional do servidor.

Semelhante a como o React mudou a maneira como pensamos sobre a construção de UIs, o React Server Components apresenta um novo modelo mental para a construção de aplicativos híbridos que aproveitam o servidor e o cliente.

Em vez de o React renderizar todo o lado do cliente do aplicativo (como no caso de aplicativos de página única), o React agora oferece a flexibilidade de escolher onde renderizar seus componentes com base em sua finalidade.

Se fôssemos dividir a página em componentes menores, você notaria que a maioria dos componentes não é interativa e pode ser renderizada no servidor como componentes do servidor. Para peças menores de interface do usuário interativa, podemos polvilhar componentes do cliente. Isso se alinha com a abordagem de primeiro servidor do Next.js.

<a href="https://nextjs.org/docs/getting-started/react-essentials">link de conteúdo completo</a>

## Descrição

Neste projeto de estudo, o objetivo principal é praticar o conceito de componentes do servidor e como interagir os componentes do cliente com os componentes do servidor. 

Essa comunicação e interação são refletidas nos componentes da pasta de components. O componente GithubUser é o único que representa um componente de servidor, ele faz uma requisição da API do github para obter as informações de um usuário. Os outros componentes são renderizados no lado do cliente (componentes do cliente) e, neste caso, o javascript relacionado será "rodado" no usuário. No componente GithubUser, os componentes do cliente são chamados e executados, esse uso não afeta a dinâmica dos componentes do servidor, pois quando o componente chegar na camada do cliente, os componentes serão executados de maneira normal, claro usando "use client" na primeira linha de código.

Server components podem ser utilizado em contexts passando o componente em questão via children.