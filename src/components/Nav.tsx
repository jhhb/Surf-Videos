import {
  Button,
  ControlGroup, InputGroup, Navbar, NavbarGroup, NavbarHeading
} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import * as React from 'react';
import './Nav.css';

interface INavProps {
  handleChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export class Nav extends React.Component<INavProps> {
  public render() {
    return (
      <Navbar className="nav">
        <NavbarHeading><h3>Video Surfer</h3></NavbarHeading>
        <ControlGroup className="nav--control-group">
          <InputGroup
            className="nav--search"
            placeholder="Search Surf Videos"
            large={true}
            onChange={this.props.handleChange}
          />
          <Button icon={IconNames.SEARCH} className="nav--search-button"/>
        </ControlGroup>
        <NavbarGroup><a href="/">Home</a></NavbarGroup>
      </Navbar>
    )
  }
}
