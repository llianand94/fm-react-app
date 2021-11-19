import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SingInForm.module.css';

const initialState= {  
  email:'',
  pwd:'',
  emailValid:false,
  pwdValid:false,
}

class SingInForm extends Component {
  constructor(props){
    super(props)
    this.state={...initialState};
  }

  handleForm=(e)=>{
    e.preventDefault();
    e.target.reset();
    this.setState({...initialState});
  }

  handleInput=({target:{name,value}})=>this.setState({  [name]:value, 
    [name+'Valid']:!value.includes(' ')})
  
  render() {
    const {email, pwd,emailValid, pwdValid} = this.state;
    const emaiClassName = `${styles.input} ${emailValid?styles.valid: styles.invalid}`;
    const pwdClassName = `${styles.input} ${pwdValid?styles.valid: styles.invalid}`;

    return (
      <form  className={styles.container} onSubmit={this.handleForm}>
        <input  className={emaiClassName} 
        value={email}
        onChange={this.handleInput} type="text" name="email" placeholder="Ender email" required></input>
        <input className={pwdClassName}
        value={pwd}
        onChange={this.handleInput}
        type="password" name="pwd" placeholder="Ender your password"  required/>
        <input className={styles.btn}type="submit" value="Sing In"/>
      </form>
    );
  }
}

export default SingInForm;
