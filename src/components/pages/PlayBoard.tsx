import { Flex, VStack } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { Foundations } from "../organisms/Board/Foundations";
import { Stocks } from "../organisms/Board/Stocks";
import { useGame } from "../../contexts/GameContext";
import { Tableaus } from "../organisms/Board/Tableaus";
import { useGameInit } from "../../hooks/useGameInit";

export const PlayBoard: FC = memo(() => {
    const { setTableaus } = useGame();
    const { initGame } = useGameInit();
    useEffect(() => {
        setTableaus(initGame());
    }, []);

    return (
        <VStack w="100vw" h="100vh" p={20} gap={20}>
            <Flex w="100%" justify="space-between">
                <Foundations />
                <Stocks />
            </Flex>
            <Tableaus />
        </VStack>
    );
});