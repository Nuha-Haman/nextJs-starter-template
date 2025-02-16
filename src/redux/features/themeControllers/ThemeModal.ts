import { IsStateInterface } from "@/types/isState";

export interface ThemeState {
  isState: IsStateInterface;
  isRTL: boolean;
  lang: string;
  appearance: string;
}
