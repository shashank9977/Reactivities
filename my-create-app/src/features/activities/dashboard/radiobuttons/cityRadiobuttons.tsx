import React, { useState } from 'react'
import { Form, Radio } from 'semantic-ui-react'

interface IProps{

    state:string;
    city:string;
    selectCity:(city: string)=>void;

}


export const CityRadiobuttons:React.FC<IProps> = ({state,selectCity, city}) => {

  //  const [city,setCity]=useState<string>('');


    const handleChangeCity = (event:any,{value}:any)=>{
        //setCity(event.)
        selectCity(value);
    }

    return (
       
        <Form>          
                <Form.Field>
                Selected city: <b>{city}</b>
                </Form.Field>
            
            {state=="Telangana" && 
                <Form.Field>
                    <Radio
                        label='Hyderabad'
                        name='radioGroup1'
                        value='Hyderabad'
                        checked={city==='Hyderabad'}
                        onChange={handleChangeCity}
                    />
                </Form.Field>                
            }
               {state=="Telangana" && 
                    <Form.Field>
                        <Radio
                            label='Visakhapatnam'
                            name='radioGroup1'
                            value='Visakhapatnam'
                            checked={city==='Visakhapatnam'}
                            onChange={handleChangeCity}
                        />
                    </Form.Field>
            }

                    {state=="Andhra Pradesh" && 
                                <Form.Field>
                                    <Radio
                                        label='Paris'
                                        name='radioGroup1'
                                        value='Paris'
                                        checked={city==='Paris'}
                                        onChange={handleChangeCity}
                                    />
                                </Form.Field>
                    }
                    {state=="Andhra Pradesh" && 
                                <Form.Field>
                                    <Radio
                                        label='London'
                                        name='radioGroup1'
                                        value='London'
                                        checked={city==='London'}
                                        onChange={handleChangeCity}
                                    />
                                </Form.Field>
                    }
        </Form>      
    )
}
