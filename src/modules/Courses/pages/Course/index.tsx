import React, { useEffect } from 'react';
import BannerAva from 'src/assets/images/banner-ava.png';
import ArrowNavigation from 'src/assets/images/arrow-navigation.svg';
import Play from 'src/assets/images/play.svg';
import CheckFilled from 'src/assets/images/check-filled.svg';
import Check from 'src/assets/images/check.svg';
import ProgressBar from '@components/ProgressBar';
import {
  Banner,
  Container,
  Content,
  Module,
  Modules,
  Nav,
  Search,
  SideMenu,
  Text,
  Title,
} from './styles';

const Course: React.FC = () => {
  useEffect(() => {
    document.title = 'Curso';
  }, []);

  return (
    <Container>
      <SideMenu>
        <Nav>
          <img src={ArrowNavigation} alt="Voltar" />
        </Nav>
        <Title>
          <p>CERTIFICAÇÃO</p>
          <h1>Matemática para a Precisão: Medidas e Escalas na Metalurgia</h1>
        </Title>

        <ProgressBar />

        <Search>
          <input />
        </Search>
        <Modules>
          <Module className="opened">
            <h1>1. Introdução</h1>
            <div>
              <img src={Play} alt="Play" />
              <p>1.1 Introdução</p>
            </div>
            <div>
              <img src={CheckFilled} alt="Play" />
              <p>1.1 Introdução</p>
            </div>
            <div>
              <img src={Check} alt="Check" />
              <p>1.1 Introdução</p>
            </div>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
          <Module>
            <h1>2. Módulo 1</h1>
          </Module>
        </Modules>
      </SideMenu>
      <Content>
        <Banner>
          <img src={BannerAva} alt="Banner" />
        </Banner>
        <Text>
          <h1>Boas práticas</h1>
          <p>
            Se você está interessado em se aprofundar em Matemática para a
            Precisão, especialmente em Medidas e Escalas na Metalurgia, aqui
            estão algumas dicas para maximizar sua experiência online. Primeiro,
            crie um espaço de estudo livre de distrações, onde você possa se
            concentrar totalmente no material.
          </p>
          <p>
            Estabeleça uma rotina de estudos, reservando horários específicos
            para assistir às aulas e realizar as atividades. Além disso,
            interaja com seus colegas e instrutores nos fóruns e chats
            disponíveis, pois isso enriquece o aprendizado e ajuda a esclarecer
            dúvidas. Não se esqueça de revisar o conteúdo regularmente e aplicar
            os conhecimentos em situações práticas sempre que possível.
          </p>
          <p>
            Por fim, mantenha-se atualizado sobre as novas técnicas e normas em
            medidas e escalas na metalurgia, já que essa área está sempre
            evoluindo. Com dedicação e as estratégias corretas, você estará
            preparado para se destacar no setor!
          </p>
        </Text>
        <Text>
          <h1>Recomendações</h1>
          <p>
            Se você está interessado em se aprofundar na matemática aplicada à
            metalurgia, aqui estão algumas dicas valiosas. Primeiro, escolha um
            curso que ofereça uma abordagem prática, com aulas que incluam
            exercícios e estudos de caso. Isso ajudará a entender como aplicar
            medidas e escalas na prática. Além disso, verifique se o curso é
            reconhecido por instituições relevantes, pois isso pode impactar sua
            formação e carreira.
          </p>
          <p>
            Outro aspecto importante é a experiência dos instrutores. Procure
            cursos que tenham profissionais com experiência no setor, pois eles
            podem compartilhar insights valiosos que vão além da teoria.
          </p>
          <p>
            Considere também a carga horária e a flexibilidade do curso. Se você
            trabalha, um curso que ofereça aulas noturnas ou aos finais de
            semana pode ser mais conveniente.
          </p>
          <p>
            Por fim, não se esqueça de se conectar com outros alunos e
            profissionais da área. Isso pode abrir portas e proporcionar um
            aprendizado ainda mais enriquecedor. Investir em um bom curso de
            matemática para a metalurgia é essencial para garantir precisão e
            eficiência no trabalho.
          </p>
        </Text>
      </Content>
    </Container>
  );
};

export default Course;
