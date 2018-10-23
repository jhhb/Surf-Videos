import {Intent, Toaster} from '@blueprintjs/core';
import {action, computed, observable, toJS} from 'mobx';
import {
  AppDataSource, IVideosWithPagination
} from '../datasources/AppDataSource';

export class AppStore {
  private datasource: AppDataSource = new AppDataSource();
  private readonly MAX_RESULTS_PER_REQUEST: number = 50;
  private readonly BASE_URI: string = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=${this.MAX_RESULTS_PER_REQUEST}`;
  public readonly BASE_VIDEO_WATCH_URI: string = 'https://youtube.com/watch?v=';
  private readonly BASE_QUERY: string = 'surf';

  @observable private pageInfo: {totalResults: number, resultsPerPage: number};
  @observable private nextPageToken: string = '';
  @observable private loading: boolean = true;
  @observable private seenVideos: Set<string> = new Set();
  @observable public items: GoogleApiYouTubeVideoResource[] = [];
  @observable public searchValue: string = '';

  @computed
  get queryValue(): string {
    let queryString: string = '';
    if (this.searchValue) {
      queryString += `&q=${encodeURIComponent([this.BASE_QUERY,  this.searchValue].join(' '))}`;
    } else {
      queryString += `&q=${encodeURIComponent(this.BASE_QUERY)}`;
    }

    if (this.nextPageToken) {
      queryString += `&pageToken=${encodeURIComponent(this.nextPageToken)}`
    }
    return this.BASE_URI + queryString;
  }

  @computed
  get infiniteScrollHasMore(): boolean {
    if (this.loading) {
      return true;
    } else {
      return !!this.nextPageToken;
    }
  }

  @computed
  get showNoResults(): boolean {
    return !this.loading && this.pageInfo && this.pageInfo.totalResults === 0;
  }

  // Unfortunately, it seems that we don't receive any guarantees about uniqueness
  // from the API. Consequently, we need to perform some client-side filtering
  // to avoid React key errors.
  private processVideos(videos: GoogleApiYouTubeVideoResource[]) {
    const uniqueVideos = [];
    for (const video of videos) {
      // It also looks as if the types are out of date, so there are
      // a few places this cast is necessary.
      if (!this.seenVideos.has((video.id as any).videoId)) {
        this.seenVideos.add((video.id as any).videoId);
        uniqueVideos.push(video)
      }
    }
    return uniqueVideos;
  }

  @action
  public setSearchValue(value: string) {
    this.searchValue = value;
  }

  @action
  public async onSearch(): Promise<void> {
    this.loading = true;
    try {
      this.seenVideos.clear();
      this.items = [];
      this.nextPageToken = '';
      await this.loadVideos()
    } catch (err) {
      Toaster.create().show({intent: Intent.DANGER, message: 'There was an error fetching data'});
      throw new Error(err)
    } finally {
      this.loading = false;
    }
  }

  @action
  public async loadVideos(): Promise<void> {
    try {
      const res: IVideosWithPagination = await this.datasource.getSnippets(this.queryValue);
      this.nextPageToken = res.nextPageToken;
      this.items = toJS(this.items).concat(this.processVideos(res.items));
      this.pageInfo = res.pageInfo;
    } catch (err) {
      Toaster.create().show({intent: Intent.DANGER, message: 'There was an error fetching data'});
      throw new Error(err);
    }
  }
}
