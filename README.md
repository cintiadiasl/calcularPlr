# calcularPlr

Projeto de estudo em **JavaScript** com testes automatizados em **Mocha**, criado para praticar arquitetura e estratégia de testes de software da Mentoria em Teste de Software do Júlio de Lima

A função `calcularPlr` calcula o valor do bônus de **PLR (Participação nos Lucros e Resultados)** a partir da senioridade e do salário de uma pessoa colaboradora.

## Sumário

- [Regra de negócio](#regra-de-negócio)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Cenários de teste](#cenários-de-teste)
- [Melhorias planejadas](#melhorias-planejadas)
- [Aprendizados](#aprendizados)
- [Licença](#licença)

## Regra de negócio

| Senioridade                      | Cálculo do PLR |
| -------------------------------- | -------------- |
| `senior`                         | 2 × salário    |
| Demais (`pleno`, `junior`, etc.) | 1 × salário    |

**Exemplos:**

```js
import { calcularPlr } from './source/calcularPlr.js'

calcularPlr('senior', 10000) // 20000
calcularPlr('pleno', 6000)   // 6000
calcularPlr('junior', 3000)  // 3000
```

## Tecnologias

- [Node.js](https://nodejs.org/) com módulos ES (`"type": "module"`)
- [Mocha](https://mochajs.org/) como framework de testes
- [`node:assert`](https://nodejs.org/api/assert.html) para as asserções

## Estrutura do projeto

```
calcularPlr/
├── source/
│   └── calcularPlr.js        # função que calcula o PLR
├── test/
│   └── calcularPlr.test.js   # testes unitários (Mocha)
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Como executar

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS recente) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/cintiadiasl/calcularPlr.git
cd calcularPlr

# 2. Instale as dependências
npm install

# 3. Execute os testes
npm test
```

Saída esperada:

```
  Teste de Calcular PLR
    ✔ Cenário 1: Calcular se senior
    ✔ Cenário 2: Calcular se pleno
    ✔ Cenário 3: Calcular se junior

  3 passing
```

## Cenários de teste

| #   | Cenário                | Entrada             | Resultado esperado |
| --- | ---------------------- | ------------------- | ------------------ |
| 1   | Pessoa sênior          | `('senior', 10000)` | `20000`            |
| 2   | Pessoa de nível pleno  | `('pleno', 6000)`   | `6000`             |
| 3   | Pessoa de nível júnior | `('junior', 3000)`  | `3000`             |

Atualmente os testes cobrem apenas o "caminho feliz" de cada nível de senioridade.

## Melhorias planejadas

**Código**
- [ ] Remover os `console.log` de demonstração do módulo, para que não executem a cada importação
- [ ] Usar comparação estrita (`===`) e normalizar o texto da senioridade (`Senior`, `sênior`, espaços extras)
- [ ] Validar entradas inválidas (salário negativo, texto, `null`, `undefined`, `NaN`)
- [ ] Definir o comportamento para senioridades desconhecidas (por exemplo, lançar um erro)
- [ ] Extrair os multiplicadores para uma constante

**Testes**
- [ ] Trocar `assert.equal` por `assert.strictEqual`
- [ ] Aplicar **análise de valor-limite** (salário `0`, negativo, decimais)
- [ ] Aplicar **partição de equivalência** (senioridade inválida, vazia, maiúsculas e acentos)
- [ ] Adotar o padrão **AAA** (Arrange, Act, Assert) nos cenários

**Projeto**
- [ ] Corrigir o campo `main` e mover o Mocha para `devDependencies` no `package.json`
- [ ] Configurar integração contínua com GitHub Actions rodando `npm test`

## Aprendizados

Este projeto faz parte dos meus estudos de teste de software e trabalha:

- Separação entre código-fonte e testes
- Suítes (`describe`) e cenários (`it`) de teste
- Testes unitários com asserções
- Planejamento de técnicas de teste para ampliar a cobertura

## Licença

Distribuído sob a licença ISC.

## Autor

**Cíntia Dias**
https://github.com/cintiadiasl
https://www.linkedin.com/in/diaslcintia/
