import { Inter, Montserrat , Londrina_Sketch , Poppins , Spinnaker} from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
  });

  export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
  });

  export const londrinasketch = Londrina_Sketch({
    subsets: ["latin"],
    weight:['400']
  });
    
  export const spinnaker = Spinnaker({
    subsets: ["latin"],
    weight:['400']
  });
    