'use client'

import { useState, useCallback } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [shaking, setShaking] = useState(false)

  const triggerShake = useCallback(() => {
    setShaking(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setShaking(true))
    })
    setTimeout(() => setShaking(false), 350)
  }, [])

  const increment = () => { setCount((c) => c + 1); triggerShake() }
  const decrement = () => { setCount((c) => c - 1); triggerShake() }
  const reset = () => { setCount(0); triggerShake() }

  const countColor =
    count > 0 ? '#4cc9f0' : count < 0 ? '#f72585' : '#e0e0e0'

  return (
    <div
      className={`flex min-h-screen items-center justify-center p-4 ${shaking ? 'shake' : ''}`}
      style={{ background: '#000' }}
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        }}
      />

      <div
        className="relative w-full max-w-sm flex flex-col items-center gap-8 p-10 rounded-2xl"
        style={{
          background: 'rgba(5,5,15,0.95)',
          border: '1px solid #f72585',
          boxShadow: '0 0 30px 4px #f7258533, inset 0 0 40px rgba(247,37,133,0.05)',
        }}
      >
        {/* Corner accents */}
        {[
          'top-0 left-0 border-t-2 border-l-2',
          'top-0 right-0 border-t-2 border-r-2',
          'bottom-0 left-0 border-b-2 border-l-2',
          'bottom-0 right-0 border-b-2 border-r-2',
        ].map((cls, i) => (
          <span
            key={i}
            className={`absolute w-4 h-4 ${cls}`}
            style={{ borderColor: '#4cc9f0' }}
          />
        ))}

        {/* Title */}
        <div className="text-center">
          <h1
            className="neon-flicker text-3xl font-black tracking-[0.3em] uppercase"
            style={{
              color: '#f72585',
              textShadow: '0 0 8px #f72585, 0 0 20px #f72585aa',
            }}
          >
            COUNTER
          </h1>
          <div
            className="mt-2 h-px w-24 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #4cc9f0, transparent)' }}
          />
        </div>

        {/* Count display */}
        <div
          className="relative flex items-center justify-center w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(76,201,240,0.08) 0%, transparent 70%)',
            border: '1px solid #4cc9f044',
            boxShadow: `0 0 20px 2px ${countColor}44`,
            transition: 'box-shadow 0.3s',
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute inset-2 rounded-full"
            style={{ border: '1px dashed #4cc9f022' }}
          />
          <span
            className="text-8xl font-black tabular-nums"
            style={{
              color: countColor,
              textShadow: `0 0 12px ${countColor}, 0 0 30px ${countColor}88`,
              transition: 'color 0.3s, text-shadow 0.3s',
            }}
          >
            {count}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          {/* Decrement — neon pink */}
          <button
            onClick={decrement}
            className="neon-pink w-16 h-16 rounded-xl text-3xl font-black active:scale-90 transition-transform duration-100"
            style={{
              background: 'rgba(247,37,133,0.1)',
              border: '2px solid #f72585',
              color: '#f72585',
              textShadow: '0 0 8px #f72585',
            }}
            aria-label="Decrement"
          >
            −
          </button>

          {/* Reset */}
          <button
            onClick={reset}
            className="w-12 h-12 rounded-lg text-xs font-bold tracking-widest uppercase active:scale-90 transition-transform duration-100"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid #ffffff33',
              color: '#888',
            }}
            aria-label="Reset"
          >
            RST
          </button>

          {/* Increment — neon blue */}
          <button
            onClick={increment}
            className="neon-blue w-16 h-16 rounded-xl text-3xl font-black active:scale-90 transition-transform duration-100"
            style={{
              background: 'rgba(76,201,240,0.1)',
              border: '2px solid #4cc9f0',
              color: '#4cc9f0',
              textShadow: '0 0 8px #4cc9f0',
            }}
            aria-label="Increment"
          >
            +
          </button>
        </div>

        {/* Status */}
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: '#444' }}
        >
          {count === 0
            ? '// STANDBY'
            : count > 0
              ? `// +${count} UNIT${count !== 1 ? 'S' : ''}`
              : `// ${Math.abs(count)} BELOW`}
        </p>
      </div>
    </div>
  )
}
