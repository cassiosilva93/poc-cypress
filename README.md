# POC - CYPRESS

##  🎁Dependências

- cypress-xpath: Por padrão, o Cypress não trabalhar com seletores Xpath, com isso, precisamos utilizar a biblioteca [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)

- allure-plugin: Para visualização de relatórios, mais informações podem ser encontradas no link [allure report](https://docs.qameta.io/allure/)

<br />

### 📊 **_Dashbord do Allure_** 

![allure-dashboard](https://docs.qameta.io/allure/images/tab_overview.png)

<br />

## Pré-requisitos para utilizar o Allure

✅ Allure instalado na sua máquina ([tutorial](https://docs.qameta.io/allure/#_installing_a_commandline)) <br />
✅ Java instalado na sua máquina ([donwload](https://docs.qameta.io/allure/#_installing_a_commandline))<br />

<br />

## 🤔 Como utilizar 
<br />

Clonar o projeto:
```bash
$ git clone https://github.com/cassiosilva93/poc-vxcadastro-cypress.git
```
Instalar as dependências:
```bash
$ npm install
```
<br />

## ⚡ Scripts: 

Abrindo o cypress
```bash
$ npm run cypress:start 
```
Executando os testes no modo headless 
```bash
$ npm run cypress:run
```
Gerando relatórios com o Allure
```bash
$ npm run allure:generate-report
```
Visualizando relatórios com o Allure
```bash
$ npm run allure:open
```
