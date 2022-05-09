import React from 'react';

const DisplayBoxes = (props)  => {




    return(
        <div>
            <legend>Display Component</legend>
            <div style={{
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '600px',
                        gap: '10px',
        }}>
            {
                props.boxes.map((color, index) => {
                    return <div key={index} style={ { backgroundColor: color,
                                                    height: '50px',
                                                    width: '50px',
                                                    display: 'inline-block',
                                                    margin: '5px',
                    } }>
                        {color}
                    </div>
                    
                })
            }

            </div>
        </div>
    )
}

export default DisplayBoxes

