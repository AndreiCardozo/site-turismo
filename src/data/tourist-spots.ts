import { TouristSpot } from '../types/tourist-spot';

export const touristSpots: TouristSpot[] = [
  {
    id: 'cine-theatro-central',
    name: 'Cine-Theatro Central',
    description: 'Teatro histórico inaugurado em 1929, com arquitetura em estilo eclético. Um dos mais importantes patrimônios culturais da cidade.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011',
    instagram: '@cinetheatrocentral',
    address: 'Praça João Pessoa, s/n - Centro',
    hours: 'Segunda a Sexta: 9h às 18h',
    phone: '(32) 3231-4051',
    category: 'theater'
  },
  {
    id: 'paco-municipal',
    name: 'Paço Municipal',
    description: 'Sede da Prefeitura de Juiz de Fora, um edifício histórico do século XIX com arquitetura neoclássica.',
    image: 'https://images.unsplash.com/photo-1552689486-f6773047d19f',
    address: 'Av. Rio Branco, 2234 - Centro',
    hours: 'Segunda a Sexta: 8h às 18h',
    phone: '(32) 3690-7000',
    category: 'historical'
  },
  {
    id: 'museu-mariano-procopio',
    name: 'Museu Mariano Procópio',
    description: 'Um dos mais importantes museus do Brasil, com acervo histórico e artístico significativo do período imperial.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3',
    instagram: '@mmprocopio',
    address: 'Rua Mariano Procópio, 1100',
    hours: 'Terça a Domingo: 9h às 17h',
    phone: '(32) 3690-2321',
    category: 'museum'
  },
  {
    id: 'jardim-botanico',
    name: 'Jardim Botânico',
    description: 'Área verde com diversas espécies de plantas, ideal para caminhadas e contato com a natureza.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    address: 'Rua do Jardim Botânico, s/n',
    hours: 'Diariamente: 8h às 17h',
    category: 'park'
  },
  {
    id: 'forum-da-cultura',
    name: 'Fórum da Cultura',
    description: 'Centro cultural que promove eventos, exposições e atividades artísticas.',
    image: 'https://images.unsplash.com/photo-1584552147765-c5e9d59248ff',
    instagram: '@forumculturajf',
    address: 'Rua Santo Antônio, 1112 - Centro',
    hours: 'Segunda a Sábado: 9h às 21h',
    phone: '(32) 3231-1950',
    category: 'culture'
  },
  {
    id: 'mamm',
    name: 'Museu de Arte Murilo Mendes',
    description: 'Museu dedicado à arte moderna e contemporânea, com importante acervo do poeta Murilo Mendes.',
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd',
    instagram: '@mammjf',
    address: 'Rua Benjamin Constant, 790',
    hours: 'Terça a Domingo: 10h às 18h',
    phone: '(32) 3229-9070',
    category: 'museum'
  },
  {
    id: 'memorial-itamar-franco',
    name: 'Memorial da República Presidente Itamar Franco',
    description: 'Museu dedicado à memória do ex-presidente Itamar Franco, com documentos e objetos históricos.',
    image: 'https://images.unsplash.com/photo-1584633155097-19e7753dba76',
    address: 'Rua São Sebastião, 437 - Centro',
    hours: 'Terça a Domingo: 10h às 17h',
    phone: '(32) 3690-7973',
    category: 'museum'
  },
  {
    id: 'morro-do-imperador',
    name: 'Morro do Imperador',
    description: 'Ponto mais alto da cidade, oferece vista panorâmica e é ideal para prática de esportes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    address: 'Morro do Imperador',
    hours: 'Acesso livre',
    category: 'park'
  },
  {
    id: 'mirante-sao-bernardo',
    name: 'Mirante São Bernardo',
    description: 'Local com vista privilegiada da cidade, especialmente bonito ao pôr do sol.',
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0',
    address: 'Bairro São Bernardo',
    hours: 'Acesso livre',
    category: 'park'
  },
  {
    id: 'ufjf',
    name: 'Universidade Federal de Juiz de Fora',
    description: 'Uma das principais universidades de Minas Gerais, com belo campus e arquitetura moderna.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    instagram: '@ufjf_oficial',
    address: 'Rua José Lourenço Kelmer, s/n - São Pedro',
    hours: 'Segunda a Sexta: 7h às 23h',
    phone: '(32) 2102-3911',
    category: 'education'
  },
  {
    id: 'estacao-ferroviaria',
    name: 'Estação Ferroviária',
    description: 'Marco histórico da cidade, representa importante período do desenvolvimento regional.',
    image: 'https://images.unsplash.com/photo-1555862124-94036092ab14',
    address: 'Praça da Estação, s/n - Centro',
    hours: 'Visitação externa livre',
    category: 'historical'
  },
  {
    id: 'centro-ciencias',
    name: 'Centro de Ciências da UFJF',
    description: 'Espaço interativo de divulgação científica com planetário e exposições.',
    image: 'https://images.unsplash.com/photo-1576319155264-99536e0be1ee',
    instagram: '@centrodecienciasufjf',
    address: 'Campus UFJF',
    hours: 'Terça a Domingo: 9h às 17h',
    phone: '(32) 2102-6913',
    category: 'education'
  },
  {
    id: 'estadio-mario-helenio',
    name: 'Estádio Municipal Radialista Mário Helênio',
    description: 'Principal estádio da cidade, palco de importantes eventos esportivos.',
    image: 'https://images.unsplash.com/photo-1521731978332-9e9e714bdd20',
    address: 'Av. Presidente Costa e Silva, 4000',
    hours: 'Conforme eventos',
    phone: '(32) 3690-7845',
    category: 'sports'
  },
  {
    id: 'ginasio-antonio-marcos',
    name: 'Ginásio Jornalista Antônio Marcos',
    description: 'Importante centro esportivo para eventos indoor e competições.',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900',
    address: 'Av. Brasil, 1800 - Centro',
    hours: 'Conforme eventos',
    phone: '(32) 3690-7850',
    category: 'sports'
  },
  {
    id: 'teatro-paschoal',
    name: 'Teatro Paschoal Carlos Magno',
    description: 'Teatro histórico que mantém viva a tradição cultural da cidade.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011',
    instagram: '@teatropaschoaljf',
    address: 'Rua Gilberto de Alencar, 1100',
    hours: 'Terça a Domingo: 14h às 22h',
    phone: '(32) 3690-7980',
    category: 'theater'
  },
  {
    id: 'museu-credito-real',
    name: 'Museu do Crédito Real',
    description: 'Museu que conta a história do sistema financeiro na região.',
    image: 'https://images.unsplash.com/photo-1572953109213-3be62398eb95',
    address: 'Av. Getúlio Vargas, 455 - Centro',
    hours: 'Segunda a Sexta: 10h às 16h',
    category: 'museum'
  },
  {
    id: 'pantaleone-arcuri',
    name: 'Companhia Industrial e Construtora Pantaleone Arcuri',
    description: 'Edifício histórico que representa o desenvolvimento industrial da cidade.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    address: 'Av. Getúlio Vargas, 1200 - Centro',
    hours: 'Visitação externa livre',
    category: 'historical'
  },
  {
    id: 'museu-ferroviario',
    name: 'Museu Ferroviário',
    description: 'Preserva a memória ferroviária da região com importante acervo histórico.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    address: 'Av. Brasil, 2001 - Centro',
    hours: 'Terça a Domingo: 9h às 17h',
    phone: '(32) 3690-7974',
    category: 'museum'
  },
  {
    id: 'centro-cultural-mascarenhas',
    name: 'Centro Cultural Bernardo Mascarenhas',
    description: 'Importante centro cultural instalado em antiga fábrica de tecidos.',
    image: 'https://images.unsplash.com/photo-1584633155097-19e7753dba76',
    instagram: '@ccbmjf',
    address: 'Av. Getúlio Vargas, 200 - Centro',
    hours: 'Segunda a Sábado: 9h às 21h',
    phone: '(32) 3690-7975',
    category: 'culture'
  },
  {
    id: 'castelinho-cemig',
    name: 'Castelinho da Cemig',
    description: 'Edificação histórica em estilo medieval, símbolo arquitetônico da cidade.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    address: 'Rua Espírito Santo, 1200 - Centro',
    hours: 'Visitação externa livre',
    category: 'historical'
  },
  {
    id: 'parque-municipal',
    name: 'Parque Municipal',
    description: 'Área verde no coração da cidade, ideal para lazer e prática de esportes.',
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914',
    address: 'Rua do Parque, s/n - Centro',
    hours: 'Diariamente: 6h às 18h',
    category: 'park'
  },
  {
    id: 'parque-lajinha',
    name: 'Parque da Lajinha',
    description: 'Maior parque urbano da cidade, com lagos, trilhas e área de lazer.',
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90',
    instagram: '@parquedalajinha',
    address: 'Av. Deusdedith Salgado, s/n',
    hours: 'Diariamente: 8h às 17h',
    phone: '(32) 3690-7976',
    category: 'park'
  },
  {
    id: 'associacao-comercial',
    name: 'Associação Comercial',
    description: 'Edifício histórico que representa o desenvolvimento comercial da cidade.',
    image: 'https://images.unsplash.com/photo-1552689486-f6773047d19f',
    address: 'Av. Rio Branco, 2000 - Centro',
    hours: 'Segunda a Sexta: 8h às 18h',
    phone: '(32) 3215-1500',
    category: 'historical'
  },
  {
    id: 'usina-marmelos',
    name: 'Usina Hidrelétrica de Marmelos',
    description: 'Primeira usina hidrelétrica da América do Sul, marco histórico da energia elétrica no Brasil.',
    image: 'https://images.unsplash.com/photo-1548616013-c6847c9a2663',
    address: 'Bairro Marmelos',
    hours: 'Visitação com agendamento',
    phone: '(32) 3690-7977',
    category: 'historical'
  }
];