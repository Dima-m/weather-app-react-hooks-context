import styled from 'styled-components';

export const CityWrapper = styled.div`
  height: 5rem;
  display: flex;
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
    color: #fff;
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