/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import React, {useState} from 'react';



function Credits(props) {
  const {credits, balance, updateBalance, updateCreditList} = props;
  // console.log(props);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addCredit = (e) => {
    e.preventDefault();
    const updatedAmount = parseFloat(amount);
    const updatedBalance = balance + updatedAmount;
    // updateBalance(updatedBalance);
    const newCredit = {
      id: credits.length + 1,
      description: description,
      amount: parseFloat(amount),
      date: new Date()
    };
    updateCreditList(newCredit);
    updateBalance(updatedBalance);

    //Clear input fields after adding credit
    setDescription('');
    setAmount('');
    
  }


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Credits</h1>
      <ul style={{listStyle: 'none', paddingLeft: 0, textAlign: 'center'}}>
        {credits.map((credit) => (
          <li key={credit.id}>
            <div className='credit-item'>
              <strong>Description:</strong> {credit.description} <br/>
              <strong>Amount:</strong> ${parseFloat(credit.amount).toFixed(2)}<br/>
              <strong>Date:</strong> {new Date(credit.date).toISOString().split('T')[0]} <br/>
              <br/>
            </div>
          </li>
        ))}

        </ul>
        <br/>
        <br/>
        <div className='add-credit'>
          <h3>Add Credit</h3>
          <input type='text' placeholder='Description' id='description' onChange={(e) => setDescription(e.target.value)}/>
          <input type='number' placeholder='Amount' id='amount' onChange={(e) => setAmount(e.target.value)}/>
          <button onClick={addCredit}>Add Credit</button>
          <br/>
          <br/>
          <AccountBalance accountBalance={balance}/>
        </div>
        <br/>
        <br/>
        <br/>

        <Link to="/">Return to Home</Link>
    </div>
  );
}







export default Credits;