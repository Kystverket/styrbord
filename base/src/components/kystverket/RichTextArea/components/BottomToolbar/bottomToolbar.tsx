import type { ReactNode } from 'react';
import { Box } from '~/main';
import classes from './bottomToolbar.module.css';

type BottomToolbarProps = {
  left?: ReactNode;
  right?: ReactNode;
  middle?: ReactNode;
  above?: ReactNode;
};

export const BottomToolbar = ({ left, right, middle, above }: BottomToolbarProps) => {
  return (
    <Box gap={8} px={12}>
      {above}

      <Box align="center" justify="between" px={12} pb={12} horizontal>
        <Box horizontal>
          <Box horizontal gap={4} pr={4}>
            {left}
          </Box>
          {left && middle && <div className={classes.separator} />}
          <Box horizontal align="center" pl={12}>
            {middle}
          </Box>
        </Box>
        <Box horizontal gap={16}>
          {right}
        </Box>
      </Box>
    </Box>
  );
};
