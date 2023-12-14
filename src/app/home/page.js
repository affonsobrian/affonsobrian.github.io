'use client';

import { ButtonSet, Button, Grid, Column } from '@carbon/react';
import { Time, Target, Intelligence } from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">
              Discover top-tier engineers for crafting your software masterpiece
            </h2>
            <p className="landing-page__p">
              Optimize your talent acquisition process with our expertise in
              curating and securing top-tier engineering professionals for your
              team. Reach out to us today and embark on the journey to assemble
              the ideal team tailored to your specific needs.
            </p>
            <ButtonSet label="Primary action">
              <Button kind="primary" href="/hire">
                Find Engineers
              </Button>
              <Button kind="secondary" href="/positions">
                Open Positions
              </Button>
            </ButtonSet>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="Our Principles">
          <InfoCard
            heading="We are Fast"
            body="With our extensive talent database and dedicated recruiters, we quickly find the best engineers for you."
            icon={() => <Time size={32} />}
          />
          <InfoCard
            heading="We are Assertive"
            body="We are dedicated to identifying the right engineers for your company. Our focus is on delivering long-term solutions that align with your organization's needs and goals."
            icon={() => <Target size={32} />}
          />
          <InfoCard
            heading="We have Experience"
            body="Our focus goes beyond technical proficiency; we seek individuals with the collaborative spirit and innovation sought by top-tier companies. With our founder's expertise, we curate a refined pool of candidates, ready to contribute strategically to your organization's success."
            icon={() => <Intelligence size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
