"use client"

import React, { useEffect, useRef, useState } from 'react'

function IsVisibleComponent({children}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
              });
            },
            { threshold: 0.1 }
          );
      
          if (ref.current) {
            observer.observe(ref.current);
          }
      
          return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          };
    })

  return (
    <div ref={ref}>{isVisible ? children : <></>}</div>
  )
}

export default IsVisibleComponent