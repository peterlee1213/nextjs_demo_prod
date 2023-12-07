import { Button, ButtonProps, SxProps, Theme } from "@mui/material";
import { textStyle } from "./header";

/**
 * Encapsulated Button component for header
 */
const HeaderButton = (
  props: Omit<ButtonProps, "sx"> & {
    sx?: Omit<SxProps<Theme>, keyof typeof textStyle>;
  },
) => {
  return (
    <Button {...props} sx={textStyle}>
      {props.children}
    </Button>
  );
};

export default HeaderButton;
