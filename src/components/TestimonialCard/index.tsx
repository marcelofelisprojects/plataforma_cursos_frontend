import React from 'react';
import { Container } from './styles';

interface IProps {
  text_color: string;
  background_color: string;
}

const TestimonalCard: React.FC<IProps> = ({ text_color, background_color }) => (
  <Container background={background_color} color={text_color}>
    <div>
      <p>
        A experência do curso foi incrível! As aulas foram muito bem
        estruturadas e o cronograma foi cuidadosamente planejado, facilitando
        muito o aprendizado.
      </p>
    </div>
    <div>
      <h2>Lucas Pereira</h2>
      <p>Analista na Empresa X</p>
    </div>
  </Container>
);

export default TestimonalCard;
