import React from 'react'
import { Card } from 'react-bootstrap'

export const ReceipeCard = (props) => {

const { name, image } = props

  return (
    <Card>
        <Card.Img variant="top" src={"image"} />
        <Card.Title>
            {name}
        </Card.Title>
    </Card>
  )
}
