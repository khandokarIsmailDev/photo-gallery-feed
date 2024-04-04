import React from 'react';
import { getDictionary } from './dictionaries';
import PhotoList from '@/components/PhotoList';

const page = async() => {
  // const dictinary = await getDictionary(lang)
  // console.log(process.env.BASE_URL)
  
  const response = await fetch(`${process.env.BASE_URL}/photos`)
  const photos = await response.json()
  
  return (
    <>
      <PhotoList photos={photos} />
    </>
  );
};

export default page;