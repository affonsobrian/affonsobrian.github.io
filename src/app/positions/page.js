'use client';

import RepoTable from './RepoTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Column,
  Grid,
} from '@carbon/react';

import React, { useEffect, useState } from 'react';

const headers = [
  {
    key: 'position',
    header: 'Position',
  },
  {
    key: 'language',
    header: 'Language',
  },
  {
    key: 'client',
    header: 'Client',
  },
  {
    key: 'location',
    header: 'Location',
  },
  {
    key: 'apply',
    header: 'Apply',
  },
];

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

function RepoPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      const data = [
        {
          id: 1,
          key: 1,
          position: 'Full Stack Developer',
          language: 'JavaScript',
          client: 'WebSolutions Co.',
          location: 'New York, NY',
          apply: 'Apply',
          description:
            'Join our dynamic team as a Full Stack Developer, proficient in both front-end and back-end technologies.',
        },
        {
          id: 2,
          key: 2,
          position: 'Data Scientist',
          language: 'R and Python',
          client: 'Data Insights Corp.',
          location: 'San Francisco, CA',
          apply: 'Apply',
          description:
            'Exciting opportunity for a Data Scientist to analyze and derive insights from large datasets using R and Python.',
        },
        {
          id: 3,
          key: 3,
          position: 'UX/UI Designer',
          language: 'HTML, CSS, Adobe XD',
          client: 'Design Innovations Ltd.',
          location: 'London, UK',
          apply: 'Apply',
          description:
            'We are seeking a creative and detail-oriented UX/UI Designer to enhance the user experience of our digital products.',
        },
        {
          id: 4,
          key: 4,
          position: 'Mobile App Developer',
          language: 'Swift and Kotlin',
          client: 'App Innovators Inc.',
          location: 'Los Angeles, CA',
          apply: 'Apply',
          description:
            'Develop cutting-edge mobile applications using Swift and Kotlin for both iOS and Android platforms.',
        },
        {
          id: 5,
          key: 5,
          position: 'Network Security Engineer',
          language: 'Cybersecurity',
          client: 'SecureNet Systems',
          location: 'Remote',
          apply: 'Apply',
          description:
            'Join our cybersecurity team to implement and maintain robust network security measures to protect our systems.',
        },
        {
          id: 6,
          key: 6,
          position: 'Machine Learning Engineer',
          language: 'Python, TensorFlow',
          client: 'AI Solutions Ltd.',
          location: 'Seattle, WA',
          apply: 'Apply',
          description:
            'Exciting opportunity for a Machine Learning Engineer to work on innovative projects using Python and TensorFlow.',
        },
        {
          id: 7,
          key: 7,
          position: 'DevOps Engineer',
          language: 'Docker, Kubernetes',
          client: 'CloudOps Technologies',
          location: 'Austin, TX',
          apply: 'Apply',
          description:
            'Join our DevOps team to streamline our development processes using Docker, Kubernetes, and other modern technologies.',
        },
        {
          id: 8,
          key: 8,
          position: 'Front-End Developer',
          language: 'React, Vue.js',
          client: 'WebFront Co.',
          location: 'Toronto, Canada',
          apply: 'Apply',
          description:
            'Passionate about front-end development? Join us and contribute to building responsive and user-friendly web interfaces.',
        },
        {
          id: 9,
          key: 9,
          position: 'IT Project Manager',
          language: 'Project Management',
          client: 'TechPro Solutions',
          location: 'Chicago, IL',
          apply: 'Apply',
          description:
            'Seeking an experienced IT Project Manager to lead and coordinate projects from initiation to successful completion.',
        },
        {
          id: 10,
          key: 10,
          position: 'Database Administrator',
          language: 'SQL, Oracle',
          client: 'DataMasters Inc.',
          location: 'Remote',
          apply: 'Apply',
          description:
            'Opportunity for a skilled Database Administrator to manage and optimize databases using SQL and Oracle.',
        },
        {
          id: 11,
          key: 11,
          position: 'Cybersecurity Analyst',
          language: 'Security',
          client: 'SafeGuard Systems',
          location: 'Washington, DC',
          apply: 'Apply',
          description:
            'Join our cybersecurity team to analyze and respond to security threats and vulnerabilities in our systems.',
        },
        {
          id: 12,
          key: 12,
          position: 'Java Developer',
          language: 'Java, Spring',
          client: 'CodeCrafters Ltd.',
          location: 'Boston, MA',
          apply: 'Apply',
          description:
            'Exciting opportunity for a Java Developer to work on enterprise-level applications using Java and the Spring framework.',
        },
        {
          id: 13,
          key: 13,
          position: 'Cloud Solutions Architect',
          language: 'AWS, Azure',
          client: 'CloudTech Innovations',
          location: 'San Jose, CA',
          apply: 'Apply',
          description:
            'Architect and design scalable and reliable cloud solutions using AWS, Azure, and other cloud technologies.',
        },
        {
          id: 14,
          key: 14,
          position: 'UI/UX Researcher',
          language: 'User Research',
          client: 'UserExperience Labs',
          location: 'Remote',
          apply: 'Apply',
          description:
            'Conduct user research and provide valuable insights to enhance the user experience of our digital products.',
        },
        {
          id: 15,
          key: 15,
          position: 'Software Quality Assurance Engineer',
          language: 'QA, Selenium',
          client: 'QualityTech Solutions',
          location: 'Dallas, TX',
          apply: 'Apply',
          description:
            'Ensure the quality of our software products through rigorous testing and automation using QA and Selenium.',
        },
        {
          id: 16,
          key: 16,
          position: 'Blockchain Developer',
          language: 'Solidity, Ethereum',
          client: 'ChainTech Innovations',
          location: 'Berlin, Germany',
          apply: 'Apply',
          description:
            'Explore the exciting world of blockchain development, working with Solidity and Ethereum to build decentralized applications.',
        },
        {
          id: 17,
          key: 17,
          position: 'Data Engineer',
          language: 'SQL, Big Data',
          client: 'BigData Systems',
          location: 'Sydney, Australia',
          apply: 'Apply',
          description:
            'Opportunity for a Data Engineer to work on large-scale data processing and analytics using SQL and Big Data technologies.',
        },
        {
          id: 18,
          key: 18,
          position: 'Front-End UI Developer',
          language: 'Angular, TypeScript',
          client: 'WebInnovate Solutions',
          location: 'Miami, FL',
          apply: 'Apply',
          description:
            'Join our front-end development team to create stunning and responsive user interfaces using Angular and TypeScript.',
        },
        {
          id: 19,
          key: 19,
          position: 'AI Research Scientist',
          language: 'Machine Learning, Deep Learning',
          client: 'AISolutions Research Labs',
          location: 'Seoul, South Korea',
          apply: 'Apply',
          description:
            'Contribute to cutting-edge AI research projects, focusing on machine learning and deep learning technologies.',
        },
        {
          id: 20,
          key: 20,
          position: 'Mobile Game Developer',
          language: 'Unity, C#',
          client: 'GameCraft Studios',
          location: 'Tokyo, Japan',
          apply: 'Apply',
          description:
            'Passionate about mobile game development? Join our team and create immersive gaming experiences using Unity and C#.',
        },
      ];

      setRows(getRowItems(data));
      setLoading(false);
    }

    getCarbonRepos();
  }, []);

  if (loading) {
    return (
      <Grid className="repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
}

export default RepoPage;
