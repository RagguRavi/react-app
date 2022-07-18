import React from 'react'

export const Item = ({item,onDelete}) => {
  return (
    <div className='row my-2'>
    <div className='col'>{item.id}</div>
    <div className='col'>{item.name}</div>
    <div className='col'>{item.desc}</div>
    <button type="button" className="btn btn-danger btn-sm" onClick={() => {onDelete(item)}}>Danger</button>
    </div>
  )
}
