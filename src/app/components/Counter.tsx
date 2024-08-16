// src/app/DayCounter.tsx
import React from 'react';
import { calculateDaysUntil25 } from '@/utils/calculateDays';

const DayCounter: React.FC = () => {
    const birthDate = new Date(2006, 2, 27); // Replace with your actual birthdate
    const daysUntil25 = calculateDaysUntil25(birthDate);

    return (
        <div className=''>
            <h1>
                You have only {daysUntil25} days left.
            </h1>
        </div>
    );
};

export default DayCounter;