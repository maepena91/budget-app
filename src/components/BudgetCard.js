import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard( { name, amount, max }) {
  return (
      <Card>
          <Card.Body>
              <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'> 
                  <div className='me-2'>{name}</div>
                  <div className='d-flex align-items-baseline'>
                      {currencyFormatter.format(amount)}  
                     <span className='text-muted fs-6 ms-1'>
                          / {currencyFormatter.format(max)}</span>
                      </div>
              </Card.Title>
              <ProgressBar className='rounded-pill' 
              variant={getProgressBarVariant (amount,max)} />
          </Card.Body>
      </Card>
  )
}
function getProgressBarVariant(amount, max){
    const ratio = amount / max
    if(ratio < .5) return "primary"
    if(ratio < .75) return "primary"
}
//used card component from react bootstrap and helps us with styiling
//inside the card title putting a div and adding the name from the props. 
//on the card title, this styling will give space between the entertainment and the numbers
//were adding span to seperate normal amount and the max and style it
//added progress bar from react bootstrap to add the progress of the budget
