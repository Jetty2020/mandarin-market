import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <nav>
      <Lists>
        <StyledNavLink to="/" exact="true">
          <List className="home">
            <Menu>홈</Menu>
          </List>
        </StyledNavLink>
        <StyledNavLink to="/chat">
          <List className="chat">
            <Menu>채팅</Menu>
          </List>
        </StyledNavLink>
        <StyledNavLink to="/upload">
          <List className="upload">
            <Menu>게시물 작성</Menu>
          </List>
        </StyledNavLink>
        <StyledNavLink to="/profile">
          <List className="profile">
            <Menu>프로필</Menu>
          </List>
        </StyledNavLink>
      </Lists>
    </nav>
  );
}

const Lists = styled.ul`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 7vw;
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
  z-index: 20;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 59px;
  max-width: 84px;
`;

const Menu = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 10px;
`;

const StyledNavLink = styled(NavLink)`
  & li {
    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      margin-bottom: 6px;
      background-repeat: no-repeat;
    }
    &.home::before {
      background-image: url('/img/icon/icon-home.svg');
    }
    &.chat::before {
      background-image: url('/img/icon/icon-message-circle.svg');
    }
    &.upload::before {
      background-image: url('/img/icon/icon-edit.svg');
    }
    &.profile::before {
      background-image: url('/img/icon/icon-user.svg');
    }
  }
  &.active {
    & li {
      &.home::before {
        background-image: url('/img/icon/icon-home-fill.svg');
      }
      &.chat::before {
        background-image: url('/img/icon/icon-message-circle-fill.svg');
      }
      &.profile::before {
        background-image: url('/img/icon/icon-user-fill.svg');
      }
    }
    & span {
      color: ${(props) => props.theme.accent};
    }
  }
`;

export default Navbar;
