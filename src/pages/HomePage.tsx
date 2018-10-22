import {Spinner} from '@blueprintjs/core';
import {action, observable, toJS} from 'mobx';
import {observer} from 'mobx-react';
import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';
import {VideoCard} from '../components/VideoCard';
import './HomePage.css';

@observer
export class HomePage extends React.Component {
  @observable private items: number[] = STUB_ITEMS;

  @action
  private loadMore = () => {
    setTimeout(() => {
      this.items = this.items && toJS(this.items).concat([1,2,3,4,5,6,7,8,9,10]);
    }, 5000);
  }

  // TODO: Add keys below once the data structure is fully defined
  public render() {
    return (
      <div className="home-page">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true}
          loader={<div style={{width: '100%'}}><Spinner/></div>}
          className="home-page--scroll-container"
        >
          {this.items.map(() =>
            <VideoCard/>
          )}
          </InfiniteScroll>
      </div>
    )
  }
}

export const STUB_ITEMS: number[] = [1,2,3,4,5,6,7,8,9,10];
