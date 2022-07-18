import React, { useState } from 'react'

export const AddToDo = ({addToDo}) => {
    const [title,setTitle] = useState("");
    const [id,setId] = useState("");
    const [desc,setDesc] = useState("");

    const submit = () => {
        
    }
    return (
        <div>
            <form>
                <div className="form-group" onSubmit={submit}>
                    <label htmlFor="exampleInputEmail1">To Do Id</label>
                     <input type="email" className="form-control" placeholder="To do id"  value={id} onChange={(e) => {setId(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">To Do Name</label>
                     <input type="email" className="fortm-control" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">To Do Desc</label>
                     <input type="email" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                </div>
               
                <button type="button" className="btn btn-primary" onClick={() =>addToDo(id,title,desc)}>add To do</button>
            </form>
            Form cont
        </div>
    )
}
