/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Stats= ({ toDoList }) => {
    let countList = toDoList.length;  
  return (
      <div className='stats'>
          <p className='notify'>
              {countList===0?'You got everything! Ready to go':`You have ${countList} items on your list.`}
          </p>
    </div>
  )
}

export default Stats;