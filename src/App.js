import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import CustomHeader from './components/CustomHeader';
import CustomTitle from './components/title';

const MainContainer = styled.div`
  padding: 2rem;
  background-color: #12154c;
  background-image: url('./flames.png');
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

const ContentContainer = styled.div`
  z-index: 5;
`;

function App() {
  return (
    <MainContainer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CustomHeader/>
      <ContentContainer>
        <CustomTitle/>
        
      </ContentContainer>
      {/* <img style={{position: 'absolute', zIndex: 0, left:0, width: '98vw', bottom: 0}} src="./flames.png"/> */}
    </MainContainer>
  );
}

export default App;
