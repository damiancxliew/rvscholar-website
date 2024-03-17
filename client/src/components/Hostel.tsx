import { Carousel, Divider, Image, Typography } from "antd";
import React from "react";
import { getImg } from "../utils/utils";
import Title from "antd/es/typography/Title";
const { Paragraph } = Typography;
import "./Hostel.css";

const contentStyle: React.CSSProperties = {
  height: "650px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};

const Hostel: React.FC = () => (
  <>
    <Divider style={{ background: "#000" }}></Divider>
    <Title>Hostel Life</Title>

    <Paragraph style={{ fontSize: 20 }}>
      Scholars from River Valley High School stay in the NUSH Boarding School.
      We get the chance to mingle with students from other counterparts of ASEAN
      and the opportunity to study together.{" "}
    </Paragraph>
    <div>
      <Title className="carousel" level={3}>
        Memories we share
      </Title>
      <Carousel autoplay style={{ padding: "20px" }}>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={getImg("pic1.jpg")}
              alt={`./images/pic1`}
              height={650}
              width={900}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={getImg("pic2.jpg")}
              alt={`./images/pic2`}
              height={650}
              width={900}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={getImg("pic3.jpg")}
              alt={`./images/pic3`}
              height={650}
              width={900}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={getImg("pic4.jpg")}
              alt={`./images/pic4`}
              height={650}
              width={900}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image
              src={getImg("pic5.jpg")}
              alt={`./images/pic5`}
              height={650}
              width={900}
            />
          </h3>
        </div>
      </Carousel>
    </div>
  </>
);

export default Hostel;
