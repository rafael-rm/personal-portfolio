export interface Skill {
    name: string
    icon: string
}

export interface SkillCategory {
    titleKey: string
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        titleKey: 'languages',
        skills: [
            { name: 'C#', icon: 'csharp' },
            { name: '.NET', icon: 'dotnet' },
            { name: 'Python', icon: 'python' },
            { name: 'SQL', icon: 'database' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'JavaScript', icon: 'javascript' },
        ],
    },
    {
        titleKey: 'frameworks',
        skills: [
            { name: 'PostgreSQL', icon: 'postgresql' },
            { name: 'SQL Server', icon: 'sqlserver' },
            { name: 'Redis', icon: 'redis' },
            { name: 'RabbitMQ', icon: 'rabbitmq' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git', icon: 'git' },
            { name: 'Azure', icon: 'azure' },
            { name: 'AWS', icon: 'aws' },
        ],
    },
]
