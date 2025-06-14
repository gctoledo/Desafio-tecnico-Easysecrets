# Dashboard de Vendas

Este projeto foi desenvolvido como parte de um desafio técnico da Easysecrets. Seu objetivo é exibir dados de vendas mensais a partir de um arquivo JSON, utilizando um gráfico interativo e personalizável.

Criei um vídeo para falar um pouco das ferramentas que eu utilizei e o porquê que eu as utilizei, detalhar algumas funcionalidades e mostrar o projeto rodando.
Falei sobre algumas curiosidades e tomadas de decisões que tomei durante o desenvolvimento, recomendo assistir (nem que seja em 1.5x hahaha).

[Confira o vídeo.](https://youtu.be/A-i95WJVdLQ)

[Acesse o projeto em produção!](https://desafio-tecnico-easysecrets-teal.vercel.app)

---

## 💡 Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Zustand (gerenciamento de estado)
- ApexCharts (renderização de gráficos)
- TailwindCSS v4 (estilização)
- Vitest + Testing Library (testes unitários)

---

## ✅ Requisitos para rodar o projeto

Antes de rodar o projeto, verifique se você tem os seguintes itens instalados:

- **Git**  
  Para clonar o repositório.  
  [Baixar o Git](https://git-scm.com/downloads)

- **Node.js (versão 18 ou superior)**  
  Ambiente de execução do JavaScript.  
  [Baixar o Node.js](https://nodejs.org/)

---

## 🔧 Como rodar o projeto localmente

```bash
# Clone o repositório
$ git clone https://github.com/gctoledo/Desafio-tecnico-Easysecrets.git

# Acesse o diretório
$ cd Desafio-tecnico-Easysecrets

# Instale as dependências
$ npm install

# Rode o servidor de desenvolvimento
$ npm run dev
```

---

## 🧪 Testes

O projeto possui atualmente >95% de cobertura.
A cobertura não inclui testes E2E, que não adicionei pela limitação do tempo, mas que poderia ser feito utilizando Cypress ou até mesmo Playwright, que possui uma boa integração com Vite.

Para rodar os testes, siga:

```bash
# Para rodar os testes
$ npm run test

# Para visualizar cobertura de testes
$ npm run test-coverage
```

---

## 📖 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis
├── config/            # Configurações externas
├── data/              # Dados de vendas
├── hooks/             # Hooks customizados
├── interfaces/        # Tipagens TypeScript
├── store/             # Store global
├── utils/             # Funções auxiliares
├── App.tsx            # Entrypoint principal da aplicação
└── index.css          # Estilização global
```

---

## 🔍 Decisões Técnicas

### Vite

- Tempo de build extremamente rápido
- Ótima integração com TypeScript, Tailwind e Vitest

Optei pelo Vite ao invés do Next.js, por exemplo, porque o Next, como um framework, iria entregar diversas funcionalidades que eu não precisaria utilizar nesse projeto. Apesar de também ser uma ótima opção, para o propósito do desafio o Vite me atendia perfeitamente como ferramenta de build/desenvolvimento. Além disso possui uma integração fluida com Tailwind e ferramentas de teste como o Vitest. Isso me permitiu configurar o ambiente rapidamente e focar na implementação das funcionalidades do projeto.

### Zustand

- Mais simples e performático para estados globais
- Não exige provider
- Melhor leitura com seletores individuais (evita re-render)

Apesar de eu já ter trabalhado com alguns outros gerenciadores de estado, achei Zustand uma abordagem mais simples e direta. Considerando que é um projeto com um escopo não tão grande, ele fez muito sentido aqui, sendo um meio-termo excelente entre Context API e Redux.

### ApexCharts

- Biblioteca madura com suporte a gráficos responsivos e interativos
- Permite customização visual completa
- Suporte nativo a exportação, tooltips, dark mode, etc.

Eu já havia utilizado ApexCharts antes, mas utilizei muito mais o Recharts. A princípio, Recharts seria minha opção, mas depois de ler um pouco a documentação do ApexCharts, achei que faria mais sentido, principalmente pela facilidade de integrar com Dark Mode.

### TailwindCSS

- Padroniza o layout de forma rápida
- Utiliza CSS custom properties para alternar temas light/dark
- Possui boa sinergia com componentes reutilizáveis

Não tenho muito o que dizer sobre Tailwind, é uma lib fantástica. Apesar da polêmica sobre Tailwind sujar muito o jsx/tsx, e é um pouco verdade, acho que é um problema contornável se o desenvolvedor souber componentizar e isolar bem a aplicação. E quem não entende CSS, não consegue tirar proveito da produtividade que o Tailwind entrega. Pra esse projeto, como o tempo era muito importante, achei ele uma excelente opção.

### Vitest + Testing Library

- Utilizado para garantir qualidade do código
- Cobertura atual >95%

Vitest é uma excelente ferramente de testes, que apesar de inspirado no Jest, é muito mais rápido. Além disso possui uma integração excelente com o Vite. Então se mostrou a melhor escolha para o projeto.

---

## ✨ Diferenciais Implementados

- ✅ Dark mode com persistência local (localStorage)
- ✅ Filtros interativos por produto e mês
- ✅ Responsividade aprimorada para mobile/tablet com `mobile first`
- ✅ Cobertura de testes
- ✅ Estilo consistente usando variáveis CSS para temas

---

## 📊 Exemplo do JSON utilizado

```json
[
  {
    "produto": "Refrigerante",
    "vendas": [
      { "mes": "Janeiro", "quantidade": 120 },
      { "mes": "Fevereiro", "quantidade": 150 }
    ]
  }
]
```
