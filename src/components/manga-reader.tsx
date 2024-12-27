'use client';

import { Document, Page } from 'react-pdf';

import { useState } from 'react';

type ViewMode = 'single' | 'double';
type ReadingMode = 'ltr' | 'rtl';
export default function MangaReader({ filepath }: { filepath: string }) {
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [readingMode, setReadingMode] = useState<ReadingMode>('ltr');
  const [useCover, setUseCover] = useState(true);
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <p>Page 1 of {numPages}</p>
    </div>
  );
}

const chunkArray = (array: number[], size: number): number[][] =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
