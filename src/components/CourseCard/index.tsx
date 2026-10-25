import React from 'react';
import Matematica from 'src/assets/images/icon-matematica-20px.svg';
import BannerAva from 'src/assets/images/banner-ava.png';
import { Container, Content, Tag } from './styles';

const CouseCard: React.FC = () => (
  <Container bgImage={BannerAva}>
    <Tag>
      <img src={Matematica} alt="matemática" />
      <p>MATEMÁTICA</p>
    </Tag>
    <Content>
      <div>
        <h1>Matemática para a Precisão: Medidas e Escalas na Metalurgia</h1>
      </div>
      <div>
        <p>
          Aplicação de grandezas, proporções e escalas em processos de corte,
          função e usinagem.
        </p>
      </div>
    </Content>
  </Container>
);

export default CouseCard;
