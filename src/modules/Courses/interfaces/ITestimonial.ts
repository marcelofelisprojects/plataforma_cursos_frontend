export interface ITestimonial {
  id: number;
  testimonial: string;
  name: string;
  position: string;
  score: number;
}

export const testimonials = [
  {
    id: 1,
    name: 'Thiago da Silva',
    position: 'Engenheiro de Produção na Metalúrgica Gerdau',
    score: 5,
    testimonial:
      '"A experiência do curso foi incrível! As aulas de medidas e escalas foram muito bem estruturadas e o cronograma foi cuidadosamente planejado, facilitando muito a aplicação prática na fábrica."',
  },
  {
    id: 2,
    name: 'Mariana Costa',
    position: 'Supervisora de Operações na Ambev',
    score: 5,
    testimonial:
      '"Excelente conteúdo sobre cultura organizacional e gestão do tempo. Consegui engajar minha equipe de turno muito melhor após as metodologias apresentadas pelos professores."',
  },
  {
    id: 3,
    name: 'Carlos Eduardo Santos',
    position: 'Técnico em Automação na WEG',
    score: 4,
    testimonial:
      '"Os módulos práticos me ajudaram a otimizar processos de manutenção de forma muito precisa. O suporte online tirou minhas dúvidas de imediato durante os exercícios finais."',
  },
  {
    id: 4,
    name: 'Fernanda Lima',
    position: 'Analista de Planejamento Logístico',
    score: 5,
    testimonial:
      '"O curso de Excel do Básico ao Avançado superou todas as minhas expectativas. Os relatórios de controle industrial que antes demoravam dias para rodar agora faço em poucos minutos."',
  },
  {
    id: 5,
    name: 'Roberto de Almeida',
    position: 'Coordenador de Qualidade na Embraer',
    score: 5,
    testimonial:
      '"A flexibilidade das aulas gravadas me permitiu conciliar os estudos com a rotina pesada de auditorias na empresa. O peso da certificação SESI abriu portas para minha promoção."',
  },
  {
    id: 6,
    name: 'Beatriz Rocha',
    position: 'Operadora de Processos Químicos',
    score: 4,
    testimonial:
      '"Muito bom! O foco na precisão matemática aplicada diretamente às rotinas da metalurgia me deu a segurança que eu precisava para assumir novos equipamentos no setor."',
  },
  {
    id: 7,
    name: 'Ricardo Vieira',
    position: 'Líder de Manutenção Industrial',
    score: 5,
    testimonial:
      '"As aulas de comunicação assertiva e trabalho em equipe mudaram a dinâmica da nossa oficina. O material de apoio é completo e serve como um manual excelente para o dia a dia."',
  },
  {
    id: 8,
    name: 'Camila Antunes',
    position: 'Gestora de Projetos de Inovação',
    score: 5,
    testimonial:
      '"O módulo sobre ferramentas Google para produtividade organizou totalmente os nossos fluxos de entrega. Plataforma intuitiva e professores com domínio real de chão de fábrica."',
  },
  {
    id: 9,
    name: 'Juliana Mendes',
    position: 'Técnica em Segurança do Trabalho',
    score: 4,
    testimonial:
      '"A abordagem de inteligência emocional no ambiente de alta performance foi cirúrgica. Conteúdo essencial para líderes e técnicos que lidam com gerenciamento de riscos humanos."',
  },
  {
    id: 10,
    name: 'Lucas Pinheiro',
    position: 'Especialista em Manufatura Enxuta',
    score: 5,
    testimonial:
      '"A estrutura didática é impecável. É difícil encontrar cursos que traduzam conceitos complexos de escalas metalúrgicas de forma tão clara e aplicável à realidade das indústrias."',
  },
] as ITestimonial[];
