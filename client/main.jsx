import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App      from '../imports/ui/App.jsx';
import Form     from '../imports/ui/Form.jsx';
import NotFound from '../imports/ui/App.jsx';
import Update from '../imports/ui/Update.jsx';

import {BrowserRouter, Route } from "react-router-dom";

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <div>
                <Route name="login" path="/app"  component={ App } />
                <Route name="form"  path="/form" component={ Form } />
            </div>
        </BrowserRouter>,
        document.getElementById('render-target')
    );
  //render(<App query=""/>, document.getElementById('render-target'));
  //render(<Update />, document.getElementById('render-target'));
});
