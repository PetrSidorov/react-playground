import { useState } from "react";
import data, { type TCard } from "./data";

export default function WordsGame() {
  const gameData = data;
  const [activeCardId, setActiveCardId] = useState<TCard["id"] | null>(null);
  const [matchedCardsIds, setMatchedCardsIds] = useState<TCard["id"][]>([]);

  function handleCardClick(card: TCard) {
    const secondActiveCardId = card.id;

    if (activeCardId != null) {
      if (
        activeCardId != secondActiveCardId &&
        findMatchId(secondActiveCardId) == findMatchId(activeCardId)
      ) {
        setMatchedCardsIds((prev) => [
          ...prev,
          secondActiveCardId,
          activeCardId,
        ]);
      }
      setActiveCardId(null);
    } else {
      setActiveCardId(secondActiveCardId);
    }
  }

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Column
        cards={gameData.leftColumn}
        matchedCardsIds={matchedCardsIds}
        onCardClick={handleCardClick}
        activeCardId={activeCardId}
      />
      <Column
        cards={gameData.rightColumn}
        matchedCardsIds={matchedCardsIds}
        onCardClick={handleCardClick}
        activeCardId={activeCardId}
      />
    </div>
  );
}

function Column({
  cards,
  matchedCardsIds,
  onCardClick,
  activeCardId,
}: {
  cards: TCard[];
  matchedCardsIds: TCard["id"][];
  onCardClick(card: TCard): void;
  activeCardId: TCard["id"] | null;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {cards.map((card) => (
        <Card
          key={card.id}
          onClick={() => onCardClick(card)}
          card={card}
          isMatched={matchedCardsIds.includes(card.id)}
          isActive={activeCardId == card.id}
        />
      ))}
    </div>
  );
}

function Card({
  card,
  isMatched,
  isActive,
  onClick,
}: {
  card: TCard;
  isMatched: boolean;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isMatched}
      style={{
        border: isActive ? "1px solid blue" : "1px solid black",
        padding: "1rem 2rem",
        borderRadius: "10px",
        backgroundColor: isMatched ? "green" : "transparent",
        color: isMatched ? "white" : "black",
      }}
    >
      {card.text}
    </button>
  );
}

function findMatchId(cardId: TCard["id"]): TCard["toMatch"] {
  const toMatchId = (
    data.leftColumn.find((card) => card.id == cardId) ??
    data.rightColumn.find((card) => card.id == cardId)
  )?.toMatch;
  if (toMatchId == undefined) {
    throw new Error("Invalid cardId, should not be possible");
  }
  return toMatchId;
}
