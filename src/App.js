import "./styles.css";
import Home from "./components/home/home.js";
import Product from "./components/product/product.js";
import Model from "./components/model/model";
import v1 from './assets/filter1.mp4';
import Dining3d from "./models/dining3d";
import Kitchen3d from "./models/kitchen3d";
import Bedroom3d from "./models/bedroom3d";
export default function App() {
  return (
    <div className="App">
      <Home />
      <Model
        model=<Kitchen3d />
        hColor="rgb(145, 240, 145)"
        pColor="white"
        modelName="Modern Kitchen"
        modelInfo=" This kitchen 3D model features sleek, flat-fronted cabinets that seamlessly integrate into the overall design, while the countertops are crafted from natural stone to add a touch of luxury to the space."
        bg="https://images.pexels.com/photos/8961886/pexels-photo-8961886.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Model
        model=<Dining3d />
        hColor="rgb(145, 240, 145)"
        pColor="white"
        modelName="Modern Living Room"
        modelInfo="This living room 3D model is realistically designed with accurate proportions and details, making it an impressive display of attention to detail."
        bg="https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Model
        model=<Bedroom3d />
        hColor="rgb(145, 240, 145)"
        pColor="white"
        modelName="Modern Bed Room"
        modelInfo="This modern bedroom is a serene and stylish oasis, with a focus on simplicity and luxury. Large windows provide abundant natural light, while carefully placed fixtures create a calming ambiance."
        bg="https://images.pexels.com/photos/7540553/pexels-photo-7540553.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Product
        bg="https://images.pexels.com/photos/7641148/pexels-photo-7641148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        hColor="#9AC2CC"
        pColor="white"
        c2="#F5F0EE"
        brandName="LensCrafters"
        filterInformation=" Transform your look and see the world in a whole new way with LensCrafters' VisionBoost filter! Perfect for adding a pop of style to your Instagram stories, this filter enhances your vision with a virtual pair of LensCrafters glasses, helping you see the world in sharper focus."
        phoneColor="#2C3E50"
        video={v1}
      />
    </div>
  );
}
