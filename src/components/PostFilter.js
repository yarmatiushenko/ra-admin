import {Filter, ReferenceInput, SelectInput} from "react-admin";
import React from "react";

const PostFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Name" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);


export default PostFilter;
