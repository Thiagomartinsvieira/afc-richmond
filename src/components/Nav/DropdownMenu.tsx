import Link from 'next/link'
import React from 'react'

const DropdownMenu = () => {
  return (
    <div>
      <Link href="/soccer-option-1">Option 1</Link>
      <Link href="/soccer-option-2">Option 2</Link>
      <Link href="/soccer-option-3">Option 3</Link>
    </div>
  )
}

export default DropdownMenu
