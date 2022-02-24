import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@material-ui/core'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'

const StyledBtn = styled(Button)`
text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <ComplexTitle title='more complex title'></ComplexTitle>
    </div>
  );
}

export default App;
