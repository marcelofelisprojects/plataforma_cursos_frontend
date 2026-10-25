import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Content, Grid } from './styles';

const CoursesLayout: React.FC = () => (
  <Container>
    <Content>
      <Grid>
        <Outlet />
      </Grid>
    </Content>
  </Container>
);

export default CoursesLayout;
