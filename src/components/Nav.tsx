import {
  Button,
  ControlGroup, InputGroup, Navbar, NavbarGroup, NavbarHeading
} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import {action} from 'mobx';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {AppStore} from '../stores/AppStore';
import './Nav.css';

interface INavProps {
  store?: AppStore;
}

@inject('store')
@observer
export class Nav extends React.Component<INavProps> {

  @action
  private handleInputChange = (e) => {
    this.props.store.setSearchValue(e.currentTarget.value);
  }

  @action
  private handleSubmit = () => {
    this.props.store.onSearch();
  }

  @action
  private handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  public render() {
    return (
      <Navbar className="nav">
        <NavbarHeading><h3>Video Surfer</h3></NavbarHeading>
        <ControlGroup className="nav--control-group">
          <InputGroup
            className="nav--search"
            placeholder="Search Surf Videos"
            large={true}
            onChange={this.handleInputChange}
            onKeyUp={this.handleKeyUp}
          />
          <Button icon={IconNames.SEARCH} className="nav--search-button" onClick={this.handleSubmit}>
            Search
          </Button>
        </ControlGroup>
        <NavbarGroup><a href="/">Home</a></NavbarGroup>
      </Navbar>
    )
  }
}
