import { Link } from '@inertiajs/react';
import { Button, Center, Paper, Text, Tooltip, rem } from '@mantine/core';
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconRefresh,
  IconRepeat,
} from '@tabler/icons-react';
import * as React from 'react';

type Props = {
  arrayStory?: string;
  error?: string;
};
const Shadowing = ({ arrayStory, error }: Props): React.ReactNode => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const tokens = React.useMemo(() => JSON.parse(arrayStory!), [arrayStory]);

  const handleStart = () => {
    setCurrentIndex(0);
    handleStartToSpeech(0);
  };

  const handleStartToSpeech = (index: number) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(tokens[index]);
      // utterance.onstart = () => {
      //   console.log('Speech has started.');
      // };
      // utterance.onend = () => {
      //   console.log('Speech has finished.');
      // };
      // utterance.onerror = (event) => {
      //   console.error('Speech synthesis error:', event.error);
      // };
      speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  const handleNextToken = () => {
    if (currentIndex < tokens.length - 1) {
      setCurrentIndex(currentIndex + 1);
      handleStartToSpeech(currentIndex + 1);
    }
  };

  const handlePreviousToken = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      handleStartToSpeech(currentIndex - 1);
    }
  };

  return (
    <div>
      <Button component={Link} href="/" size="md" variant="light">
        <IconRefresh /> &nbsp;Generate Another
      </Button>

      {error && <Text c={'red'}>{error}</Text>}
      <Paper bg="var(--mantine-color-dark-6)" shadow="md" p="xl" my="lg">
        {tokens.map((token: string, index: number) =>
          index === currentIndex ? (
            <Text span key={index} td="underline" bg="violet.9">
              {token}&nbsp;
            </Text>
          ) : (
            <Text span key={index}>
              {token}&nbsp;
            </Text>
          )
        )}
      </Paper>

      <Center>
        <Tooltip label="Start Over">
          <Button onClick={handleStart} mr={rem(3)}>
            <IconPlayerPlayFilled />
          </Button>
        </Tooltip>
        <Tooltip label="Repeat">
          <Button onClick={() => handleStartToSpeech(currentIndex)} mr={rem(3)}>
            <IconRepeat />
          </Button>
        </Tooltip>
        <Tooltip label="Previous">
          <Button onClick={handlePreviousToken} mr={rem(3)}>
            <IconPlayerTrackNextFilled
              style={{ transform: 'rotate(180deg)', marginLeft: 10 }}
            />
          </Button>
        </Tooltip>
        <Tooltip label="Next">
          <Button onClick={handleNextToken} mr={rem(3)}>
            <IconPlayerTrackNextFilled />
          </Button>
        </Tooltip>
        <Tooltip label="Pause">
          <Button onClick={handleStopSpeech} mr={rem(3)}>
            <IconPlayerPauseFilled />
          </Button>
        </Tooltip>
      </Center>
    </div>
  );
};

export default Shadowing;
