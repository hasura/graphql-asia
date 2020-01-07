import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const axios = require('axios');
const arrowPink = require('../images/arrow-pink.svg');
const mail = require('../images/mail.svg');
const twitter = require('../images/twitter.svg');
const location = require('../images/location.svg');
const config = {
  cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdfBUtkb_blWT097EGc1GFwU3xPfH6cgjebkvhoVaxcApWl5w/formResponse'
};
const Input = ({ name, label, value, doChange, type='text'}) => {
  return (
    <label htmlFor={name} className={'fieldLabel pageDescription form-label' }>
      { label }
      <input type={type} id={name} name={name} onChange={doChange} value={value} />
    </label>
  )
}
const clearData = {
  name: { id: 530905603, value: '' },
  email: { id: 1915601994, value: '' },
  message: { id: 312714891, value: '' }
}
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: JSON.parse(JSON.stringify(clearData)),
      isDone: false,
      isFailure: false,
      isSending: false,
      isFormInValid: false,
    }
  }
  doSubmit = async (e) => {

      e.preventDefault();
      const { inputs } = this.state;
      if ( inputs.name.value === '' || inputs.email.value === '' || inputs.message.value === '') {
        this.setState({isFormInValid: true});
        return;
      }
      const formData = new FormData();
      this.setState({isSending: true});
      this.setState({isFormInValid: false});
      Object.keys(inputs).forEach((field) => {
        formData.append(`entry.${inputs[field].id}`, inputs[field].value)
      })
      await axios({
        url: `${config.cors}${config.formUrl}`,
        method: 'post',
        data: formData,
        responseType: 'json'
      })
      .then((response) => {
        console.log('response', response);
        if(response.status === 200) {
          this.setState({isDone: true});
          console.log('clearData', clearData);
          this.setState({inputs: clearData});
          this.setState({isSending: false});
          this.setState({isFailure: false});
        }
      })
      .catch(err => {
        console.log('err', err);
        this.setState({isFailure: true});
        this.setState({isDone: false});
        this.setState({isSending: false});
      })
    }

    handleChange = (e) => {
      const { value, name } = e.target;
      const { inputs } = this.state;
      inputs[name].value = value;
      this.setState({
        inputs
      });
    }
  render() {
    return (
      <div id="speakers" className={'contactWrapper blueGradientBgColor sectionWrapper '}>
        <div className={'container noPadd'}>
            <div className={'sectionHeader'}>
              CONTACT US
            </div>
            <div className={'fieldWrapper'}>
              <div className={'col-md-6 col-sm-6 col-xs-12 noPadd contactBorRight'}>
                <form  name="contact-form" onSubmit={this.doSubmit}>
                  <div className={'field'}>
                    <Input name="name" label="Name" doChange={this.handleChange} value={this.state.inputs.name.value} />
                  </div>
                  <div className={'field'}>
                    <Input name="email" label="Email" doChange={this.handleChange} value={this.state.inputs.email.value} type="email" />
                  </div>
                  <div className={'field'}>
                    <label className={'fieldLabel pageDescription'}>Message</label>
                    <textarea id="message" name="message" rows="6" onChange={this.handleChange} value={this.state.inputs.message.value} />
                  </div>
                  <div className={'buttonWrapper'}>
                    <button className={'sendMessageBtn'}>{(this.state.isSending) ? <span className={'sendingMessage'}>SENDING<span>.</span><span>.</span><span>.</span></span> : (<span>SEND MESSAGE <img src={arrowPink} alt={'Arrow'} /></span>)}</button>
                  </div>
                  {
                    (this.state.isFormInValid) ?
                    (
                      <div className={'successMessage'}>
                        <div className={'successMessageSmall'}>Please enter valid inputs - All fields are mandatory.</div>
                      </div>) : ''
                  }
                  {
                    (this.state.isDone) ?
                    (<div className={'successMessage'}>
                      Thank You!
                      <div className={'successMessageSmall'}>We will get back to you as soon as possible.</div>
                    </div>) : ''
                  }
                  {
                    (this.state.isFailure) ? <div className={'errorMessage'}>Error... Please try again!</div> : ''
                  }
                </form>
              </div>
              <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
                <div className={'contactDetails contactBorBottom'}>
                  <div className={'contactImg'}>
                    <img src={mail} alt={'Mail'} />
                  </div>
                  <div className={'contactName'}>
                    <a href="mailto:hello@graphql.asia">hello@graphql.asia</a>
                  </div>
                </div>
                <div className={'contactDetails contactBorBottom'}>
                  <div className={'contactImg'}>
                    <img src={twitter} alt={'Twitter'} />
                  </div>
                  <div className={'contactName'}>
                    <a href="https://twitter.com/graphqlasia" target="_blank" rel="noopener noreferrer">@graphqlasia</a>
                  </div>
                </div>
                <div className={'contactDetails'}>
                  <div className={'contactImg'}>
                    <img src={location} alt={'Location'} />
                  </div>
                  <div className={'contactName'}>
                    Bengaluru, <span className={'fontNormal'}>Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='footerBorBottom'>
            </div>
        </div>
      </div>
    )};
}

export default Contact
