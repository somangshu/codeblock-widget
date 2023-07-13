import logo from './logo.svg';
import './App.css';
import { CopyBlock, CodeBlock, dracula, github, nord, rainbow} from "react-code-blocks";
import React from "react";

const themes = {
  dracula: dracula,
  github: github,
  nord: nord,
  rainbow: rainbow,
};

function CopyCodeComponent(props) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      wrapLongLines={props.wrapLines}
      theme={themes[props.theme]}
      codeBlock={true}
    />
  );
}

function PreviewCodeComponent(props) {
  return (
    <CodeBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      wrapLongLines={props.wrapLines}
      theme={themes[props.theme]}
    />
  );
}

//react class component
class App extends React.Component {
  // define state
  constructor(props) {
    super(props);
    this.state = {
      isCopyRequired: true,
      customProps: {
        code: "let addNumbers = (x,y) => x+y;",
        language: "javascript",
        showLineNumbers: true,
        theme: "rainbow",
        wrapLines: true,
      },
    };
  }

  //component lifecycle method
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      this.state.isCopyRequired ? <CopyCodeComponent
        {...this.state.customProps}
      /> : <PreviewCodeComponent
        {...this.state.customProps}
      />
    );
  }
}


export default App;
