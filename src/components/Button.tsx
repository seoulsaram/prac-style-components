// export default Button;
import React, {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { styled } from '@storybook/theming';
import { color, radious, typography } from './shared/styles';
import { darken, transparentize } from 'polished';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  containsIcon?: boolean;
  disabled?: boolean;
  size: typeof SIZES[keyof typeof SIZES];
  appearance?: typeof APPEARANCES[keyof typeof APPEARANCES];
  shape?: typeof SHAPE[keyof typeof SHAPE];
}

const SIZES = {
  lg: 'large',
  m: 'medium',
  s: 'small',
  100: '100%',
} as const;

//primary: blue, secondary : black, tertiary:gray
const APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
  TERTIARY: 'tertiary',
  TERTIARY_OUTLINE: 'tertiaryOutline',
} as const;

const SHAPE = {
  ROUND: 'round',
  SQR: 'square',
} as const;

const padding = {
  default: `12px 0px`,
  small: `9px 20px`,
};

export const Button = forwardRef<
  unknown,
  PropsWithChildren<ButtonProps & JSX.IntrinsicElements['button']>
>(
  (
    {
      children,
      appearance = 'primary',
      type = 'button',
      size = 'large',
      shape = 'round',
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        appearance={appearance}
        type={type}
        size={size}
        shape={shape}
        {...rest}
        ref={ref as ComponentProps<typeof StyledButton>['ref']}
      >
        <>{children}</>
      </StyledButton>
    );
  }
);

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  text-align: center;
  font-weight: ${typography.weight.bold};
  line-height: 1.5;
  border: none;

  ${(props) =>
    props.shape === SHAPE.ROUND
      ? `
     border-radius:${radious.default}px;
    `
      : `border-radius:${radious.sqr}px;`}
  ${(props) =>
    props.size === SIZES.lg &&
    `
     width: 312px;
     font-size:${typography.size.s3}px;
     letter-spacing:${typography.spacing.default};
     padding: ${padding.default};
    `}
  ${(props) =>
    props.size === SIZES[100] &&
    `
     width: 100%;
     font-size:${typography.size.s3}px;
     letter-spacing:${typography.spacing.default};
     padding: ${padding.default};
    `}
  ${(props) =>
    props.size === SIZES.m &&
    `
     width: 150px;
     font-size:${typography.size.s3}px;
     letter-spacing:${typography.spacing.default};
     padding: ${padding.default};
    `}
  ${(props) =>
    props.size === SIZES.s &&
    `
     font-size:${typography.size.s1}px;
     letter-spacing:${typography.spacing.small};
     padding: ${padding.small};
  
    `}
  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
     background-color:${color.primary};
     color:${color.white};
     &:hover {
            background: ${darken(0.1, color.primary)};
          }
     &:disabled {
      color: ${transparentize(0.5, color.white)}
    }
    `}
  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    `
     background-color:${color.white};
     color:${color.primary};
     border: 1px solid ${color.primary};
     &:hover {
            background-color: ${color.primaryLight};
          }
     &:disabled {
      color: ${transparentize(0.5, color.primary)}
    }
    `}
  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
     background-color:${color.secondary};
     color:${color.white};
     border: 1px solid ${color.secondary};
     &:hover {
            opacity:0.7
          }
    &:disabled {
      color: ${transparentize(0.5, color.white)}
    }
    `}
  ${(props) =>
    props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
    `
     background-color:${color.white};
     color:${color.secondary};
     border: 1px solid ${color.secondary};
     &:hover {
      background: ${darken(0.1, color.white)};
          }
    &:disabled {
      color: ${transparentize(0.5, color.secondary)}
    }
    `}
  ${(props) =>
    props.appearance === APPEARANCES.TERTIARY &&
    `
    background-color:${color.tertiary};
     color:${color.secondary};
     border: 1px solid ${color.tertiary};
     &:hover {
      background: ${darken(0.1, color.tertiary)};
          }
    &:disabled {
      color: ${transparentize(0.5, color.secondary)}
    }
    `}
  ${(props) =>
    props.appearance === APPEARANCES.TERTIARY_OUTLINE &&
    `
    background-color:${color.white};
     color:${color.tertiaryLight};
     border: 1px solid ${color.tertiaryLight};
     &:hover {
      background: ${darken(0.1, color.white)};
          }
    &:disabled {
      color: ${transparentize(0.5, color.tertiaryLight)}
    }
    `}
`;
