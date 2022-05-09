import React, { useState } from 'react';

const ColorForm = (props) => {
    const[ color, setColor] = useState("blue");



    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox( color )
        setColor("");
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    {JSON.stringify(color)}
                </div>
                <div>
                    <label>Color: </label>
                    <input onChange = { (e) => setColor(e.target.value)} value={ color }/>
                </div>
                <input type="submit" value="Add Box"></input>
            </form>
        </div>
    )
}

export default ColorForm;