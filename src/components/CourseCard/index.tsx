import React from 'react';
import Matematica from 'src/assets/images/icon-matematica-20px.svg';
import BannerAva from 'src/assets/images/banner-ava.png';
import { ICourse } from '@modules/Courses/interfaces/ICourse';
import { Container, Content, Tag } from './styles';

interface IProps {
  course: ICourse;
}

const CourseCard: React.FC<IProps> = ({ course }) => (
  <Container bgimage={BannerAva}>
    <Tag>
      <img src={Matematica} alt={course.name} />
      <p>{course.name.toUpperCase()}</p>
    </Tag>
    <Content>
      <div>
        <h1>{course.fullName}</h1>
      </div>
      <div>
        <p>{course.description}</p>
      </div>
    </Content>
  </Container>
);

export default CourseCard;
