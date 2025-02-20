import { Box, Skeleton } from "@mui/material";
import { range } from "lodash";

const TokensSkeleton = () => {
  return (
    <Box display="grid" gap={2} mt={2}>
      {range(3).map((item) => (
        <Skeleton
          key={item}
          width="100%"
          height="60px"
          sx={{ transform: "unset" }}
        />
      ))}
    </Box>
  );
};

export default TokensSkeleton;
