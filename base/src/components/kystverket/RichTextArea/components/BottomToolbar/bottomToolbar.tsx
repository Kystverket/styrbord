import { Box, Button, Icon } from '~/main';
import classes from './bottomToolbar.module.css';

export function BottomToolbar() {
  return (
    <Box align="center" justify="between" px={12} pb={12} horizontal className={classes.wrapper}>
      <Box>
        <Button variant="ghost" color="neutral" icon>
          <Icon material="image" />
        </Button>
      </Box>
      <Box horizontal gap={16}>
        <Button>Avbryt</Button>
        <Button variant="filled">Lagre</Button>
      </Box>
    </Box>
  );
}
