import React from 'react';
import Button from './Button';

export default class FormLogin extends React.Component {
  handleSignInClicked() {
    alert('Do some logging in!')
  }
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <Button
                clickHandler={this.handleSignInClicked}
                className="btn-default"
                label="Sign In"
                />
            </div>
          </div>
        </form>
      </div>
    )
  }
}