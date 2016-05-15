// Import React
import React from "react";
import { render } from "react-dom";

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
            <Image src={images.front} style={{maxWidth: '40%'}}/>
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
              <ListItem>Native mobile and desktop</ListItem>
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
            <Image src={images.front} style={{maxWidth: '40%'}}/>
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
            <Image src={images.front} style={{maxWidth: '40%'}}/>
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
            <Image src={images.front} style={{maxWidth: '40%'}}/>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Angular 2 implementation
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <List textColor="white">
              <ListItem>Bootstrapping</ListItem>
              <ListItem>Components, ViewEncapsulation</ListItem>
              <ListItem>One-way dataflow</ListItem>
              <ListItem>Routing</ListItem>
              <ListItem>DOM renderer</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <CodePane lang="javascript" textSize={'1.6rem'}>
              {
                `Scope {
  $$watchers: [{
    eq: false,
    exp: function () {},
    fn: function (newValue, oldValue) {},
    get: function () {},
    last: 'Todd'
  }]
}`
              }
            </CodePane>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.bg}>
            <Image src={images.front} style={{maxWidth: '40%'}}/>
            <Heading size={1} fit caps lineHeight={1} style={headingFont} textColor="white">
              Server and WebWorker rendering
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}