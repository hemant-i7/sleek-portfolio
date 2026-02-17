import { experiences } from '@/config/Experience';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceTimeline } from '../experience/ExperienceTimeline';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-8">
        <ExperienceTimeline experiences={experiences} withTimeline />
      </div>
    </Container>
  );
}
