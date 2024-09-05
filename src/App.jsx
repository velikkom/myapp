import HelloReact from "./components/01-hello/HelloReact";
import HelloWorld from "./components/01-hello/hello-world";
import { Jsx2 } from "./components/02-jsx/Jsx2";
import { Jsx3 } from "./components/02-jsx/Jsx3";
import { Jsx4 } from "./components/02-jsx/Jsx4";
import { Jsx5 } from "./components/02-jsx/Jsx5";
import { Jsx6 } from "./components/02-jsx/Jsx6";
import { Jsx7 } from "./components/02-jsx/Jsx7";

import Style1 from "./components/03-styles/Style1";
import Style2 from "./components/03-styles/Style2";
import Style3 from "./components/03-styles/Style3";
import { Style4 } from "./components/03-styles/Style4";
import Style5 from "./components/03-styles/Style5";
import { Clock1 } from "./components/04-clock-1/Clock1";
import { Greetings } from "./components/05-proops/Greetings";
import { Products } from "./components/05-proops/Products";
import { Clock2 } from "./components/06-clock-2/Clock2";
import {  NewImage } from "./components/07-images/image";
import {  Gallery } from "./components/08-image-galery/galerry";
import { ProfileCard } from "./components/09-profile-card/profile-card";



const App = () => {
  return (
    <div>
      {/* <h1>Hello App</h1>
      <HelloWorld />
      <HelloReact />
      <Jsx2 />
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <Jsx6 />
      <Jsx7/> 
      <Style1 />
      <Style2/>
      <Style3/>
      <Style4/>
      <Style5/>
      <Clock1/>
      <Greetings/>      
      <Products/>
      <Clock2 textColor="yellow" bgColor="navy" />
  <Clock2 textColor="white" bgColor="black" hideTime={true} />
      <NewImage/>
      <Gallery/>*/}
      <ProfileCard/>
		</div>
  );
};

export default App;
