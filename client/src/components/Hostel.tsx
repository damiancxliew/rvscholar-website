import { Carousel, Divider, Flex, Image, Space, Typography } from "antd";
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
      Enrolled scholars from River Valley High School reside at the NUSH
      Boarding School, where we enjoy the unique opportunity to interact with
      fellow students from diverse ASEAN countries. This enriching experience
      not only allows us to mingle with peers from different cultural
      backgrounds but also provides us with collaborative study opportunities.
      Below, we share glimpses of our vibrant hostel life and the exciting
      experiences awaiting you.{" "}
    </Paragraph>
    <div>
      <Title className="carousel" level={3}>
        Memories we share
      </Title>
      <div
        style={{
          background: "#fff",
          alignItems: "center",
          alignTracks: "center",
          alignSelf: "center",
        }}
      >
        <Carousel
          autoplay
          style={{
            padding: "1%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <div>
            <h3 style={contentStyle}>
              <Image
                src={getImg("pic1.jpg")}
                alt={`./images/pic1`}
                // height={"100%"}
                // width={"60%"}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={getImg("pic2.jpg")}
                alt={`./images/pic2`}
                // height={"100%"}
                // width={"60%"}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={getImg("pic3.jpg")}
                alt={`./images/pic3`}
                // height={"100%"}
                // width={"60%"}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={getImg("pic4.jpg")}
                alt={`./images/pic4`}
                // height={"100%"}
                // width={"60%"}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={getImg("bbq_group_pic.jpg")}
                alt={`./images/bbq_group_pic`}
                height={"100%"}
                width={"60%"}
              />
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
    <div>
      <Title className="carousel" level={3}>
        Experience we have
      </Title>
      <Title level={4}>Pau Kin Hong</Title>
      <Paragraph style={{ fontSize: 20 }}>
        In the hostel, we foster a vibrant community by offering a range of
        interesting activities to keep all scholars engaged and connected. These
        include weekly badminton sessions, frequent excursions to explore
        various parts of Singapore, and cooking sessions where everyone can come
        together and share culinary experiences. Personally, I feel that these
        are good ways to alleviate stress from the busy studies.
      </Paragraph>
      <div style={{ textAlign: "center" }}>
        <Image
          src={getImg("zoo_pic.jpg")}
          alt={`Visit to Zoo`}
          height={"50%"}
          width={"30%"}
        />
      </div>
    </div>

    <div>
      <Title level={4}>Rayner</Title>
      <Paragraph style={{ fontSize: 20 }}>
        Hostel life is fun and fulfilling. You can make new friends, learn new
        skills, and experience new things. The facilities here are exceptional!
        Our hostel provides basketball, badminton, volleyball and even tennis
        courts. If you are not someone who enjoys outdoor activities, fret not!
        We have entertainment rooms for games, music and TV! Of course, we have
        conducive study environments like study rooms and computer rooms where
        you can pay your fullest attention when studying.
      </Paragraph>
      <div style={{ textAlign: "center" }}>
        <Image
          src={getImg("pic5.jpg")}
          alt={`Badminton`}
          height={"50%"}
          width={"30%"}
        />
      </div>
    </div>

    <div>
      <Title level={4}>Chin Chin Lee</Title>
      <Paragraph style={{ fontSize: 20 }}>
        Hostel life will be eventful and fruitful if you are willing to step out
        of your comfort zone to take part in the boarding school’s activities or
        even the boarding leaders’ committee! The hostel’s food is sufficient
        and good enough if you are not that choosy in your meals. However, it’s
        normal if you get bored of the food over time and want to get food from
        outside because the menu is kind of repetitive weekly. Facilities such
        as study rooms, games rooms, gym, or even music rooms are available at
        the hostel.
      </Paragraph>
      <div style={{ alignContent: "center" }}>
        <Flex gap="large">
          {" "}
          <Image
            src={getImg("ccl_boarding.jpg")}
            alt={`Boarding`}
            height={"50%"}
            width={"30%"}
          />
          <Image
            src={getImg("hotpot_in_pantry.jpg")}
            alt={`Cooking`}
            height={"50%"}
            width={"30%"}
          />
          <Image
            src={getImg("ms_shahira_cooking.jpg")}
            alt={`Cooking`}
            height={"50%"}
            width={"30%"}
          />
        </Flex>
      </div>
    </div>
  </>
);

export default Hostel;
