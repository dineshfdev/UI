import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

// styles
import "../accordion/accordion.styles.scss";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({ AccordionData }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="mobile-accordion-container">
      {AccordionData.map((x, i) => (
        <Accordion
          square
          expanded={expanded === `panel${i + 1}`}
          onChange={handleChange(`panel${i + 1}`)}
          key={i}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="header-accordion-title">
              <img src={x.icon} className="tick-icon" alt="icon" /> {x.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="mobile-accordion-content">
            <Typography>
              <img src={x.image} alt={x.title} />
              {x.content}
              <div style={{ marginTop: 20 }}>
                <a href={x.readMore}>{"Read More >"}</a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
