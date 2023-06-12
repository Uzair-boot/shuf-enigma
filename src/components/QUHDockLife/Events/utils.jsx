import August_pic1 from "../../../assets/Events/14 AUGUST/August_pic1.jpg";
import FareWell_pic1 from "../../../assets/Events/Farewell/FareWell_pic1.jpg";
import Wellcome_pic2 from "../../../assets/Events/Welcome/wellcome_pic2.jpg";
import logo from '../../../assets/logo.png'

import { Wellcome, Mango, FareWell, FourteenAugust } from "./EventArray";
export const Images = [
  {
    id: 1,
    img: August_pic1,
    date: " 14 August 2022",
    event: "Let’s promote independence by promoting a Human Right Culture in which respect for human rights should be great.",
    array: FourteenAugust,
    logo:logo
  },
  {
    id: 2,
    img: FareWell_pic1,
    date: "QUH Dock",
    event: "Enjoy your next chapter! Don't hesitate to reach out if you need anything or just to catch up.",
    array: FareWell,
  },
  {
    id: 3,
    img: Wellcome_pic2,
    date:'QUH Dock',
    event: "Congratulations on being part of QUH Dock team! The entire office welcomes you, and we hope to have a long and successful journey together.",
    array: Wellcome,
  },
  // {
  //     id:4,
  //     img:dining,
  //     date:'Date: 20th march 2022',
  //     event:'Event: Mango',
  //     array: Mango
  // }
];
