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
              Taking over the web
            </Heading>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              with Angular 2
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
              <ListItem>Web Component integration</ListItem>
              <ListItem>Types of Components</ListItem>
              <ListItem>Angular 2 implementation</ListItem>
              <ListItem>Bootstrapping, Components, Routing</ListItem>
              <ListItem>Server-side and WebWorker rendering</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} caps lineHeight={1} style={headingFont} textColor="white">
              What is Angular 2?
            </Heading>
            <List textColor="white">
              <ListItem>Successor to Angular 1.x</ListItem>
              <ListItem>Cutting edge and future focused</ListItem>
              <ListItem>Component-based architecture framework</ListItem>
              <ListItem>Web, mobile web</ListItem>
              <ListItem>Native mobile (NativeScript) and desktop</ListItem>
            </List>
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

          <Slide transition={["slide"]}>
            <List textColor="white">
              <ListItem>Data down, events up</ListItem>
              <ListItem>Components are APIs</ListItem>
              <ListItem>Well-defined Inputs/Outputs</ListItem>
              <ListItem>"What role does your Component play?"</ListItem>
            </List>
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

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              [slide on property binding + events]
            </Heading>
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
              { loc: [34, 38] },
              { loc: [26, 32] },
              { loc: [23, 25] },
            ]}/>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}} />
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Server + WebWorker rendering
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
