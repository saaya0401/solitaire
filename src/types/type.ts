export type SuitType = "hearts" | "diamonds" | "clubs" | "spades";

export type CardType = {
    suit: SuitType,
    value: number,
    faceUp: boolean;
}