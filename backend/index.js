const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample Projects Data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/myusername/ecommerce",
        demo: "https://ankit123-del.github.io/HER-S-WISH/"
    },
    {
        id: 2,
        title: "AI Chat Application",
        description: "Real-time chat application with LLM integration for intelligent responses.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        tech: ["Vite", "Express", "Socket.io", "OpenAI"],
        github: "https://github.com/myusername/ai-chat",
        demo: "https://my-ai-chat-demo.com"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, highly interactive portfolio website with dynamic animations.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        tech: ["React", "Framer Motion", "Vanilla CSS"],
        github: "https://github.com/myusername/portfolio",
        demo: "https://my-portfolio.com"
    }
];

// Routes
// Get all projects
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please fill all fields" });
    }

    try {
        // Setup direct responses without actual smtp server setup to allow user to run it.
        // We'll mimic sending email here. If user provides SMTP in .env it works.
        if (process.env.SMTP_HOST && process.env.SMTP_USER) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: process.env.SMTP_PORT == 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            await transporter.sendMail({
                from: `"${name}" <${email}>`,
                to: process.env.RECEIVER_EMAIL,
                subject: `New Contact Request from ${name}`,
                text: message,
                html: `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Message:</strong><br/>${message}</p>`
            });
        }
        res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Server error. Could not send message." });
    }
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Backend server strictly running on http://localhost:${PORT}`);
});
