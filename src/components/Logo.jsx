import React from 'react';
import Preview from './Preview.png'

function Logo({ width = '800px'  }) {
  return (
    <div >
      <img
        className='mt-[-75px] ml-5 w-auto align-top  ' 
        src={Preview}
        alt="Logo" 
        style={{ width: width, height: '200px'  }}
      />
    </div>
  );
}

export default Logo;

