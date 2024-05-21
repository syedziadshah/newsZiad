import React from 'react';
import loading from './loading.gif'
  const Spinner =()=> {
 
  return (
  <div className='text-center btn-sm'>
  <img src={loading} alt='loading'/>
  </div>
  )
}

export default Spinner