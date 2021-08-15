import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustomTimeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import resumeData from "../../utils/resumeData";
import "./Experiences.css";

const Experiences = () => {
  return (
    <>
      <Grid container className="my_timeline">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2 className="title">My Timeline</h2>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline
                title="Educational Background"
                icon={<LocalLibraryIcon />}
              >
                {resumeData.work.map((work) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {work.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {work.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_descrtn">
                        {work.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline
                title="Work Experiences"
                icon={<AssignmentIndIcon />}
              >
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_descrtn">
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Experiences;
