import { Checkbox as ChakraCheckbox } from "@chakra-ui/react"
import React from "react"
import { colors } from "../..";

type CheckboxSize = "small" | "medium" | "large";

interface CheckboxProps {
    isChecked?: boolean
    isDisabled?: boolean
    label: string,
    size: CheckboxSize,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const translateCheckboxSize = (checkboxSize: CheckboxSize): string => {
    switch (checkboxSize) {
        case "large":
            return "lg";
        case "medium":
            return "md";
        case "small":
            return "sm";
    }
}

export const Checkbox = ({ label, size, ...props }: CheckboxProps) => (
    <ChakraCheckbox
        {...props}
        size={translateCheckboxSize(size)}
        colorScheme={"colorSchemes.navy"}
    >
        {label}
    </ChakraCheckbox>
)