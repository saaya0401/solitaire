import { Box, Flex, VStack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Foundations } from "../organisms/Board/Foundations";
import { Stocks } from "../organisms/Board/Stocks";

export const PlayBoard: FC = memo(() => {
    const dummyCards = Array.from({ length: 7 }, (_, i) => i + 1);
    return (
        <VStack w="100vw" h="100vh" p={20} gap={20}>
            <Flex w="100%" justify="space-between">
                <Foundations />
                <Stocks />
            </Flex>
            <Flex justify="space-between" w="100%">
                {dummyCards.map((i) => (
                    <Box key={i}>
                        <Box w={90} h={120} border="1px solid black" borderRadius="md" bg="gray.400" />
                    </Box>
                ))}
            </Flex>
        </VStack>
    );
});