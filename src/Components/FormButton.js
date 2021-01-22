import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './FormButton.css'
import AddingForm from './AddingForm';

function FormButton() {
    const [FormOpen, setFormOpen] = useState(false)
    const OpenForm = () =>
    {
        setFormOpen(prev => !prev)
    }
    return (
        <div className='Button'>
            <Button onClick={OpenForm} variant="contained" color="primary">Add a Student</Button>
            <AddingForm Formopen = {FormOpen} setFormOpen = {setFormOpen} />
        </div>
    )
}

export default FormButton
