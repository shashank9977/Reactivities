import React, { useContext } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { IActivity } from '../../models/activity';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../app/stores/activityStore';

//  interface Iprops{
//     activity:IActivity|undefined;
//     //setEditMode:(editMode:boolean)=>void;
//     //setSelectedActivity:(activity:IActivity|null)=>void;
// }


export const ActivityDetails:React.FC = () => {

    const activityStore= useContext(ActivityStore);
    const {selectedActivity:activity,openEditForm,cancelSelectedActivity}=activityStore;

    return (
        <div>
              <Card fluid>
                <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity!.date}</span>
                </Card.Meta>
                <Card.Description>
                {activity!.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group width={2}>
                        <Button basic color='blue' content='Edit' onClick={()=>openEditForm(activity!.id)}/>
                        <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity} />
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    )
}

export default observer(ActivityDetails);
