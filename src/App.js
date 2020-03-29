import React from 'react';
import {Admin, Resource} from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data';
import PostList from "./components/PostList";

const dataProvider = fakeRestProvider(data, true);


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={PostList}/>
    </Admin>
);

export default App;
