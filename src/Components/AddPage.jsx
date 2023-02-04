import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext'
import './style.css'

function AddPage() {
  const context = useContext(DataContext);
  const navigate = useNavigate();

  const newObj = {    
    name:"",
    age:"",
    course:"",
    batch:"",
  }

  const handleChange = (event) =>{
    newObj[event.target.name] = event.target.value;   
}

const handleSubmit = (event) =>{
   context.setData(
    (prevObj)=>{
        prevObj.push(newObj);
        return (prevObj) 
    }
   );
   navigate('/student');
}

  const handleCancel = () => navigate('/student');

  return (<>
    <div className="add-page">
      <fieldset >
        <legend> Name </legend>
        <input type="text" onChange={handleChange}
          name='name' placeholder='Enter Name Here...' autoComplete='off' />
      </fieldset>
      <fieldset >
        <legend> Age </legend>
        <input type="text" onChange={handleChange}
          name='age' placeholder='Enter Name Here...' autoComplete='off' />
      </fieldset>
      <fieldset >
        <legend> Course </legend>
        <input type="text" onChange={handleChange}
          name='course' placeholder='Enter Name Here...' autoComplete='off' />
      </fieldset>
      <fieldset >
        <legend> Batch </legend>
        <input type="text" onChange={handleChange}
          name='batch' placeholder='Enter Name Here...' autoComplete='off' />
      </fieldset>
    </div>
    <div className="add-button">
      <div className="cancel" onClick={handleCancel}>Cancel</div>
      <div className="update" onClick={handleSubmit}>Submit</div>
    </div>
  </>)
}

export default AddPage