import './style.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { Link } from 'react-router-dom'

function Student() {
  const context = useContext(DataContext)
  return (
    <div className="student-page">
      <div className="student-header">
        <h1>Student Details</h1>
        <Link className='link inner-link'  to='/add-page' ><div id='add-new-btn'>Add New Student</div></Link> 
      </div>
      <div className="student-table">
        <div className="student-table-content">
          <th className='student-name'>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </div>
        <hr />
        {context.data.map((item, index) => (
          <>
            <div key={index} className="student-table-content">
              <td className='student-name'>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td><Link to='/edit-page' state={{ data: index }}>Edit </Link></td>
            </div>
            <hr /></>
        ))}
      </div>
    </div>
  )
}

export default Student