import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./fax.css"

function Fax() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="Accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accordionItem"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} className="typography">
            <h2>What is VersityEdge and how does it relate to UI</h2>
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails className="itemDetails">
          <Typography className="itemText">
            <h3>VersityEdge is an edtech startup that provides innovative solutions and resources to assist postsecondary students in avoiding admission failure. We are not affiliated with or partnered with the University of Ibadan or 
                any other academic institution. However, our goal is to support students in their admission journey and empower them with tools for success</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="accordionItem"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} className="typography">
            <h2>What is VersityEdge and how does it relate to UI</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="itemDetails">
          <Typography className="itemText"> 
          <h3>VersityEdge is an edtech startup that provides innovative solutions and resources to assist postsecondary students in avoiding admission failure. We are not affiliated with or partnered with the University of Ibadan or 
                any other academic institution. However, our goal is to support students in their admission journey and empower them with tools for success</h3>
          
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="accordionItem"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} className="typography">
            <h2>What is VersityEdge and how does it relate to UI</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="itemDetails">
          <Typography className="itemText"> 
          <h3>VersityEdge is an edtech startup that provides innovative solutions and resources to assist postsecondary students in avoiding admission failure. We are not affiliated with or partnered with the University of Ibadan or 
                any other academic institution. However, our goal is to support students in their admission journey and empower them with tools for success</h3>
          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accordionItem"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} className="typography">
            <h2>What is VersityEdge and how does it relate to UI</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="itemDetails">
          <Typography className="itemText"> 
          <h3>VersityEdge is an edtech startup that provides innovative solutions and resources to assist postsecondary students in avoiding admission failure. We are not affiliated with or partnered with the University of Ibadan or 
                any other academic institution. However, our goal is to support students in their admission journey and empower them with tools for success</h3>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

export default Fax;
