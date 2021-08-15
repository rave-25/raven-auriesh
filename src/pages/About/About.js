import React from "react";
import { Grid, Icon, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./About.css";

const About = () => {
  return (
    <>
      {/*About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2 className="title">About me</h2>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="section_p">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/*Skills */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2 className="title">My Skills</h2>
        </Grid>
        <Grid item xs={12}>
          <Grid container pb_45>
            {resumeData.skills.map((skills) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="skills">
                  <Icon className="skills_icon">{skills.icon}</Icon>
                  <Typography className="skills_title" variant="h6">
                    {skills.title}
                  </Typography>
                  <Typography className="skills_description" variant="body2">
                    {skills.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*Awards and Certificates*/}
      <Grid container className="section" />
    </>
  );
};
export default About;
