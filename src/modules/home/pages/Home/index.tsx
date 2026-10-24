import React, { useEffect } from 'react';
import SesiIndustriaPrimary from 'src/assets/images/logo-sesi-industria-primary.svg';
import CertificacaoRed from 'src/assets/images/01-certificacao-red.svg';
import { Slider } from '@chakra-ui/react';
import Carousel from '@components/Carousel';
import ProfessoresRed from 'src/assets/images/02-professores-red.svg';
import SuporteRed from 'src/assets/images/03-suporte-red.svg';
import CouseCard from '@components/CourseCard';
import TestimonalCard from '@components/TestimonialCard';
import {
  BannerSession,
  Column,
  Container,
  CoursesSession,
  DetailsSession,
  Header,
  InfoSession,
  Navbar,
  Session,
  StatsSession,
  TestimonialsSession,
  Title,
} from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <Container>
      <BannerSession>
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
        <Session>
          <Title>
            <h1>Impulsione sua carreira na indústria</h1>
            <p>
              Amplie seus conhecimentos com excelência na melhor plataforma de
              estudos da Indústria brasileira
            </p>
            <button>Conhecer cursos</button>
          </Title>
        </Session>
      </BannerSession>

      <CoursesSession>
        <h1>Principais cursos</h1>
        <Slider display="flex">
          <Carousel card={CouseCard} />
        </Slider>
        <div>
          <button>Ver todos os cursos</button>
        </div>
      </CoursesSession>
      <InfoSession>
        <Column>
          <h1>Impacto transformador</h1>
          <p>
            Resultados que demonstram o sucesso da nossa metodologia de
            capacitação contínua para a indústria
          </p>
        </Column>
        <Column>
          <StatsSession>
            <div>
              <h1>25.000+</h1>
              <p>Profissionais capacitados</p>
            </div>
            <div>
              <h1>500+</h1>
              <p>Empresas parceiras</p>
            </div>
            <div>
              <h1>4.8/5</h1>
              <p>Avaliação média</p>
            </div>
            <div>
              <h1>25M+</h1>
              <p>Horas de capacitação</p>
            </div>
          </StatsSession>
          <DetailsSession>
            <div>
              <img src={CertificacaoRed} alt="Certificação SESI" />
              <h1>Certificação SESI</h1>
              <p>
                Cursos com a melhor certificação do mercado industrial
                reconhecidos pelo SESI.
              </p>
            </div>
            <div>
              <img src={ProfessoresRed} alt="Professores especialistas" />
              <h1>Professores especialistas</h1>
              <p>
                Contamos com professores reconhecidos por sua excelência no
                mercado.
              </p>
            </div>
            <div>
              <img src={SuporteRed} alt="Suporte contínuo" />
              <h1>Suporte contínuo</h1>
              <p>
                Você não está sozinho!
                <br />
                Acompanhamento online durante todo o curso
              </p>
            </div>
          </DetailsSession>
        </Column>
      </InfoSession>
      <TestimonialsSession>
        <div>
          <p>DEPOIMENTOS</p>
          <h1>Quem fez recomenda</h1>
        </div>
        <Carousel card={TestimonalCard} />
      </TestimonialsSession>
      <Session>
        <div>
          <h1>Pronto para transformar sua carreira?</h1>
          <p>
            Junte-se a milhares de profissionais que já estão transformando a
            indústria através dos nossos cursos. Invista no futuro hoje mesmo!
          </p>
          <button>Matricule-se</button>
        </div>
        <div>
          <h1>Vídeo</h1>
        </div>
      </Session>
      <Session>
        <div>
          <div>
            <h1>LOGO SESI + INDÚSTRIA</h1>
            <p>contato@sesindustria.com.br</p>
            <p>Av. Paulista, 1313</p>
          </div>
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
        </div>
        <div>
          <div>
            <h1>logo sesi todos os direitos reservados</h1>
          </div>
          <div>
            <h1>redes sociais</h1>
          </div>
        </div>
      </Session>
    </Container>
  );
};

export default Home;
