import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  margin: 0px;
  border: 1px solid black;
  background-image: url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: cover; /* You can adjust this based on your preferences */
  background-position: center; /* You can adjust this based on your preferences */
  /* Add any other styles you need */

  @media only screen and (max-width: 400px) {
    height: 80vh;
  }
`

export const Overlay = styled.div`
  font-size: 2.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: white;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 150px;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1; 

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: auto;
    top: 150px;
    align-items: center;
    justify-content: center;

    h6 {
      display: none;
    }

    h2 {
      text-decoration: none;
    }
  }

  h6 {
    color: lightblue;
  }
`;

export const QuoteBtn = styled.button`
  padding: 20px 80px;
  border: 2px solid white;
  font-size: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  background-color: transparent;
  transition: 150ms ease-in-out;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: white;
    color: black;
  }

`