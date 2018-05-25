import React from "react";
import "./cake.css";
import Search from "./Search";
import Cake from "./Cake";

export class CakeList extends React.Component {
  constructor() {
    super();
    this.state = {
      cakes: [],
      cakesDisplayed: [] //only cakes we are displaying now
    };
    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
    )
      .then(data => data.json())
      .then(serverCakes => {
        return this.setState({
          cakes: serverCakes,
          cakesDisplayed: serverCakes
        });
      });
  }

  onchangeHandler = event => {
    const value = event.target.value;
    const filteredCake = this.state.cakesDisplayed.filter(
      cake => cake.title.includes(value) || cake.desc.includes(value)
    );
    this.setState({
      cakes: filteredCake
    });
  };

  render() {
    return (
      <div>
        <Search onChange={this.onchangeHandler} />
        <p>
          {this.state.cakes.map((cake, index) => {
            return <Cake key={index} {...cake} />;
          })}
        </p>
      </div>
    );
  }
}
