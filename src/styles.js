import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const LogoWrapper = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 5px;
  left: 15px;
  opacity: .8;
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 65%;
`;

export const CityWrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const CityInfo = styled.div`
  color: #fff;
`;

export const CityInput = styled.input`
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adadad;
  }
`;

export const LocationWrapper = styled.div`
  height: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #fff;
  padding: 1rem;
  color: #fff;
`;

export const Location = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

export const Slider = styled.span`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  width: 3.7rem;
  justify-content: space-between;
  position: absolute;
  top: 15px;
  right: 15px;
  align-self: flex-end;
  opacity: .9;
`;

export const Unit = styled.span`
  color: #fff;
  padding: 7px 10px;
  cursor: pointer;

  ${({ selected }) => selected && `
    background: #fff;
    color: #949494;
    transition: .4s;
  `}
`;