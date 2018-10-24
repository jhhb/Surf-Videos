import {inject, observer} from 'mobx-react';
import * as React from 'react';

@inject('store')
@observer
export class VideoPage extends React.Component {
  public render() {
    return (
      <div className="video-page">
        <div>Setup video page</div>
      </div>
    )
  }
}
