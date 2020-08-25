import styled from 'styled-components/native';

import Styles from '../../styles/defaultStyle';

export const Container = styled.View`
  flex: 1;
  background-color: ${Styles.colors.today.primary};
`;

export const Background = styled.View`
  flex: 2;
  padding: 10px;
  justify-content: flex-end;
`;

export const TaskContainer = styled.View`
  flex: 8;
  background-color: #FFF;
  border-radius: 15px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${Styles.fontFamily};
  font-size: 52px;
  color: #FFF;
`;

export const Subtitle = styled.Text`
  font-family: ${Styles.fontFamily};
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;