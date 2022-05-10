import React, {useState} from 'react';
import './Tabs.css';


const Tabs = (props) => {


    const [tabs, setTabs] = useState([ 
        {
        label:"Tab1",
        content: "Tab 1 content is showing here."
        },
        {
        label:"Tab2",
        content: "Tab 2 content is showing here."
        },
        {
        label:"Tab3",
        content: "Tab 3 content is showing here."
        }
    ]);


    const [selectedTab, setSelectedTab] = useState(0);

    const onClickHandler = (e, index) => {
        e.preventDefault();
        setSelectedTab(index);
        
    }









    return(
        <div className='container'>
            <p>{JSON.stringify(tabs)}</p>
            <div className='tabSelect'>
                {
                    tabs.map((tab, index) => {
                        return <div key={index}>
                        <button className='tab' onClick={ (e) => onClickHandler(e, index)}>{tab.label}</button>
                        </div>
                    })
                }

            </div>
            <div className='contentContainer'>
                    <p>{tabs[selectedTab].content}</p>

            </div>
        </div>
    )
}

export default Tabs;