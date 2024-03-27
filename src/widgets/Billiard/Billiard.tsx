import React, { useState } from 'react'

import { TheCanvas } from '~ui'
import { _layer } from '~types'

import { Nullable } from '~utils'

export const Billiard = () => {
  const update = () => {}

  const display = () => {}

  const [layer, set_layer] = useState<Nullable<_layer>>(null)

  return <TheCanvas layer={set_layer} />
}
