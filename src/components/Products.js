import React from 'react'
import Title from './ComplexTitle'
const products = [
    { id: 1, name: 'chair', price: 30 },
    { id: 2, name: 'bed', price: 150 },
    { id: 3, name: 'couch', price: 250 }
]

const Products = () => {
    return (
        <section>
            <Title title="all products"></Title>
        </section>
    )
}

export default Products