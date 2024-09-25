import React from 'react'
import './index.css'
function waves() {  
  return (
    <div style={{width: '100vw', zIndex: '60', position: 'relative', top: '-90px',
    }}>      
    <section className="gradient-pp w-100 vh-100 z-60">
    <div className="position-absolute w-100 bottom-0">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 40"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="moving-waves">
          <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
          <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
          <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
          <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
        </g>
      </svg>
    </div>
  </section></div>
  )
}

export default waves