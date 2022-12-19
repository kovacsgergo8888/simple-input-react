import React, { useState, createRef } from 'react'

export interface SimpleInputProps {
  value: string
  onChange: Function
}

function SimpleInput(props: SimpleInputProps) {
  const [localValue, setLocalValue] = useState(props.value)
  let input = createRef<HTMLInputElement>()

  const onChangeHandler = (event: any) => {
    setLocalValue(event.target.value)
  }

  const onKeyDownhandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      update()
    }
    if (event.key === 'Escape') {
      cancel()
    }
  }

  const onFocusHandler = () => {
    if (input.current) {
      input.current.select()
    }
  }

  const update = () => {
    props.onChange(localValue)
    input.current!.blur()
  }

  const cancel = () => {
    input.current!.blur()
    props.onChange(props.value)
    setLocalValue(props.value)
  }

  return (
    <input
      type="text"
      value={localValue}
      onChange={onChangeHandler}
      onBlur={update}
      onKeyDown={onKeyDownhandler}
      onFocus={onFocusHandler}
      ref={input}
    />
  )
}

export default SimpleInput
