import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Input } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

const TopSearchBar = () => {
  return (
    <div className='flex justify-center lg:justify-between items-center text-3xl container mx-auto'>
      <div >
        <div className='flex items-center' >
          <Image src={'/logo.png'} width="50" height="76" alt="logo" />
          <p className='text-5xl '>
            <span className='text-green-700'> V</span>
            <span className="">Shop</span>
          </p>
        </div>
      </div>
      <div>
      <div className="w-72 hidden lg:block">
      <Input label="Input With Icon" icon={<FontAwesomeIcon icon={faSearch} />} />
    </div>
      </div>
      
      <div className='hidden lg:block'>
        <div className="bg-gray-300 text-orange-400 px-2 py-1 rounded-md">$0.00</div>
      </div>
    </div>
  );
};

export default TopSearchBar;
