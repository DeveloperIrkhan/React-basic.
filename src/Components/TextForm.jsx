import React, { Component } from "react";
 
export default class TextForm extends Component {
    state={
        Text:"",
    }
    render() {
      const ConvertTextToUpperCase =(e)=>{
        let NewText = this.state.Text.toUpperCase()  
        this.setState({
             Text:NewText
          })
      }
      const handleOnChange=(event)=>{
        this.setState({
           Text:event.target.value
        })
      }
    return (
      <div className="container my-5">
          <div className="form-group">
            <h4 htmlFor="exampleFormControlTextarea1">
              {this.props.Heading}
            </h4>
            <textarea value={this.state.Text}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              onChange={handleOnChange}
            ></textarea>
          </div>
        <div className="form-group d-flex justify-content-center">
            <button className="btn btn-primary mx-2" onClick={ConvertTextToUpperCase}>UpperCase</button>
            <button className="btn btn-success mx-2">Button</button>
            <button className="btn btn-success mx-2">Button</button>
            <button className="btn btn-success mx-2">Button</button>
        </div>
      </div>
    );
  }
}
