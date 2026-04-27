# jacktym.github.io

Data repository for my personal portfolio website at [jacktym.dev](https://jacktym.dev).

## Structure

```
├── projects.json       # Portfolio projects with metadata and stats
├── awards.json         # Competition awards (FBLA)
├── certifications.json # Professional certifications (Credly, CollegeBoard)
└── .github/workflows/  # Automated stat updates
```

## Data Files

**projects.json** - 45+ projects spanning Java, TypeScript, Rust, Go, C++, Python, C#, and more. Includes:
- Project descriptions and dates
- GitHub stats (stars, clones, visitors) for public repos
- Links to live deployments
- Screenshot references

**awards.json** - FBLA competition placements in Mobile App Development and Game Development.

**certifications.json** - AP scores and industry certifications (IT Specialist - Java, Autodesk Inventor).

## Automation

A GitHub Action runs every 12 hours to fetch current stats (stars, clones, unique visitors) for public repositories via the GitHub API.

## Tech Stack Highlights

The projects showcase experience with:
- **Frontend**: Vue, Nuxt, React, Unity
- **Backend**: Node.js, Go, Rust, Java
- **Data**: PostgreSQL, ClickHouse, Drizzle ORM
- **Infrastructure**: AWS (Lambda, ECS), Docker
- **Game Modding**: Minecraft Forge, BepInEx, Risk of Rain 2

## Contact

- Website: [jacktym.dev](https://jacktym.dev)
- GitHub: [@JackTYM](https://github.com/JackTYM)
