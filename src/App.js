import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout.js'
import Quiz from './containers/Quiz/Quiz.js'
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";

function App() {

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth}/>
      <Route path="/quiz/:id" component={Quiz}/>
      <Route path="/" component={QuizList}/>
      <Redirect to="/"/>
    </Switch>
  );

  if (this.props.isAuthentificated) {
    routes = (
      <Switch>
        <Route path="/quiz-creator" component={QuizCreator}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/" component={QuizList}/>
        <Route path="/logout" component={Logout}/>
        <Redirect to="/"/>
      </Switch>
    );
  }

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.audio.token
  }
}

export default connect(mapStateToProps)(App);
