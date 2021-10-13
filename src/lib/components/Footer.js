import React from "react";

import "../styles/styles.css";

const Footer = (props) => {
  return (
    <footer className="bg-gray-800">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300">{props.texto}</p>
        <ul className="inline-flex space-x-6">
          {props.socialLinks.map(({ image, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <img className="h-6 w-6" src={image} alt={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
