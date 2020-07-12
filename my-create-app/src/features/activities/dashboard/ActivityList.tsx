import React, { SyntheticEvent, useContext } from 'react'
import { Item, Image, Button, Label, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../models/activity'
import { observer } from 'mobx-react-lite'
import ActivityStore from '../../../app/stores/activityStore';

interface IProps{
    //activities:IActivity[];
    //selectActivity:(id:string)=>void,
  //  deleteActivity:(event:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
  //  submitting:boolean;
 //   target:string;
    
}

 const ActivityList:React.FC = () => {
   
   
    const activityStore= useContext(ActivityStore);
    const {activitiesByDate,selectActivity,selectedActivity:activity, deleteActivity,submitting,target} =activityStore;

    console.log(target);
    return (
        <div>
            <Segment clearing>
                <Item.Group divided>
                        {activitiesByDate.map(activity=>(                            
                            <Item key={activity.id}>
                                <Item.Content>
                                    <Item.Header as='a'>{activity.title}</Item.Header>
                                     <Item.Meta>{activity.date}</Item.Meta>
                                    <Item.Description>
                                        <div>{activity.description}</div>
                                        <div>{activity.city},{activity.venue}</div>
                                    </Item.Description>
                                    <Item.Extra>
                                    <Button
                                        name={activity.id}                                                                               
                                        loading={target===activity.id && submitting}
                                        onClick={(event)=>deleteActivity(event,activity.id)} 
                                        floated="right" 
                                        content='delete'
                                        color='red' ></Button>
                                        <Button onClick={()=>selectActivity(activity.id)} 
                                        floated="right" 
                                        content='View'
                                        color='blue' ></Button>
                                        <Label basic content={activity.category}/>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                 ))}                   
                </Item.Group>
            </Segment>
        </div>
    )
}
export default observer(ActivityList);