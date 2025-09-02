
export type ProjectType = 'Villa' | 'Duplex' | 'Independent Floor' | 'Ultra-Luxury';

export interface Project {
  id: number;
  title: string;
  type: ProjectType;
  imageUrl: string;
}
