import styled, { ThemeProvider } from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@material-ui/core'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'
import AlternativeTitle from './components/AlternativeTitle'
import Card from './components/Card'
import GlobalStyles from './components/global-styles'

const StyledBtn = styled(Button)`
text-transform: capitalize;
`

const BaseTheme = {
  color: '#222',
  background: '#fff',
}

const DarkTheme = {
  color: '#222',
  background: '#fff',
}

const Container = styled.div`
padding: 2rem;
color: ${(props) => props.theme.color};
background: ${(props) => props.theme.background}
`

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyles />
      <Container>
        <h1>Hello!</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
