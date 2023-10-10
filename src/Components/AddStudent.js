import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

export default function AddStudent() {

    const [inputData, setInputData] = useState({
      name:"",
      age:null,
      email:"",
      batch:null
    })

    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const changeHandler = (e) =>{
      const {name, value} = e
       
      setInputData({...inputData, [name]: value } )
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(addStudent(inputData))
        navigate("/")
    }

    // value={inputData.name} 
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <form onSubmit={(e) => submit(e)} className="w-50">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp"  onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" name= "age" value={inputData.age} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={inputData.email} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Batch</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" name="batch" aria-describedby="emailHelp" value={inputData.batch} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
  
        </div>

    )
}
