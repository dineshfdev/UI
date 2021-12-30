import React from "react";
import { Grid } from "@material-ui/core";
import cx from "classnames";
import AccordionData from "./accordionData.js";
import "../accordion/accordion.styles.scss";
import CustomizedAccordions from "./mobileAccordion.js";

// Create accordion component
// Accordion component is a container for the accordion items
// Each accordion item is a container for the accordion item header and content
// Accordion item header is a container for the accordion item title and icon
// Accordion item content is a container for the accordion item content
function Accordion({ device }) {
  const [selected, setSelected] = React.useState(0);

  // Function to handle accordion item selection
  // Sets the selected accordion item to the index of the clicked accordion item
  const handleClick = (event) => {
    const { id } = event.currentTarget.dataset;
    setSelected(Number(id));
  };
  const accordionItem = (item, index) => {
    const itemClass = cx("accordion__item", { selected: selected === index });
    const key = `accordion-item-${index}`;

    return (
      <div
        key={key}
        className={itemClass}
        data-id={index}
        onClick={handleClick}
      >
        <div className="accordion__item-header">
          <div className="accordion__item-title">
            <img src={item.icon} alt="icon" />
            <div>{item.title}</div>
          </div>
        </div>
      </div>
    );
  };
  const renderAccordionHeaders = () => {
    return (
      <div className="accordion-headings-container">
        {AccordionData.map((item, index) => accordionItem(item, index))}
      </div>
    );
  };

  const renderAccordionContent = () => {
    const { content, image, alt, readMore } = AccordionData[selected];
    return (
      <div className="accordion-content-wrapper">
        <div className="accordion-content__container">
          <div className="accordion-content__content">{content}</div>
          <div className="accordion-content__link">
            <a href={readMore}>{"Read more >"}</a>
          </div>
        </div>
        <img src={image} alt={alt} className="accordion-content__image" />
      </div>
    );
  };

  return (
    <Grid item xs={12}>
      <div className="accordion">
        <p className="accordion__main-header">Why People Love Us</p>
        {device.device === "desktop" ? (
          <div className="accordion-wrapper">
            {renderAccordionHeaders()}
            {renderAccordionContent()}
          </div>
        ) : (
          <div>
            <CustomizedAccordions AccordionData={AccordionData} />
          </div>
        )}
      </div>
    </Grid>
  );
}

export default Accordion;
