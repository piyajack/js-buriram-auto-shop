
export interface FlashCode {
  code: number;
  description: string;
  symptoms: string;
  solution: string;
}

export interface Step {
  id: number;
  title: string;
  time: string;
  icon: string;
  visual: string;
  audioText: string;
}
