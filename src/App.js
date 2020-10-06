import React from 'react';
import { Admin, Datagrid, List, Resource, TextField } from 'react-admin';
import './App.css';

const authProvider = {
  login: params => Promise.resolve(),
  logout: params => Promise.resolve(),
  checkAuth: params => Promise.resolve(),
  checkError: error => Promise.resolve(),
  getPermissions: params => Promise.resolve(),
  getIdentity: () => Promise.resolve(),
};

const dataProvider = {
  getList:    (resource, params) => Promise.resolve({data: [{id:1, title:"alma", body: "fa"}, {id:2, title:"alma", body: "fa"}], total:2}),
  getOne:     (resource, params) => Promise.resolve(),
  getMany:    (resource, params) => Promise.resolve(),
  getManyReference: (resource, params) => Promise.resolve(),
  create:     (resource, params) => Promise.resolve(),
  update:     (resource, params) => Promise.resolve(),
  updateMany: (resource, params) => Promise.resolve(),
  delete:     (resource, params) => Promise.resolve(),
  deleteMany: (resource, params) => Promise.resolve(),
}

const UserList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
      </Datagrid>
  </List>
);

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
