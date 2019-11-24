import React from 'react';
import MaterialTable from 'material-table';
import Icon from '@material-ui/core/Icon';



export default function OrderTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Decription', field: 'description' },
      { title: 'Price', field: 'price', type: 'float' },
      {
       
      },
    ],
    data: [
      { name: 'Hippo', description: 'Writing Utensil', price: 12.00 },
      {
        name: 'Pencil',
        description: 'Writing Utensil',
        price: 16.00,
      },
    ],
  });

  return (
    <MaterialTable
    title="Orders"
    columns={state.columns}
    data={state.data}
    editable={{
      onRowAdd: newData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            setState(prevState => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              setState(prevState => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }, 600);
        }),
      onRowDelete: oldData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            setState(prevState => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }, 600);
        }),
    }}
  />
  );
}