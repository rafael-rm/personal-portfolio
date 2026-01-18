export type Language = 'en' | 'pt'

export type TranslationKey = keyof typeof translations.en

export const translations = {
    en: {
        // Navigation
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_experience: 'Experience',
        nav_projects: 'Projects',
        nav_contact: 'Contact',

        // Hero
        greeting: "Hello, I'm",
        role: 'Software Developer',
        intro:
            'I build robust, scalable back-end systems with C# and .NET that power modern web applications.',

        // About
        about: 'About',
        about_p1:
            'Software Developer with 3 years of experience, specialized in back-end development with C#. I have proven skills in working with cross-functional teams to define project requirements and deliverables, always focused on ensuring code quality and on-time delivery of projects.',
        about_p2:
            'I am an adept of development best practices and have experience in continuous integration and continuous delivery (CI/CD), which allows me to develop robust and efficient solutions. Currently focused on improving my .NET skills, constantly seeking to expand my knowledge in technologies.',

        // Skills
        skills: 'Technical Skills',
        languages: 'Languages & Frameworks',
        frameworks: 'Tools & Technologies',

        // Projects
        projects: 'Projects',
        featured: 'Featured',
        all_projects: 'All Projects',
        project1_title: 'Authentication Microservice',
        project1_desc:
            'A robust and secure authentication microservice built with .NET 8 ASP.NET Core, implementing JWT with RS256 signature. Features a permissions system with roles and groups, ensuring security and consistency in access authorizations. Follows Onion Architecture for clear separation of responsibilities.',
        project2_title: 'Translation SDK',
        project2_desc:
            'A lightweight and powerful localization library for .NET 8 applications. Simplifies multilingual support with automatic language detection, JSON-based translations, variable substitution, and fallback mechanisms. Designed for developers who need efficient, easy-to-implement internationalization in their applications.',
        project3_title: 'Discord Bot',
        project3_desc:
            'A multifunctional Discord bot designed to offer moderation, entertainment, utility tools, and customizable settings. Developed in Python, it provided a comprehensive set of features for Discord communities. The project has been discontinued and is no longer actively maintained, but its source code remains available for reference and learning purposes.',
        project4_title: 'Auto Clicker',
        project4_desc:
            'A lightweight and customizable tool for click automation. Developed in .NET 8 using Windows Forms, it features an intuitive interface, adjustable CPS (clicks per second), configurable jitter for human-like randomness, and a dynamic hotkey system. Designed for ease of use, it includes background execution and anti-detection logic with random pauses.',
        project5_title: '.NET Utility SDK',
        project5_desc:
            'A development kit designed to streamline communication between applications and essential services, including authentication, Cloudflare R2 storage, email sending, custom exception handling, and secret management in Azure Vault. Built with a modular architecture, this SDK provides a seamless and secure way to integrate multiple functionalities into .NET applications.',
        project6_title: 'Discord Webhook Sender',
        project6_desc:
            'A lightweight and easy-to-use .NET library for sending Discord webhooks with rich embeds and message formatting. This library provides a simple and intuitive API for creating and sending Discord webhook messages with support for embeds, colors, fields, and more.',

        // Experience
        experience: 'Experience',
        job1_title: 'Mid-Level Developer',
        job1_company: 'Nuria',
        job1_period: 'Aug 2025 - Present',
        job1_desc:
            'Leading the development of critical healthcare applications and APIs, with a focus on scalability and performance optimization. Primary developer for the "Nuria Appointment" platform, implementing advanced scheduling algorithms and real-time notification systems. Spearheading the migration to microservices architecture, improving system reliability and deployment efficiency. Mentoring junior developers and establishing coding standards and best practices across the team.',
        job2_title: 'Junior Developer',
        job2_company: 'Nuria',
        job2_period: 'Sep 2023 - Jul 2025',
        job2_desc:
            'Implemented new features in products and APIs for the healthcare ecosystem, enhancing functionality and user experience. Key contributor to the development of "Nuria Appointment", an online scheduling system for medical consultations and procedures. Implemented observability metrics with Grafana for real-time monitoring and optimized caching systems to improve performance.',
        job3_title: 'Development Intern',
        job3_company: 'Nuria',
        job3_period: 'Feb 2023 - Sep 2023',
        job3_desc:
            'Developed and maintained APIs for healthcare supply systems, facilitating integration between hospital ERPs and one of the largest hospital supply providers in the market. Participated in debugging and improving existing systems, ensuring API functionality and accuracy.',

        // Contact
        contact: 'Get In Touch',
        contact_text:
            "I'm currently focused on expanding my knowledge in .NET technologies. Feel free to reach out if you'd like to discuss potential opportunities or collaborations.",
        contact_btn: 'Contact Me',

        // Footer
        rights: 'All rights reserved.',
        built_with: 'Built with React and CSS',

        // Language
        switch_to: 'Mudar para Português',

        // GitHub
        view_on_github: 'View on GitHub',

        // Technologies used
        technologies_used: 'Technologies used',
    },
    pt: {
        // Navigation
        nav_about: 'Sobre',
        nav_skills: 'Skills',
        nav_experience: 'Experiência',
        nav_projects: 'Projetos',
        nav_contact: 'Contato',

        // Hero
        greeting: 'Olá, eu sou',
        role: 'Desenvolvedor de Software',
        intro:
            'Desenvolvo sistemas back-end robustos e escaláveis com C# e .NET que impulsionam aplicações web modernas.',

        // About
        about: 'Sobre',
        about_p1:
            'Desenvolvedor de Software com 3 anos de experiência, especializado em desenvolvimento back-end com C#. Possuo habilidades comprovadas em trabalhar com equipes multifuncionais para definir requisitos e entregas de projetos, sempre focado em garantir a qualidade do código e a entrega pontual dos projetos.',
        about_p2:
            'Sou adepto das melhores práticas de desenvolvimento e tenho experiência em integração e entrega contínuas (CI/CD), o que me permite desenvolver soluções robustas e eficientes. Atualmente focado em aprimorar minhas habilidades em .NET, buscando constantemente expandir meu conhecimento em tecnologias.',

        // Skills
        skills: 'Habilidades Técnicas',
        languages: 'Linguagens & Frameworks',
        frameworks: 'Ferramentas & Tecnologias',

        // Projects
        projects: 'Projetos',
        featured: 'Destacados',
        all_projects: 'Todos os Projetos',
        project1_title: 'Microsserviço de Autenticação',
        project1_desc:
            'Um microsserviço de autenticação robusto e seguro construído com .NET 8 ASP.NET Core, implementando JWT com assinatura RS256. Possui um sistema de permissões com funções e grupos, garantindo segurança e consistência nas autorizações de acesso. Segue a Arquitetura Onion para clara separação de responsabilidades.',
        project2_title: 'SDK de Tradução',
        project2_desc:
            'Uma biblioteca de localização leve e poderosa para aplicações .NET 8. Simplifica o suporte multilíngue com detecção automática de idioma, traduções baseadas em JSON, substituição de variáveis e mecanismos de fallback. Projetada para desenvolvedores que precisam de internacionalização eficiente e fácil de implementar em suas aplicações.',
        project3_title: 'Bot para Discord',
        project3_desc:
            'Um bot multifuncional para Discord projetado para oferecer moderação, entretenimento, ferramentas úteis e opções de configuração personalizáveis. Desenvolvido em Python, ele fornecia um conjunto abrangente de recursos para comunidades no Discord. O projeto foi descontinuado e não está mais sendo mantido ativamente, mas seu código-fonte continua disponível para referência e aprendizado.',
        project4_title: 'Auto Clicker',
        project4_desc:
            'Uma ferramenta leve e personalizável para automação de cliques. Desenvolvido em .NET 8 com Windows Forms, possui uma interface intuitiva, configuração de CPS (cliques por segundo), jitter ajustável para simular cliques humanos e um sistema dinâmico de hotkeys. Projetado para facilidade de uso, inclui execução em segundo plano e lógica antideteção com pausas aleatórias.',
        project5_title: 'SDK de Utilitários em .NET',
        project5_desc:
            'Um kit de desenvolvimento projetado para simplificar a comunicação entre aplicações e serviços essenciais, incluindo autenticação, armazenamento no Cloudflare R2, envio de e-mails, manipulação de exceções personalizadas e gerenciamento de segredos no Azure Vault. Construído com uma arquitetura modular, este SDK oferece uma maneira eficiente e segura de integrar diversas funcionalidades em aplicações .NET.',
        project6_title: 'Discord Webhook Sender',
        project6_desc:
            'Uma biblioteca .NET leve e fácil de usar para enviar webhooks do Discord com embeds ricos e formatação de mensagens. Esta biblioteca fornece uma API simples e intuitiva para criar e enviar mensagens de webhook do Discord com suporte para embeds, cores, campos e muito mais.',

        // Experience
        experience: 'Experiência',
        job1_title: 'Desenvolvedor Pleno',
        job1_company: 'Nuria',
        job1_period: 'Ago 2025 - Presente',
        job1_desc:
            'Liderando o desenvolvimento de aplicações e APIs críticas na área da saúde, com foco em escalabilidade e otimização de performance. Desenvolvedor principal da plataforma "Nuria Appointment", implementando algoritmos avançados de agendamento e sistemas de notificação em tempo real. Coordenando a migração para arquitetura de microsserviços, melhorando a confiabilidade do sistema e eficiência de implantação. Mentorando desenvolvedores júniores e estabelecendo padrões de código e melhores práticas na equipe.',
        job2_title: 'Desenvolvedor Júnior',
        job2_company: 'Nuria',
        job2_period: 'Set 2023 - Jul 2025',
        job2_desc:
            'Implementei novas funcionalidades em produtos e APIs para o ecossistema de saúde, aprimorando a funcionalidade e experiência do usuário. Contribuí significativamente para o desenvolvimento do "Nuria Appointment", um sistema online de agendamento para consultas médicas e procedimentos. Implementei métricas de observabilidade com Grafana para monitoramento em tempo real e otimizei sistemas de cache para melhorar o desempenho.',
        job3_title: 'Estagiário de Desenvolvimento',
        job3_company: 'Nuria',
        job3_period: 'Fev 2023 - Set 2023',
        job3_desc:
            'Desenvolvi e mantive APIs para sistemas de suprimentos na área da saúde, facilitando a integração entre ERPs hospitalares e um dos maiores fornecedores de suprimentos hospitalares do mercado. Participei da depuração e melhoria de sistemas existentes, garantindo a funcionalidade e precisão das APIs.',

        // Contact
        contact: 'Entre em Contato',
        contact_text:
            'Atualmente estou focado em expandir meu conhecimento em tecnologias .NET. Sinta-se à vontade para entrar em contato se quiser discutir potenciais oportunidades ou colaborações.',
        contact_btn: 'Contate-me',

        // Footer
        rights: 'Todos os direitos reservados.',
        built_with: 'Construído com React e CSS',

        // Language
        switch_to: 'Switch to English',

        // GitHub
        view_on_github: 'Ver no GitHub',

        // Technologies used
        technologies_used: 'Tecnologias utilizadas',
    },
} as const
