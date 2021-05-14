import React from 'react'
import { Formik, Field, Form } from "formik"

function MyForm() {
    return ( 
     <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>   
    </form>    
    )
}

export default MyForm
