import {EventType} from "./EventType";
import {Day} from "./Day";

export interface EventToSave {
  id: string;
  name: string;
  type: EventType;
  shortDescription: string;
  time: string;
  runningTime: number;
  constraints: string;
  imageId: string;
  startedAt: string;
  description: string;
  location: string;
  endedAt: string;
  isMain: boolean;
  organizationId: string;
  day: Day;
  ytUrl: string;
  limit: number;
}
