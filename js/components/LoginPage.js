import React from 'react';
import Header from './Header';
import FormLogin from './FormLogin';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <section className="container">
          <div className="row">
            <div className="col-sm-12">
              <FormLogin />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LoginPage;