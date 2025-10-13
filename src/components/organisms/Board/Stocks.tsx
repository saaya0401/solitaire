import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { BackCard } from "../../atoms/BackCard";
import { Card } from "../../atoms/Card";

export const Stocks: FC = memo(() => {
    return (
        <Flex gap={10}>
            <Flex>
                {[...Array(5)].map((_, i)=>(
                    <Card key={i} bg="red.300" border="1px solid red" ml={i === 0 ? 0 : -50}>f</Card>
                ))}
            </Flex>
            <BackCard />
        </Flex>
    );
});