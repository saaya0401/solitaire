import { FoundationCard } from "../../atoms/FoundationCard";
import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Foundations: FC = memo(() => {
    return (
        <Flex gap={10}>
            <FoundationCard />
            <FoundationCard />
            <FoundationCard />
            <FoundationCard />
        </Flex>
    );
});