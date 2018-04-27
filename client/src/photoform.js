import React from 'react';
import { connect } from 'react-redux';
import { submitPhoto } from './actions/index';
import './photoform.css';
class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      url: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.url);
    console.log(this.state.username);
    console.log(this.state.description);
  }
  onSubmit(e) {
    e.preventDefault();
    const photo = {
      username: this.state.username,
      description: this.state.description,
      url: this.state.url,
    };
    this.props.submitPhoto(photo);
  }
  required(value) {
    value ? undefined : 'Required';
  }

  render() {
    const reviewSubmit =
      this.props.form.submitted !== false
        ? 'Your Photo has been submitted'
        : undefined;
    return (
      <form className="sub-container" onSubmit={this.onSubmit}>
        <h3>{reviewSubmit}</h3>
        <div>
          <label>Enter Your Username</label> <br />
          <input
            className="sub-username"
            name="username"
            type="text"
            onChange={this.onChange}
            validate={this.required}
            required
          />
        </div>
        <div>
          <label>Description</label> <br />
          <textarea
            className="sub-description"
            name="description"
            type="textarea"
            onChange={this.onChange}
            required
          />
        </div>
        <div>
          <br />
          <label>Image Url</label> <br />
          <input
            className="img-url"
            name="url"
            type="text"
            onChange={this.onChange}
          />
        </div>
        <div>
          <br />
          <button className="sub-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, { submitPhoto })(PhotoForm);
