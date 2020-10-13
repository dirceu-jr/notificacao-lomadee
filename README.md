# Notificação Lomadee :speech_balloon:
"Notificação Lomadee" é um formato da rede de marketing de afiliados [Lomadee](https://www.lomadee.com/) que aparece quando o visitante lê uma página no navegador.

## História
Em Fevereiro de 2011 eu e o designer [Mikael Carrara](https://github.com/mikaelcarrara) desenvolvemos um formato para a Lomadee chamado "Widget Busca Ofertas". Inicialmente foram disponibilizados formatos pré-desenhados: *widget*, *alert* e *mobile*.

Posteriormente a ferramenta foi redesenhada para um formato único, que se ajusta ao espaço disponível ou dispositivo do visitante, conhecido por "[Vitrine Para Design Responsivo](https://github.com/dirceup/vitrine-design-responsivo)". O formato "*alert*" havia sido descontinuado desde então.

Em Novembro de 2019 o formato "*alert*" foi redesenhado e voltou a ser disponibilizado na Lomadee com o nome de "**Notificação Lomadee**" e o design atual igual a imagem abaixo:

## Exemplo
<img src="https://raw.githubusercontent.com/dirceup/notificacao-lomadee/master/imgs/notificacao.png" width="346" />

## Navegadores suportados

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>iOS Safari |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge|✔|✔|✔|✔

## Desenvolvimento
O formato possui um modelo de desenvolvimento colaborativo, baseado em código livre.

Os arquivos de desenvolvimento são `src/notificacao.js` (JavaScript) e `src/style.css` (CSS).

Executando o comando `python build.py` dentro da pasta src/, os arquivos de produção são gerados dentro da pasta public/.
