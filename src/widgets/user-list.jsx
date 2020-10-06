// // in src/App.js
// import * as React from "react";
// import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

// import { PostList } from './posts';

// const App = () => (
//     <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
//         <Resource name="posts" list={PostList} />
//     </Admin>
// );

// export default App;

// // in src/posts.js
// import * as React from "react";
// import { List, Datagrid, TextField } from 'react-admin';

// export const PostList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );