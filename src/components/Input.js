import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

const Input = ({ name,...rest }) => {
  const { fieldName, error, registerField } = useField(name);

  const inputRef = useRef(null)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
  <>
    <input

      name={name}

      ref={inputRef}

      type="text"
      className={error ? 'has-error': ''}
      {...rest}

    />
    { error && <span className="error">{error}</span> }
  </>
  )

}

export default Input