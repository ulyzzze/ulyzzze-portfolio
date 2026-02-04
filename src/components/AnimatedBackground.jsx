import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-950 via-black to-gray-950">
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export default AnimatedBackground
