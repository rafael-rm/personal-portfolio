export interface Project {
    id: string
    titleKey: string
    descriptionKey: string
    technologies: string[]
    githubUrl: string
    featured?: boolean
}

export const projects: Project[] = [
    {
        id: 'auth-microservice',
        titleKey: 'project1_title',
        descriptionKey: 'project1_desc',
        technologies: ['C#', '.NET', 'JWT', 'PostgreSQL'],
        githubUrl: 'https://github.com/rafael-rm/auth-microservice',
        featured: true,
    },
        {
        id: 'discord-webhook-sender',
        titleKey: 'project6_title',
        descriptionKey: 'project6_desc',
        technologies: ['C#', '.NET', 'Nuget', 'Discord API'],
        githubUrl: 'https://github.com/rafael-rm/discord-webhook-sender',
    },
    {
        id: 'translation-sdk',
        titleKey: 'project2_title',
        descriptionKey: 'project2_desc',
        technologies: ['C#', '.NET', 'Nuget'],
        githubUrl: 'https://github.com/rafael-rm/translation-sdk',
        featured: true,
    },
    {
        id: 'discord-bot',
        titleKey: 'project3_title',
        descriptionKey: 'project3_desc',
        technologies: ['Python', 'Discord.py', 'Firebase'],
        githubUrl: 'https://github.com/rafael-rm/discord-bot',
    },
    {
        id: 'auto-clicker',
        titleKey: 'project4_title',
        descriptionKey: 'project4_desc',
        technologies: ['C#', '.NET', 'Windows Forms'],
        githubUrl: 'https://github.com/rafael-rm/auto-clicker',
    },
    {
        id: 'dotnet-utility-sdk',
        titleKey: 'project5_title',
        descriptionKey: 'project5_desc',
        technologies: ['C#', '.NET', 'Nuget'],
        githubUrl: 'https://github.com/rafael-rm/dotnet-utility-sdk',
        featured: true,
    },
]
