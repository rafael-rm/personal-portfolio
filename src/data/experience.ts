export interface Experience {
    id: string
    titleKey: string
    companyKey: string
    periodKey: string
    descriptionKey: string
    technologies: string[]
}

export const experiences: Experience[] = [
    {
        id: 'mid-level',
        titleKey: 'job1_title',
        companyKey: 'job1_company',
        periodKey: 'job1_period',
        descriptionKey: 'job1_desc',
        technologies: ['C#', '.NET', 'Azure', 'PostgreSQL', 'RabbitMQ', 'Grafana', 'Elasticsearch'],
    },
    {
        id: 'junior',
        titleKey: 'job2_title',
        companyKey: 'job2_company',
        periodKey: 'job2_period',
        descriptionKey: 'job2_desc',
        technologies: ['C#', '.NET', 'Redis', 'PostgreSQL', 'Grafana', 'Docker'],
    },
    {
        id: 'intern',
        titleKey: 'job3_title',
        companyKey: 'job3_company',
        periodKey: 'job3_period',
        descriptionKey: 'job3_desc',
        technologies: ['C#', '.NET', 'SQL Server', 'REST APIs'],
    },
]
