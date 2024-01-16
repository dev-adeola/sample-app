"use client";
import {useEffect, useState, useRef } from 'react';
const HydrationTest = () => {
    const [isClient, setIsClient ] = useState(false);
    const take = useRef(false);
    useEffect(() => {
      if(take.current === false) {
        setIsClient(true);
      }
    }, []);
  
    const a = Math.random();
    console.log(a);
  return (
    <div>
        { isClient && a }
    </div>
  )
}

export default HydrationTest
