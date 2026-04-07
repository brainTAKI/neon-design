'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  const reset = () => setCount(0)

  const color =
    count > 0
      ? 'text-emerald-400'
      : count < 0
        ? 'text-rose-400'
        : 'text-slate-200'

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/60 p-10 flex flex-col items-center gap-8">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-widest text-slate-400 uppercase">
            Counter
          </h1>
          <div className="mt-1 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
        </div>

        {/* Count display */}
        <div className="relative flex items-center justify-center w-44 h-44 rounded-full border border-slate-700 bg-slate-800/50 shadow-inner">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-700/20 to-transparent" />
          <span className={`text-7xl font-black tabular-nums transition-colors duration-300 ${color}`}>
            {count}
          </span>
        </div>

        {/* +/- Buttons */}
        <div className="flex items-center gap-5">
          <button
            onClick={decrement}
            className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 text-3xl font-bold text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/50 active:scale-95 transition-all duration-150 shadow-lg"
            aria-label="Decrement"
          >
            −
          </button>

          <button
            onClick={reset}
            className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold tracking-widest text-slate-400 uppercase hover:bg-slate-700 hover:text-slate-200 active:scale-95 transition-all duration-150 shadow"
            aria-label="Reset"
          >
            RST
          </button>

          <button
            onClick={increment}
            className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 text-3xl font-bold text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 active:scale-95 transition-all duration-150 shadow-lg"
            aria-label="Increment"
          >
            +
          </button>
        </div>

        {/* Status label */}
        <p className="text-xs tracking-widest text-slate-600 uppercase">
          {count === 0 ? 'zero' : count > 0 ? `+${count} above zero` : `${Math.abs(count)} below zero`}
        </p>
      </div>
    </div>
  )
}
