const slidesData = [
  {
    kicker: "",
    title: "Acessibilidade Web",
    subtitle: "eMAG, WCAG e ISO 40500",
    lead: "Uma jornada sobre os padrões, princípios e práticas que tornam a web verdadeiramente acessível para todas as pessoas.",
    blocks: [
      {
        heading: "Palestrantes",
        items: ["Profª Maristela", "Profª Marcileide"]
      }
    ]
  },
  {
    kicker: "",
    title: "Design Universal",
    quote: "\"Acessibilidade não é um detalhe, é garantir que todas as pessoas consigam utilizar o sistema\"",
    blocks: [
      {
        heading: "Conceito",
        text: "Design sem barreiras tecnológicas: criar sistemas que qualquer pessoa possa utilizar, independentemente de limitações físicas, sensoriais ou cognitivas."
      },
      {
        heading: "Inclusão Digital",
        text: "A web só cumpre seu potencial democrático quando é navegável por todos, sem exceção."
      },
      {
        heading: "Importância",
        text: "Acessibilidade é direito fundamental, gera autonomia para pessoas com deficiência e é requisito legal em vários contextos."
      }
    ]
  },
  {
    kicker: "",
    title: "A Ponte para a Informação: Tecnologias Assistivas",
    lead: "Tecnologias assistivas conectam pessoas com deficiência ao conteúdo digital. Entender esse ecossistema é essencial para interfaces realmente inclusivas.",
    blocks: [
      {
        heading: "Leitores de Tela",
        text: "Traduzem a tela em áudio para pessoas com deficiência visual (ex.: NVDA, JAWS, VoiceOver)."
      },
      {
        heading: "Navegação por Teclado",
        text: "Permite uso sem mouse. Exige foco visível e ordem lógica dos elementos."
      },
      {
        heading: "Ampliadores de Tela",
        text: "Zoom para baixa visão, pedindo layouts flexíveis e responsivos."
      },
      {
        heading: "Audiodescrição",
        text: "Narra componentes visuais relevantes de conteúdos multimídia."
      }
    ]
  },
  {
    kicker: "",
    title: "As Regras do Jogo: O Cenário Normativo",
    lead: "WCAG, ISO/IEC 40500 e eMAG formam o núcleo regulatório da acessibilidade web.",
    blocks: [
      {
        heading: "WCAG",
        text: "Diretrizes internacionais do W3C, referência técnica global para conteúdo web acessível."
      },
      {
        heading: "ISO/IEC 40500",
        text: "Adoção formal da WCAG 2.0 como norma internacional, reforçando reconhecimento global."
      },
      {
        heading: "eMAG",
        text: "Modelo brasileiro para governo eletronico, baseado na WCAG e adaptado ao contexto nacional."
      }
    ]
  },
  {
    kicker: "",
    title: "Os 4 Princípios Universais (POUR)",
    lead: "Todo critério de sucesso da WCAG deriva de um destes pilares:",
    blocks: [
      {
        heading: "1. Perceptível",
        text: "A informação precisa ser percebida pelos sentidos (contraste, texto alternativo, etc.)."
      },
      {
        heading: "2. Operável",
        text: "A interface não pode exigir interações impossíveis (teclado, tempo adequado, foco)."
      },
      {
        heading: "3. Compreensível",
        text: "Conteúdo e interação claros, previsíveis e com mensagens de erro úteis."
      },
      {
        heading: "4. Robusto",
        text: "Compatibilidade com tecnologias assistivas via HTML semântico e padrões corretos."
      }
    ]
  },
  {
    kicker: "",
    title: "Dissecação Visual: O Poder do Contraste",
    lead: "Contraste insuficiente bloqueia acesso para baixa visão e daltonismo. O mínimo para texto normal é 4.5:1 (WCAG 1.4.3).",
    blocks: [
      {
        heading: "Reprovado",
        text: "Texto claro em fundo claro, hierarquia fraca e uso de cor como unico indicador de estado."
      },
      {
        heading: "Aprovado",
        text: "Contraste seguro, legibilidade consistente e hierarquia visual nitida para todos os contextos."
      }
    ],
    callout: "Valide combinações com ferramentas como WebAIM Contrast Checker."
  },
  {
    kicker: "",
    title: "A Estrutura Invisível: Títulos e Semântica",
    lead: "Hierarquia de títulos é a espinha dorsal da navegação por leitores de tela.",
    blocks: [
      {
        heading: "Incorreto",
        text: "Apenas negrito e tamanho de fonte para simular estrutura visual, sem semântica real."
      },
      {
        heading: "Correto",
        text: "Uso de h1, h2, h3 em ordem logica para permitir navegacao por atalhos e contexto claro."
      }
    ],
    callout: "Estilo visual não substitui semântica HTML."
  },
  {
    kicker: "",
    title: "Operabilidade: Navegação Exclusiva por Teclado",
    lead: "Toda interface deve ser operável via TAB e setas, sem dependência de mouse.",
    blocks: [
      {
        heading: "Dependencia do Mouse",
        text: "Sem foco visível, a pessoa perde contexto e não sabe qual elemento está ativo."
      },
      {
        heading: "Foco Visivel",
        text: "Indicador de foco claro permite autonomia total e atende ao criterio WCAG 2.4.7."
      }
    ],
    callout: "Nunca remova outline sem fornecer alternativa visual equivalente."
  },
  {
    kicker: "",
    title: "Formulários e Interação Acessível",
    lead: "Formulários inacessíveis bloqueiam tarefas essenciais como cadastro, compra e solicitação de serviços.",
    blocks: [
      {
        heading: "Carga Cognitiva Alta",
        text: "Campos sem label permanente e erros sem descrição textual deixam o usuário sem orientação."
      },
      {
        heading: "Instrucao Clara",
        text: "Labels associados, erros descritivos e ordem logica de preenchimento guiam a jornada."
      }
    ],
    callout: "Placeholder não substitui label. Use aria-describedby para conectar mensagens de erro."
  },
  {
    kicker: "",
    title: "O Contexto da Imagem: Alt Text",
    lead: "O atributo alt conecta o visual ao usuário que não vê a imagem ou quando ela não carrega.",
    blocks: [
      {
        heading: "Sem Descricao",
        text: "alt vazio ou ausente em imagem informativa elimina conteúdo para leitores de tela."
      },
      {
        heading: "Com Descricao",
        text: "Descrição objetiva do propósito da imagem no contexto entrega a mesma informação para todos."
      }
    ],
    callout: "Imagem decorativa deve usar alt vazio; imagem informativa precisa de contexto."
  },
  {
    kicker: "",
    title: "Acessibilidade em Conteúdo Multimídia",
    lead: "Vídeos, áudios e animações exigem recursos adicionais para alcance universal.",
    blocks: [
      {
        heading: "Legendas",
        text: "Transcrição sincronizada das falas e sons relevantes."
      },
      {
        heading: "Audiodescrição",
        text: "Narração dos elementos visuais essenciais durante pausas naturais."
      },
      {
        heading: "Transcrição Textual",
        text: "Versão completa em texto para leitura assistiva e busca."
      },
      {
        heading: "Controle de Animações",
        text: "Permitir pausar, parar ou ocultar movimento automático com duração maior que 5s."
      }
    ]
  },
  {
    kicker: "",
    title: "Níveis de Conformidade WCAG",
    lead: "A conformidade evolui por três níveis progressivos.",
    blocks: [
      {
        heading: "Nível A (Essencial)",
        text: "Requisitos mínimos para remover barreiras críticas."
      },
      {
        heading: "Nível AA (Recomendado)",
        text: "Padrão adotado por legislações e pelo eMAG."
      },
      {
        heading: "Nível AAA (Excelência)",
        text: "Maior nível de acessibilidade, perseguido sempre que viável."
      }
    ]
  },
  {
    kicker: "",
    title: "Ferramentas de Avaliação e Testes",
    lead: "Não existe avaliação completa com uma única abordagem. Combine automação e testes reais.",
    blocks: [
      {
        heading: "Automatizada",
        text: "WAVE, axe DevTools e Lighthouse detectam rápido parte importante dos erros técnicos."
      },
      {
        heading: "Manual",
        text: "Checar teclado, foco, semântica e ARIA revela problemas que ferramenta automática não pega."
      },
      {
        heading: "Usuários Reais",
        text: "Sessões com pessoas com deficiência trazem barreiras reais de usabilidade e contexto."
      }
    ]
  },
  {
    kicker: "",
    title: "Acessibilidade como Cultura, não como Checklist",
    lead: "Aplicar shift left reduz custo, evita retrabalho e melhora qualidade desde a descoberta até manutenção.",
    blocks: [
      {
        heading: "1. Descoberta",
        text: "Incluir personas com deficiencia na pesquisa de usuario."
      },
      {
        heading: "2. Design",
        text: "Definir contraste, tipografia legível e fluxos testados com teclado."
      },
      {
        heading: "3. Desenvolvimento",
        text: "Implementar HTML semântico, ARIA correto, foco gerenciado e testes."
      },
      {
        heading: "4. Qualidade",
        text: "Executar testes manuais com leitor de tela e validação WCAG AA."
      },
      {
        heading: "5. Monitoramento",
        text: "Manter auditorias periódicas e ouvir feedback de usuários com deficiência."
      }
    ]
  },
  {
    kicker: "",
    title: "Conclusão: A Web que Queremos Construir",
    quote: "\"A web é para todos. Quando tornamos a web acessível, tornamos o mundo mais justo.\"",
    blocks: [
      {
        heading: "É um Direito",
        text: "No Brasil, é respaldada pela Lei Brasileira de Inclusão (13.146/2015) e por referências internacionais."
      },
      {
        heading: "É um Negócio",
        text: "Mais alcance, melhor SEO e menor risco jurídico."
      },
      {
        heading: "É Responsabilidade Nossa",
        text: "Cada desenvolvedor, designer e gestor participa da construção de experiências inclusivas."
      }
    ],
    callout: "Obrigada! Professoras Maristela & Marcileide | Jornada Interdisciplinar 2026"
  }
];

const slidesRoot = document.getElementById("slides");
const dotsRoot = document.getElementById("dots");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const neuralCanvas = document.getElementById("neural-bg");

const THEME_STORAGE_KEY = "acessibilidade-web-theme";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors in restricted contexts.
  }
}

let currentIndex = 0;
let wheelLock = false;

function initNeuralBackground() {
  if (!neuralCanvas || prefersReducedMotion) {
    return;
  }

  const ctx = neuralCanvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const nodes = [];
  let rafId = 0;
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    neuralCanvas.width = Math.floor(width * dpr);
    neuralCanvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const nodeCount = Math.max(28, Math.floor((width * height) / 28000));
    nodes.length = 0;
    for (let i = 0; i < nodeCount; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 1.1,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function getThemeColors() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    return isDark
      ? {
          node: [255, 110, 0],
          nodeAlpha: 0.96,
          edge: [96, 184, 255],
          edgeAlpha: 0.68,
          glow: [32, 142, 255],
          glowAlpha: 0.28,
          trail: "rgba(5, 8, 14, 0.24)"
        }
      : {
          node: [255, 95, 0],
          nodeAlpha: 0.96,
          edge: [0, 108, 214],
          edgeAlpha: 0.52,
          glow: [0, 91, 170],
          glowAlpha: 0.18,
          trail: "rgba(246, 247, 249, 0.2)"
        };
  }

  function animate() {
    const colors = getThemeColors();
    const maxDistance = 152;

    ctx.fillStyle = colors.trail;
    ctx.fillRect(0, 0, width, height);

    ctx.shadowBlur = 0;

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy;
      node.pulse += 0.016;

      if (node.x < -10 || node.x > width + 10) {
        node.vx *= -1;
      }
      if (node.y < -10 || node.y > height + 10) {
        node.vy *= -1;
      }

      for (let j = i + 1; j < nodes.length; j += 1) {
        const other = nodes[j];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance > maxDistance) {
          continue;
        }

        const alpha = 1 - distance / maxDistance;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${colors.glow[0]}, ${colors.glow[1]}, ${colors.glow[2]}, ${(colors.glowAlpha * alpha).toFixed(3)})`;
        ctx.strokeStyle = `rgba(${colors.edge[0]}, ${colors.edge[1]}, ${colors.edge[2]}, ${(colors.edgeAlpha * alpha).toFixed(3)})`;
        ctx.lineWidth = 1 + alpha * 0.32;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    }

    ctx.shadowBlur = 14;
    ctx.shadowColor = `rgba(${colors.glow[0]}, ${colors.glow[1]}, ${colors.glow[2]}, ${colors.glowAlpha.toFixed(3)})`;
    for (const node of nodes) {
      const pulse = (Math.sin(node.pulse) + 1) / 2;
      const radius = node.r + pulse * 0.35;

      ctx.fillStyle = `rgba(${colors.glow[0]}, ${colors.glow[1]}, ${colors.glow[2]}, ${(colors.glowAlpha + pulse * 0.06).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${colors.node[0]}, ${colors.node[1]}, ${colors.node[2]}, ${colors.nodeAlpha})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, Math.max(0.65, radius * 0.2), 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.shadowBlur = 0;

    rafId = window.requestAnimationFrame(animate);
  }

  function handleResize() {
    resizeCanvas();
  }

  resizeCanvas();
  animate();
  window.addEventListener("resize", handleResize);
  window.addEventListener("beforeunload", () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener("resize", handleResize);
  });
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (!themeToggleBtn) {
    return;
  }

  const isDark = theme === "dark";
  themeToggleBtn.textContent = isDark ? "Tema: Escuro" : "Tema: Claro";
  themeToggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
}

function getSlideImagePath(index) {
  return `assets/images/image-${index + 1}-1.png`;
}

function renderSlideContent(slide, index) {
  const section = document.createElement("section");
  section.className = "slide";
  section.id = `slide-${index + 1}`;
  section.setAttribute("aria-label", `${index + 1}. ${slide.title}`);

  const card = document.createElement("article");
  card.className = "slide-card";

  const titleTag = index === 0 ? "h1" : "h2";

  const blocksHtml = slide.blocks
    .map((block) => {
      const textHtml = block.text ? `<p>${block.text}</p>` : "";
      const listHtml = Array.isArray(block.items)
        ? `<ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      return `<section class="panel"><h3>${block.heading}</h3>${textHtml}${listHtml}</section>`;
    })
    .join("");

  const imagePath = getSlideImagePath(index);
  const imageHtml = `
    <figure class="slide-media">
      <img
        src="${imagePath}"
        alt="Imagem original do slide ${index + 1}: ${slide.title}"
        loading="${index <= 1 ? "eager" : "lazy"}"
        decoding="async"
      >
    </figure>
  `;

  card.innerHTML = `
    <div class="slide-main">
      ${imageHtml}
      <div class="slide-content">
        <p class="slide-kicker">${slide.kicker}</p>
        <${titleTag}>${slide.title}</${titleTag}>
        ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
        ${slide.quote ? `<p class="quote">${slide.quote}</p>` : ""}
        ${slide.lead ? `<p class="subtitle">${slide.lead}</p>` : ""}
      </div>
    </div>
    <div class="slide-bottom">
      ${slide.blocks.length ? `<div class="columns">${blocksHtml}</div>` : ""}
      ${slide.callout ? `<p class="callout">${slide.callout}</p>` : ""}
    </div>
  `;

  section.appendChild(card);
  return section;
}

function renderSlides() {
  slidesData.forEach((slide, index) => {
    slidesRoot.appendChild(renderSlideContent(slide, index));

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot-btn";
    dot.setAttribute("aria-label", `Ir para slide ${index + 1}`);
    dot.addEventListener("click", () => goTo(index));
    dotsRoot.appendChild(dot);
  });
}

function setHash(index) {
  history.replaceState(null, "", `#slide-${index + 1}`);
}

function updateUI() {
  const allSlides = document.querySelectorAll(".slide");
  const allDots = document.querySelectorAll(".dot-btn");

  allSlides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });

  allDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
    dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
  });

  if (window.innerWidth > 920) {
    slidesRoot.style.transform = `translateY(-${currentIndex * 100}vh)`;
  } else {
    const activeSlide = allSlides[currentIndex];
    activeSlide.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  setHash(currentIndex);
}

function goTo(index) {
  currentIndex = Math.max(0, Math.min(index, slidesData.length - 1));
  updateUI();
}

function nextSlide() {
  goTo(currentIndex + 1);
}

function prevSlide() {
  goTo(currentIndex - 1);
}

function handleWheel(event) {
  if (window.innerWidth <= 920 || wheelLock) {
    return;
  }

  if (Math.abs(event.deltaY) < 20) {
    return;
  }

  wheelLock = true;
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }

  window.setTimeout(() => {
    wheelLock = false;
  }, 540);
}

function handleKeydown(event) {
  if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    nextSlide();
  }

  if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    prevSlide();
  }

  if (event.key === "Home") {
    event.preventDefault();
    goTo(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    goTo(slidesData.length - 1);
  }
}

function getInitialSlideFromHash() {
  const hash = window.location.hash;
  const match = hash.match(/^#slide-(\d+)$/);
  if (!match) {
    return 0;
  }

  const numeric = Number(match[1]) - 1;
  if (Number.isNaN(numeric)) {
    return 0;
  }

  return Math.max(0, Math.min(numeric, slidesData.length - 1));
}

renderSlides();
applyTheme(getPreferredTheme());
initNeuralBackground();
currentIndex = getInitialSlideFromHash();
updateUI();

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}
document.addEventListener("keydown", handleKeydown);
window.addEventListener("wheel", handleWheel, { passive: true });
window.addEventListener("resize", updateUI);
