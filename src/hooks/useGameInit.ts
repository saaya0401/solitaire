import { useCallback } from "react";
import { CardType, SuitType } from "../types/type";

export const useGameInit = () => {
    const initGame = useCallback(() => {
        const suits: SuitType[] = ["hearts", "diamonds", "clubs", "spades"];

        // 52枚デッキ作成
        let deck: CardType[] = [];

        //1スートにつき13枚カードを追加する
        suits.forEach((suit) => {
            for (let value = 1; value <= 13; value++) {
                deck.push({ suit, value, faceUp: false });
            }
        });

        //シャッフル
        for (let i = deck.length - 1; i > 0; i--) {
            //ランダムな0-1未満の小数を返して0-iの間の乱数を作り、小数点を切り捨てて整数にする
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]]; // 交換
        }

        //テーブル7列にカード分配
        const newTableaus: CardType[][] = Array.from({ length: 7 }, () => []);
        for (let i = 0; i < 7; i++) { //1-7列目作る
            for (let j = i; j < 7; j++) { //各列に順番にカードを配る
                const card = deck.pop(); //最後の要素を取り出して返し、同時に配列から削除する。山札から一枚引く
                if (card) {
                    //jがiと同じ時列の最後は表向きに
                    card.faceUp = j === i;
                    newTableaus[j].push(card); //対応する列におく
                }
            }
        }
        return {
            tableaus: newTableaus,
            stock: deck,
            waste: []
        };
    },[])

    return { initGame };
}