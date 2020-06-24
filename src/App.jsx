import React from 'react';

class App extends React.Component {

  pigLatin = (english) => {
      let words = english.split(" ")
      let newWord = ""
      let res = []
      
      if (english.length < 1) {
        return ""
      }
      words.forEach(function(index) {
        let first = index.charAt(0);
      
        newWord = index.replace(first,"")+ first + "ay"
        res.push(newWord)
       });
       return res.join(" ")
      }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const english = event.target[0].value
    const result = this.pigLatin(english)
    this.setState({ pigLatin: result })
  }

  render() {
    const pigLatin = this.state?.pigLatin
    return (
      <div className="container">
        <h1>Convert english to pig latin! 🐷</h1>
        <form onSubmit={this.handleSubmit} >
          <textarea name="pig" id="pig"></textarea>
          <input type="submit" value="Convert"/>
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