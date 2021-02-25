import React,{useState} from 'react'
import { Form } from 'react-bootstrap';

     const BootstrapDate=()=>{
        const[selectedDate,setSelectedDate]=useState(null)

        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control selectedDate={setSelectedDate} onClick={date=>setSelectedDate(date)} type="date" name="dob" placeholder="Date" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
        }
       
     
export default BootstrapDate;