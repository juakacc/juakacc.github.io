# Portfólio do Joaquim

Desenvolvido utilizando [Gatsby](https://www.gatsbyjs.org).
Um gerador de sites estáticos baseado no Reactjs, bem interessante e poderoso!

O repositório que tem como objetivo reunir e divulgar algumas das minhas _Skills_. Como também um pouco sobre mim e meus interesses. Formando uma página pessoal.

Espero que gostem, qualquer coisa entrar em contato, será um prazer respondê-lo.

Email: juakacc@gmail.com

## Editando e executando o projeto localmente

Para executar o projeto local é bem simples:

```shell
# Clone o projeto
$ git clone https://github.com/juakacc/juakacc.github.io.git
$ cd juakacc.github.io
```

```shell
# Instale as dependências e execute o projeto
$ npm i
$ gatsby develop
```

O projeto será executado em `http://localhost:8000`

Realize suas alterações e acompanhe em tempo real. :)

## Deploy

O deploy foi realizado utilizando o pacote `gh-pages`, do próprio Gatsby. Fazendo o deploy aqui no `github-pages`. Disponível em: [juakacc.github.io](https://juakacc.github.io)

O deploy utilizando o `gh-page` é bem simples. Como essa é uma página de usuário, e não de um repositório particular deve-se criar uma branch _principal_ que tenha um nome diferente de `master`, já que o deploy será feito na branch `master`. Então com o `gh-page` instalado:

```shell
# Adicione essa linha ao seus scripts no package.json
"deploy": "gatsby build && gh-pages -d public -b master"
```

```shell
# Realize o deploy
$ npm run deploy
```
