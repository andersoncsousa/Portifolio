import { ana, carlos, joao, maria } from '@/assets';
import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineLock,
} from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  linkedin = <SlSocialLinkedin />,
  twitter = <SlSocialTwitter />;

export const navLinks = [
  { name: 'Sobre', url: '#about' },
  { name: 'Projetos', url: '#project' },
  { name: 'Contato', url: '#contact' },
];

export const about = {
  name: 'Caique Sousa',
  age: '27 anos',
  country: 'São Paulo/Brasil',
  profission: 'Desenvolvedor Front-end e Desenvolvedor de jogos',
  about:'Sou um desenvolvedor com mais de 8 anos de experiência na área web. Desde que comecei na área, desenvolvo jogos no meu tempo livre e isso sempre foi uma grande paixão. Busco constantemente me atualizar e evoluir profissionalmente, por isso, procuro me envolver em projetos desafiadores que me permitam aprender novas habilidades e adquirir novos conhecimentos. Participar de projetos que me tragam orgulho do resultado final é muito importante, pois isso me estimula a continuar evoluindo em minha carreira como desenvolvedor.',
}

export const resources = {
  title: 'Nossos Diferenciais',
  subtitle:
    'Conheça os recursos que nos diferenciam dos demais bancos e como estamos comprometidos em oferecer a você a melhor experiência financeira possível.',
  list: [
    {
      icon: locker,
      title: 'Segurança de ponta a ponta',
      subtitle:
        'Conte com a mais avançada tecnologia de segurança para total segurança dos seus dados.',
    },
    {
      icon: computer,
      title: 'Experiência de usuário inovadora',
      subtitle:
        'Estamos sempre empenhados em tornar a interação com nossos serviços o mais fácil e agradável possível.',
    },
    {
      icon: heart,
      title: 'Atendimento excepcional',
      subtitle:
        'Nossa equipe está pronta para ajudá-lo a solucionar qualquer dúvida ou problema,',
    },
  ],
};

export const testimonials = {
  title: 'O que nossos clientes estão dizendo',
  list: [
    {
      avatar: ana,
      name: 'Ana Silva',
      role: 'Advogada',
      comment:
        'Adorei a praticidade do aplicativo do DSF Bank. Tudo o que eu preciso está ali na tela do meu celular, sem complicação.',
    },
    {
      avatar: joao,
      name: 'João Santos',
      role: 'Empresário',
      comment:
        'O programa de pontos do DSF Bank é incrível! Com os pontos que acumulo nas minhas transações, posso fazer compras em lojas parceiras. É uma ótima maneira de economizar!',
    },
    {
      avatar: maria,
      name: 'Maria Ferreira',
      role: 'Estudante',
      comment:
        'Estava procurando por um banco digital seguro e confiável e encontrei o DSF Bank. Amei a facilidade de abrir uma conta e agora faço todas as minhas transações pelo aplicativo.',
    },
    {
      avatar: carlos,
      name: 'Carlos Gomes',
      role: 'Designer gráfico',
      comment:
        'Eu estava cansado de ter que ir até o banco toda semana para resolver minhas pendências. Com o DSF Bank, agora consigo fazer tudo pelo celular, de forma prática e segura.',
    },
  ],
};

export const footer = {
  description: 'Transformando vidas com tecnologia e inovação.',
  links: [
    { name: 'Perguntas frequentes', url: '#' },
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'Trabalhe Conosco', url: '#' },
    { name: 'Fale Conosco', url: '#' },
  ],
  contact: [
    'contato@dsfbank.com.br',
    '(00) 1234-5678',
    'Rua Fictícia, 1234, Bairro Fictício, Cidade Fictícia - Estado Fictício',
  ],
  copy: ' © Copyright CS Tech - Todos os direitos reservados - Desenvolvido por: CS Tech',
  social: [
    { component: instagram, url: '#' },
    { component: twitter, url: '#' },
    { component: linkedin, url: '#' },
  ],
};
