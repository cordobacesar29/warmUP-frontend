import {Switch,  Route} from "react-router-dom";
import { Home} from './Home';
import { Detail } from './Detail';
import { CreateForm } from './CreateForm';
import { EditForm } from './EditForm';

import { PostContextProvider } from '../context/PostContext'; // import context

// create route navigator
export const Page = () => {
  return(
    <PostContextProvider>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/createForm" component={CreateForm}/>
        <Route exact path="/editForm/:id" component={EditForm}/>
      </Switch>
    </PostContextProvider>
  )
}