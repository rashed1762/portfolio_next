import { useEffect, useState } from 'react';
import Image from 'next/image';
const Tab = ({ progress, size = 100, strokeWidth = 10 }) => {
    const [offset, setOffset] = useState(0);
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
  
    useEffect(() => {
      const progressOffset = ((100 - progress) / 10) * circumference;
      setOffset(progressOffset);
    }, [progress, circumference]);
  
  return (
    <div className="flex justify-center items-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className="text-blue-500 transition-all duration-300 ease-in-out"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
      <div className="absolute text-xl font-semibold">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

export default Tab