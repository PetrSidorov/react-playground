export enum MarkerEnum {
  Cross = "cross",
  Circle = "circle",
}

export type BoardType = MarkerType[][];
export type MarkerType = (typeof MarkerEnum)[keyof typeof MarkerEnum] | null;
export type BoardDataType = keyof MarkerEnum[][];
