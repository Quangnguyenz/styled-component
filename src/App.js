import styled from 'styled-components'
import Loading from './components/Loading';
import GlobalStyles from './components/global-styles';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyles />
      <Loading />
    </div>
  );
}

export default App;
