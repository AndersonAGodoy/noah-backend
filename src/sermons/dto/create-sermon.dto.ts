import { ContentSection, ContentType, Reference } from '@prisma/client';

export class CreateSermonDto {
  title: string;
  description?: string;
  speaker?: string;
  duration?: string;
  date?: string;
  time?: string;
  eventType?: ContentType;
  references?: Reference[];
  published?: boolean;
  contentSections?: ContentSection[];
}
