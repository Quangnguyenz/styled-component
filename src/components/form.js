import React from 'react'
import styled, { css } from 'styled-components/macro'

const Button = styled.button.attrs((props) => {
    return { type: props.type || 'button' }
})`
background:lightblue;
border:none;
color: white;
padding: 0.25rem;
cursor: pointer;
${({ type }) => {
        return (type === 'submit' && css`
        display: block;
        width:100%;
        margin:1rem auto;
        margin-top: 1rem;
        border-radius: 0.25rem;
        `)
    }
    }
`

function Form() {
    return (
        <div>
            <h2>some random stuff</h2>

            <Button type='button'>click me</Button>
            <form css={`width:300px;background:#fff;padding:2rem;margin-top:1rem`}>
                <h2>Form</h2>
                <input type="text" />
                <Button type="submit">submit here</Button>
            </form>
        </div>
    )
}

export default Form