import React from 'react'
import styled, { css } from 'styled-components'
const fruit = ['oranges', 'apple', 'banana', 'peach']

const Item = styled.li`
list-style-type:none;
${({ odd }) => {
        return odd ? css`
    color: pink;
    font-size: 2rem;
    `: css`
    color: blue;
    font-size: 1rem;
    `
    }}
`

const List = () => {
    return (
        <ul>
            {fruit.map((item, index) => {
                return <Item key={index} odd={(index + 1) % 2 !== 0}>{item}</Item>
            })}
        </ul>
    )
}

export default List