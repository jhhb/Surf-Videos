import {Card} from '@blueprintjs/core';
import * as React from 'react';
import './VideoCard.css';

export interface IVideoCardProps {
  thumbnailUri: string;
  title: string;
  description: string;
  videoHref: string;
}

export class VideoCard extends React.Component<IVideoCardProps> {
  public static defaultProps = {
    description: `Email marketing is broken. People hate email marketing. Not the people that send it (us) we love it. But the people receiving it. They hate it because it's not ...`,
    thumbnailUri: 'https://i.ytimg.com/vi/H3qZIyFugyI/hqdefault.jpg',
    title: 'Introducing Drift Email For Marketing. Turn Your Emails Into Conversations That Close Leads Faster.',
    videoHref: 'https://www.youtube.com/watch?v=6zLnJqWLfVU'
  }

  public render() {
    return (
      <Card className="video-card">
        <div className="video-card--thumbnail-container">
          <img className="video-card--thumbnail" src={`${this.props.thumbnailUri}`}/>
        </div>
        <div className="video-card--text-container">
          <h3>{this.props.title}</h3>
          <p className="bp3-ui-text">{this.props.description}</p>
        </div>
        <div>
          <a target="_blank" href={`${this.props.videoHref}`}>Watch on YouTube</a>
        </div>
      </Card>
    )
  }
}
