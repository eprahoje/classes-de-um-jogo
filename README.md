# ⚔ Classes de um jogo
### 📝 Objetivo
Criar uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- Nome;
- Idade;
- Tipo (ex: guerreiro, mago, monge, ninja ).

![Classe Hero](https://github.com/user-attachments/assets/cda95c79-4b2e-47b7-9877-aad4083d9fcf)


Além disso, deve ter um método chamado **atacar** que deve atender os seguintes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}");
- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe;
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo.

```
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
```
### Ao final deve se exibir uma mensagem:

```
"o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 ```
## 💻 Desenvolvimento do desafio
Para desenvolver o projeto, utilizei da IDE [Visual Studio Code](https://code.visualstudio.com) e a linguagem **JavaScript** com o pacote [readline-sync](https://www.npmjs.com/package/readline-sync) para interação com o usuário pelo console.

## ✅ Exemplos de saída
![Exemplo de saída 1](https://github.com/user-attachments/assets/cd01d899-3942-44bd-bd93-720d13186239)


## 
<img src = "https://github.com/eprahoje/classificador-de-nivel-de-heroi/assets/143037296/488c9d56-21ae-419d-a15b-32824a7fa2fd" width = 100px align = "center"> | Desafio proposto pelo Felipão na formação de Lógica da Programação na [DIO](https://www.dio.me)
