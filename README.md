# Dashboard de Vendas

Este projeto foi desenvolvido como parte de um desafio técnico da Easysecrets. Seu objetivo é exibir dados de vendas mensais a partir de um arquivo JSON, utilizando um gráfico interativo e personalizável.

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

## 🔧 Testes

O projeto possui atualmente >95% de cobertura. para rodar os testes, siga:

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

### Zustand

- Mais simples e performático para estados globais
- Não exige provider
- Melhor leitura com seletores individuais (evita re-render)

Apesar de eu já ter trabalhado com Context API ou Redux, achei Zustand uma abordagem mais simples e direta. Considerando que é um projeto com um escopo não tão grande, ele fez muito sentido aqui.

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

Vitest é uma excelente ferramente de testes, que apesar de utilizar Jest como base, o Vitest é muito mais rápido. Além de ter uma integração excelente com o Vite. Então aqui foi uma escolha fácil.

---

## ✨ Diferenciais Implementados

- ✅ Dark mode com persistência local (localStorage)
- ✅ Filtros interativos por produto e mês
- ✅ Responsividade aprimorada para mobile/tablet com `mobile first`
- ✅ Cobertura de testes alta
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
