import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props)  => {
  const [state, setState] = useState({ name: '', gender: '', age: '', setores: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, gender, age, setores } = steps;
    setState({ name, gender, age, setores });
  }, [props])

    const { name, gender, age, setores } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Informações</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Falar com</td>
              <td>{setores.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

Dashboard.propTypes = {
  steps: PropTypes.object,
};

Dashboard.defaultProps = {
  steps: undefined,
};

export default Dashboard;