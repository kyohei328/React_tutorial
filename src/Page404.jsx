import React from 'react'
import { Link } from 'react-router-dom'

const Pge404 = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to='/' >TOPに戻る</Link>
    </div>
  )
}

export default Pge404
