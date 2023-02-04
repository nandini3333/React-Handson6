import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext'
import './style.css'

function EditPage() {
    const context = useContext(DataContext);
    const location = useLocation();
    const navigate = useNavigate();
    const index = location.state.data;

    const newObj = {
        name : context.data[index].name,
        age : context.data[index].age,
        course : context.data[index].course,
        batch : context.data[index].batch
    }

    const handleChange = (event) =>{
        newObj[event.target.name] = event.target.value;   
    }

   const handleUpdate = (event) =>{
       context.setData(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj) 
        }
       );
       navigate('/student');
    }

    const handleCancel = () => navigate('/student');
    
    return (<>
        <div className="edit-page">
            <fieldset >
                <legend> Name </legend>
                <input type="text" onChange={handleChange}
                    name='name' placeholder={context.data[index].name} autoComplete='off'/>
            </fieldset>
            <fieldset >
                <legend> Age </legend>
                <input type="text" onChange={handleChange} 
                    name='age' placeholder={context.data[index].age} autoComplete='off'/>
            </fieldset>
            <fieldset >
                <legend> Course </legend>
                <input type="text" onChange={handleChange}
                    name='course' placeholder={context.data[index].course} autoComplete='off'/>
            </fieldset>
            <fieldset >
                <legend> Batch </legend>
                <input type="text" onChange={handleChange}
                    name='batch' placeholder={context.data[index].batch} autoComplete='off'/>
            </fieldset>
        </div>
        <div className="edit-button">
            <div className="cancel" onClick={handleCancel}>Cancel</div>
            <div className="update" onClick={handleUpdate}>Update</div>
        </div>
    </>)
}

export default EditPage