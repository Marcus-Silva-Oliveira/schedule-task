import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vh;
  position: fixed;
  z-index: -1;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  width: 100%;
  padding: 0.8rem 1rem;
  gap: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: auto;
  }
`;

interface activeMenuProps {
  activeMenu: boolean;
}
export const MenuContainer = styled.div<activeMenuProps>`
  display: ${(props) => (props.activeMenu ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  gap: 0.5rem;
  position: fixed;
  z-index: 1;
  width: auto;
  height: 200px;
  margin: 4.2rem 0 0 1rem;
  padding: 0.5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const ActualDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  span:first-child {
    font-size: 16px;
    text-align: right;
  }

  span:last-child {
    font-size: 48px;
    line-height: 1;
  }
`;
