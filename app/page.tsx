"use client"

import Link from "next/link"
import { Terminal, ArrowRight } from "lucide-react"
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Portfolio() {
    const { t } = useLanguage()

    const languagesAndFrameworks = ["C#", ".NET", "Entity Framework", "SQL", "NoSQL", "Python"]
    const technologiesAndTools = ["Git", "Docker", "AWS", "Elastic Search", "Grafana", "CI/CD", "Clarity"]

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
            {/* Background elements */}
            <div
                className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.05),transparent_50%)]"></div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Header/Hero Section */}
                <header className="mb-16 md:mb-24 relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>

                    {/* Top row with role and language switcher */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6 relative">
                        <div
                            className="flex items-center space-x-2 backdrop-blur-sm py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Terminal className="h-4 w-4" />
                            <span className="font-mono text-sm">{t("role")}</span>
                        </div>
                        <div className="relative z-20">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 mb-4">
                        Rafael Rodrigues
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mt-4">{t("intro")}</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://github.com/rafael-rm" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                                <SiGithub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/rafael-rodrigues-monteiro/" target="_blank"
                            rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                                <SiLinkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </a>
                        <a href="mailto:rafael.rmo@outlook.com">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300"
                            >
                                <SiGmail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </a>
                    </div>
                </header>

                {/* About Section */}
                <section className="mb-16 md:mb-24 relative">
                    <div
                        className="absolute top-1/2 right-0 md:-right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
                    <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center">
                        <span
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-8 h-[2px] mr-3 inline-block"></span>
                        {t("about")}
                    </h2>
                    <div
                        className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 shadow-xl">
                        <p className="text-slate-300 mb-4 leading-relaxed">{t("about_p1")}</p>
                        <p className="text-slate-300 leading-relaxed">{t("about_p2")}</p>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-16 md:mb-24">
                    <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center">
                        <span
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-8 h-[2px] mr-3 inline-block"></span>
                        {t("skills")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card
                            className="bg-slate-800/20 backdrop-blur-sm border-slate-700/30 shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="pt-6 relative">
                                <h3 className="text-lg font-semibold mb-4 text-emerald-400">{t("languages")}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languagesAndFrameworks.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-slate-800/20 backdrop-blur-sm border-slate-700/30 shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CardContent className="pt-6 relative">
                                <h3 className="text-lg font-semibold mb-4 text-emerald-400">{t("frameworks")}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologiesAndTools.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-16 md:mb-24 relative">
                    <div
                        className="absolute bottom-1/3 left-0 md:-left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
                    <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center">
                        <span
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-8 h-[2px] mr-3 inline-block"></span>
                        {t("projects")}
                    </h2>
                    <Tabs defaultValue="featured" className="w-full">
                        <TabsList className="bg-slate-800/30 border border-slate-700/30">
                            <TabsTrigger
                                value="featured"
                                className="data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400"
                            >
                                {t("featured")}
                            </TabsTrigger>
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400"
                            >
                                {t("all_projects")}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="featured" className="mt-6">
                            <div className="grid grid-cols-1 gap-6">
                                <ProjectCard
                                    title={t("project1_title")}
                                    description={t("project1_desc")}
                                    technologies={["C#", ".NET", "ASP.NET Core", "JWT", "RS256", "Onion Architecture"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-auth"
                                />
                                <ProjectCard
                                    title={t("project6_title")}
                                    description={t("project6_desc")}
                                    technologies={["C#", ".NET", "NuGet", "Discord API", "HTTP Client"]}
                                    repoUrl="https://github.com/rafael-rm/discord-webhook-sender"
                                />
                                <ProjectCard
                                    title={t("project5_title")}
                                    description={t("project5_desc")}
                                    technologies={["C#", ".NET", "NuGet"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-sdk"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="all" className="mt-6">
                            <div className="grid grid-cols-1 gap-6">
                                <ProjectCard
                                    title={t("project1_title")}
                                    description={t("project1_desc")}
                                    technologies={["C#", ".NET", "ASP.NET Core", "JWT", "RS256", "Onion Architecture"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-auth"
                                />
                                <ProjectCard
                                    title={t("project6_title")}
                                    description={t("project6_desc")}
                                    technologies={["C#", ".NET", "NuGet", "Discord API", "HTTP Client"]}
                                    repoUrl="https://github.com/rafael-rm/discord-webhook-sender"
                                />
                                <ProjectCard
                                    title={t("project2_title")}
                                    description={t("project2_desc")}
                                    technologies={["C#", ".NET", "JSON", "NuGet"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-languages"
                                />
                                <ProjectCard
                                    title={t("project3_title")}
                                    description={t("project3_desc")}
                                    technologies={["Python", "Discord.py"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-discord-bot"
                                />
                                <ProjectCard
                                    title={t("project4_title")}
                                    description={t("project4_desc")}
                                    technologies={["C#", ".NET", "Windows Forms"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-auto-clicker"
                                />
                                <ProjectCard
                                    title={t("project5_title")}
                                    description={t("project5_desc")}
                                    technologies={["C#", ".NET", "NuGet"]}
                                    repoUrl="https://github.com/rafael-rm/hyzen-sdk"
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Experience Section */}
                <section className="mb-16 md:mb-24">
                    <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center">
                        <span
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-8 h-[2px] mr-3 inline-block"></span>
                        {t("experience")}
                    </h2>
                    <div className="space-y-8">
                        <div className="border-l-2 border-emerald-500/30 pl-6 relative">
                            <div
                                className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0 shadow-lg shadow-emerald-500/20"></div>
                            <h3 className="text-lg font-semibold text-slate-200">{t("job1_title")}</h3>
                            <p className="text-emerald-400 mb-2">{t("job1_company")}</p>
                            <div
                                className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 shadow-lg">
                                <p className="text-slate-300 mb-4">{t("job1_desc")}</p>

                                <div className="mt-4">
                                    <p className="text-sm font-medium text-emerald-400 mb-2">{t("technologies_used")}:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework", "SQL", "Grafana", "Redis", "Docker", "Git", "DynamoDB", "AWS SQS", "AWS Lambda", "Elastic Search", "AWS RDS", "Microservices", "CI/CD"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-2 border-slate-700/50 pl-6 relative">
                            <div
                                className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1/2 transform -translate-y-1/2 shadow-lg shadow-slate-700/20"></div>
                            <h3 className="text-lg font-semibold text-slate-200">{t("job2_title")}</h3>
                            <p className="text-emerald-400 mb-2">{t("job2_company")}</p>
                            <div
                                className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 shadow-lg">
                                <p className="text-slate-300 mb-4">{t("job2_desc")}</p>

                                <div className="mt-4">
                                    <p className="text-sm font-medium text-emerald-400 mb-2">{t("technologies_used")}:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework", "SQL", "Grafana", "Redis", "Docker", "Git", "DynamoDB", "AWS SQS", "AWS Lambda", "Elastic Search", "AWS RDS"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-2 border-slate-700/50 pl-6 relative">
                            <div
                                className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] bottom-0 shadow-lg shadow-slate-700/20"></div>
                            <h3 className="text-lg font-semibold text-slate-200">{t("job3_title")}</h3>
                            <p className="text-emerald-400 mb-2">{t("job3_company")}</p>
                            <div
                                className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 shadow-lg">
                                <p className="text-slate-300 mb-4">{t("job3_desc")}</p>

                                <div className="mt-4">
                                    <p className="text-sm font-medium text-emerald-400 mb-2">{t("technologies_used")}:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["C#", ".NET", "ASP.NET Core", "REST APIs", "SQL", "Entity Framework", "Git", "AWS", "S3"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mb-16 relative">
                    <div
                        className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
                    <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center">
                        <span
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-8 h-[2px] mr-3 inline-block"></span>
                        {t("contact")}
                    </h2>
                    <Card className="bg-slate-800/20 backdrop-blur-sm border-slate-700/30 shadow-xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5"></div>
                        <CardContent className="pt-6 relative">
                            <p className="text-slate-300 mb-6">{t("contact_text")}</p>
                            <a href="https://www.linkedin.com/in/rafael-rodrigues-monteiro/" target="_blank"
                                className="w-full">
                                <Button
                                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white border-none shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 transition-all duration-300">
                                    <SiLinkedin className="mr-2 h-4 w-4" />
                                    {t("contact_btn")}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-800/50 pt-8 text-center text-slate-500 text-sm">
                    <p>
                        © {new Date().getFullYear()} Rafael Rodrigues. {t("rights")}
                    </p>
                    <p className="mt-2">{t("built_with")}</p>
                </footer>
            </div>
        </div>
    )
}

function ProjectCard({
    title,
    description,
    technologies,
    repoUrl = "#",
}: {
    title: string
    description: string
    technologies: string[]
    repoUrl?: string
}) {
    const { t } = useLanguage()

    return (
        <Card
            className="bg-slate-800/20 backdrop-blur-sm border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300 shadow-xl group overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="pt-6 relative">
                <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-300 mb-4">{description}</p>

                <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-slate-800/70 border border-slate-700/50 text-slate-300 rounded-full text-xs hover:bg-slate-700/70 hover:border-emerald-500/30 transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all duration-300"
                        asChild
                    >
                        <Link
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t("view_on_github")}: ${title}`}
                        >
                            <SiGithub className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
