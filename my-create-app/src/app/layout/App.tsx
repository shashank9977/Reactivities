import React, { useState,useEffect, Fragment, SyntheticEvent, useContext} from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'
//import {v4 as uuid} from 'uuid';
//import axios from 'axios';
//import { IActivity } from '../../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard';
import { RadioButtons } from '../../features/activities/dashboard/radiobuttons/RadioButtons';
import { DropdownExample } from '../../features/activities/dashboard/dropdowns/DropdownExample';
import ActivityList  from '../../features/activities/dashboard/ActivityList';
//import Activities  from '../api/agent';
import { LoadingComponent } from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';

const App = ()=> {

  const activityStore= useContext(ActivityStore);
  // const [activities,setActivities]=useState<IActivity[]>([]);
  // const [selectedActivity, setSelectedActivity]=useState<IActivity | null>(null);
  // const [CityActivities, setSelectedActivitiesByCity]=useState<IActivity[]>([]);
  // const [state, setState]=useState<string | null>(null);
  // const [city,setCity]=useState<string|null>(null);
  // const[editMode, setEditMode]=useState(false);
  // const[loading,setLoading]=useState(true);
  // const[submitting,setSubmitting]=useState(false);
  // const[target,setTarget]=useState<string>('');

// const handleSelectActivity=(id:string)=>{
//   setSelectedActivity(activities.filter(a=>a.id===id)[0]);
//   setEditMode(false);
// }

// const handleOpenCreateForm=()=>{
//   setSelectedActivity(null);
//   setEditMode(true);
// }

// const handleSetState=(state:string)=>{

//   setState(state);

// }
// const handleSetCity=(city:string)=>{

//   setCity(city);
//   setSelectedActivitiesByCity(activities.filter(a=>a.city===city));

// }

// const handleCreateActivity=(activity:IActivity)=>{

//   setSubmitting(true);
//   Activities.create(activity).then((response)=>{
//     setActivities([...activities, activity]);
//     setSelectedActivity(activity);
//     setEditMode(false);
//   }).then(()=>setSubmitting(false));
 
// }

// const handleEditActivity=(activity:IActivity)=>{

//   setSubmitting(true);
//   Activities.update(activity).then((response)=>{
//     setActivities([...activities.filter(a=>a.id!==activity.id), activity]);
//     setSelectedActivity(activity);
//     setEditMode(false);
//   }).then(()=>setSubmitting(false));;

// }

// const HandledeleteActivity=(event:SyntheticEvent<HTMLButtonElement>,id:string)=>{
//     setSubmitting(true);
//     setTarget(event.currentTarget.name);
//   Activities.delete(id).then((response)=>{
//     setActivities([...activities.filter(a=>a.id!=id)]);
//   }).then(()=>setSubmitting(false));
// }

  useEffect(()=>{
    activityStore.loadActivities();
  },[activityStore]);

  //[] is used to prevent the component from rerendering

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...'/>
    return (
      <Fragment>
       <NavBar/>
       <Container style={{marginTop:'7em'}}>
        <ActivityDashBoard 
            // activities={activityStore.activities} 
            // //selectActivity={handleSelectActivity} 
            // setEditMode={setEditMode}
            // //setSelectedActivity={setSelectedActivity}
            // //createActivity={handleCreateActivity}
            // //editActivity={handleEditActivity}
            // deleteActivity={HandledeleteActivity}
            // submitting={submitting}
            // target={target}
            />           
            {/* <RadioButtons state={state!} city={city!} selectState={handleSetState} selectCity={handleSetCity} /> */}
            <br/>
            {/* <DropdownExample city={city!}/> */}
           {/* {city!=null && <ActivityList activities={CityActivities} selectActivity={handleSelectActivity} />} */}
           
       </Container>
      </Fragment>
    );
  

}

export default observer(App);
