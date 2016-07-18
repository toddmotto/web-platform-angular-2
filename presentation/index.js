// Import React
import React from "react";
import { render } from "react-dom";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require('font-awesome-webpack');

const images = {
  bg: require("../assets/bg.png"),
  twitter: require("../assets/twitter.png"),
  front: require("../assets/angular.svg"),
  telerik: require("../assets/telerik.svg"),
  ngmigrate: require("../assets/ngmigrate.svg"),
  type1: require("../assets/types/1.jpg"),
  type2: require("../assets/types/2.jpg"),
  type3: require("../assets/types/3.jpg"),
  type4: require("../assets/types/4.jpg"),
  type5: require("../assets/types/5.jpg"),
  type6: require("../assets/types/6.jpg"),
  architecture0: require("../assets/architecture/c-0.jpg"),
  architecture1: require("../assets/architecture/c-1.jpg"),
  architecture2: require("../assets/architecture/c-2.jpg"),
  architecture3: require("../assets/architecture/c-3.jpg"),
  architecture4: require("../assets/architecture/c-4.jpg"),
  architecture5: require("../assets/architecture/c-5.jpg"),
  architecture6: require("../assets/architecture/c-6.jpg"),
  architecture7: require("../assets/architecture/c-7.jpg"),
  architecture8: require("../assets/architecture/c-8.jpg"),
  architecture9: require("../assets/architecture/c-9.jpg"),
  architecture10: require("../assets/architecture/c-10.jpg"),
  architecture11: require("../assets/architecture/c-11.jpg"),
  architecture12: require("../assets/architecture/c-12.jpg"),
  architecture13: require("../assets/architecture/c-13.jpg"),
  architecture14: require("../assets/architecture/c-14.jpg"),
  flow0: require("../assets/flow/0.jpg"),
  flow1: require("../assets/flow/1.jpg"),
  flow2: require("../assets/flow/2.jpg"),
  flow3: require("../assets/flow/3.jpg"),
  flow4: require("../assets/flow/4.jpg"),
  flow5: require("../assets/flow/5.jpg"),
  flow6: require("../assets/flow/6.jpg"),
  flow7: require("../assets/flow/7.jpg"),
  flow8: require("../assets/flow/8.jpg"),
  flow9: require("../assets/flow/9.jpg"),
  google: require("../assets/google.png"),
};

preloader(images);

const theme = createTheme({
  primary: '#263238',
  tertiary: '#0143a3',
  grey: '#37474f',
});

const headingFont = {
  fontFamily: 'Air Americana',
  fontWeight: 'normal',
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck controls={false} progress="bar" transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Component architecture
            </Heading>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              and Angular 2
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.telerik} style={{maxWidth: '100%'}} />
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.ngmigrate} style={{maxWidth: '100%'}} />
            <Heading size={5} caps lineHeight={1} style={headingFont} textColor="white">
              ngmigrate.telerik.com
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Image src={images.twitter} style={{maxWidth: '60%'}} />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              Talk overview
            </Heading>
            <List textColor="white">
              <ListItem>Component architecture</ListItem>
              <ListItem>Types of Components</ListItem>
              <ListItem>One-way dataflow</ListItem>
              <ListItem>Angular 2 implementation</ListItem>
              <ListItem>Web Component integration</ListItem>
              <ListItem>Bootstrapping, Components, Routing</ListItem>
              <ListItem>Server-side and Web Worker rendering</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              What is Angular 2?
            </Heading>
            <List textColor="white">
              <ListItem>Successor to Angular 1.x</ListItem>
              <ListItem>Cutting edge and future focused</ListItem>
              <ListItem>Sits on top of the web platform</ListItem>
              <ListItem>Component-based architecture</ListItem>
              <ListItem>Web, mobile web</ListItem>
              <ListItem>Native mobile (NativeScript) and desktop</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              Think of Angular 2
            </Heading>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              as a platform
            </Heading>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              not a framework
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              Angular 2 Anatomy
            </Heading>
            <List textColor="white">
              <ListItem>Angular core, modules (routing/http/etc)</ListItem>
              <ListItem>Components, one-way dataflow</ListItem>
              <ListItem>RxJS, TypeScript, CLI</ListItem>
              <ListItem>Template compiler</ListItem>
              <ListItem>Dependency Injection, Zones</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Component architecture
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.architecture0}></Slide>
          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.architecture1}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture2}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture3}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture4}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture5}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture6}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture7}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture8}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture9}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture10}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture11}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture12}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture13}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.architecture14}></Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Types of Components
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.type1}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.type2}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.type3}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.type4}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.type5}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.type6}></Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              One-way data flow
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.flow0}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow6}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow7}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow8}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow9}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow1}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow2}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow3}></Slide>
          <Slide transition={[""]} bgColor="tertiary" bgImage={images.flow4}></Slide>

          <Slide transition={["slide"]}>
            <List textColor="white">
              <ListItem>Data down, events up</ListItem>
              <ListItem>Components are APIs</ListItem>
              <ListItem>Well-defined Inputs/Outputs</ListItem>
              <ListItem>"What role does your Component play?"</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Angular 2
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <List textColor="white">
              <ListItem>Component architecture</ListItem>
              <ListItem>Bootstrapping</ListItem>
              <ListItem>Components + Shadow DOM</ListItem>
              <ListItem>One-way dataflow</ListItem>
              <ListItem>Property and event binding</ListItem>
              <ListItem>Routing</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Bootstrapping
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="html"
            code={require("raw!../assets/code/0.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [4, 5], title: 'HTML and System.js' },
              { loc: [6, 12] },
              { loc: [13, 31] },
              { loc: [34, 38] }
            ]}/>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/bootstrap.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Bootstrapping' },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [4, 5] },
            ]}/>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/1.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Root component' },
              { loc: [1, 2] },
              { loc: [3, 11] },
              { loc: [11, 19] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [4, 10] },
              { loc: [13, 14] },
            ]}/>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/2.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Import Component(s)'  },
              { loc: [2, 5] },
              { loc: [15, 18] },
              { loc: [9, 14] },
            ]}/>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Stateful and Stateless Components
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/3.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Stateful Component'  },
              { loc: [1, 5] },
              { loc: [16, 17] },
              { loc: [5, 8] },
              { loc: [8, 11] },
              { loc: [11, 15] },
              { loc: [30, 35] },
              { loc: [23, 30] },
              { loc: [18, 23] },
              { loc: [17, 18] },
            ]}/>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              One-way data flow
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/4.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Property binding' },
              // { loc: [1, 5] },
              { loc: [42, 55] },
              { loc: [44, 48] },
              { loc: [25, 28] },
              { loc: [48, 49] },
              { loc: [28, 31] },
              { loc: [49, 50] },
              { loc: [31, 35] },
            ]}/>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/5.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Event binding' },
              { loc: [55, 65] },
              { loc: [55, 58] },
              { loc: [25, 29] },
              { loc: [58, 61] },
              { loc: [29, 33] },
              { loc: [62, 65] },
              { loc: [33, 37] },
            ]}/>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Templating syntaxes
            </Heading>
            <List textColor="white">
              <ListItem>[ ] are property bindings</ListItem>
              <ListItem>Think myObject['property'] in JavaScript</ListItem>
              <ListItem>( ) are event bindings</ListItem>
              <ListItem>Think myFunction() in JavaScript</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.google}></Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/syntax-2.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 4], title: 'Collections' },
              { loc: [5, 8], title: 'Two-way binding' },
              { loc: [9, 10] },
            ]}/>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              Why?
            </Heading>
            <List textColor="white">
              <ListItem>Bind to any native element (Web Components included)</ListItem>
              <ListItem>No Angular 2 component wrappers</ListItem>
              <ListItem>Consistent syntax across all code</ListItem>
              <ListItem>Explicit syntax</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/6.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Stateless Component' },
              { loc: [1, 7] },
              { loc: [8, 24] },
              { loc: [24, 32] },
              { loc: [32, 44] },
              { loc: [17, 21] },
            ]}/>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Routing + Routed Components
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/7.example")}
            textSize={'1.4rem'}
            ranges={[
              { loc: [0, 1], title: 'Routed Components' },
              { loc: [4, 8] },
              { loc: [8, 17] },
              { loc: [39, 48] },
              { loc: [34, 38] },
              { loc: [26, 32] },
              { loc: [23, 25] },
            ]}/>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Server-side + Web Worker rendering
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Server-side rendering
            </Heading>
            <List textColor="white">
              <ListItem>DOM abstracted, use abstraction methods</ListItem>
              <ListItem>Render on the server, Universal Angular</ListItem>
              <ListItem>Initial page pre-rendered superfast</ListItem>
              <ListItem>Rehydrates the DOM once rendered</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Web Worker rendering
            </Heading>
            <List textColor="white">
              <ListItem>Runs in a background thread</ListItem>
              <ListItem>Frees up the UI thread</ListItem>
              <ListItem>Angular bootstraps in a Web Worker</ListItem>
              <ListItem>Superfast UI and data-processing (faster repaints)</ListItem>
              <ListItem>Angular communicates between UI + Web Worker</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Service Workers
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Service Workers
            </Heading>
            <List textColor="white">
              <ListItem>Cache code and application data</ListItem>
              <ListItem>Works offline with last data renders</ListItem>
              <ListItem>Background synchronisation</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Few more features
            </Heading>
            <List textColor="white">
              <ListItem>Sits on top of web components (template/content)</ListItem>
              <ListItem>Uses dependency injection</ListItem>
              <ListItem>Still has Directives (Angular 1.x)</ListItem>
              <ListItem>Well-defined Component lifecycles</ListItem>
              <ListItem>Easily testable (unit/e2e)</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              ... and some more
            </Heading>
            <List textColor="white">
              <ListItem>Component communication</ListItem>
              <ListItem>Observables (RxJS)</ListItem>
              <ListItem>Nested views and routes</ListItem>
              <ListItem>Data architecture (Redux/ngrx)</ListItem>
              <ListItem>And the rest... for another talk</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Thank you!
            </Heading>
            <Image src={images.twitter} style={{maxWidth: '60%'}} />
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
