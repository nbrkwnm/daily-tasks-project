import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import defaultStyle from '../../styles/defaultStyle';

export const Container = styled.View`
  flex-direction: row;
  border-color: #A5A5A5;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  align-content: center;
`;

export const CheckContainer = styled.View`
  width: 15%;
  justify-content: center;
  padding: 0 0 0 10px;
`;

export const Button = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 25px;
`;

export const PendingButton = styled(Button)`
  border-color: #000;
`;

export const DoneButton = styled(Button)`
  background-color: #4F01AF;
  justify-content: center;
  align-items: center;
`;

export const TaskContainer = styled.View`
  justify-content: center;
  padding: 5px 0;
`;

export const Title = styled.Text`
  font-family: ${defaultStyle.fontFamily};
  font-size: 16px;
  font-weight: bold;
  color: #5E5E5E;
`;

export const Subtitle = styled.Text`
  font-family: ${defaultStyle.fontFamily};
  font-size: 12px;
  color: #5E5E5E;
`;