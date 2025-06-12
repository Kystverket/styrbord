import { Box } from '~/main';

export interface ContentContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export function ContentContainer({ className, children }: ContentContainerProps) {
  return (
    <Box align="stretch" width="full">
      <Box align="center" mt={16}>
        <Box width="form" p={16}>
          <div className={className}>{children}</div>
        </Box>
      </Box>
    </Box>
  );
}
