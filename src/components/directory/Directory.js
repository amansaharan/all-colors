import React from 'react';

import MenuItem from '../menu-item/MenuItem';
import SECTIONS_DATA from './sections.data';
import './Directory.scss';

class Directory extends React.Component {
  state = {
    sections: SECTIONS_DATA,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionsProps }) => {
          return <MenuItem key={id} {...sectionsProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
