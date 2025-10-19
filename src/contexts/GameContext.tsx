import React, { createContext, useContext, useState } from "react";
import { CardType } from "../types/type"

type GameContextType = {
    tableaus: CardType[][];
    setTableaus: React.Dispatch<React.SetStateAction<CardType[][]>>;
    stock: CardType[];
    setStock: React.Dispatch<React.SetStateAction<CardType[]>>;
    waste: CardType[];
    setWaste: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    //CardType[][]←配列の中に配列が入っている構造
    //[[], [], [], [], [], [], []]←配列７個作りますよ
    const [tableaus, setTableaus] = useState<CardType[][]>([[], [], [], [], [], [], [], []]);
    const [stock, setStock] = useState<CardType[]>([]);
    const [waste, setWaste] = useState<CardType[]>([]);

    return (
        <GameContext.Provider value={{ tableaus, setTableaus, waste, setWaste, stock, setStock }}>
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error("useGame must be used within GameProvider");
    return context;
}