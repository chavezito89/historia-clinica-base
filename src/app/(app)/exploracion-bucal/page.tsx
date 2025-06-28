'use client';

import { PageHeader } from '@/components/page-header';
import { OralExamForm } from '@/components/oral-exam-form';

export default function ExploracionBucalPage() {
  return (
    <>
      <PageHeader title="Exploración Bucal" />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <OralExamForm />
        </div>
      </main>
    </>
  );
}
