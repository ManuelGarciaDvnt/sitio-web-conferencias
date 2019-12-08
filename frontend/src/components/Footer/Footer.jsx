import React from 'react';
import './Footer.css';
import SocialBar from '../SocialBar/SocialBar';

const Footer = () => {
    return (
      <footer className="site__Footer">
        <div className="container">
          <div className="Footer__about-us">
            <h3 className="mb-2">
              Sobre<span>Nosotros</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus, est eget semper pulvinar, felis nisl accumsan neque, nec
              hendrerit odio ex ut ante. Integer et fringilla augue. Aliquam
              vulputate orci vitae ante tempor, non vestibulum nulla tristique.
              Nunc suscipit dictum egestas. Cras iaculis, sapien in dictum
              dictum, est enim bibendum ex, eget varius est sapien nec ligula.
              Vivamus fermentum hendrerit enim at sagittis. Duis tincidunt in
              metus id pretium. Donec at sem diam
            </p>
          </div>
          <div className="Footer__last-tweets">
            <h3 className="mb-2">
              Ultimos<span>Tweets</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus, est eget semper pulvinar, felis nisl accumsan neque, nec
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus, est eget semper pulvinar, felis nisl accumsan neque, nec
            </p>
          </div>
          <div className="Footer__social-network">
            <h3 className="mb-2">Redes<span>Sociales</span></h3>
            <SocialBar/>
          </div>
        </div>
        <div className="Footer__copy">
            Todos los derechos reservados - ManuelDev
        </div>
      </footer>
    );
}

export default Footer;
