import React, { useContext, useEffect } from 'react';
import { Card, Image, Button, Grid, GridColumn } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../app/stores/activityStore';
import { RouteComponentProps, Link } from 'react-router-dom';
import { LoadingComponent } from '../../app/layout/LoadingComponent';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import { ActivityDetailsInfo } from './ActivityDetailsInfo';
import { ActivityDetailsChat } from './ActivityDetailsChat';
import { ActivityDetailsSidebar } from './ActivityDetailsSidebar';

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
             <Grid>
                 <GridColumn width={10}>
                    <ActivityDetailsHeader activity={activity}/>
                    <ActivityDetailsInfo activity={activity}/>
                    <ActivityDetailsChat/>
                 </GridColumn>
                 <GridColumn width={6}>
                    <ActivityDetailsSidebar/>
                </GridColumn>
             </Grid>    
    )
}

export default observer(ActivityDetails);
