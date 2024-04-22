import React from "react";
import { Typography, Image, Divider } from "antd";
import ReactPlayer from "react-player";
import "../App.css";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Paragraph } = Typography;

const style = { fontSize: "1.0rem" };

const Intro: React.FC = () => {
    let videosrc = "https://youtu.be/fEgK_66Iwgk";
    return (
        <>
            <Divider style={{ background: "#000" }}></Divider>

            <Title>About</Title>
            <Paragraph style={style}>
                Founded in 1956, <b>River Valley High School (RVHS)</b> is a
                forward-looking educational institution steeped in history and
                eastern culture. Since it was founded more than 67 years ago,
                RVHS has nurtured many generations of Singaporeans that have
                went on to contribute significantly to the nation in various
                areas as leaders of distinction for Singapore.
            </Paragraph>
            <Paragraph style={style}>
                In 1979, owing to her strong Chinese roots, RVHS was designated
                as a Special Assistance Plan (SAP) School to develop all
                students to be bicultural and effectively bilingual in English
                and Chinese. In 1994, RVHS was selected to be in the pioneer
                batch of six schools to be granted the Autonomous Status (AS).
                In 2006, RVHS was given the green light to run the Integrated
                Programme (IP). These give RVHS its present status as an S.I.A.
                school, where S stands for SAP, I stands for IP and A stands for
                Autonomous.
            </Paragraph>
            <Paragraph style={style}>
                The school is committed to providing our students with a
                holistic education and we develop each child to his/her fullest
                in the intellectual, social, moral, emotional, physical and
                aesthetic domains. This is done through our Balanced Education
                Curriculum (BEC), which comprises the Cognitive-Interest
                Development Curriculum (CIDC), the Leadership-Character
                Development Curriculum (LCDC) and the Civic Literacy and Global
                Awareness Development Curriculum (CGDC).
            </Paragraph>
            <Paragraph style={style}>
                <ul>
                    <li>
                        <b>CIDC</b> nurtures good habits of mind, critical
                        thinking skills and knowledge construction, as well as
                        prepares students for university admission. It is
                        designed based on the ASK (Attitudes, Skills and
                        Knowledge) learning culture and implemented with the TfU
                        (Teaching for Understanding) Framework from the Harvard
                        Graduate School of Education.
                    </li>
                    <li>
                        <b>LCDC</b> seeks to provide Character and Citizenship
                        Education (CCE) for students. Through components like
                        the Overseas Experiential Learning Programme (OELP),
                        Enhanced National Education (NE) and Values in Action
                        (VIA) Programme and platforms such as the Y.LEAD
                        Seminar, LCDC aims to nurture students who practise
                        values-based citizenship and leadership.
                    </li>
                    <li>
                        <b>CGDC</b> focuses on developing students’
                        civic-mindedness and global perspective. The main
                        components of the CGDC programme are the Construct,
                        Integrate, Differentiate (CID) programme, Appreciation
                        of Chinese Culture (ACC) programme and the six
                        academies.
                    </li>
                </ul>
            </Paragraph>
            <div className="react-player">
                <ReactPlayer
                    // className="player"
                    style={{
                        maxWidth:
                            "100%" /* Ensure the player doesn't exceed the width of its container */,
                        height: "auto",
                    }}
                    url={videosrc}
                    controls={true}
                    // light is usefull incase of dark mode
                    light={false}
                    // picture in picture
                    pip={true}
                    align={"center"}
                />
                <source src={videosrc} type="video/mp4" />
            </div>

            <Title level={5}>
                To know more about RV and its curriculum, please visit our{" "}
                <Link to={"https://www.rivervalleyhigh.moe.edu.sg/"}>
                    school's website
                </Link>
                .
            </Title>

            <Title level={5}>
                Please visit our{" "}
                <Link to={"https://www.youtube.com/@ReViewAtRVHS"}>
                    school's youtube channel
                </Link>{" "}
                too!
            </Title>
        </>
    );
};

export default Intro;
