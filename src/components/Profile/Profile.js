import React from "react";
import { Typography } from "@material-ui/core";
import raven from "../../assets/images/raven.jpg";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustomTimeline";
import resumeData from "../../utils/resumeData";
import PersonIcon from "@material-ui/icons/Person";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomButton from "../Button/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className={"timeline_content"}>
      {link ? (
        <Typography className={"timelineitem_text"}>
          <span>{title}: </span>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {" "}
            {text}{" "}
          </a>
        </Typography>
      ) : (
        <Typography className={"timelineitem_text"}>
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={raven} alt="raven" />
      </figure>
      <div className="profile_info">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className={"button_container"}>
          <CustomButton
            text={"Download CV"}
            icon={<GetAppIcon />}
            link={resumeData.cv}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Profile;
