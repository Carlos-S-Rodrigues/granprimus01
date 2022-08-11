import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconsLink,
  SocialIcons,
  SocialIcon
} from './Footer.elements'

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta
          molestiae assumenda voluptatem impedit deserunt iste dolore. Esse modi
          illum distinctio error harum nam ut. Nam doloribus nobis id
          accusantium.
          <FooterSubText>
            Ainda tem alguma dúvida, envie uma mensagem com seu telefone e
            e-mail, entraremos em contato assim que possível.
          </FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Seu email" />
            <FormInput
              name="tel"
              type="text"
              placeholder="Seu Telefone (22) 99999-9999"
            />
            <FormInput
              name="text"
              type="text-area"
              placeholder="Faça sua pergunta"
            />
            <Button fontBig> Enviar Mensagem</Button>
          </Form>
        </FooterSubHeading>
      </FooterSubscription>
      {/* <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle> Sobre</FooterLinksTitle>
            <FooterLink to="/sign-up">teste</FooterLink>
            <FooterLink to="/">testes</FooterLink>
            <FooterLink to="/">teste</FooterLink>
            <FooterLink to="/">teste</FooterLink>
            <FooterLink to="/">teste</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
  </FooterLinksContainer> */}
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Gran
          </SocialLogo>
          <WebsiteRights>Granprimus 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconsLink href="#" target="_blank" aria-label="Instagram" />
            <FaInstagram />
            <SocialIconsLink href="#" target="_blank" aria-label="Facebook" />
            <FaFacebook />
            <SocialIconsLink href="#" target="_blank" aria-label="Youtube" />
            <FaYoutube />
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
