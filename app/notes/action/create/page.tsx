'use client'

import type { Metadata } from 'next';
import css from './CreateNote.module.css'; 
import NoteForm from '@/components/NoteForm/NoteForm';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Створення нової нотатки | NoteHub',
  description: 'Сторінка для створення нової нотатки у застосунку NoteHub. Введіть текст, виберіть тег і збережіть запис.',
  openGraph: {
    title: 'Створення нової нотатки | NoteHub',
    description: 'Сторінка для створення нової нотатки у застосунку NoteHub. Введіть текст, виберіть тег і збережіть запис.',
    url: 'https://notehub.com/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub Open Graph Image',
      },
    ],
  },
};

export default function CreateNote() {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/notes');
  };


  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm onCancel={handleCancel} />
      </div>
    </main>
  );
}