import {IAuthor} from './IAuthor';
import {EEmotions} from '@shared/enums/EEmotions';

export interface IFeedItem {
  author: IAuthor;
  images?: string[];
  text?: string;
  reacts: Partial<Record<EEmotions, number>>;
  id: number;
}

export interface IFeed {
  items: IFeedItem[];
}
