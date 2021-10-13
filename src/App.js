import "./App.css";
import "./style.css";

import { Footer, Navbar } from "./lib";

import image from "./svg/telegram.svg";
import logosmall from "./images/logo1.jpg";
import logobig from "./images/logo3.jpg";

const socialLinks = [
  {
    image: image,
    href: "https://t.me/m4ss1ck",
    title: "Telegram",
  },
];
const texto = "Probando el pie de página";

const enlaces = [
  { name: "Blog", href: "/blog", current: true },
  { name: "Noticias", href: "/noticias", current: false },
  { name: "Proyectos", href: "/proyectos", current: false },
  { name: "Calendario", href: "/calendario", current: false },
];

const logo = { src: logobig, src_small: logosmall, alt: "Logo" };

const profiles = {
  src: logosmall,
  alt: "Foto de perfil",
  menu: [
    { link: "/bio", name: "Quien soy" },
    { link: "/obras", name: "Que hago" },
    { link: "/acerca", name: "Que es esto" },
  ],
};

function App() {
  return (
    <div className="App">
      <Navbar logo={logo} profile={profiles} navigation={enlaces} />
      <h1 className="text-xl text-red-600 text-center uppercase">Título</h1>
      <p className="text-md text-gray-800 text-center">Algo de texto</p>
      <Footer socialLinks={socialLinks} texto={texto} />
    </div>
  );
}

export default App;
