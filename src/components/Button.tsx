// export default Button;
import React, { FC } from 'react';
import { styled } from '@storybook/theming';

export interface ButtonProps {
  text: string;
  color?: 'red' | 'blue';
}
export const Button: FC<ButtonProps> = ({ text, color = 'red' }) => {
  return <Btn color={color}>{text}</Btn>;
};

const Btn = styled.button`
  color: white;
  border-radius: 45px;
  padding: 10px;
  background-color: ${(props) => (props.color === 'red' ? 'red' : 'blue')};
`;
