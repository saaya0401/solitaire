import { Flex, VStack } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { Foundations } from "../organisms/Board/Foundations";
import { DrawArea } from "../organisms/Board/DrawArea";
import { useGame } from "../../contexts/GameContext";
import { Tableaus } from "../organisms/Board/Tableaus";
import { useGameInit } from "../../hooks/useGameInit";

export const PlayBoard: FC = memo(() => {
    const { setTableaus, setStock, setWaste } = useGame();
    const { initGame } = useGameInit();
    useEffect(() => {
        const { tableaus, stock, waste } = initGame();
        setTableaus(tableaus);
        setStock(stock);
        setWaste(waste);
    }, []);

    return (
        <VStack w="100vw" h="100vh" p={20} gap={20}>
            <Flex w="100%" justify="space-between">
                <Foundations />
                <DrawArea />
            </Flex>
            <Tableaus />
        </VStack>
    );
});