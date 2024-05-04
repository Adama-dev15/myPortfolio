import frond_1 from "@/images/portfolio/frondend.jpg";
import frond_2 from "@/images/portfolio/canva-img.webp";
import back from "@/images/portfolio/backend.png";
import design_1 from "@/images/portfolio/design.jpg";
import design_2 from "@/images/portfolio/image-illus.jpg";
import mobil from "@/images/portfolio/mobile_2.jpg";
const DataPorfolio = {
  portfolio: [
    {
      id: 1,
      name: "FrontEnd Developer",
      description:
        "Façonne l'expérience utilisateur en développant l'interface visible et interactive des sites web.",
      image: frond_1,
    },
    {
      id: 2,
      name: "Web Developer",
      description:
        " Transforme les concepts en réalité numérique, créant des sites web interactifs et performants.",
      image: design_2,
    },
    {
      id: 3,
      name: "Apps Developer",
      description:
        "Programme des applications mobiles innovantes, alliant performance et convivialité.",
      image: mobil,
    },
    {
      id: 4,
      name: "Web Designer",
      description:
        "Crée des expériences visuelles captivantes pour les sites web, harmonisant esthétique et fonctionnalité.",
      image: design_1,
    },
    {
      id: 6,
      name: "BackEnd Developer",
      description:
        "Développe les fonctionnalités invisibles qui soutiennent et sécurisent les sites web et les applications.",
      image: back,
    },
    {
      id: 6,
      name: "FrontEnd Developer",
      description:
        "Façonne l'expérience utilisateur en développant l'interface visible et interactive des sites web.",
      image: frond_2,
    },
  ],
};
export default DataPorfolio;
