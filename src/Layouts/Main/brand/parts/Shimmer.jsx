import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack
      direction={"row"}
      gap={5}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack spacing={1} width={234} height={"303px"} gap={"16px"}>
        <Stack direction={"row"} gap={"20px"} pl={2}>
          <Skeleton variant="circular" width={32} height={32} />
          <Stack gap={0.5}>
            <Skeleton variant="rounded" width={75} height={15} />
            <Skeleton variant="rounded" width={75} height={15} />
          </Stack>
        </Stack>
        <Skeleton variant="rounded" width={"100%"} height={172} />
        <Stack direction={"row"} justifyContent={"space-between"} width={234}>
          <Skeleton variant="rounded" width={83} height={"28px"}></Skeleton>
          <Stack gap={1} direction={"row"}>
            <Skeleton
              variant="circular"
              width={"26px"}
              height={"26px"}
            ></Skeleton>

            <Skeleton
              variant="circular"
              width={"26px"}
              height={"26px"}
            ></Skeleton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
