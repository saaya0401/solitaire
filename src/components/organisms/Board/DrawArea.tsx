import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Card } from "../../atoms/Card";
import { useGame } from "../../../contexts/GameContext";

export const DrawArea: FC = memo(() => {
    const { stock, setStock, waste, setWaste } = useGame();
    const handleDraw = () => {
        if (stock.length === 0) {
            //...cardはスプレッド構文でcardの中身(value, suit, faceUp)をコピーしてfaceUpを上書きしている
            setStock(waste.map((card) => ({ ...card, faceUp: false })));
            setWaste([]);
            return;
        }
        // stock配列の一番最後のカード取り出す
        const drawnCard = stock[stock.length - 1];
        drawnCard.faceUp = true;
        //最後の一枚を抜いた残り
        setStock(prev => prev.slice(0, -1));
        setWaste(prev => [...prev, drawnCard]);
    }
    return (
        <Flex gap={10}>
            {waste.slice(-4).map((card, i) => (
                <Card key={i} bg="red.300" border="1px solid red" ml={i === 0 ? 0 : -20} fontSize={38}>{`${card.value}${card.suit[0].toUpperCase()}`}</Card>
            ))}
            <Card bg={stock.length > 0 ? "gray.400" : "inherit"} border={stock.length > 0 ? "1px solid gray" : "1px dashed gray"} onClick={handleDraw} fontSize={26}>
                <Flex bg="white" borderRadius="full"  w={10} h={10} justify="center" align="center">
                    {stock.length}
                </Flex>
            </Card>
        </Flex>
    );
});