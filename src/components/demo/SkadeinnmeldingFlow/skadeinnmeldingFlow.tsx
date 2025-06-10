import { useContext, useState } from 'react';
import { FormContext } from '../form.context';
import { SkadeinnmeldingForm } from '../SkadeinnmeldingForm/skadeinnmeldingForm';
import { SkadeinnmeldingData } from '../skadeinnmelding.types';
import { defaultSkadeinnmeldingData } from '../skadeinnmelding.data';
import { Alert } from '@digdir/designsystemet-react';
import { Box, Footer, Header } from '~/main';
import { FullpageLoader } from '../FullpageLoader/fullpageLoader';

export function SkadeinnmeldingFlow() {
  const formContext = useContext(FormContext);

  const [data, setData] = useState<SkadeinnmeldingData>(defaultSkadeinnmeldingData);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const onSubmit = async () => {
    setSubmitting(true);
    await formContext.submit(JSON.stringify(data));
    setSubmitting(false);
    setCompleted(true);
  };

  return (
    <Box gap={32}>
      <Header language="nb-NO" logo={{ url: '/', variant: 'selvbetjening' }} />
      {submitting && <FullpageLoader />}
      {completed && <Alert data-color="success">Takk for at du meldte inn en skade. Sammen fikser vi byen.</Alert>}
      {!completed && <SkadeinnmeldingForm data={data} onChange={setData} onSubmit={onSubmit} />}
      <Footer language="nb-NO" />
    </Box>
  );
}
