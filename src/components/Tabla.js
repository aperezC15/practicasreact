import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nombre', field: 'name' },
      { title: 'Apellido', field: 'surname' },
      { title: 'Cumpleaños', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Guatemala', 63: 'Retalhuleu' },
      },
    ],
    data: [
      { name: 'Ana', surname: 'Lopez', birthYear: 1987, birthCity: 63 },
      {
        name: 'Jorge',
        surname: 'Santos',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Tabla"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}