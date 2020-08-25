import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import Task from '../../components/Task';

import { Container, Background, Title, Subtitle, TaskContainer} from './styles';

const TaskList = () => {
  const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
  
  return (
    <Container>
      <Background>
        <Title>HOJE</Title>
        <Subtitle>{today}</Subtitle>
      </Background>
      <TaskContainer>
        <Task title={"Estudar"} doneAt={today} estimateAt={today}/>
      </TaskContainer>
    </Container>
  );
}

export default TaskList;