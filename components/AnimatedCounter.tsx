'use client';
import { formatAmount } from '@/lib/utils';
import React from 'react';
import CountUp from "react-countup";

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
        <CountUp 
            end={amount} 
            decimal="," 
            separator="."
            decimals={2} 
            suffix="€"
            duration={1}
        />
    </div>
  )
}

export default AnimatedCounter