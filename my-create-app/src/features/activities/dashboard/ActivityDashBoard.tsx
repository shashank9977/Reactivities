import React, { SyntheticEvent, useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../models/activity';
import  ActivityList  from './ActivityList';
import { ActivityDetails } from '../../details/ActivityDetails';
import  ActivityForm  from '../../form/ActivityForm';
import {observer} from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore'

interface IProps{
   // activities:IActivity[],
  //  selectActivity:(id:string)=>void;
   // setEditMode:(editMode:boolean)=>void;
    //setSelectedActivity:(activity:IActivity|null)=>void;
  //  createActivity:(activity:IActivity)=>void;
  //  editActivity:(activity:IActivity)=>void;
   // deleteActivity:(event:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
  //  submitting:boolean;
    //target:string;
}

const ActivityDashBoard:React.FC<IProps> = () => {

    const activityStore= useContext(ActivityStore);

    const {editMode,selectedActivity}=activityStore;

    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityList/>
                </Grid.Column>
                <Grid.Column width={6}>
                   {selectedActivity && !editMode && (<ActivityDetails/>)}
                   {editMode && (<ActivityForm key={selectedActivity && selectedActivity.id || 0} activity={selectedActivity}/>)}
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default observer(ActivityDashBoard);
