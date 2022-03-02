import styled, { ThemeProvider } from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@material-ui/core'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'
import AlternativeTitle from './components/AlternativeTitle'
import { useState } from 'react'
import GlobalStyles from './components/global-styles'

const StyledBtn = styled(Button)`
text-transform: capitalize;
`

const BaseTheme = {
    color: '#222',
    background: '#fff',
}

const DarkTheme = {
    color: '#fff',
    background: '#222',
}

const Container = styled.div`
padding: 2rem;
color: ${(props) => props.theme.color};
background: ${(props) => props.theme.background};
`

function App() {
    const [baseTheme, setTheme] = useState(true)
    const toggleTheme = () => {
        setTheme(!baseTheme)
    }
    return (
        <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
            <GlobalStyles />
            <Container>
                <h1>Hello!</h1>
                <button className='btn' onClick={toggleTheme}>toggle</button>
            </Container>
        </ThemeProvider>
    );
}

export default App;
