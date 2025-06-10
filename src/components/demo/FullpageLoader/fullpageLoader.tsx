import { Body, Box, Dialog, Spinner, Title } from '~/main';

export function FullpageLoader() {
  return (
    <Dialog open={true} closeButton={false} modal={true}>
      <Dialog.Block>
        <Box horizontal align="center" gap={32}>
          <Spinner aria-label={'Sender inn skjema'} />
          <Box>
            <Title size="md">Sender inn skjema</Title>
            <Body size="md">Vennligst vent litt, vi sender inn skjemaet...</Body>
          </Box>
        </Box>
      </Dialog.Block>
    </Dialog>
  );
}
