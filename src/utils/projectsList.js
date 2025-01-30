import Vote from "../assets/Work1.png";
import CTM1 from "../assets/CTM1.png";
import VN from "../assets/Centro.png";
import Caraveli from "../assets/Caraveli.png";
import App from "../assets/App.png";

const projectsList = [
  {
    title: "Centro Virtual de Negocios APP",
    subTitle: "Aplicación Multiplataforma",
    description:
      "Centro Virtual de Negocios APP es una aplicación multiplataforma que permite a los usuarios acceder a los servicios de la empresa, parques comerciales, parques empresariales mediante el consumi de un API, además cuenta con un sistema de registro de usuarios y un sistema de chat en tiempo real para la comunicación entre empresas para establecer Networking.",
    image: App,
    technologies: [
      "Php",
      "Laravel",
      "Mysql",
      "Hostinger",
      "Flutter",
      "Dart",
      "Git",
      "FireBase Notification",
    ],
    github: "#",
    live: "https://web.virtualbusinessc.com",
  },
  {
    title: "Centro Virtual de Negocios",
    subTitle: "Sitio Web",
    description:
      "Centro Virtual de Negocios es un sitio web donde la empresa muestra información de sus servicios, parques comerciales, parques empresariales mediante el consumi de un API, además cuenta con un sistema de registro de usuarios y un sistema de chat en tiempo real para la atención al cliente.",
    image: VN,
    technologies: [
      "Php",
      "Laravel",
      "Mysql",
      "Hostinger",
      "Tailwind Css",
      "JavaScript",
      "Git",
      "Diaglogflow",
    ],
    github: "#",
    live: "https://networking.virtualbusinessc.com",
  },
  {
    title: "Municipalidad Pronvicial de Caravelí",
    subTitle: "Sitio Web",
    description:
      "Municipalidad Pronvicial de Caravelí es un sitio web donde la municipalidad muestra información de sus servicios, proyectos, noticias, eventos, mediante el consumi de un API, además cuenta con un sistema de mesa de partes virtual, registro de reclamaciones, registro de denuncias y un sistema administrativo para la gestión de los contenidos.",
    image: Caraveli,
    technologies: [
      "Php",
      "Laravel",
      "Mysql",
      "Tailwind Css",
      "JavaScript",
      "Git",
    ],
    github: "#",
    live: "https://networking.virtualbusinessc.com",
  },
  {
    title: "Sección 1 CTM",
    subTitle: "Sitio Web",
    description:
      "Sección 1 CTM es un sistio web que permite al sindicato de trabajadores de Mexico compartir información de interés para sus afiliados. El sitio web cuenta con un sistema de Beneficios para los afiliados mediante un inicio de sesión. Además podrán registrar sus cupones y ver los beneficios que les corresponde.",
    image: CTM1,
    technologies: [
      "Php",
      "React",
      "Tailwind Css",
      "Vercel",
      "JavaScript",
      "Next Js",
      "Git",
    ],
    github: "#",
    live: "https://www.ctmseccion1.com",
  },
  {
    title: "VotacionElectoral",
    subTitle: "Onpe",
    description:
      "VotaciónElectoral es una plataforma web que agiliza el registro y seguimiento de resultados electorales por mesa de sufragio en Tacna. Ofrecemos informes claros sobre los ganadores a nivel de distrito, provincia y región, fomentando la transparencia y la comprensión de las preferencias electorales en distintos niveles geográficos.",
    image: Vote,
    technologies: ["Php", "Html", "Css", "Myqsl", "000webhost", "JavaScript"],
    github: "https://github.com/DDamian98/Votacion",
    live: "https://votacione.000webhostapp.com/php/Views/Reportes/",
  },
];

export default projectsList;
