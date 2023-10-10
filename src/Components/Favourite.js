import React from 'react'
import { useSelector } from 'react-redux'

export default function Favourite() {

  const favStudent =  useSelector(state => state.fav)
  return (
    <div>
  
    <div className=' d-flex justify-content-center'>
      {
        <table className="table w-75">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            {
              favStudent.map((student) => {
                return (
                  <tr>
                    <th scope="row">{student.name}</th>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                    <td>{student.batch}</td>
        
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      }
    </div>
  </div>
  )
}
