[gitmd]:https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# Documentação da arquitetura do projeto 


<h2> Padrão Factory </h2>

> Esse padrão foi escolhido para criar as instancias de cada entidade em um unico local, e utilizando do Object literals foi possível escolher dinamicamente qual seria a entidade a ser tuilizada, email, whatsapp ou sms.

<h2> Padrão Abstract Factory </h2>

> Utilizado para que todas as entidades de mensagem implementem um método em comum, o sendMessage, a assinatura desse método está em messageInterface.js

<h2> N-Tiers Architeture </h2>

> Cada entidade poderia ter suas regras especificas de validação e também a possibilidade de relacionamento entre entidades, o que resultou na escolha desse padrão


<h2> Injeção de Dependências </h2>

> Como esse é um projeto que utiliza classes e várias camadas de abstração é interessante utilizar-se dessa técnica para reduzir o acoplamento entre cada módulo, trazendo mais beneficios ao uso da Factory e também possibilitando um reuso mais prático e desacoplado.

<h2> Padrão Builder </h2>

> Builders facilitam a construção de objetos, principalmente quando o número de métodos tendem a ser numerosos e complexos, por hora não é o caso nessa aplicação, mas pode facilitar o desenvolvimento futuro.

<h2> Object Mother </h2>

> É uma classe utilizada para os testes, como podemos ter diversas regras de negócio diferentes e para cada, diversas validações, utilizamos esse padrão junto ao Builder para criar de forma rápida e intuitiva o objeto já com os dados de cada regra a ser testada.