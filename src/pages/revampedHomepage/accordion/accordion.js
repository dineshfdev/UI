import React from 'react';
import cx from 'classnames';
import AccordionData from './accordionData.js';
import './accordion.styles.scss';

// Create accordion component
// Accordion component is a container for the accordion items
// Each accordion item is a container for the accordion item header and content
// Accordion item header is a container for the accordion item title and icon
// Accordion item content is a container for the accordion item content
function Accordion() {
  const [selected, setSelected] = React.useState(0);

  // Function to handle accordion item selection
  // Sets the selected accordion item to the index of the clicked accordion item
  const handleClick = (event) => {
    const { id } = event.currentTarget.dataset;
    setSelected(Number(id));
  };
  const accordionItem = (item, index) => {
    const itemClass = cx('accordion__item', { selected: selected === index });
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
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    );
  };
  const renderAccordion = () => {
    return AccordionData.map((item, index) => accordionItem(item, index));
  };

  const renderAccordionContent = () => {
    return (
      <div className="accordion-content-wrapper">
        <div className="accordion-content__content">
          {AccordionData[selected].content}
        </div>
        <img
          src={AccordionData[selected].image}
          alt={AccordionData[selected].alt}
          className="accordion-content__image"
        />
      </div>
    );
  };

  return (
    <div className="accordion">
      <div className="accordion-items__container">{renderAccordion()}</div>
      {renderAccordionContent()}
    </div>
  );
}

export default Accordion;
