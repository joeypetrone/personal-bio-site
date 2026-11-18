# Personal Bio Site

## Description 
Personal portfolio site for Joey Petrone, OutSystems lead developer and full-stack developer. Live at [joeydev.net](https://joeydev.net).

## Screenshots
### Bio Page (Home)
![Main Screen](./screenshots/bio-page.png)

### Technologies Page
![Main Screen](./screenshots/technologies-page.png)

### Projects Page
![Main Screen](./screenshots/projects-page.png)

## How to Run
1. Clone this repo and run `npm install` (Node 18)
2. Run `npm start`, then open http://localhost:8080

## Editing content
All content is in the repo and goes live with a deploy.

| What | Where |
|---|---|
| Bio | `db/bio.json` |
| Technologies | `db/tech.json` |
| Projects | `db/projects.json` (set `"available": false` to hide one) |
| Tagline, contact links, page title, meta description | `src/index.html` |

Entries show in key order (`entry01`, `entry02`, ...). The copyright year updates itself.

To publish: check it with `npm start`, commit, then run `npm run deploy`.
