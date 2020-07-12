import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react';


interface IProps
{
    city:string;
}


export const DropdownExample :React.FC<IProps>= ({city}) => {
    
    console.log(city);

    const options = [
        { key: 1, text: 'Hyderabad', value: 'Hyderabad' },
        { key: 2, text: 'Karimnagar', value: 'Karimnagar' },
        { key: 3, text: 'Visakhapatnam', value: 'Visakhapatnam' },
        { key: 4, text: 'Vijayawada', value: 'Vijayawada' },
        { key: 5, text: 'Chennai', value: 'Chennai' },
      ]
    
    return (
            <Menu compact>
                <Dropdown placeholder='Choices' search selection options={options} value={city}/>
            </Menu>
        );    
}
