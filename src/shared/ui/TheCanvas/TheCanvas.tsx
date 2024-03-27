import React, { useRef, useEffect, memo } from 'react'

import { _layer } from '~types'

export const TheCanvas = memo(
  ({ layer }: { layer: (layer: _layer) => void }) => {
    const canvas_ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      layer({
        ctx: canvas_ref.current!.getContext(`2d`)!,
        w: canvas_ref.current!.clientWidth,
        h: canvas_ref.current!.clientHeight,
      })
    })

    return <canvas ref={canvas_ref} />
  }
)
