import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";

const Loading = () => {
  return (
    <Typography component="div" variant={"h3"}>
      <Skeleton />
    </Typography>
  );
};

export default Loading;
