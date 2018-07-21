export interface Photo {
  id: number;
  posDate: Date;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
