import React, { useEffect, useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import  ActivityList  from './ActivityList';
import {observer} from 'mobx-react-lite';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import ActivityStore from '../../../app/stores/activityStore';
// interface IProps{
//    // activities:IActivity[],
//   //  selectActivity:(id:string)=>void;
//    // setEditMode:(editMode:boolean)=>void;
//     //setSelectedActivity:(activity:IActivity|null)=>void;
//   //  createActivity:(activity:IActivity)=>void;
//   //  editActivity:(activity:IActivity)=>void;
//    // deleteActivity:(event:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
//   //  submitting:boolean;
//     //target:string;
// }

const ActivityDashBoard:React.FC = () => {
    
    const activityStore= useContext(ActivityStore);
   // const activityStore= useContext(ActivityStore);

    //const {editMode,activity}=activityStore;

    useEffect(()=>{
        activityStore.loadActivities();
      },[activityStore]);
    
      //[] is used to prevent the component from rerendering
    
      if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...'/>

    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList/>
                </Grid.Column>
                <Grid.Column width={6}>
                   <h2>Activity filters</h2>;
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default observer(ActivityDashBoard);
