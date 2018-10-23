import {Spinner} from '@blueprintjs/core';
import {action, computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';
import {VideoCard} from '../components/VideoCard';
import {AppStore} from '../stores/AppStore';
import './HomePage.css';

export interface IHomePageProps {
  store?: AppStore;
}

@inject('store')
@observer
export class HomePage extends React.Component<IHomePageProps> {

  @action
  private loadMore = async () => {
    this.props.store.loadVideos();
  }

  @action
  public async componentDidMount(): Promise<void> {
    this.props.store.loadVideos();
  }

  @computed
  get videoCards(): JSX.Element[] {
    return this.props.store.items.map((item: GoogleApiYouTubeVideoResource) => {
      return (
        <VideoCard
          key={(item.id as any).videoId}
          thumbnailUri={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          description={item.snippet.description}
          videoHref={`${this.props.store.BASE_VIDEO_WATCH_URI}${(item.id as any).videoId}`}
        />
      );
    });
  }

  public render() {
    return (
      <div className="home-page">
        {this.props.store.showNoResults ? <h4>{`Sorry, we couldn't find anything. Try different search terms.`}</h4> :
          <InfiniteScroll
            pageStart={0}
            loadMore={action(() => this.loadMore())}
            hasMore={this.props.store.infiniteScrollHasMore}
            loader={<div key="spinner" style={{width: '100%'}}><Spinner/></div>}
            className="home-page--scroll-container"
            initialLoad={false}
          >
            {this.videoCards}
          </InfiniteScroll>
        }
        </div>
    )
  }
}
