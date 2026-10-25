import React, { useEffect } from 'react';
import SesiIndustriaPrimary from 'src/assets/images/logo-sesi-industria-primary.svg';
import CertificacaoBege from 'src/assets/images/01-certificacao-bege.svg';
import Carousel from '@components/Carousel';
import ProfessoresBege from 'src/assets/images/02-professores-bege.svg';
import SuporteBege from 'src/assets/images/03-suporte-bege.svg';
import FlexibilidadeBege from 'src/assets/images/04-flexibilidade-bege.svg';

import VideoThumb from 'src/assets/images/video-thumb.png';
import SesiIndustriaWhite from 'src/assets/images/logo-sesi-industria-white.svg';
import LogoSesi from 'src/assets/images/logo-sesi.svg';
import LogoLinkedin from 'src/assets/images/icon-linkedIn-24px.svg';
import LogoInstagram from 'src/assets/images/icon-instagram-24px.svg';
import LogoFacebook from 'src/assets/images/icon-facebook-24px.svg';
import Matematica from 'src/assets/images/icon-matematica-20px.svg';
import CertificacaoPreto from 'src/assets/images/01-certificacao-preto.svg';
import Calendario from 'src/assets/images/calendario.svg';
import TestimonalCard from '@components/TestimonialCard';
import { Tag } from '@components/CourseCard/styles';
import {
  Bottom,
  Column,
  Container,
  DetailsSession,
  Footer,
  FooterLogo,
  Header,
  Info,
  InfoSession,
  Navbar,
  Session,
  StatsSession,
  TestimonialsSession,
  Top,
  VideoSession,
} from './styles';

const AboutCourse: React.FC = () => {
  useEffect(() => {
    document.title = 'Curso';
  }, []);

  return (
    <Container>
      <Header>
        <img src={SesiIndustriaPrimary} alt="logo" />
        <Navbar>
          <div>
            <a href="/">Início</a>
          </div>
          <div>
            <a href="/">Cursos</a>
          </div>
          <div>
            <a href="/">Sobre</a>
          </div>
          <div>
            <button>Área do aluno</button>
          </div>
        </Navbar>
      </Header>
      <VideoSession>
        <div>
          <Tag>
            <img src={Matematica} alt="matemática" />
            <p>MATEMÁTICA</p>
          </Tag>
          <div>
            <h1>Matemática para a Precisão: Medidas e Escalas na Metalurgia</h1>
          </div>
          <div>
            <Info>
              <img src={Calendario} alt="Início" />
              <p>
                Início do curso:
                <span> 05/01/2026</span>
              </p>
            </Info>
            <Info>
              <img src={CertificacaoPreto} alt="Certificação" />
              <p>
                Certificação:<span> SESI</span>
              </p>
            </Info>
            <div>
              <button>Matricule-se</button>
            </div>
          </div>
        </div>

        <div>
          <img src={VideoThumb} alt="Pronto para transformar sua carreira?" />
        </div>
      </VideoSession>
      <DetailsSession>
        <div>
          <img src={CertificacaoBege} alt="Certificação SESI" />
          <h1>Certificação SESI</h1>
          <p>
            Cursos com a melhor certificação do mercado industrial reconhecidos
            pelo SESI.
          </p>
        </div>
        <div>
          <img src={ProfessoresBege} alt="Professores especialistas" />
          <h1>Professores especialistas</h1>
          <p>
            Contamos com professores reconhecidos por sua excelência no mercado.
          </p>
        </div>
        <div>
          <img src={SuporteBege} alt="Suporte contínuo" />
          <h1>Suporte contínuo</h1>
          <p>
            Você não está sozinho!
            <br />
            Acompanhamento online durante todo o curso
          </p>
        </div>
        <div>
          <img src={FlexibilidadeBege} alt="Flexibilidade" />
          <h1>Flexibilidade</h1>
          <p>
            Turmas presenciais e online com horários que se adaptam à sua
            rotina.
          </p>
        </div>
      </DetailsSession>
      <InfoSession>
        <Column>
          <h1>Sobre o curso</h1>
          <p>
            Explore nosso curso de Matemética para a Precisão: Medidas e Escalas
            na Metalurgia, perfeito para quem deseja se destacar nesse campo!
            Este programa abrangente foi desenvolvido para capacitar
            profissionais com as habilidades e conhecimentos fundamentais para
            garantir medições precisas e eficientes no ambiente metalúrgico.
          </p>
        </Column>
        <Column>
          <StatsSession>
            <div>
              <h1>Módulos</h1>
              <p>+</p>
            </div>
            <div>
              <h1>Aulas online e avaliações</h1>
              <p>+</p>
            </div>
            <div>
              <h1>Dúvidas frequentes</h1>
              <p>+</p>
            </div>
          </StatsSession>
        </Column>
      </InfoSession>
      <TestimonialsSession>
        <div>
          <p>DEPOIMENTOS</p>
          <h1>Quem fez recomenda</h1>
        </div>
        <Carousel
          // eslint-disable-next-line react/no-unstable-nested-components
          card={() => (
            <TestimonalCard background_color="#fff" text_color="auto" />
          )}
        />
      </TestimonialsSession>
      <Session>
        <p>PRECISA DE AJUDA PARA DECIDIR?</p>
        <h1>Fale com a gente</h1>
        <button>Mandar uma mensagem</button>
      </Session>
      <Footer>
        <Top>
          <FooterLogo>
            <img src={SesiIndustriaWhite} alt="logo" />
            <p>contato@sesindustria.com.br</p>
            <p>Av. Paulista, 1313</p>
          </FooterLogo>
          <div>
            <h1>NAVEGAÇÃO</h1>
            <p>Início</p>
            <p>Certificação</p>
            <p>Cursos</p>
            <p>Sobre</p>
            <p>Blog</p>
          </div>
          <div>
            <h1>CURSOS POPULARES</h1>
            <p>Cultura Organizacional</p>
            <p>Ferramentas Google para Produtividade</p>
            <p>Excel Básico ao Avançado</p>
            <p>Trabalho em Equipe e Colaboração</p>
            <p>Gestão do Tempo e Produtividade</p>
            <p>Comunicação Assertiva</p>
            <p>Inteligência Emocional no Trabalho</p>
          </div>
          <div>
            <h1>SUPORTE</h1>
            <p>Termos de Uso</p>
            <p>Política de Privacidade</p>
            <p>Trabalhe Conosco</p>
            <p>Fale Conosco</p>
            <p>Central de Ajuda</p>
          </div>
        </Top>
        <Bottom>
          <div>
            <img src={LogoSesi} alt="Sesi" />
            <p>Todos os direitos reservados</p>
          </div>
          <div>
            <img src={LogoLinkedin} alt="Linkedin" />
            <img src={LogoInstagram} alt="Instagram" />
            <img src={LogoFacebook} alt="Facebook" />
          </div>
        </Bottom>
      </Footer>
    </Container>
  );
};

export default AboutCourse;
