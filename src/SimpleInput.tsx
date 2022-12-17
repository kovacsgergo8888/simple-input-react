import React, { useState } from 'react'

export interface SimpleInputProps {
  value: string
  onChange: Function
}

function SimpleInput(props: SimpleInputProps) {
  const [localValue, setLocalValue] = useState(props.value)

  const onChangeHandler = (event: any) => {
    setLocalValue(event.target.value)
  }

  const onKeyDownhandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      update()
    }
    if (event.key === 'Escape') {
      setLocalValue(props.value)
    }
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()
  }

  const update = () => {
    props.onChange(localValue)
  }

  return (
    <input
      type="text"
      value={localValue}
      onChange={onChangeHandler}
      onBlur={update}
      onKeyDown={onKeyDownhandler}
      onFocus={onFocusHandler}
    />
  )
}

export default SimpleInput
