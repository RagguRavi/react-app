import React from 'react';
import { Item } from './Item';

export const ToDos = (props) => {
  return (
    <div className='container mt-4'>
      <div>
      { ( props.items == null || props.items.length === 0) ? "No data to display" :
        props.items.map((item) => {
          return <Item item={item} key={item.id} onDelete = {props.onDelete}/>
        })
      }
     
      </div>
    </div>
  )
}
