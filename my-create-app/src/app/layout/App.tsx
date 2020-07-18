import React, {useEffect, Fragment, useContext} from 'react';

//import {v4 as uuid} from 'uuid';
//import axios from 'axios';
//import { IActivity } from '../../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import ActivityDashBoard from '../../features/activities/dashboard/ActivityDashBoard';
//import Activities  from '../api/agent';
import { LoadingComponent } from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';
import { HomePage } from '../../features/Home/HomePage';
import { Route,withRouter, RouteComponentProps } from 'react-router-dom';
import ActivityForm from '../../features/form/ActivityForm';
import  ActivityDetails  from '../../features/details/ActivityDetails';
import { Container } from 'semantic-ui-react';

const App:React.FC<RouteComponentProps>= ({location})=> {


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


    return (
      <Fragment>
          <Route exact path='/' component={HomePage}/>
          <Route path={'/(.+)'} render={()=>(

              <Fragment>

              <NavBar/>
              <Container style={{marginTop:'7em'}}>                
                <Route exact path='/activities' component={ActivityDashBoard}/>
                <Route path='/activities/:id' component={ActivityDetails}/>
                <Route key={location.key} path={['/createActivity','/manage/:id']} component={ActivityForm}/>
                
                {/* <ActivityDashBoard 
                    // activities={activityStore.activities} 
                    // //selectActivity={handleSelectActivity} 
                    // setEditMode={setEditMode}
                    // //setSelectedActivity={setSelectedActivity}
                    // //createActivity={handleCreateActivity}
                    // //editActivity={handleEditActivity}
                    // deleteActivity={HandledeleteActivity}
                    // submitting={submitting}
                    // target={target}
                    />            */}
                    {/* <RadioButtons state={state!} city={city!} selectState={handleSetState} selectCity={handleSetCity} /> */}
                    <br/>
                    {/* <DropdownExample city={city!}/> */}
                  {/* {city!=null && <ActivityList activities={CityActivities} selectActivity={handleSelectActivity} />} */}
                  
              </Container>
              </Fragment>
          )}/>

      </Fragment>
    );
}

export default  withRouter(observer(App));
