import React from "react";

class App extends React.Component {
  pigLatin = (english) => {
    // https://edstem.org/courses/4230/challenges/15985
    // logic for translating english to pig latin
    // return something
    function toPigLatin(phrase) {
      if (phrase.length == 0) {
        return "";
      }

      let array = phrase.split(" ");

      for (let i = 0; i < array.length; i++) {
        array[i] =
          array[i].slice(1, array[i].length) + array[i].slice(0, 1) + "ay";
      }

      return array.join(" ");
    }
    return toPigLatin(english);
  };

  handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    const english = event.target.value;
    const result = this.pigLatin(english);
    this.setState({ pigLatin: result });
  };

  render() {
    const pigLatin = this.state?.pigLatin;
    return (
      <div className="container">
        <h1>Convert english to pig latin! 🐷</h1>
        <form onChange={this.handleChange}>
          <textarea name="pig" id="pig"></textarea>
          {/* <input type="submit" value="Convert" /> */}
        </form>
        <h1>Output</h1>
        <div className="output">
          <h2>{pigLatin}</h2>
        </div>
      </div>
    );
  }
}

export default App;

// todo

// 1. write the pigLatin function and pass all of the tests
// 2. put the pig latin into the output box
