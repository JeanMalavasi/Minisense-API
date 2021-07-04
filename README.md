<div align="center">
 <h1>Minisense - API</h1>
 <p>Api desenvolvida visando o gerenciamento de sensores Iot, permitindo tanto configuração quanto obtenção de dados de seus sensores cadastrados.</p>
</div>

<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=7159c1&style=for-the-badge&logo=ghost"/>

### 📁 Index

- [Objetivo](#%EF%B8%8F-objetivo)
- [Pré-requisitos](#%EF%B8%8F-pré-requisitos)
- [Criando banco de dados e sua conexão](#%EF%B8%8F-criando-banco-de-dados-e-sua-conexão)
- [Rodando o BackEnd](#%EF%B8%8F-rodando-o-backend)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Endpoints de teste](#-endpoints-de-teste)
- [Problemas a serem resolvidos](#-problemas-a-serem-resolvidos)


### ✔️ Objetivo
<p> 
API desenvolvida com fins de atender serviços que realizem a gestão de sensores IoT ao ser utilizada, ela permitirá que o usuario, após logado, obtenha a informações de cada sensor em seu nome, dando a possibilidade de configuração e manutenção dos sensores de maneira simplificada.
<p>

### ✔️ Pré-requisitos
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>
<p align="center">
	<a href="https://nodejs.org/en/">NodeJs</a> •
 	<a href="https://dev.mysql.com/downloads/installer/">Mysql</a> •
 	<a href="https://docs.nestjs.com/">NestJs</a> 
</p>

### 🗄️ Criando banco de dados e sua conexão
	
##### Mysql Command-Line - Criando Banco minisense
<ol>
	<li>Pressione windows ou clique no menu iniciar</li>
	<li>Digite e clique: mysql command-line</li>
	<li>Com a linha de comando aberta, entre com a senha do usuario root</li>
	<li>Execute o comando: create database minisense </li>
	<li>Execute o comando: show databases, afim de verificar a existencia do banco</li>	
</ol>

##### Mysql Workbench - Criando conexão
<ol>
	<li>Pressione windows ou clique no menu iniciar</li>
	<li>Digite e clique: mysql workbench</li>
	<li>Com o programa aberto crie uma conexão, clicando no simbolo '+', ao lado da frase MySQL connections</li>
	<li>No campo connection name, atribua: minisense</li>
	<li>No campo port, atribua: 3306</li>
 	<liNo campo username, atribua: root</li>
	<li>Caso os campos: port e username, não puderem receber estes valores, e/ou sua senha para root ser diferente de 'admin', lembre-se de alterar o arquivo '.env', mais explicaçoes sobre isso, no: 'Rodando-o-BackEnd </li>	
</ol>

### ⚙️ Rodando o BackEnd
<ol>
	<li>Realize o dowload ou clone do repositorio;</li>
	<li>Extraia o projeto do rar</li>
	<li>Acesse a pasta Minisense-api</li>
	<li>Execute o comando: npm install</li>
	<li>Caso seu MySql tenha configuraçoes diferente das presentes no arquivo ".env" presente na raiz do projeto, deve-se alterar os campos: PORTA, USUARIO_BANCO_DADOS, SENHA_BANCO_DADOS, para que estes reflitam sua configuração</li>
 	<li>Execute o comando: nest start --watch</li>
	<li>O servidor inciará na porta: localhost:3000 </li>
	<li>Agora já é possivel fazer as requisiçoes para esta porta</li>	
</ol>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NestJS](https://nestjs.com/)
- [Mysql](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://www.javascript.com/)

### 📁 Funcionalidades
##### Usuario
- [x] Cadastro de usuário
- [x] Recupera todos usuários
- [x] Recupera um usuário
- [x] Recupera todos sensores de um usuário
- [x] Deleta um usuário
- [x] Atualiza um usuário
##### Autenticação
- [x] Login de usuário
Nesse passo é gerado um token de segurança, que deve ser enviado ao realizar as demais requisições, cm exceção da criação de usuário.
##### Sensor
- [x] Cadastro de sensores
- [x] Recupera todos sensores
- [x] Recupera um sensor
- [x] Recupera todos sensores de um usuário
- [x] Recupera todos streams de um sensor
- [x] Recupera os ultimos 5 dados de sensor de um cada stream
- [x] Deleta um sensor
- [x] Atualiza um sensor
##### Unidade de medida
- [x] Cadastro de unidade de medida
- [x] Recupera todas unidades de medida
- [x] Recupera uma unidade de medida
- [ ] Deleta uma unidade de medida
- [ ] Atualiza uma unidade de medida
##### Stream
- [x] Cadastro de stream
- [x] Recupera todos streams
- [x] Recupera um stream
- [x] Recupera todos dados de sensor de um stream
- [x] Deleta um stream
- [x] Atualiza um stream
##### Dado de sensor
- [x] Cadastro de dado de sensor
- [x] Recupera todos dados de sensor
- [x] Recupera um dado de sensor
- [x] Recupera todos dado de sensor de um stream
- [x] Deleta um dado de sensor
- [x] Atualiza um dado de sensor
### 🔴 Endpoints-de-teste
- [Insomnia - Arquivo JSON](https://drive.google.com/file/d/15Y7nrjibb1M7GrPjGxFm54aAi0bV7PEJ/view?usp=sharing)
- [Swagger - Arquivo YAML](https://drive.google.com/file/d/1VSSfGm3vLmMk0fFpy8JjnfOsEhX0fT4u/view?usp=sharing)

### 🔴 Problemas a serem resolvidos
- A api foi projetada para apenas adminstradores poderem registrar unidades de medida, Usuarios comums, não devem ter acesso as rotas de Criar, Atualizar e Deletar, como não descobri ainda como restringir tais rotas apenas para os usuarios comuns, ainda não foi implementado o Delete e Update.
- A api deve realizar a contagem dos dados associados a um stream em determinados momentos, todavia, a bliblioteca utilizada para conectar-se ao banco (sequelize-typescript), tem documentação vaga, na implementação foram encontrados problemas, era feita a contagem correta, mas não era exibido mais que um elemente de associado a aquela informação.
