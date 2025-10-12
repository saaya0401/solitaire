import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    globalCss: {
        "html, body": {
            bg: "teal.200",
            color: "gray.800"
        }
    }
});

export const system = createSystem(defaultConfig, customConfig);