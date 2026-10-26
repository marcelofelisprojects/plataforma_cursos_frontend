import React from 'react';
import { ITestimonial } from '@modules/Courses/interfaces/ITestimonial';
import { Container } from './styles';

interface IProps {
  text_color: string;
  background_color: string;
  testimonial: ITestimonial;
}

const TestimonalCard: React.FC<IProps> = ({
  text_color,
  background_color,
  testimonial,
}) => (
  <Container background={background_color} color={text_color}>
    <div>
      <p>{testimonial.testimonial}</p>
    </div>
    <div>
      <h2>{testimonial.name}</h2>
      <p>{testimonial.position}</p>
    </div>
  </Container>
);

export default TestimonalCard;
