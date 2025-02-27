import React, { FunctionComponent, ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { glow } from './shared/animation';
import { Icon } from './Icon';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

export enum AvatarType {
  USER = 'user',
  ORGANIZATION = 'organization',
}

const getNameShort = (name: string) => {
  const nameShortList = name.split(' ');

  if (nameShortList.length === 1) {
    return name.slice(0, 2);
  }

  return `${nameShortList[0].slice(0, 1)}${nameShortList[nameShortList.length - 1][0]}`;
};

const Image = styled.div<Partial<Props>>`
  background: ${(props) => (!props.isLoading ? 'transparent' : color.light)};
  border-radius: ${(props) => (props.type === AvatarType.USER ? '50%' : '5px')};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.isLoading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

interface LoadingIconProps {
  icon: string;
  type: AvatarType;
}

const LoadingIcon = styled(Icon)<LoadingIconProps>`
  position: relative;
  margin: 0 auto;
  display: block;
  bottom: ${(props) => (props.type === AvatarType.USER ? -2 : -3)}px;
  height: ${(props) => (props.type === AvatarType.USER ? 100 : 80)}%;
  width: ${(props) => (props.type === AvatarType.USER ? 100 : 80)}%;
  vertical-align: top;

  path {
    fill: ${color.medium};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div<Partial<Props>>`
  color: ${color.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${props => props.size === "tiny" && css`
    font-size: ${typography.size.s1 - 2}px;
    line-height: ${sizes.tiny}px;
  `}

  ${props => props.size === "small" && css`
    font-size: ${typography.size.s1}px;
    line-height: ${sizes.small}px;
  `}

  ${props => props.size === "large" && css`
    font-size: ${typography.size.s3}px;
    line-height: ${sizes.large}px;
  `}
`;

/**
 * The `Avatar` component is where all your avatars come to play.
 */
export const Avatar: FunctionComponent<Props> = ({
  isLoading = false,
  username = 'loading',
  src = null,
  size = 'medium',
  type = AvatarType.USER,
  ...props
}: Props) => {
  let avatarFigure = (
    <LoadingIcon icon={type === AvatarType.USER ? 'useralt' : 'repository'} type={type} />
  );
  const a11yProps: ComponentProps<typeof Image> = {};

  if (isLoading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {getNameShort(username)}
      </Initial>
    );
  }

  return (
    <Image size={size} isLoading={isLoading} src={src} type={type} {...a11yProps} {...props}>
      {avatarFigure}
    </Image>
  );
};

interface Props {
  isLoading: boolean;
  /** The name of the user (not the nice name) */
  username: string;
  src: string;
  /** Specify size */
  size: keyof typeof sizes;
  type: AvatarType;
}
