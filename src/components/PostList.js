import {Datagrid, List, TextField} from "react-admin";
import PostFilter from "./PostFilter";
import Map from "./Map";
import React from "react";

const UrlField = ({record, source}) => <a href={record[source]}>{record.company.name}</a>;


const PostList = (props) => (
    <List {...props} filters={<PostFilter/>}>
        <Datagrid expand={<Map {...props} />}>
            <TextField source="name"/>
            <TextField source="username"/>
            <TextField source="email"/>
            <UrlField source="website" label="Company name"/>
        </Datagrid>
    </List>
);

export default PostList;
