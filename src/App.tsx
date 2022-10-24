import React from "react";
import { Box } from "snowbox-ui";

export default function Demo() {
  return (
    <Box>
      <Box m={20} p={30} flex={1} bg="Blu014" bw={1} bc="Blu010">
        <Box c h={50} bg="Blu010" w="100%" DIN>
          Hello Snowbox
        </Box>
      </Box>
    </Box>
  );
}
