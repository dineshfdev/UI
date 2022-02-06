import React from "react";
import { useHistory ,Link} from "react-router-dom";
import {Grid,Container,Typography,withStyles} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


// data
import {aboutUsData,doorStepData,ourServicesData} from "./footerData";

// styles
import "./footer-styles.scss";

const Accordion = withStyles({
    root: {
        backgroundColor:'#f4f6f9',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'transparent',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

const Footer =({device}) => {
    const {breakpoint} = device;
    let history = useHistory();

// onclick location 
const onLocationClick = (val) => {
      history.push({
        pathname: "/location-list",
        search: `?location=${val}`,
        state: { val, searchName: "location" },
      });
  };

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


return (
    <Grid className="contact-container">
        <Container>
            <Grid container xs={12} spacing={3}>
                {breakpoint === "phone" ? 
                    <div style={{width: "100%",marginTop: 10,marginBottom:30}}>
                        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ArrowForwardIosIcon />}>
                            <Typography className="accordion-title">About Us</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-body">
                            <Typography>
                            <ul className="footer-list-container">
                                {aboutUsData.map((x,index) => <li key={index}><a href={x.link}>{x.text}</a>{x.img ? <img src={x.img} alt="coming soon" />: ''}</li>)}
                            </ul>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ArrowForwardIosIcon />}>
                            <Typography  className="accordion-title">Our Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-body">
                            <Typography>
                            <ul className="footer-list-container">
                                <li><a href="https://service-geni.in/">Find Mechanics Near Me</a></li>
                            </ul>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ArrowForwardIosIcon />}>
                            <Typography  className="accordion-title">Doorstep Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-body">
                            <Typography>
                            <ul className="footer-list-container">
                                {doorStepData.map((x,index) => <li key={index}><a href={x.link}>{x.text}</a></li>)}
                            </ul>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ArrowForwardIosIcon />}>
                            <Typography  className="accordion-title">Our Service Partner are all across the city, check now</Typography>
                            </AccordionSummary>
                            <AccordionDetails  className="accordion-body">
                            <Typography>
                            <ul className="footer-list-container footer-list-location">
                                {ourServicesData.map((x,index) => <li onClick={() => onLocationClick(x)} key={index}>{x}</li>)}
                            </ul>
                            <Link to="/search" className="link offset-margin-top">
                                More Locations
                            </Link>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div> : 
                    <>
                    <Grid item xs={6} md={3}>
                        <h5 className="footer-header">About Us</h5>
                        <ul className="footer-list-container">
                            {aboutUsData.map((x,index) => <li key={index}><a href={x.link}>{x.text}</a> {x.img ? <img src={x.img} alt="coming soon" />: ''}</li>)}
                        </ul>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <h5 className="footer-header">Our Services</h5>
                        <ul className="footer-list-container">
                            <li><a href="https://service-geni.in/">Find Mechanics Near Me</a></li>
                        </ul>
                        <h5 className="footer-header">Doorstep Services</h5>
                        <ul className="footer-list-container">
                            {doorStepData.map((x,index) => <li key={index}><a href={x.link}>{x.text}</a></li>)}
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <h5 className="footer-header">Our Service Partner are all across the city, check now</h5>
                        <Grid container xs={12}>
                            <ul className="footer-list-container footer-list-location">
                                {ourServicesData.map((x,index) => <li onClick={() => onLocationClick(x)} key={index}>{x}</li>)}
                            </ul>
                            <Link to="/search" className="link offset-margin-top">
                                More Locations
                            </Link>
                        </Grid>
                    </Grid>
                    </>
                }
            </Grid>
        </Container>
    </Grid>
)};

export default Footer;