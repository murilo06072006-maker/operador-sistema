# Sistema Operador

<div align="center">
  <strong>Central de operações pessoal para estudo SOC, treino físico e rotina acadêmica.</strong><br/>
  HTML · CSS · JavaScript · localStorage · GitHub Pages
</div>

---

## Demonstração rápida

O sistema roda 100% no navegador, sem backend, sem login, sem dependências externas.  
Acesse via [GitHub Pages](https://murilo06072006-maker.github.io/operador-sistema) após publicar.

---

## Funcionalidades

| Módulo | O que faz |
|---|---|
| Dashboard | Bloco atual, missão do dia, métricas e diário operacional |
| Estudo | Trilhas SOC Fase 1–3, checklist, horas no mês e streak |
| Treino | Registro de sessão, marcadores físicos, artes marciais e histórico |
| Agenda | Semana padrão e compromissos manuais com ordenação por data |
| Carreira SOC | Roadmap 5 fases, certificações com controle e habilidades de mercado |
| Doutrina | Princípios operacionais e biblioteca de referência |

---

## Estrutura do projeto

```
operador-sistema/
├── index.html          ← SPA principal
├── README.md           ← Documentação e artigo científico
├── LICENSE             ← MIT
├── css/
│   └── style.css
├── js/
│   ├── storage.js      ← Abstração localStorage
│   └── app.js          ← Lógica de negócio e renderização
└── docs/
    └── changelog.md
```

---

## Como publicar (GitHub Pages)

1. Suba os arquivos para o repositório `operador-sistema`.
2. Acesse **Settings → Pages → Branch: main → / (root)**.
3. Salve. Em 1–2 minutos o site estará disponível.

---

## Artigo científico

### Título
**Sistema Operador: Uma Plataforma Integrada para Gestão de Rotina Acadêmica, Treino Físico e Desenvolvimento de Carreira em Segurança da Informação**

**Autor:** Murilo de Oliveira Menezes — 1º Sem. Ciência da Computação, UNIP, Belém-PA  
**Palavras-chave:** SOC Júnior, cibersegurança, gestão de rotina, localStorage, SPA

---

### Resumo
Este trabalho descreve o Sistema Operador, uma aplicação web de página única que integra estudo técnico, treino físico, organização semanal e roadmap profissional para um estudante de Ciência da Computação que objetiva ingressar como Analista de SOC Júnior no mercado brasileiro em até quatro anos. A plataforma adota HTML, CSS e JavaScript sem dependências externas, com persistência local via `localStorage`, exportação/importação de dados e funcionamento offline. Sua contribuição está na integração de dimensões tipicamente tratadas em ferramentas separadas — agenda, estudo, treino e carreira — em um único ambiente operacional coerente.

---

### 1. Introdução
A carreira de Analista de SOC Júnior no Brasil exige simultaneamente fundamentos sólidos em redes e sistemas operacionais, familiaridade com ferramentas SIEM, raciocínio defensivo, certificações de entrada e experiência prática documentada. Para um estudante em início de graduação, conciliar carga acadêmica, estudo autônomo, desenvolvimento físico e planejamento profissional ao longo de quatro anos representa um desafio de gestão pessoal complexo.

O Sistema Operador foi criado para resolver esse problema. Seu propósito é transformar objetivos abstratos de longo prazo em blocos diários de execução mensurável, mantendo a coerência entre rotina, metas físicas, progressão técnica e identidade profissional.

---

### 2. Objetivo
- Organizar a rotina semanal em blocos fixos e compromissos dinâmicos.
- Registrar sessões de estudo com tema, duração, fase e notas.
- Acompanhar marcadores físicos e histórico de treinos.
- Monitorar progresso nas trilhas SOC e nas certificações.
- Oferecer backup e restauração completa dos dados locais.

---

### 3. Metodologia
O desenvolvimento adotou abordagem incremental centrada em requisitos práticos extraídos de um roadmap de quatro anos para SOC Júnior no contexto brasileiro. A arquitetura foi definida em quatro camadas:

- **Estrutura:** `index.html` com seis seções navegáveis.
- **Estilo:** `style.css` com sistema de design coeso, tokens CSS e responsividade em três breakpoints.
- **Dados:** `storage.js` abstrai `localStorage` com `get`, `set`, `push`, `removeFromArray`, `exportAll`, `importAll` e `clearAll`.
- **Lógica:** `app.js` centraliza renderização, cálculos de progresso, regras de bloco e vinculação de eventos.

---

### 4. Arquitetura dos módulos

#### 4.1 Dashboard
Consolida o estado operacional do dia: bloco atual determinado pelo horário, missão da manhã, das 14:30 e da noite derivadas do dia da semana, oito indicadores-chave e diário operacional com histórico. A fase SOC exibida é calculada automaticamente com base no percentual de checklist concluído nas trilhas.

#### 4.2 Estudo
Três trilhas estruturadas em microetapas:
- **Fase 1 – Fundamentos (meses 1–6):** OSI, TCP/IP, DNS/DHCP/ARP/ICMP, CIDR, Linux CLI, logs, journalctl, Windows Event Viewer, PowerShell, OverTheWire Bandit e inglês técnico.
- **Fase 2 – Cibersegurança (meses 6–18):** CIA Triad, tipos de ameaça, CVEs, TryHackMe Pre-Security, Introduction to Cybersecurity, SOC Level 1, MITRE ATT&CK, LGPD, ISO 27001 básico e threat intelligence.
- **Fase 3 – Ferramentas SOC (meses 18–30):** Wazuh, Splunk, Wireshark, Nmap, CyberChef, Security Onion, NIST IR Framework, Cyber Kill Chain e correlação de logs.

Cada sessão de estudo armazena tema, minutos, data, fase e notas. O streak é calculado por dias consecutivos com ≥20 min de estudo.

#### 4.3 Treino
Registro por tipo (Upper Push, Lower Explosão, Upper Pull, Lower Força, Muay Thai, BJJ, Cardio Z2, Mobilidade), com duração, RPE 1–10 e observações livres. Marcadores físicos independentes: peso, deadlift, supino, agachamento, pull-ups e percentual de gordura. Histórico com exclusão individual.

**Mesociclo padrão:**
- Seg: Upper Push — supino, desenvolvimento, dips.
- Ter: Lower Explosão — agachamento, deadlift, box jump.
- Qui: Upper Pull + luta — barra fixa, remada, face pull, Muay Thai.
- Sex: Lower Força + BJJ — box squat, afundo, broad jump.
- Dom: Cardio Z2 + mobilidade.

**Metas físicas (48 meses):**

| Marco | Peso | Gordura | Deadlift | Supino |
|---|---|---|---|---|
| Mês 0 | 110 kg | 40% | 200 kg | 90 kg |
| Mês 12 | 100 kg | 32% | 210 kg | 100 kg |
| Mês 24 | 97 kg | 26% | 220 kg | 115 kg |
| Mês 36 | 93 kg | 22% | 230 kg | 122 kg |
| Mês 48 | **90 kg** | **18%** | **230 kg** | **125 kg** |

#### 4.4 Agenda
Semana padrão com sete dias, três colunas (manhã, 14:30, noite) e compromissos manuais com título, data/hora e tipo. Ordenados por data local para facilitar visualização.

#### 4.5 Carreira SOC
Roadmap em cinco fases com progresso calculado. Certificações com controle de status:

| Cert | Custo | Prioridade | Semestre recomendado |
|---|---|---|---|
| Fortinet NSE 1–4 | Gratuita | Alta | Imediato |
| ISC2 CC | Gratuita | Alta | 3º semestre |
| CompTIA Security+ | ~R$ 2.200 | Alta | 5º semestre |
| BTL1 | ~R$ 2.700 | Alta | 7º semestre |
| CySA+ | ~R$ 2.500 | Média | Opcional |

**Habilidades essenciais de mercado:** SIEM, análise de logs, resposta a incidentes, Linux, MITRE ATT&CK, Python/Bash.

#### 4.6 Doutrina
Princípios operacionais práticos baseados na identidade do operador. Biblioteca de referência dividida em Redes, Sistemas Operacionais, Blue Team e Carreira.

---

### 5. Resultados esperados
1. Aumentar a consistência diária de estudo e treino com feedback visual imediato.
2. Tornar visível a progressão acumulada rumo a SOC Júnior.
3. Reduzir fragmentação entre vida acadêmica, física e profissional.
4. Gerar histórico confiável para revisão, planejamento e portfólio.

---

### 6. Discussão
A principal força do Sistema Operador é a integração. Ferramentas convencionais resolvem bem uma dimensão cada — agenda, tracker de treino ou plataforma de estudo — mas não as integram sob uma identidade operacional comum. A abordagem deste projeto parte do princípio de que consistência diária supera intensidade esporádica, e que esse ritmo só é mantido quando há retroalimentação imediata entre execução, registro e progressão visível.

A limitação principal é inerente à arquitetura: dados no `localStorage` ficam restritos ao navegador e ao dispositivo. Isso é mitigado pela exportação manual em JSON. No futuro, uma camada de backend leve resolveria sincronização, mas o custo em complexidade de manutenção seria significativo para um projeto pessoal.

---

### 7. Trabalhos futuros
- Gráficos de evolução de carga, peso e horas de estudo.
- Sistema de metas trimestrais com alertas.
- Integração com TryHackMe via API pública.
- Painel de candidaturas e acompanhamento de vagas.
- Sincronização entre dispositivos via GitHub Gist ou Firebase.

---

### 8. Conclusão
O Sistema Operador integra rotina, métricas, trilhas de estudo, treino físico e identidade profissional em um único ambiente operacional. Ao converter metas de quatro anos em blocos diários rastreáveis, o sistema reduz a distância entre a intenção e a execução, oferecendo ao usuário clareza de progresso e estrutura para manter consistência ao longo de toda a graduação.

---

## Licença
MIT — uso pessoal e educacional.
