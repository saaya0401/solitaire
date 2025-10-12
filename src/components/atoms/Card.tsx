import { Flex } from "@chakra-ui/react"
import { FC, memo, ReactNode } from "react"

type Props = {
    color?: string,
    border?: string,
    bg?: string,
    children?: ReactNode,
    ml?: number,
}

export const Card: FC<Props> = memo((props) => {
    const { color, border, bg, children, ml } = props;
    return (
        <Flex justify="center" align="center" fontSize={60} bg={bg ?? undefined} color={color ?? "gray.500"} border={border ?? undefined} borderRadius="md" w={90} h={120} fontWeight="bold" fontFamily="'Mochiy Pop P One', 'sans-serif'" ml={ml ?? undefined}>
            {children}
        </Flex>
    )
})