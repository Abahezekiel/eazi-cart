import React from 'react'


export default function ButtonComponent({width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  buttonText,}) {
    return (
        <button style={{width, height, backgroundColor, color, border, borderColor, fontSize}}>
           {buttonText}
        </button>
    )
}