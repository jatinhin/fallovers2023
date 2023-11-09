import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const SliderShimmer = () => {
  return (
    <Stack
      direction={"row"}
      gap={5}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={393} gap={1} height={270} >
        <Skeleton variant="rounded" width={393} height={230}  />
        <Stack direction={"row"} gap={15}>
          <Stack gap={1}>
            <Skeleton variant="rounded" width={66} height={17} />
            <Skeleton variant="rounded" width={133} height={23} />
          </Stack>
          <Stack justifyContent={"center"}>
            <Skeleton variant="rounded" width={88} height={35} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderShimmer