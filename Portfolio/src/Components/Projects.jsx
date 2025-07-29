import expenseTrackerImage from "../assets/ProjectSnaps/ExpanceTracker.png";
import pythonCodeReviewerImage from "../assets/ProjectSnaps/CodeReviewer.png";
import indianWizardImage from "../assets/ProjectSnaps/IndianWizard.png";


const projects = [
  {
    name: "Expense Tracker App",
    description: "A full-stack expense tracking app to monitor income, expenses, and budgets with insightful charts and data persistence.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Rechats"],
    link: "https://github.com/Baiju2005/expense-tracker-mern",
    image: expenseTrackerImage,
  },

  {
    name: "Python Code Reviewer",
    description: "An AI-based Python code review tool that detects bugs, suggests improvements, and explains code using natural language.",
    tech: ["Python", "LangChain", "Streamlit", "Gimini API"],
    link: "https://pythoncode-reviewer-baiju.streamlit.app/",
    image: pythonCodeReviewerImage,
  },
  {
    name: "IndianWizard IT Services",
    description: "A full-fledged IT service website offering web development, data analysis, and AI solutions for startups and businesses. The site includes a responsive UI, interactive service sections, and a contact form. It is deployed on Render with custom domain integration via GoDaddy.",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "Render", "Hostinger"],
    link: "https://www.indianwizard.tech", 
    image: indianWizardImage,
  }
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div id='projects' className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center bg-white rounded-2xl shadow-md overflow-hidden`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-black mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-900 mb-2">{project.description}</p>
              <p className="text-sm text-gray-900 mb-4">
                <strong>Tech Stack:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" cta-btn "
                id="cta-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
