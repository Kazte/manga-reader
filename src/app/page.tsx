'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import MangaReader from '@/components/manga-reader';
import { open } from '@tauri-apps/plugin-dialog';

export default function Home() {
  const [mangaPath, setMangaPath] = useState<string | null>(null);

  async function handleOpenPath() {
    const file = await open({
      multiple: false,
      directory: false
    });

    if (file) {
      setMangaPath(file);
    }
  }

  return (
    <>
      {mangaPath ? (
        <div>
          <Button onClick={() => setMangaPath(null)}>Close</Button>
          <MangaReader filepath={mangaPath} />
        </div>
      ) : (
        <Button onClick={handleOpenPath}>Click me</Button>
      )}
    </>
  );
}
