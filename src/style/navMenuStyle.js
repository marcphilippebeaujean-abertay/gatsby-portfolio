import { contentWidth } from './layoutStyle';
import { mainColour } from './themeStyle';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const navMenuWidth = `16px`;
export const navMenuHeight = `24px`;

export const MainMenuWrapper = styled.nav`
    background-color: rgb(0, 0, 0);
    display: flex;
    width: ${contentWidth};
    margin: 0 auto;
    padding: 0;
    top: 0%;
    border-radius: 0px 0px 10px 10px
`

export const MenuItem = styled(Link)`
    color: ${mainColour};
    display: block;
    text-decoration: none;
    padding: ${navMenuHeight} ${navMenuWidth};
`