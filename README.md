# Dashboard de Vendas - Desafio técnico - Easysecrets

Este projeto foi desenvolvido como parte de um desafio técnico da Easysecrets. Seu objetivo é exibir dados de vendas mensais a partir de um arquivo JSON, utilizando um gráfico interativo e personalizável.

Criei um vídeo para detalhar mais sobre as ferramentas que eu utilizei e o porquê que eu as utilizei, falar sobre algumas funcionalidades e mostrar o projeto rodando.
Contei também sobre algumas curiosidades e tomadas de decisões que tomei durante o desenvolvimento.

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
├── components/
│   ├── __tests__/                        # Testes dos componentes
│   ├── Button.tsx                        # Botão personalizado
│   ├── Card.tsx                          # Card para exibição de informações
│   ├── ChartSelector.tsx                 # Seletor de gráficos
│   ├── ChevronIcon.tsx                   # Componente para SVG de seta
│   ├── Container.tsx                     # Container para centralização de conteúdos
│   ├── FilterGroup.tsx                   # Box para exibição de tipos de filtros diferentes
│   ├── FilterOptions.tsx                 # Exibição das opções de filtros
│   ├── Filters.tsx                       # Renderização de todos os filtros
│   ├── Footer.tsx                        # Footer da aplicação
│   ├── Header.tsx                        # Header da aplicação
│   ├── MonthFilter.tsx                   # Filtro por mês
│   ├── ProductFilter.tsx                 # Filtro por produto
│   ├── SalesChart.tsx                    # Renderização de gráfico de vendas
│   ├── Stats.tsx                         # Renderização de estatisticas sobre vendas
│   ├── ThemeButton.tsx                   # Botão para alterar entre temas
├── config/
│   ├── chartOptions.ts                   # Configuração para exibição de gráficos do ApexCharts
│   ├── testSetup.ts                      # Configuração dos testes
├── data/
│   ├── sales.json                        # Dados das vendas
├── hooks/
│   ├── __tests__                         # Testes dos hooks
│   ├── useTheme.ts                       # Hook para gerenciamento do tema
│   ├── useSalesData.ts                   # Hook para fornecer dados de vendas
├── interfaces/
│   ├── chart.ts                          # Tipagem para os gráficos
│   ├── sales.ts                          # Tipagem para os dados de vendas
├── store/
│   ├── chart.ts                          # Store para gerenciamento de estados dos gráficos
├── utils/
│   ├── __tests__                         # Testes das funções utilitárias
│   ├── calculateBestSellingMonth.ts      # Função auxiliar para calcular melhor mês de vendas
│   ├── calculateBestSellingProduct.ts    # Função auxiliar para calcular o produto mais vendido
│   ├── calculateTotalSales.ts            # Função auxiliar para calcular o total de vendas
│   ├── filterData.ts                     # Função auxiliar filtrar as vendas por mês e produtos selecionados
├── App.tsx                               # Entrypoint principal da aplicação
└── index.css                             # Estilização global
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
