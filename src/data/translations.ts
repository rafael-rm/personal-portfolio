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
            'Focused on building high-performance .NET architectures. I design and build scalable, mission-critical systems that drive business value.',

        // About
        about: 'About',
        about_p1:
            'Backend Engineer focused on delivering robust, maintainable software solutions. My expertise lies in designing clean architectures and optimizing system performance using the .NET ecosystem. I thrive in collaborative environments, bridging the gap between complex technical requirements and business goals, ensuring code quality and reliable delivery.',
        about_p2:
            'More than just functional code, I aim to build resilient systems that are easy to evolve. My focus is on making architectural decisions that balance immediate performance with long-term maintainability, ensuring the software grows sustainably alongside the business.',

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
            'High-security authentication microservice implementing RS256 JWTs and granular permission management. Architected with Onion Architecture to ensure testability, scalability, and strict separation of concerns.',
        project2_title: 'Translation SDK',
        project2_desc:
            'High-performance localization library for .NET 8 applications. Streamlines internationalization with automatic language detection, zero-allocation parsing strategies, and robust fallback mechanisms, significantly reducing developer integration time.',
        project3_title: 'Discord Bot',
        project3_desc:
            'Designed and deployed a multifunctional Discord bot serving active communities. Leveraged Python and Firebase for real-time data synchronization and complex state management before project sunset.',
        project4_title: 'Auto Clicker',
        project4_desc:
            'Engineered a low-latency automation tool with human-like behavior simulation. Implemented advanced anti-detection algorithms and optimized background processing using .NET 8 and Windows Forms to ensure stability under high load.',
        project5_title: '.NET Utility SDK',
        project5_desc:
            'Modular ecosystem utility SDK unifying Cloudflare R2, Azure Vault, and notification services. Standardized exception handling and resilience patterns (Retry/Circuit Breaker) across multiple microservices, improving system reliability.',
        project6_title: 'Discord Webhook Sender',
        project6_desc:
            '.NET library abstracting Discord\'s Webhook API. Provides a fluent interface for constructing complex rich media messages (Embeds), simplifying third-party integration and standardizing notification formats.',

        // Experience
        experience: 'Experience',
        job1_title: 'Mid-Level Developer',
        job1_company: 'Nuria',
        job1_period: 'Aug 2025 - Present',
        job1_desc:
            "Core Developer for the 'Nuria Appointment' scheduling engine and Architect of the integration with 'Reserve with Google' (a pioneering healthcare implementation in Brazil). Prioritizing high availability and sub-second latency while contributing to system scalability and maintainability improvements. Mentoring the engineering team on C# best practices and code quality standards.",
        job2_title: 'Junior Developer',
        job2_company: 'Nuria',
        job2_period: 'Sep 2023 - Jul 2025',
        job2_desc:
            'Developer of key features for the healthcare ecosystem, directly impacting user experience. Played a core role in developing the online scheduling system, ensuring data integrity. Implemented comprehensive observability via Grafana/Elastic for proactive monitoring and optimized caching strategies (DynamoDB) to boost application throughput.',
        job3_title: 'Development Intern',
        job3_company: 'Nuria',
        job3_period: 'Feb 2023 - Sep 2023',
        job3_desc:
            'Built and maintained integration APIs connecting hospital ERPs with major supply chain providers. Focused on system reliability and debugging complex integration scenarios to ensure seamless data synchronization.',

        // Contact
        contact: 'Get In Touch',
        contact_text:
            "Open to discussing complex backend challenges. Let's connect to define how I can contribute to your team's success.",
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
            'Focado em construir arquiteturas .NET de alta performance. Projeto e construo sistemas escaláveis e de missão crítica que geram valor real ao negócio.',

        // About
        about: 'Sobre',
        about_p1:
            'Engenheiro Backend focado na entrega de soluções de software robustas e manuteníveis. Minha expertise está no design de arquiteturas limpas e na otimização de performance utilizando o ecossistema .NET. Atuo na ponte entre requisitos técnicos complexos e objetivos de negócio, garantindo qualidade de código e entregas confiáveis.',
        about_p2:
            'Mais do que apenas código funcional, busco criar sistemas resilientes e fáceis de evoluir. Meu foco está em tomar decisões arquiteturais que equilibrem performance imediata com manutenibilidade a longo prazo, garantindo que o software cresça sustentavelmente junto com o negócio.',

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
            'Microsserviço de autenticação de alta segurança implementando JWTs RS256 e gestão granular de permissões. Projetado com Arquitetura Onion para garantir testabilidade, escalabilidade e estrita separação de responsabilidades.',
        project2_title: 'SDK de Tradução',
        project2_desc:
            'Biblioteca de localização de alta performance para aplicações .NET 8. Otimiza a internacionalização com detecção automática de idioma, estratégias de parsing com alocação zero e mecanismos de fallback robustos, reduzindo significativamente o tempo de integração.',
        project3_title: 'Bot para Discord',
        project3_desc:
            'Projetei e implantei um bot multifuncional para Discord servindo comunidades ativas. Utilizei Python e Firebase para sincronização de dados em tempo real e gerenciamento complexo de estado antes do encerramento do projeto.',
        project4_title: 'Auto Clicker',
        project4_desc:
            'Engenharia de ferramenta de automação de baixa latência com simulação de comportamento humano. Implementei algoritmos avançados de anti-detecção e processamento em segundo plano otimizado usando .NET 8 e Windows Forms.',
        project5_title: 'SDK de Utilitários em .NET',
        project5_desc:
            'SDK utilitário modular unificando Cloudflare R2, Azure Vault e serviços de notificação. Padronizou tratamento de exceções e padrões de resiliência (Retry/Circuit Breaker) em múltiplos microsserviços, melhorando a confiabilidade do sistema.',
        project6_title: 'Discord Webhook Sender',
        project6_desc:
            'Biblioteca .NET abstraindo a API de Webhook do Discord. Fornece uma interface fluente para construção de mensagens complexas de mídia rica (Embeds), simplificando integrações de terceiros e padronizando formatos de notificação.',

        // Experience
        experience: 'Experiência',
        job1_title: 'Desenvolvedor Pleno',
        job1_company: 'Nuria',
        job1_period: 'Ago 2025 - Presente',
        job1_desc:
            "Desenvolvedor responsável pelo motor de agendamento 'Nuria Appointment' e Arquiteto da integração com o 'Reserve with Google' (uma das primeiras do setor de saúde no Brasil). Priorizando alta disponibilidade e latência mínima, enquanto contribuo para melhorias de escalabilidade e manutenibilidade do sistema. Mentorando o time de engenharia em boas práticas de C# e padrões de qualidade.",
        job2_title: 'Desenvolvedor Júnior',
        job2_company: 'Nuria',
        job2_period: 'Set 2023 - Jul 2025',
        job2_desc:
            'Desenvolvedor de funcionalidades-chave para o ecossistema de saúde, impactando diretamente a experiência do usuário. Atuei no desenvolvimento central do sistema de agendamento online, assegurando integridade de dados. Implementei observabilidade abrangente via Grafana/Elastic para monitoramento proativo e estratégias de cache (DynamoDB) para maximizar o throughput da aplicação.',
        job3_title: 'Estagiário de Desenvolvimento',
        job3_company: 'Nuria',
        job3_period: 'Fev 2023 - Set 2023',
        job3_desc:
            'Construiu e manteve APIs de integração conectando ERPs hospitalares a grandes provedores de cadeia de suprimentos. Focado na confiabilidade do sistema e na depuração de cenários complexos de integração para garantir sincronização de dados fluida.',

        // Contact
        contact: 'Entre em Contato',
        contact_text:
            'Aberto para discutir desafios complexos de backend. Vamos conversar sobre como posso contribuir para o sucesso da sua equipe.',
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
