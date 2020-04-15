import * as React from 'react';
import {
  StatelessAccordion as Accordion,
  Panel,
} from 'baseui/accordion';

export default () => {
  const [expanded, setExpanded] = React.useState<React.Key[]>([
    'L1',
    'L2',
  ]);
  return (
    <Accordion
      expanded={expanded}
      onChange={({key, expanded}) => {
        console.log(key);
        setExpanded(expanded);
      }}
    >
      <Panel key="P1" title="Panel 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Panel>
      <Panel key="P2" title="Panel 2">
        Quisque luctus eu sem et pharetra.
      </Panel>
      <Panel key="P3" title="Panel 3">
        Proin egestas dui sed semper iaculis.
      </Panel>
    </Accordion>
  );
};