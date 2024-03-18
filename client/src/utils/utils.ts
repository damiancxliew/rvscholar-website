import img1 from "../images/1710682066955Rayner.jpg";
import img2 from "../images/1710686288136damian.jpg";
import img3 from "../images/pic1.jpg";
import img4 from "../images/pic2.jpg";
import img5 from "../images/pic3.jpg";
import img6 from "../images/pic4.jpg";
import img7 from "../images/pic5.jpg";
import img8 from "../images/1710688851787selina_rvwebsite.png";
import img9 from "../images/1710689039837indv_pic1.jpg";
import img10 from "../images/1710689089525esli_indv_pic1.jpg";
import img11 from "../images/1710689259138Yanbin.jpg";
import img12 from "../images/zoo_pic.jpg";
import img13 from "../images/hotpot at hostel.jpg";
import img14 from "../images/bbq_group_pic.jpg";
import img15 from "../images/ccl_boarding.jpg";
import img16 from "../images/cycling_part2.png";
import img17 from "../images/hotpot_in_pantry.jpg";
import img18 from "../images/ms_shahira_cooking.jpg";
import img19 from "../images/1710697760278sheila_rvwebsite.jpg";
import img20 from "../images/1710698160773clarice_rvwebsite.png";
import img21 from "../images/1710698290445ccl_solo_pic.jpg";
import img22 from "../images/1710698522528pau_solo.jpg";
import img23 from "../images/1710727550792nicole.jpg";

const imageMap: any = {
  "1710682066955Rayner.jpg": img1,
  "1710686288136damian.JPG": img2,
  "pic1.jpg": img3,
  "pic2.jpg": img4,
  "pic3.jpg": img5,
  "pic4.jpg": img6,
  "pic5.jpg": img7,
  "1710688851787selina_rvwebsite.png": img8,
  "1710689039837indv_pic1.jpg": img9,
  "1710689089525esli_indv_pic1.jpg": img10,
  "1710689259138Yanbin.jpg": img11,
  "zoo_pic.jpg": img12,
  "hotpot at hostel.jpg": img13,
  "bbq_group_pic.jpg": img14,
  "ccl_boarding.jpg": img15,
  "cycling_part2.jpg": img16,
  "hotpot_in_pantry.jpg": img17,
  "ms_shahira_cooking.jpg": img18,
  "1710697760278sheila_rvwebsite.jpg": img19,
  "1710698160773clarice_rvwebsite.png": img20,
  "1710698290445ccl_solo_pic.jpg": img21,
  "1710698522528pau_solo.jpg": img22,
  "1710727550792nicole.jpg": img23,
};
export const getImg = (imageName: string) => {
  return imageMap[imageName];
};
