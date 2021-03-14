import { useRef, useEffect } from 'react'

import { useField } from '@unform/core'

export default function TextArea({ name, label, rows = 5, cols, ...rest }) {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
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
      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        rows={rows}
        cols={cols}
        {...rest}
      />
      { error && <span className="error">{error}</span> }
    </>
  )
}