import { FC, memo } from "react";
import { Card } from "../../atoms/Card";
import { Box, Flex } from "@chakra-ui/react";
import { useGame } from "../../../contexts/GameContext";

export const Tableaus: FC = memo(() => {
    const { tableaus, setTableaus } = useGame();
    return (
        <Flex justify="space-between" w="100%">
            {tableaus.map((column, i) => (
                <Box key={i}>
                    {column.map((card, j) => (
                        <Card key={j} mt={j == 0 ? 0 : -20} border="1px solid red" bg={card.faceUp ? "red.300" : "gray.400"}>
                            {card.faceUp ? `${card.value}${card.suit[0].toUpperCase()}`: ""}
                        </Card>
                    ))}
                </Box>
            ))}
        </Flex>
    );
});