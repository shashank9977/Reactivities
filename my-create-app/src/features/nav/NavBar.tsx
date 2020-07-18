import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';


interface IProps{
    openCreateForm: () => void;
}


export const NavBar :React.FC= () => {

//const activityStore=useContext(ActivityStore);

    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>      
                        <Menu.Item name='home' as ={NavLink} exact to="/">
                            <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                            Reactivities
                        </Menu.Item>
                        <Menu.Item name='Activities'  as ={NavLink} to="/activities"/>
                        <Menu.Item >
                            <Button  as ={NavLink} to="/createActivity" positive content='Create Activity' />
                        </Menu.Item>                           
                </Container>
            </Menu>      
        </div>
    )
}

export default observer(NavBar);
