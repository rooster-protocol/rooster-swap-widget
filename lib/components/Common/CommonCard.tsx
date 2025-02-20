import { Card, CardProps, SxProps, Theme, useTheme } from "@mui/material";

interface TProps extends CardProps {
  styles?: SxProps<Theme>;
}

function CommonCard(props: TProps) {
  const theme = useTheme();

  const { children, styles } = props;

  return (
    <Card
      sx={{
        borderRadius: "12px",
        px: 3,
        py: 2.5,
        border: `1px solid ${theme.borders.secondary}`,
        ...styles,
      }}
      {...props}>
      {children}
    </Card>
  );
}

export default CommonCard;
