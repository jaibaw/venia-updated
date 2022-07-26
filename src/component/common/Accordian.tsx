import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ACCORDIAN } from '../../constant/common';

// accordian component
export default function ControlledAccordions() {
  //local state
  const [expanded, setExpanded] = React.useState<string | false>(false);

  //handle on click change
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  //return component
  return (
    <div className='accordian-container'>
      {
        ACCORDIAN.map((key) => {
          return (<Accordion expanded={expanded === key.panel} onChange={handleChange(key.panel)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id={key.panel}
            >
              <span id='typo1' className='accordian-typo1-span'>
                {key.typo1}
              </span>
              <span  id='typo2' className='accordian-typo2-span'>
                {key.typo2}
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <span id='typo3' className='accordian-typo1-span'>
                {key.typo3}
              </span>
            </AccordionDetails>
          </Accordion>
          )
        })
      }

      {/* 
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <span>
            Enter a Coupon Code
          </span>
          <span>
            20% discount applied
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            DISCOUNT SUMMARY
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <span>
            Apply Gift Card
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            GIFT CART DETAILS
          </span>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
