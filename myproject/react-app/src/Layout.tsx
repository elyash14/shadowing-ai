import { Link } from '@inertiajs/react';
import { AppShell, Container, Text, rem } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';

import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container
          size="md"
          style={{ alignItems: 'center', display: 'flex', height: '100%' }}
        >
          <IconSparkles
            style={{ width: rem(40), height: rem(40), marginRight: rem(20) }}
          />

          <Text>AI SHadowing Technic</Text>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container size="md">{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
