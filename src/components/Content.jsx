import React from "react";
import { useEffect } from "react";
import "../App.css";

function Content() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // optional: animate only once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="Content">
        <div className="fade-up" id="about">
          {" "}
          <p className="fade-up">
            I am a <spantext>Data Analyst </spantext> skilled in
            <spantext> Excel, Power BI, Python (pandas), SQL</spantext>,
            and <spantext>data visualization</spantext>. I enjoy analyzing data,
            finding insights, and helping make data-driven decisions through
            clear and structured analysis. I am particularly interested in
            creating <spantext>impactful dashboards</spantext> and understanding how
            data can inform real-world solutions.
          </p>
          <p className="fade-up">
            My main interest is{" "}
            <spantext>data analytics and visualization</spantext>. I enjoy
            working with{" "}
            <spantext>
              Power BI, Excel charts, SQL queries, data cleaning,
              basic Python scripting,
            </spantext>{" "}
            and <spantext>dashboard/report design</spantext>. I am continuously
            improving my understanding of modern data tools and practices
            by building practical projects.
          </p>
          <p className="fade-up">
            I am looking to grow further as a{" "}
            <spantext>Data Analyst (Fresher)</spantext> and gain
            deeper knowledge of{" "}
            <spantext>business intelligence, analytics projects,</spantext> and{" "}
            <spantext>data-driven decision making</spantext>. I enjoy
            learning new concepts, solving problems, and turning ideas into
            insightful reports.
          </p>{" "}
        </div>


        {/* <div className="fade-up" id="skills">
          <h5>Skills</h5>

          <div id="skillCard">
            <div id="skillField">Web Development</div>
            <div id="skillList">
              <div id="skillListSet"> <skill>HTML</skill> <skill>CSS</skill>   <skill>JavaScript</skill> </div>
              <div id="skillListSet"> <skill>PHP</skill> <skill>MySql</skill>  <skill>React.js</skill> </div>
              <div id="skillListSet"> <skill>Git/GitHub</skill> <skill>XAMPP</skill> <skill>VSCode</skill> </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Data Analysis (Learning)</div>
            <div id="skillList">
              <div id="skillListSet"> <skill>Excel</skill> <skill>PowerBI</skill>  <skill>MySql</skill> </div>
              <div id="skillListSet"> <skill>Python (Basics, Pandas)</skill></div>
              <div id="skillListSet"> <skill>Data Cleaning & Visualization</skill> </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Salesforce (Learning)</div>
            <div id="skillList">
              <div id="skillListSet"><skill>CRM Basics</skill></div>
              <div id="skillListSet"><skill>Salesforce Administrator</skill></div>
              <div id="skillListSet"><skill>User & Data Management</skill></div>
              <div id="skillListSet"><skill>Workflow Automation</skill></div>
            </div>
          </div>

          <div id="BoxLink">
            <a href="https://docs.google.com/document/d/1dHw40rRaKqDiLf6PDNYzV6CrzgvJ7d0BtaqogfGR0R0" target='_blank'>Viéw Full Résumé⌝</a>
          </div>
        </div> */}

        <div className="fade-up" id="skills">
          <h5>Skills</h5>

          <div id="skillCard">
            <div id="skillField">Data Analysis & Visualization</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Excel (Advanced)</skill> <skill>Power BI</skill> <skill>Tableau</skill>
              </div>
              <div id="skillListSet">
                <skill>Data Cleaning</skill> <skill>Data Visualization</skill>
              </div>
              <div id="skillListSet">
                <skill>Pivot Tables</skill><skill>Dashboards</skill> <skill>Reporting</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">SQL & Database</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>MySQL</skill> <skill>PostgreSQL</skill> <skill>MS SQL Server</skill>
              </div>
              <div id="skillListSet">
                <skill>SQL Queries</skill> <skill>Joins & Subqueries</skill>
              </div>
              <div id="skillListSet">
                <skill>Normalization</skill> <skill>Database Design</skill>
              </div>
              <div id="skillListSet">
                <skill>Data Extraction</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Python for Data Analysis</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Python (Basics)</skill> <skill>Pandas</skill> <skill>NumPy</skill>
              </div>
              <div id="skillListSet">
                <skill>Matplotlib</skill> <skill>Data Manipulation</skill>
              </div>
              <div id="skillListSet">
                <skill>Data Import/Export</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Business Intelligence</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>ETL Concepts</skill> <skill>DAX (Power BI)</skill> <skill>Power Query</skill>
              </div>
              <div id="skillListSet">
                <skill>KPIs & Metrics</skill> <skill>Business Dashboards</skill>
              </div>
              <div id="skillListSet">
                <skill>Storytelling with Data</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Development Tools</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Git</skill> <skill>GitHub</skill> <skill>VS Code</skill>
              </div>
              <div id="skillListSet">
                <skill>Anaconda</skill> <skill>Jupyter Notebook</skill>
              </div>
              <div id="skillListSet">
                <skill>Google Sheets</skill> <skill>MS Office Suite</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Analytical Skills</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Data Interpretation</skill> <skill>Problem Solving</skill>
              </div>
              <div id="skillListSet">
                <skill>Critical Thinking</skill> <skill>Communication</skill>
              </div>
              <div id="skillListSet">
                <skill>Presentation Skills</skill> <skill>Team Collaboration</skill>
              </div>
            </div>
          </div>

          <div id="BoxLink">
            <a
              href="https://docs.google.com/document/d/1ED9K8uYJO4nxM7kifASLS0iEBkcY7kdkb4gbtANrP98"
              target="_blank"
            >
              Viéw Full Résumé⌝
            </a>
          </div>
        </div>


        <div className="fade-up" id="experiance">
          <h5>Experiance</h5>

          <div id="ExpCard">
            {" "}
            <div id="ExpTitle">
              JAN 2026 -{" "}
              {new Date()
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase()}{" "}
              {new Date().getFullYear()}
            </div>{" "}
            <div id="ExpInfo">
              {" "}
              <div id="ExpCompanyName">
                {" "}
                Grras IT Solutions Pvt. Ltd. [Data Analyst Intern]{" "}
              </div>
              <div id="ExpList">● Analyzed and cleaned datasets using Excel, SQL, and Python (Pandas)</div> <div id="ExpList">● Performed data analysis to identify trends, patterns, and useful business insights</div> <div id="ExpList">● Created dashboards and visual reports using Power BI to present findings clearly</div>
              <div id="ExpProject">
                {" "}
                ⫱{" "}
                <a
                  href="https://github.com/Drushti2706/AI_-_Short_Videos_Impact_on_Student_Productivity"
                  target="_blank"
                >
                  {" "}
                  AI vs Short Videos Impact on Student 🔥 [Github] ↗{" "}
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>Excel</skill> <skill>Power BI</skill>{" "}
                <skill>Python (Pandas)</skill> <skill>SQL</skill>
              </div>
              <skill>Data Visualization</skill> <skill>Data Analysis</skill>{" "}
              <skill>Data Cleaning</skill>
            </div>
          </div>

          {/* <div id="ExpCard">
            <div id="ExpTitle">JULY - AUG 2025</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                CreArt Solution Ptv. Ltd. [React.Js Intern]
              </div>
              <div id="ExpList">
                ● Worked on React component building, routing, and state basics
              </div>
              <div id="ExpList">
                ● Gained experience in JSX, props, basic UI handling and Cors
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager"
                  target="_blank"
                >
                  Locify - Password Manager WebApp 🔐 [Github] ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>React.js</skill> <skill>JavaScript</skill>{" "}
                <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div> */}
        </div>

        <div className="fade-up" id="Projects">
          <h5>Projects</h5>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/PhonePe_Insights_Analysis/refs/heads/main/Phone%20pe.png" alt="PhonePe Insights Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">📱 PhonePe Insights Analysis</div>
              <div id="projDesc">
                Analyzed PhonePe transaction data to understand payment flow, transaction
                trends, categories, and key business insights through an interactive dashboard.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/PhonePe_Insights_Analysis" target="_blank">
                  PhonePe Insights Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>Data Analysis</skill> <skill>Data Visualization</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Covid_19_Situation_Dashboard/refs/heads/main/Covid%2019%20Data%20Analysis%20Dashboard.png" alt="Covid 19 Dashboard" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🦠 Covid-19 Situation Dashboard</div>
              <div id="projDesc">
                Created an interactive dashboard to visualize COVID-19 cases, trends,
                recoveries, and pandemic statistics for better understanding of the situation.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Covid_19_Situation_Dashboard" target="_blank">
                  Covid-19 Dashboard [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>Data Visualization</skill> <skill>Data Analysis</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Student-_Admission-Performance_Analysis_Dashboard/refs/heads/main/college.png" alt="Student Analysis Dashboard" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🎓 Student Admission & Performance Analysis</div>
              <div id="projDesc">
                Analyzed student admission and academic performance data to identify trends,
                patterns, and insights using an interactive dashboard.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Student_Admission_and_Performance_Analysis_Dashboard" target="_blank">
                  Student Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>Data Analysis</skill> <skill>Excel</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Super_Store_Data_Analysis/refs/heads/main/SuperstoreDataAnalysis.png" alt="Super Store Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🛒 Super Store Data Analysis</div>
              <div id="projDesc">
                Analyzed retail sales data to identify revenue trends, customer segments,
                product performance, and regional sales insights through a dashboard.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Super_Store_Data_Analysis" target="_blank">
                  Super Store Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>SQL</skill> <skill>Data Analysis</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Travel_Flow_Analysis/refs/heads/main/TravelFlowAnalysis.png" alt="Travel Flow Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">✈️ Travel Flow Analysis</div>
              <div id="projDesc">
                Analyzed travel trips and booking data to identify booking patterns,
                travel trends, and customer behavior using data analysis and visualization.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Travel_Flow_Analysis" target="_blank">
                  Travel Flow Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Python</skill> <skill>Pandas</skill> <skill>Jupyter Notebook</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Amazon_Data_Analysis/refs/heads/main/AmazonAnalysis.png" alt="Amazon Data Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">📦 Amazon Data Analysis</div>
              <div id="projDesc">
                Analyzed Amazon sales data to identify product trends, top-selling
                categories, and sales performance through interactive visualizations.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Amazon_Data_Analysis" target="_blank">
                  Amazon Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>Data Analysis</skill> <skill>Data Visualization</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Inventory_Management_Dashboard/refs/heads/main/inventory%20management.png" alt="Inventory Management Dashboard" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">📊 Inventory Management Dashboard</div>
              <div id="projDesc">
                Built a dashboard to analyze inventory levels, stock movement, and
                management metrics for better monitoring and decision-making.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Inventory_Management_Dashboard" target="_blank">
                  Inventory Dashboard [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Power BI</skill> <skill>Data Analysis</skill> <skill>Excel</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/Customer_Behavior_Analysis/refs/heads/main/CustomerBehaiorDashboard.png" alt="Customer Behavior Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🛍️ Customer Behavior Analysis</div>
              <div id="projDesc">
                Analyzed customer shopping behavior to identify purchasing patterns,
                customer segments, and trends using data analysis and visualization.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/Customer_Behavior_Analysis" target="_blank">
                  Customer Behavior [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Python</skill> <skill>Pandas</skill> <skill>Jupyter Notebook</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="https://raw.githubusercontent.com/Drushti2706/AI_-_Short_Videos_Impact_on_Student_Productivity/refs/heads/main/Ai%20impact%20on%20Student%20Productivity%20Dashboard.png" alt="AI and Short Videos Analysis" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🤖 AI & Short Videos Impact Analysis</div>
              <div id="projDesc">
                Analyzed Google Form survey data to understand the impact of AI and
                short-video consumption on student productivity and daily routines.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a href="https://github.com/Drushti2706/AI_-_Short_Videos_Impact_on_Student_Productivity" target="_blank">
                  AI Impact Analysis [Github] ↗
                </a>
              </div>
              <div id="ExpSkillList">
                <skill>Python</skill> <skill>Pandas</skill> <skill>Data Visualization</skill>
              </div>
            </div>
          </div>

          {/* <div className="fade-up" id="projCard">
            <div id="projImage">
              <img
                src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?_gl=1*sp1d26*_ga*MTI2NTk5NDI3OS4xNzkwMzE3ODM0*_ga_8JE65Q40S6*czE3OTAzMTc4MzQkbzEkZzEkdDE3OTAzMTc4NTIkajQyJGwwJGgw"
                alt="ProfilerX"
                srcSet=""
              />
            </div>

            <div id="projInfo">
              <div id="projTitle">
                💼 ProfilerX [Developer Portfolio Platform]
              </div>

              <div id="projDesc">
                Full-stack developer portfolio platform built with Java and
                Spring Boot, allowing developers to create, customize, and
                manage public profiles, projects, skills, experience,
                certificates, and blogs with secure authentication.
              </div>

              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/ProfilerX"
                  target="_blank"
                >
                  ProfilerX [Github] ↗
                </a>{" "}
              </div>

              <div id="ExpSkillList">
                <skill>Java</skill> <skill>Spring Boot</skill>{" "}
                <skill>Spring Security</skill> <skill>REST APIs</skill>{" "}
              </div>

              <div id="ExpSkillList">
                <skill>JPA/Hibernate</skill> <skill>PostgreSQL</skill>{" "}
                <skill>React.js</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Pims.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">⚕️PIMS [Patient-Info-hub]</div>
              <div id="projDesc">
                Web-based healthcare management solution designed for hospitals
                to streamline appointment scheduling, doctor-patient
                interactions, nurse coordination, and report tracking — all
                while ensuring role-based access and data security.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Patient-Info-hub"
                  target="_blank"
                >
                  Patient-Info-hub [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Patient-Info-hub/blob/main/Screenshots.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>JavaScript</skill> <skill>PHP</skill>{" "}
                <skill>MySql</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Locify.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔐 Locify Passwords Manager WebApp</div>
              <div id="projDesc">
                Locify is a sites' passwords manager built with React and PHP.
                📦 Users can register, log in, and securely store website
                credentials. 🔍 Includes profile password verification and clean
                UI for viewing data. 🚀 Built for secure and easy personal
                credential management.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager"
                  target="_blank"
                >
                  Locify [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager/blob/main/Screenshot/locify.png"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>React.js</skill> <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-TechPha.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔦 Techno Pharms</div>
              <div id="projDesc">
                Web solution designed to help users diagnose and resolve issues
                related to mobiles, laptops, and PCs through a combination of
                AI-driven chat, YouTube video suggestions, and direct technician
                (shopkeeper) support.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/TechnoPharms"
                  target="_blank"
                >
                  Techno Pharms [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/TechnoPharms/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>JavaScript</skill> <skill>PHP</skill>{" "}
                <skill>MySql</skill> <skill>OpenRouter AI</skill>{" "}
                <skill>Youtube API</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Compiler.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔥JavaScript Compiler</div>
              <div id="projDesc">
                An In-browser JavaScript code compiler built using pure HTML,
                CSS, and JavaScript. ✨ Write, run, and test JS code directly in
                the browser — no frameworks, no libraries.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/JavaScriptCompiler"
                  target="_blank"
                >
                  JavaScript Compiler [Github] ↗
                </a>{" "}
                <a
                  href="https://patelurvish0706.github.io/JavaScriptCompiler/Compiler/"
                  target="_blank"
                >
                  {" "}
                  🟢 Try Now ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>HTML</skill> <skill>CSS</skill> <skill>JavaScript</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Recurio.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🎯Recurio</div>
              <div id="projDesc">
                AI-based solution that analyzes multiple PDF and image files,
                scans them, and identifies common, repeated, and twisted
                versions of questions. It also suggests possible questions that
                may appear in upcoming exams to Score higher.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Recurio"
                  target="_blank"
                >
                  Recurio [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Recurio/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>Python</skill> <skill>JavaScript</skill>{" "}
                <skill>OpenRouter AI</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Authentic.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🛡️Authentication System</div>
              <div id="projDesc">
                Login and signup system with enhanced security measures with
                many input validations and query sanitization (to prevent SQL
                injections).
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Authentication_System"
                  target="_blank"
                >
                  Authentication System [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Authentication_System/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>HTML</skill> <skill>CSS</skill> <skill>JavaScript</skill>{" "}
                <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div> */}
        </div>

        <div className="fade-up" id="BoxLink">
          <a
            href="https://github.com/Drushti2706?tab=repositories"
            target="_blank"
          >
            Viéw All Projécts⌝
          </a>
        </div>

        <div className="fade-up" id="education">
          <h5>Education</h5>

          <div id="ExpCard">
            <div id="ExpTitle">2023 - 2026</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                📜 Bachelor of Engineering [Computer Engineering]
              </div>
              <div id="ExpList">
                ● Shree Swaminaray Institute of Technology, Ahmedabad
              </div>
              <div id="ExpList">● Gujarat Technological University - GTU</div>
              <div id="ExpProject">
                ⫱ <a>CGPA - 8.55</a>{" "}
              </div>
              {/* <div id="ExpSkillList"><skill>React.js</skill> <skill>JavaScript</skill> <skill>PHP</skill> <skill>MySql</skill></div> */}
            </div>
          </div>

          <div id="ExpCard">
            <div id="ExpTitle">2021 - 2023</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                📜 Diploma of Engineering [Computer Engineering]
              </div>
              <div id="ExpList">● Government Polytechnic, Gandhinagar 623</div>
              <div id="ExpList">● Gujarat Technological University - GTU</div>
              <div id="ExpProject">
                ⫱ <a>CGPA - 9.22</a>{" "}
              </div>
              {/* <div id="ExpSkillList"><skill>React.js</skill> <skill>JavaScript</skill> <skill>PHP</skill> <skill>MySql</skill></div> */}
            </div>
          </div>
        </div>

        <div className="fade-up" id="Certies">
          <h5>Certificates</h5>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://certificates.dev/.netlify/images?url=%2Fimages%2Ftech%2Freact%2Fhero-mobile-tablet.png"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="#" target="_blank">
                  Data Analyst - Trainee
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• Grras Solution Pvt Ltd.</div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://certificates.dev/.netlify/images?url=%2Fimages%2Ftech%2Freact%2Fhero-mobile-tablet.png"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="#" target="_blank">
                Summer Internship on Data Analytics
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• CSRBOX - [By GTU].</div>
            </div>
          </div>

          {/* <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20241014123804583631/Salesforce-Certified-Administrator-Online-Course-by-GeeksforGeeks.webp"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a
                  href="https://media.geeksforgeeks.org/courses/certificates/59df7637023bd65fb79c79d743d7ab13.pdf"
                  target="_blank"
                >
                  Salesforce Certified Administrator Online Course
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• GeeksforGeeks</div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGHMz_lNGDyHA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717308252434?e=2147483647&v=beta&t=a8Yk4p9MZaw-ohkNs6z7xt7XJGuv2RZ0ymqza4aAWto"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="./sap.pdf" target="_blank">
                  Training on Emerging Technologies - Advance Course
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">
                • CodeUnnati - Edunet Foundation [by SAP]
              </div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQH9OzPwl10dfw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1712578713859?e=2147483647&v=beta&t=Ye-xT1tUYffIAi2kPQlwFSSggQAErgWZuh-QRDC6gyA"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="csrboxDA.pdf" target="_blank">
                  Summer GTU Internship Program on Data Analytics
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• CSRBOX [by GTU]</div>
            </div>
          </div> */}
        </div>

        <div className="fade-up" id="Contact">
          <h5>Contact</h5>

          <div className="fade-up" id="contactCard">
            {/* <div id="contactPhone">
              {" "}
              <a href="tel:+918780604946">📞 +91 8780604946</a>
            </div> */}
            <div id="contactMail">
              {" "}
              <a href="mailto:drushtigupta49@gmail.com">
                📧 drushtigupta49@gmail.com
              </a>
            </div>
            <div id="contactLinkedIN">
              {" "}
              <a
                href="https://www.linkedin.com/in/guptadrushti27"
                target="_blank"
              >
                🔗 linkedin.com/in/guptadrushti27
              </a>
            </div>

            <div className="resume-badge">Updated 2 Months ago</div>
          </div>

          <div id="petCat">
            <div id="thankyou">
              <div id="greet">Thank You!!</div>
              <div id="copy">&copy; Portfolio - Drushti Gupta 2026-27.</div>
            </div>

            <img id="catie" src="./petcat.gif" alt="petcat" />
          </div>



        </div>
      </div>
    </>
  );
}

export default Content;
