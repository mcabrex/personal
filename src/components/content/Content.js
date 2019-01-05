import React, { Component } from "react";
import { ProjectDisplays } from "./projects";

import Title from "./Title";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //set the projects obj to state
    this.setState({
      description: "developer. engineer. another buzzword."
    });
  }

  handleClick(evt) {
    //grabbing the project name through the background image url on click
    const { backgroundImage } = evt.target.style;
    //backgroundImage gonna be a url, just slicing it to grab the project name
    const project = backgroundImage.slice(19, backgroundImage.length - 6);
    const { projects } = this.state;
    this.setState({
      projectClicked: true,
      //set currentProject to the grabbed project name from the state projects obj
      currentProject: projects[project]
    });
  }

  render() {
    const { description } = this.state;
    return (
      <div className="content">
        <div className="title">
          <Title />
          <h2 className="title-description">{description}</h2>
        </div>
        <div className="carousel">
          {/* carousel slides will go here */}
          <ProjectDisplays />
        </div>
        <div>
          Some Links ->
          <a
            rel="noopener noreferrer"
            href="https://github.com/mcabrex"
            target="_blank"
            className="title-links"
          >
            github.com/mcabrex
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mcabardo/"
            target="_blank"
            className="title-links"
          >
            linkedin.com/in/mcabardo 
          </a>
        </div>
      </div>
    );
  }
}

export default Content;