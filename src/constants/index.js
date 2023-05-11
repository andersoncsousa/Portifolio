import { ana, carlos, joao, maria } from "@/assets";
import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialGithub,
} from "react-icons/sl";

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  linkedin = <SlSocialLinkedin />,
  twitter = <SlSocialTwitter />,
  github = <SlSocialGithub />,
  whatsapp = <AiOutlineWhatsApp />,
  email = <AiOutlineMail />;

export const navLinks = [
  { name: "Sobre", url: "#about" },
  { name: "Projetos", url: "#project" },
  { name: "Contato", url: "#contact" },
];

export const about = {
  name: "Caique Sousa",
  age: "27 anos",
  country: "São Paulo/Brasil",
  profission: "Desenvolvedor Front-end e Desenvolvedor de jogos",
  about:
    "Sou um desenvolvedor com mais de 7 anos de experiência na área web. Desde que comecei na área, desenvolvo jogos no meu tempo livre e isso sempre foi uma grande paixão. Busco constantemente me atualizar e evoluir profissionalmente, por isso, procuro me envolver em projetos desafiadores que me permitam aprender novas habilidades e adquirir novos conhecimentos. Participar de projetos que me tragam orgulho do resultado final é muito importante, pois isso me estimula a continuar evoluindo em minha carreira como desenvolvedor.",
};

export const projectLista = [
  {
    title: "Template bank",
    url: "https://template-bank-iota.vercel.app/",
    description: "template de banco com transição animada e objetos 3D",
    skills: "REACT JS • NEXT JS • SASS • JS",
  },
  {
    title: "Template bank2",
    url: "https://template-bank-iota.vercel.app/",
    description: "template de banco com transição animada e objetos 3D",
    habilits: [
      { name: "REACT JS", url: "#about" },
      { name: "NEXT JS", url: "#project" },
      { name: "JS", url: "#contact" },
    ],
  },
  {
    title: "Template bank3",
    url: "https://template-bank-iota.vercel.app/",
    description: "template de banco com transição animada e objetos 3D",
    habilits: [
      { name: "REACT JS", url: "#about" },
      { name: "NEXT JS", url: "#project" },
      { name: "JS", url: "#contact" },
    ],
  },
  {
    title: "Template bank4",
    url: "https://template-bank-iota.vercel.app/",
    description: "template de banco com transição animada e objetos 3D",
    skills: [{ skill: "REACT JS" }, { skill2: "NEXT JS" }, { skill3: "JS" }],
  },
];

export const project = [
  {
    title: "Template bank",
    url: "https://template-bank-iota.vercel.app/",
    description: "template de banco com transição animada e objetos 3D",
    skills: "React Js • Next Js • Sass • Js • Frame Motion • Three Js",
    // skills: [
    //   {
    //     skill: "REACT JS",
    //   },
    //   {
    //     skill: "NEXT JS",
    //   },
    //   {
    //     skill: "JS",
    //   },
    //   {
    //     skill: "Frame Motion",
    //   },
    //   {
    //     skill: "Three JS",
    //   },
    // ],
  },
  {
    title: "Rajadu Store",
    url: "https://www.rajadu.com.br/",
    description: "Ecommerce de acessórios e moda streetwear",
	skills : "Html • Js • Css • Loja Integrada",
  },
  {
    title: "B3",
    url: "https://www.acervob3.com.br/",
    description: "Site de consulta de documentos da B3",
	skills : "React Js • Next Js • Sass • Js",
  },
  {
    title: "Safita Store",
    url: "https://www.safitavestuario.com.br/",
    description: "Ecommerce da marca Safita de moda streetwear",
	skills : "Html • Js • Css • Loja Integrada",
  },
  {
    title: "Funnelever Landing page",
    url: "https://landing-page-nextjs-five.vercel.app/home",
    description: "Landing page de apresentação da empresa",
	skills : "React Js • Next Js • Sass • Js",
  },
  {
    title: "Plus Up Landing page",
    url: "https://plus-up.vercel.app/",
    description: "Landing page de apresentação da empresa",
	skills : "React Js • Next Js • Sass • Js",
  },
  {
    title: "Login Page",
    url: "https://login-nextjs-steel.vercel.app/login",
    description: "Pagina de login com transição animada",
	skills : "React Js • Next Js • Sass • Js",
  },
  {
    title: "Clone Dropbox",
    skills1: "REACT JS",
    skills2: "NEXT JS",
    skills3: "JS",
    url: "https://dropbox-clone-cs.netlify.app/",
    description: "Clone layout Dropbox",
	skills : "React Js • Next Js • Sass • Js",
  },
  {
    title: "Simples & Natural",
    url: "http://www.simplesenatural.com.br/",
    description: "Site de loja de produtos naturais",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Portifolio de Moda",
    url: "https://caiqueira-portifolio.netlify.app/",
    description: "Portifolio de Modelo (Em Construção)",
	skills : "Html • Js • Css • Webpack",
  },
  {
    title: "Gerador de QR Code",
    url: "https://qr-code-cs-tech.netlify.app/",
    description: "Site Gerador de QR Code",
	skills : "Vue Js • Css • Js",
  },
  {
    title: "Jantar Unilever Hellmanns",
    url: "https://jantar-unilever-hellmanns.netlify.app/unilever",
    description: "Jantar Unilever Hellmanns 2020 Digital, evento gastronômico",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Brasa na Mesa",
    url: "https://brasa-na-mesa-digital-2021.netlify.app/",
    description: "Brasa na Mesa Digital 2021, evento gastronômico",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Cozinha de Migrantes",
    url: "https://cozinha-de-imigrantes-cs.netlify.app/",
    description: "Site do livro Cozinha de Imigrantes",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Clone Pinterest",
    url: "https://clone-pinterest-cs-tech.netlify.app/",
    description: "Clone layout Pinterest",
	skills : "Html • Js • Css • Webpack",
  },
  {
    title: "Mesa Rio",
    url: "https://mesa-rio-2020-cs.netlify.app/",
    description: "Mesa Rio Digital 2020, evento gastronômico",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Mesa Regeneração",
    url: "https://mesa-regeneracao-2020.netlify.app/",
    description: "Mesa Regeneração 2020, evento gastronômico",
	skills : "Html • Js • Sass • Webpack",
  },
  {
    title: "Fazenda Mangalo",
    url: "https://www.fazendamangalo.com.br/",
    description: "Site da Fazenda Mangalo",
	skills : "Html • Google Site • Sass",
  },
];

export const resources = {
  title: "Nossos Diferenciais",
  subtitle:
    "Conheça os recursos que nos diferenciam dos demais bancos e como estamos comprometidos em oferecer a você a melhor experiência financeira possível.",
  list: [
    {
      icon: locker,
      title: "Segurança de ponta a ponta",
      subtitle:
        "Conte com a mais avançada tecnologia de segurança para total segurança dos seus dados.",
    },
    {
      icon: computer,
      title: "Experiência de usuário inovadora",
      subtitle:
        "Estamos sempre empenhados em tornar a interação com nossos serviços o mais fácil e agradável possível.",
    },
    {
      icon: heart,
      title: "Atendimento excepcional",
      subtitle:
        "Nossa equipe está pronta para ajudá-lo a solucionar qualquer dúvida ou problema,",
    },
  ],
};

export const testimonials = {
  title: "O que nossos clientes estão dizendo",
  list: [
    {
      avatar: ana,
      name: "Ana Silva",
      role: "Advogada",
      comment:
        "Adorei a praticidade do aplicativo do DSF Bank. Tudo o que eu preciso está ali na tela do meu celular, sem complicação.",
    },
    {
      avatar: joao,
      name: "João Santos",
      role: "Empresário",
      comment:
        "O programa de pontos do DSF Bank é incrível! Com os pontos que acumulo nas minhas transações, posso fazer compras em lojas parceiras. É uma ótima maneira de economizar!",
    },
    {
      avatar: maria,
      name: "Maria Ferreira",
      role: "Estudante",
      comment:
        "Estava procurando por um banco digital seguro e confiável e encontrei o DSF Bank. Amei a facilidade de abrir uma conta e agora faço todas as minhas transações pelo aplicativo.",
    },
    {
      avatar: carlos,
      name: "Carlos Gomes",
      role: "Designer gráfico",
      comment:
        "Eu estava cansado de ter que ir até o banco toda semana para resolver minhas pendências. Com o DSF Bank, agora consigo fazer tudo pelo celular, de forma prática e segura.",
    },
  ],
};

export const footer = {
  description: "Transformando vidas com tecnologia e inovação.",
  links: [
    { name: "Perguntas frequentes", url: "#" },
    { name: "Política de Privacidade", url: "#" },
    { name: "Termos de Uso", url: "#" },
    { name: "Trabalhe Conosco", url: "#" },
    { name: "Fale Conosco", url: "#" },
  ],
  contact: [
    "contato@dsfbank.com.br",
    "(00) 1234-5678",
    "Rua Fictícia, 1234, Bairro Fictício, Cidade Fictícia - Estado Fictício",
  ],
  copy: " © Copyright CS Tech - Todos os direitos reservados - Desenvolvido por: CS Tech",
  social: [
    {
      name: "Linkedin",
      component: linkedin,
      url: "https://www.linkedin.com/in/caique-sousa-444776148/",
    },
    {
      name: "Github",
      component: github,
      url: "https://github.com/andersoncsousa",
    },
    {
      name: "Whatsapp",
      component: whatsapp,
      url: "https://wa.me/5511989770287",
    },
    {
      name: "Instagram",
      component: instagram,
      url: "https://www.instagram.com/caiqueira/",
    },
    {
      name: "Email",
      component: email,
      url: "mailto:caique_sousa@outlook.com.br",
    },
  ],
};
