export interface TestimoniesProps {
  quotes: Quote[];
  title: string;
}

export interface Quote {
  author: string;
  opinion: string;
  rate: number;
  img: string;
  infoLabel?: string;
}
