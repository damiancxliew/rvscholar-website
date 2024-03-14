import img1 from "../images/1710389939980Passport_pic.png";
import img2 from "../images/1710392904958Screenshot 2023-03-07 163033.png";
import img3 from "../images/pic1.jpg";
import img4 from "../images/pic2.jpg";
import img5 from "../images/pic3.jpg";
import img6 from "../images/pic4.jpg";
import img7 from "../images/pic5.jpg";

const imageMap: any = {
  "1710389939980Passport_pic.jpg": img1,
  "1710392904958Screenshot 2023-03-07 163033.png": img2,
  "pic1.jpg": img3,
  "pic2.jpg": img4,
  "pic3.jpg": img5,
  "pic4.jpg": img6,
  "pic5.jpg": img7,
};
export const getImg = (imageName: string) => {
  return imageMap[imageName];
};
