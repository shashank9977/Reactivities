import React, { useState } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import {  CityRadiobuttons } from './cityRadiobuttons';


interface IProps{

    state:string;
    city:string;
    selectState:(state: string)=>void;
    selectCity:(city: string)=>void;
}

export const RadioButtons:React.FC<IProps>= ({state, selectState,selectCity, city}) => {

    //const [state,setState]=useState<string|null>(null);
   // const [city,setCity]=useState<string>('');

    const handleChangeState = (event:any,{value}:any)=>{
        //setCity(event.)
      //  setState(value);
      selectState(value);
     //   console.log({value});
       // console.log(event.target.value);

    }

    return (
        <Form>
            <Form.Field>
             Selected state: <b>{state}</b>
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Telangana'
                    name='radioGroup'
                    value='Telangana'
                    checked={state==='Telangana'}
                    onChange={handleChangeState}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Andhra Pradesh'
                    name='radioGroup'
                    value='Andhra Pradesh'
                    checked={state==='Andhra Pradesh'}
                    onChange={handleChangeState}
                />
            </Form.Field>
            
           {state!=null && <CityRadiobuttons state={state} city={city} selectCity={selectCity} /> }
        
      </Form>  
    )
}
