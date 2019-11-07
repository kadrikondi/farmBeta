import React, { Component } from "react";
import "../css/SearchBar.css";
import { Input, Message, Form ,Icon, Button} from 'semantic-ui-react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendValueToParent = this.sendValueToParent.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  sendValueToParent(event) {
    event.preventDefault();
    // Check if the input field has been submitted empty or if it contains numbers
    if (this.state.value.trim() === "" || this.state.value.match(/\d+/g) !== null) {
      this.setState({ warning: true });
    } else {
      this.props.callBackFromParent(this.state.value);
      this.setState({ warning: false });
    }
  }

  render() {
    const errorMessage = (
      < Message error header = "There was an error"
      className = "alert alert-danger p3"
      content = {
        this.props.error
      }
      />
    );
    const warningMessage = (
      <Message className="alert alert-danger text-dark p3" warning header="Please check that you've entered a valid city" />
    );
    

    return (
      <div className="SearchBar">
        {/* <Input action='Search' placeholder='Search...' /> */}
        
        {this.props.error && errorMessage}
        {this.state.warning && warningMessage}
        <Form onSubmit={this.sendValueToParent}>
          <input style={{padding:'10px',border:'2px solid green'}}
            className="SearchBar-input"
            placeholder="Search the weather in..."
            // action={{ icon: "search" }} 
            action = 'Search'
            onChange={this.handleChange}
            value={this.state.value}
            size="huge"
            type="text"
            autoFocus
          />   <Button type='submit' className="btn btn-success">Search</Button > 
        </Form>
      </div>
    );
  }
}

export default SearchBar;
