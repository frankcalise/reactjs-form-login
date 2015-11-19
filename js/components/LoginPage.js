import React from 'react';
import FormLogin from './FormLogin';

export default class LoginPage extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            <FormLogin />
          </div>
        </div>
      </section>
    )
  }
}