# Portfolio

This portfolio project consists of a Frontend and Backend system to showcase personal projects, blogs, and provide a contact form. The application uses Next.js with TypeScript for the frontend and Express.js for the backend. It includes user authentication using NextAuth and stores data in MongoDB.

---

## Live Links
- **Frontend (Live)**: [Portfolio Frontend](https://portfoliofontend5.vercel.app/)
- **Backend (Live)**: [Portfolio Backend](https://portfolio-backend5.vercel.app/)

## Source Code

- **Frontend Source Code**: [Portfolio Frontend GitHub](https://github.com/Md-sakib-al-hasan/portfoliofontend5)
- **Backend Source Code**: [Portfolio Backend GitHub](https://github.com/Md-sakib-al-hasan/PortfolioBackend5)

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Features

### Public Pages

- **Home Page**: Portfolio introduction, skills, featured projects, resume download .
- **Projects Page**: List of projects with detailed pages.
- **Blog Page**: List of blogs with detailed pages.
- **Contact Page**: Contact form with message submission.

### Dashboard (Protected Pages)

- **Login**: Login with NextAuth (Social login).
- **Blog Management**: Create, Read, Update, Delete blogs.
- **Project Managemente**: CRUD operations for projects.
- **Contact Page**: Contact form with message submission.
- **Message Management**: View messages submitted from the contact form.  

### Others

- **Database**: MongoDB integration with Mongoose models and schema hooks.
- **Error Handling**: Middleware-based error handling for consistent API responses.


---

## Technologies

- Next.js 14 with TypeScript
- Tailwind CSS
-  Zod
- NextAuth for authentication

---

## Installation

### Prerequisites

1. Node.js (v14 or later)
2. npm

### Steps

1. Clone the repository:

   ```bash
   https://github.com/Md-sakib-al-hasan/portfoliofontend5.git

   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following environment variables:

   ```plaintext
    DOMAIN_SERVER=http://localhost:5000/api/v1
    NEXT_PUBLIC_DOMAIN_SERVER=http://localhost:5000/api/v1
    NEXT_PUBLIC_DOMAIN_FRONTEND=http://localhost:3000
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dfetwksnk(demo)
    CLOUDINARY_API_KEY=53292372575422(demo)
    CLOUDINARY_API_SECRET=0b25Jc5m0BDjidjfihajfndg (demo)
    CLOUDINARY_UPLOAD_PRESET=portflio(demo)

    GITHUB_SECRET=7e5bfdd3042d389a87fasdkfjk335mls(demo)
    GITHUB_ID=Iv1.e0d7ksdfjhsa(demo)
    NEXTAUTH_SECRET=abac (demo)

    GOOGLE_CLIENT_SECRET=GOCSPX-2je3HeMKfe_KBTnxSakuiafkakd(demoi)
    GOOGLE_CLIENT_ID=1085732682185-r15kvikeias20qp3oadfaj5poq6akfjkafyq0q4gspv6o.apps.googleusercontent.com(demo)


4. Start the server:
   ```bash
      npm run start
   ```

---

## Contributing
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request


## Contact
For any questions or support, reach out at [mdsakibalhasanprogrammer1@gmail.com](mailto:mdsakibalhasanprogrammer1@gmail.com).
