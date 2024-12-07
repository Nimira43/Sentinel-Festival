import { useEffect } from 'react'

function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    console.log(canvas)
  }, [])

  return <canvas id="canvas"></canvas>
}

export default Canvas
