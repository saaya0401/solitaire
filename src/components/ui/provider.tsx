"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from "../../theme/theme"
import { GameProvider } from "../../contexts/GameContext"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}>
        <GameProvider>
          {props.children}
        </GameProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}
