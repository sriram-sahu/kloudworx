import { Component } from "react";

class App extends Component{
  componentDidMount() {
    this.getProducts()
  }

  getProducts=()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log());
  }
}

export default App