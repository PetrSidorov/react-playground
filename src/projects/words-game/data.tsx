const data: { leftColumn: TCard[]; rightColumn: TCard[] } = {
  //   { id: 1, toMatch: 111, lang: "ENG", text: "test" },
  //   { id: 2, toMatch: 111, lang: "RU", text: "тест" },
  //   { id: 3, toMatch: 112, lang: "ENG", text: "JavaScript" },
  //   { id: 4, toMatch: 112, lang: "RU", text: "Джаваскрипт" },
  //   { id: 5, toMatch: 113, lang: "ENG", text: "fridge" },
  //   { id: 6, toMatch: 113, lang: "RU", text: "холодильник" },
  leftColumn: [
    { id: 1, toMatch: 111, text: "test" },
    { id: 3, toMatch: 112, text: "JavaScript" },
    { id: 5, toMatch: 113, text: "fridge" },
  ],
  rightColumn: [
    { id: 2, toMatch: 111, text: "тест" },
    { id: 4, toMatch: 112, text: "Джаваскрипт" },
    { id: 6, toMatch: 113, text: "холодильник" },
  ],
};

export type TCard = {
  id: number;
  toMatch: number;
  text: string;
};

export default data;
