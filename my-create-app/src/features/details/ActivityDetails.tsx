import React, { useContext, useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../app/stores/activityStore';
import { RouteComponentProps, Link } from 'react-router-dom';
import { LoadingComponent } from '../../app/layout/LoadingComponent';

//  interface Iprops{
//     activity:IActivity|undefined;
//     //setEditMode:(editMode:boolean)=>void;
//     //setSelectedActivity:(activity:IActivity|null)=>void;
// }

interface DetailParams{
    id:string
}

 const ActivityDetails:React.FC<RouteComponentProps<DetailParams>> = ({match,history}) => {
    console.log("here");
    
    const activityStore= useContext(ActivityStore);
    const {activity,loadActivity,loadingInitial}=activityStore;

    useEffect(() => {
        loadActivity(match.params.id)
    },[loadActivity,match.params.id]);

    //console.log(activity);
    if(loadingInitial || !activity) return <LoadingComponent content="Loading Activity.."/>

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
                        <Button as={Link} to={`/manage/${activity.id}` } basic color='blue' content='Edit'/>
                        <Button basic color='grey' content='Cancel' onClick={()=>history.push('/activities')} />
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    )
}

export default observer(ActivityDetails);
