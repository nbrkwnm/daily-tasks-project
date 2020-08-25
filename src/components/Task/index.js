import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, CheckContainer, PendingButton, DoneButton, TaskContainer, Title, Subtitle } from './styles';

const Task = (props) => {
  function getCheckView(doneAt) {
    if (doneAt != null) {
      return (
        <DoneButton>
          <Icon name="check" size={20} color={"#FFF"}/>
        </DoneButton>
      );
    } else {
      return (
        <PendingButton />
      );
    }
  }

  return (
    <Container>
      <CheckContainer>
        {getCheckView(props.doneAt)}
      </CheckContainer>
      <TaskContainer>
        <Title>{props.title}</Title>
        <Subtitle>{props.estimateAt}</Subtitle>
      </TaskContainer>
    </Container>
  );
}

export default Task;