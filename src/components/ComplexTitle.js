import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
        </Wrapper>
    )
}

const wrapper = styled.div`
h1{
    text-transform: capitalize;
    text-align: center;
}
`

export default ComplexTitle