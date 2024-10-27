

import React from 'react';

const Cards = () => {
  return (
    <div className='bg-white'>
      <h1 className='font-bold text-6xl text-center'>What Our Clients Say</h1>
      <div className='flex'>
        {/* Card 1 */}
        <div className='border-2 border-red-500 rounded-3xl w-[400px] h-1/4 p-11 m-11'>
          <img src='/Images/Group 2.png' alt='Collaboration Tool Icon' />
          <p>
            Whitepate is designed as a collaboration tool<br />
            for businesses that is a full project management<br />
            solution.
          </p>
          <img src='/Images/Line 1.png' alt='Divider' />
          <div>
            <div className='flex'>
              <img src='/Images/image (1).png' alt='Client' />
              <h2 className='text-red-500'>
                Oberon Shaw, MCH<br />
                <span className='text-black'>
                  Head of Talent Acquisition, North America
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border-2 border-red-500 bg-red-500 rounded-3xl w-[400px] h-1/4 p-11 m-11 text-white'>
          <img src='/Images/Group 2 (1).png' alt='Collaboration Tool Icon' />
          <p >
            Whitepate is designed as a collaboration tool<br />
            for businesses that is a full project management<br />
            solution.
          </p>
          <img src='/Images/Line 2.png' alt='Divider' />
          <div>
            <div className='flex'>
              <img src='/Images/image (3).png' alt='Client' />
              <h2 className='text-black'>
                Oberon Shaw, MCH<br />
                <span className='text-white'>
                  Head of Talent Acquisition, North America
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='border-2 border-red-500 bg-red-500 rounded-3xl w-[400px] h-1/4 p-11 m-11 text-white'>
          <img src='/Images/Group 2 (1).png' alt='Collaboration Tool Icon' />
          <p>
            Whitepate is designed as a collaboration tool<br />
            for businesses that is a full project management<br />
            solution.
          </p>
          <img src='/Images/Line 2.png' alt='Divider' />
          <div>
            <div className='flex'>
              <img src='/Images/image (4).png' alt='Client' />
              <h2 className='text-black'>
                Oberon Shaw, MCH<br />
                <span className='text-white'>
                  Head of Talent Acquisition, North America
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
