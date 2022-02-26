import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@material-ui/core'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'
import AlternativeTitle from './components/AlternativeTitle'

const StyledBtn = styled(Button)`
text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>cards are here</h2>
    </div>
  );
}

export default App;
