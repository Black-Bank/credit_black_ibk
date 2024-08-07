import { CircleContact, ContactCard, FooterCard, Item } from './footer.styles';
import { Container, FooterContainer, Logo } from './footer.styles';
import { IoMdMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import logo from '../../assets/logo.svg';
import { Flex } from 'components/global.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo>
          <div>
            <img src={logo} alt="logo-creditblack" />
          </div>
          <h2>Credit Black</h2>
        </Logo>
        <ul>
          <li>Home</li>
          <li>Carreiras</li>
          <li>Sobre</li>
          <li>Segurança</li>
        </ul>
        <ContactCard>
          <Item>
            <IoMdMail />
            <p>Email</p>
          </Item>
          <Item>
            <FaPhoneAlt />
            <p>Phone</p>
          </Item>
          <Item>
            <IoLocationSharp />
            <p>Cidade</p>
          </Item>
        </ContactCard>
        <FooterCard>
          <Flex $gap={1}>
            <a href="#" target="_blank" rel="noreferrer">
              <CircleContact>
                <AiFillInstagram />
              </CircleContact>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <CircleContact>
                <FaLinkedin />
              </CircleContact>
            </a>
          </Flex>
          <p>Credit Black todos os direitos reservados</p>
          <p>Política de privacidade | Termos de serviço</p>
        </FooterCard>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
