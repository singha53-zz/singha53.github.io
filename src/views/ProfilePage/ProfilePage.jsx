import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// progress bar under headings
import LinearProgress from '@material-ui/core/LinearProgress';

// lists
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// cards
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CustomCard from 'components/Card/CustomCard.jsx'

// @material-ui/icons
import AccountBalance from "@material-ui/icons/AccountBalance";
import CastForEducation from "@material-ui/icons/CastForEducation";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/amrit3.png";

// Research
import diablo from "assets/img/research/diablo.png";
import cjc from "assets/img/research/cjc.png";
import ajrccm from "assets/img/research/ajrccm.png";
import cf from "assets/img/research/cf.png";
import mixomics from "assets/img/research/mixomics.png";
import th17_treg_asthma from "assets/img/research/th17_treg_asthma.png";
import geneMet_asthma from "assets/img/research/geneMet_asthma.png";
import diabetes from "assets/img/research/diabetes.png";
import Google_Scholar_logo from "assets/img/research/Google_Scholar_logo.png";

// Education
import rLogo from "assets/img/education/Rlogo.svg";
import pythonLogo from "assets/img/education/python.png";
import javascriptLogo from "assets/img/education/javascript.png";
import react from "assets/img/education/react.png";
import node from "assets/img/education/node.jpeg";
import express from "assets/img/education/express.png";
import mongo from "assets/img/education/mongo.jpeg";
import ttest from "assets/img/education/ttest.png";
import unsupervised from "assets/img/education/unsupervised.png";
import supervised from "assets/img/education/supervised.png";
import genomics from "assets/img/education/genomics.jpeg";
import alexa from "assets/img/education/alexa.png";
import sagemaker from "assets/img/education/sagemaker.jpeg";
import aws from "assets/img/education/aws.png";
import git from "assets/img/education/git.png";
import gnu from "assets/img/education/gnu.png";
import rmarkdown from "assets/img/education/rmarkdown.jpeg";

// Portfolio
import omicsCentral from "assets/img/portfolio/omicsCentral.png";
import research from "views/ProfilePage/research_papers.js"
import portfolio from "views/ProfilePage/portfolio_projects.js"

// CV
import Pdf from 'assets/asingh_CV.pdf';

import path from 'path'

import profilePageStyle from "assets/jss/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        {/* <Header
          color="transparent"
          brand=""
          // rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        /> */}
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Amrit Singh</h3>
                      <h6>Computational Biologist | Developer | Consultant </h6>
                      <Button justIcon link className={classes.margin5}>
                        <a href='https://twitter.com/asingh_22g?lang=en'>
                          <i className={"fab fa-twitter"} />
                        </a>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <a href='https://www.linkedin.com/in/amrit-singh/'>
                          <i className={"fab fa-linkedin"} />
                        </a>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <a href='https://scholar.google.ca/citations?user=yDjTQpMAAAAJ&hl=en'>
                          <i className={"fab fa-google"} />
                        </a>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <a href='https://github.com/singha53'>
                          <i className={"fab fa-github"} />
                        </a>
                      </Button>
                    </div>
                    W: amrit.singh@hli.ubc.ca
                    <br />
                    P: asingh.analytics@gmail.com
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  I am a post doctoral research fellow at the <a
                  href="http://www.proofcentre.ca/about/our-team/trainees/dr-amrit-singh/"
                  target="_blank"> PROOF Centre of Excellence </a>. I use statistical methodologies to extract signals from big biological data. I have a background in biology, math, and programming (R/Python/Node). I have developed new methods to integrate multi-source biological data as part of the <a
                  href="http://mixomics.org/"
                  target="_blank"> mixOmics data integration project </a>. I am interested in using web and voice to develop interactive user interfaces for users to extract maximal information from their data. <a href = {Pdf} target = "_blank">CV</a>
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Research",
                        tabIcon: AccountBalance,
                        tabContent: (
                          <GridContainer justify="center">
                          <a href="https://scholar.google.ca/citations?user=yDjTQpMAAAAJ&hl=en">
                          <img src={Google_Scholar_logo} style={{width:'50%'}}/>
                          </a>
                            <GridItem xs={12} sm={12} md={12}>
                              { research.map(manuscript => {
                                return (
                                  <div>
                                  <h3><strong>{ manuscript.title }</strong></h3>
                                  <LinearProgress />
                                  { manuscript.papers.map(paper => {
                                    console.log(paper)
                                    return (
                                      <div>
                                        <img
                                          alt="..."
                                          src={ paper.image }
                                          className={navImageClasses}
                                          />
                                        { paper.buttons.map(button => {
                                        return (
                                          <Button color={ button.color }
                                            href={ button.link }>
                                            { button.name }
                                          </Button>
                                        )
                                      }) }
                                      </div>
                                    )
                                  }) }
                                  </div>
                                )
                              }) }
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Skills",
                        tabIcon: CastForEducation,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>

                          <h3>Education</h3>
                          <h3><strong>PhD</strong></h3>
                          <h4>University of British Columbia</h4>
                          <h3><strong>BSc (Honours)</strong></h3>
                          <h4>McMaster University</h4>
                          <br />
                          <h3>Programming Languages</h3>
                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                  <div>
                                  <ListItemAvatar>
                                    <Avatar alt="R" src={rLogo}/>
                                  </ListItemAvatar>
                                  </div>
                                  <ListItemText
                                    primary={<h4><strong>R</strong></h4>}
                                    secondary={"I use R for data wrangling, and analysis of biological data."}
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="JavaScript" src={javascriptLogo} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>JavaScript</strong></h4>}
                                    secondary={"I use Javascript for web development and development of Alexa Skills."}
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Python" src={pythonLogo}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Python</strong></h4>}
                                    secondary={'I use Python for building Neural Networks, and Recommendation Systems.'}
                                  />
                                </ListItem>
                              </List>

                            <h3>Web Development technologies</h3>
                          <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                  <div>
                                  <ListItemAvatar>
                                    <Avatar alt="React" src={react}/>
                                  </ListItemAvatar>
                                  </div>
                                  <ListItemText
                                    primary={<h4><strong>React</strong></h4>}
                                    secondary="I use React.js frameworks such as Material UI to create dashboards and landing pages."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Node" src={node} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Node</strong></h4>}
                                    secondary="I use Node.js to create the back-end for my web-apps as well as Alexa Skills."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Express" src={express}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Express</strong></h4>}
                                    secondary="I use express.js for routing and as middleware."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="MongoDB" src={mongo}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>MongoDB</strong></h4>}
                                    secondary="I use MongoDB, as well as MySQL for persistent data storage."
                                  />
                                </ListItem>
                              </List>


                            <h3>Amazon Web Services</h3>
                          <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                  <div>
                                  <ListItemAvatar>
                                    <Avatar alt="Alexa" src={alexa}/>
                                  </ListItemAvatar>
                                  </div>
                                  <ListItemText
                                    primary={<h4><strong>Alexa Skills Kit</strong></h4>}
                                    secondary="I use the ASK CLI along with other AWS services to develop voice-enabled tools for data analysis."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="SageMaker" src={sagemaker} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>SageMaker</strong></h4>}
                                    secondary="I use Jupyter notebooks to develop deployable machine learning models in the cloud."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="AWS" src={aws}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Other Services</strong></h4>}
                                    secondary="I use various AWS services such as Lambda, S3, DynamoDB, and API Gateway."
                                  />
                                </ListItem>
                              </List>

                            <h3>Biomedical Data Science</h3>
                          <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                  <div>
                                  <ListItemAvatar>
                                    <Avatar alt="inference" src={ttest}/>
                                  </ListItemAvatar>
                                  </div>
                                  <ListItemText
                                    primary={<h4><strong>Statistical Inference</strong></h4>}
                                    secondary="I use generalized linear models to perform inferences for various data-types."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Unsupervised Learning" src={unsupervised} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Unsupervised Learning</strong></h4>}
                                    secondary="I use techniques such as PCA, K-means, Hierarchical clustering to identify patterns in big data."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Supervised Learning" src={supervised}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Supervised Learning</strong></h4>}
                                    secondary="I use both linear and nonlinear algorithms to classify patients into groups."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Genomics" src={genomics}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Genomics tools</strong></h4>}
                                    secondary="I use various techniques applicable to biological data such as gene set enrichment analysis, pathway analysis, network analysis, cell-type deconvolution approaches."
                                  />
                                </ListItem>
                              </List>

                          <h3>Reproducible Research</h3>
                          <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                  <div>
                                  <ListItemAvatar>
                                    <Avatar alt="Git" src={git}/>
                                  </ListItemAvatar>
                                  </div>
                                  <ListItemText
                                    primary={<h4><strong>Git</strong></h4>}
                                    secondary="I use git for version control using GitHub."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="GNU Make" src={gnu} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>GNU Make</strong></h4>}
                                    secondary="I use GNU Make to create pipelines of scripts to reproduce my work."
                                  />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <Avatar alt="Rmarkdown" src={rmarkdown} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={<h4><strong>Rmarkdown</strong></h4>}
                                    secondary="I use Rmarkdown to generate reports (html/pdf/word)."
                                  />
                                </ListItem>
                              </List>

                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Portfolio",
                        tabIcon: Dashboard,
                        tabContent: (
                          <GridContainer justify="center">
                            { portfolio.map(function(card){
                              return (<GridItem xs={12} sm={6} md={4}>
                              <CustomCard 
                              image={ card.image }
                              title={ card.title }
                              description={ card.description }
                              buttons={ card.buttons }
                              />
                              </GridItem>
                              )
                            }) } 
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);