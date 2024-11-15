import { useState } from 'react';

export function useCopy() {
  const [isCopy, setIsCopy] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopy(() => true);
    setTimeout(() => {
      setIsCopy(() => false);
    }, 3000);
  }

  return {
    isCopy,
    handleCopy,
  };
}
