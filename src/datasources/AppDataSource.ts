export interface IVideosWithPagination {
  etag: string;
  items: GoogleApiYouTubeVideoResource[];
  kind: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: {totalResults: number, resultsPerPage: number}
}

export class AppDataSource {

public async getSnippets(uri: string): Promise<IVideosWithPagination> {
  return fetch(uri).then((resp) => resp.json());
  }
}
