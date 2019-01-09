import React, { Component } from "react";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    /**
     * userInput: input entered by user
     * filteredList: US states matching the current user input
     * showList: flag used to show and hide suggestion list
     */
    this.state = {
      userInput: "",
      filteredList: [],
      showList: false
    };
  }

  onChange = e => {
    const { data } = this.props;
    const userInput = e.currentTarget.value;
    const filteredList = data.filter(item => {
      return item.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;
    });
    this.setState({
      userInput: e.currentTarget.value,
      filteredList,
      showList: true
    });
  };

  onClick = e => {
    this.setState({
      userInput: e.currentTarget.innerText,
      showList: false
    });
  };

  render() {
    const { userInput, showList, filteredList } = this.state;
    let suggestionsList;
    if (userInput && showList) {
      if (filteredList.length) {
        /**
         * Generating the suggestions list based on user input
         */
        suggestionsList = (
          <ul className="list-wrapper">
            {filteredList.map((item, index) => {
              let listItems = "list-items";
              return (
                <li onClick={this.onClick} className={listItems} key={index}>
                  {Array.from(item).map((letter, index) => {
                    if (letter.toLowerCase() !== userInput.toLowerCase()) {
                      return letter;
                    }
                    return <strong key={index}>{letter}</strong>;
                  })}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsList = <p>No matches found.</p>;
      }
    }
    return (
      <div>
        <input
          value={this.state.userInput}
          className="us-state-input"
          placeholder="States of USA"
          onChange={this.onChange}
        />
        <div>{suggestionsList}</div>
      </div>
    );
  }
}

export default AutoComplete;
