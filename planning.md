_<Project Overview>_

<Project Name>: Realtime Staffing and Recruiting Dashboard

<Description>: Realtime is a staffing and recruiting dashboard that provides ,hiring managers with real-time data insights on candidate pipelines and staffing needs. Built with a React front end and an Express back end, the app integrates with third-party APIs to provide dynamic updates and detailed candidate information, helping hiring managers make quick and informed decisions.

<MVP User Stories>
1. User Authentication (OAuth2)

    User Story: As a hiring manager, I want to log in securely using a trusted third-party provider, so I can access the application without creating a new account.

2. Real-Time Data Insights

    User Story: As a hiring manager, I want to view real-time updates on candidate progress and open positions so that I can make staffing decisions quickly.

3. Candidate Profile Access

    User Story: As a hiring manager, I want to view detailed profiles of each candidate, including current status and history, so that I can evaluate them effectively.

4. Staffing Alerts

    User Story: As a hiring manager, I want to receive alerts about critical staffing shortages so that I can prioritize urgent hiring needs.

5. Dynamic Data Visualization

    User Story: As a hiring manager, I want to see visual representations of data, like graphs or charts, so that I can quickly interpret candidate pipeline and staffing metrics.


<Wireframes>
These are simple wireframes for the main pages of the Realtime app.

1. Login Page:

    Purpose: Provides secure access to the app using OAuth2.
    Elements: 
        App Logo/Header: Positioned at the top center.
        
        Login Button: A large OAuth2 login button (e.g., "Login with Google").
        
        Footer Links: Optional links for "Help" and "Privacy Policy."

+-----------------------------------------+
|                  Logo                   |
|-----------------------------------------|
|                                         |
|           Login with Google             |
|                                         |
|-----------------------------------------|
|          Help | Privacy Policy          |
+-----------------------------------------+


2. Dashboard:

    Purpose: Main view displaying key metrics and real-time candidate pipeline data.
    Elements: 
        Top Nav Bar: Links to "Dashboard," "Candidates," "Alerts," and "Settings."
        
        Real-Time Metrics Panel: Displays critical metrics like the number of   candidates in each pipeline stage.
        
        Alerts Section: Highlights urgent staffing alerts (e.g., "3 Open Positions Need Immediate Attention").
        
        Recent Activity: Shows recent candidate activities (e.g., new applications, status updates).
        
        Sidebar: Links to "Candidates," "Positions," and "Reports."

+-------------------------------------------+
|          Dashboard Nav Bar                |
| Dashboard | Candidates | Alerts | Settings|
|-------------------------------------------|
|       Real-Time Metrics Panel             |
|-------------------------------------------|
|      Alerts      |   Recent Activity      |
|-------------------------------------------|
|    Candidate Pipeline (charts/graphs)     |
|-------------------------------------------|
|   Sidebar Links (Candidates, Positions)   |
+-------------------------------------------+


3. Candidate Profile Page:

    Purpose: A detailed view of individual candidates to assess their status and progress.
    Elements: 
        Header: Displays candidate name, position applied for, and current status.
        
        Progress Timeline: Shows a visual timeline of application stages (e.g., applied, interviewed, offer).
        
        Notes Section: Space for adding notes about the candidate.
        
        Action Buttons: Options for "Edit Profile," "Add Note," and "Change Status."

+-----------------------------------------+
|      Candidate Name | Position | Status |
|-----------------------------------------|
|            Progress Timeline            |
|  [ Applied ] -> [ Interviewed ] -> [Offer]|
|-----------------------------------------|
|             Notes Section               |
| - "Strong analytical skills noted."     |
| - "Interview scheduled for 12/15."      |
|-----------------------------------------|
| Edit Profile | Add Note | Change Status |
+-----------------------------------------+


4. Settings/Notifications Page:

    Purpose: Allows customization of alert preferences and account settings.
    Elements: 
        Profile Settings: Shows user information (name, email) with an edit option.
        
        Notification Preferences: Toggle options for specific alerts (e.g., "Enable email alerts for staffing").
        
        Save Changes Button: Clear call to action to save any changes.

+-----------------------------------------+
|              Profile Settings           |
| Name: Jamie Hiring                      |
| Email: jamie@company.com                |
| [ Edit Profile ]                        |
|-----------------------------------------|
|         Notification Preferences        |
| [ ] Enable email alerts for staffing    |
| [ ] Enable SMS alerts for urgent alerts |
|-----------------------------------------|
|               Save Changes              |
+-----------------------------------------+



<ERD: Realtime Staffing and Recruiting App>
The diagram shows the entities and their relationships, detailing the primary keys (PK) and foreign keys (FK) for each table.


+----------------+          +----------------+          +----------------+
|     User       |          |   Candidate    |          |    Position    |
+----------------+          +----------------+          +----------------+
| user_id (PK)   |  1     * | candidate_id (PK) |      * | position_id (PK) |
| name           |----------| name              |----------| title             |
| email          |          | status            |          | department        |
| role           |          | position_applied  |          | status            |
| created_at     |          | last_updated      |          | created_at        |
+----------------+          +----------------+          +----------------+

          |                         |
          |                         |
          | *                       | *
          |                         |
          v                         v

+----------------+          +----------------+
|    Alert       |          |  Application   |
+----------------+          +----------------+
| alert_id (PK)  |          | application_id (PK) |
| type           |          | candidate_id (FK)   |
| message        |          | user_id (FK)        |
| created_at     |          | stage               |
| candidate_id (FK) |-------| updated_at          |
+----------------+          +----------------+


Entity and Relationship Descriptions

1. User
    Attributes:
        user_id (Primary Key): Unique identifier for each user.
        name: User's full name.
        email: Contact email.
        role: Defines user role (e.g., hiring manager, recruiter).
        created_at: Timestamp of user creation.
    Relationships:
        A User can access multiple Candidates.
        A User can manage multiple Applications (for tracking application progress).

2. Candidate
    Attributes:
        candidate_id (Primary Key): Unique identifier for each candidate.
        name: Full name of the candidate.
        status: Current status in the hiring pipeline (e.g., applied, interviewed).
        position_applied: Position candidate applied for.
        last_updated: Last update timestamp for the candidate.
    Relationships:
        A Candidate is associated with a single Position.
        A Candidate has multiple Application entries tracking the candidate’s stages.
        A Candidate can have multiple Alerts associated with their application.

3. Position
    Attributes:
        position_id (Primary Key): Unique identifier for each position.
        title: Title of the job position (e.g., "Software Engineer").
        department: Department the position belongs to.
        status: Current status of the position (e.g., open, closed).
        created_at: Timestamp of when the position was created.
    Relationships:
        A Position can have multiple Candidates applying to it.

4. Alert
    Attributes:
        alert_id (Primary Key): Unique identifier for each alert.
        type: Type of alert (e.g., "urgent staffing need").
        message: Alert message content.
        created_at: Timestamp for when the alert was created.
        candidate_id (Foreign Key): Link to a specific Candidate.
    Relationships:
        Each Alert is associated with a single Candidate.

5. Application
    Attributes:
        application_id (Primary Key): Unique identifier for each application stage entry.
        candidate_id (Foreign Key): Links to a specific Candidate.
        user_id (Foreign Key): Links to the User managing the application stage.
        stage: The current stage in the hiring process (e.g., applied, interviewed, offer).
        updated_at: Last update timestamp for this application stage.
    Relationships:
        Each Application stage entry links to one Candidate and is managed by one User.


<Stretch Goal User Stories>
Additional features that go beyond the MVP requirements:

1. Advanced Filtering and Search

        User Story: As a hiring manager, I want to filter candidates by criteria such as status, position, and last activity, so I can focus on specific candidates.

2. Multi-User Roles and Permissions

        User Story: As an admin, I want to assign specific permissions to different user roles, so data access is controlled based on roles.

3. Interview Scheduling Integration

        User Story: As a hiring manager, I want to schedule interviews directly through the app, so I can streamline the candidate assessment process.

4. Multi-Language Support

        User Story: As a global hiring manager, I want to view the app in my preferred language, so I can navigate it easily.

5. Data Export

        User Story: As a hiring manager, I want to export candidate and position data to a spreadsheet, so I can analyze it offline.


<Technical Stack>
    Front End: React, with MUI or Tailwind for component styling.
    
    Back End: Express.js with Node.js.
    
    Data Visualization: D3.js or Chart.js (for charts and graphs).
    
    Authentication: OAuth2 (e.g., Google Login).
    
    Data Storage: Airtable for lightweight data handling.
    
    Deployment: Front-end on Vercel or Netlify, back-end on Heroku, AWS, or DigitalOcean.


<Deployment Plan>
    1. Frontend Deployment:(Until confirmed by Instructor)
        Deploy on Vercel, Netlify, or another service, ensuring easy public access to the app.
    2. Backend Deployment:(until confirmed by Instructor)
        Deploy the Express API server on Heroku, AWS, or DigitalOcean.
        Ensure environment variables are securely managed, particularly for sensitive API keys.
    3. CI/CD Pipeline:
        Set up automated deployments for testing and production environments.


<README Structure>
The README file for the front end should include:

    Screenshot/Logo: Visual preview of the app.
    
    App Description: Explanation of the app’s purpose, core functionality, and background information.
    
    Getting Started: Steps to deploy and access the app, with links to planning materials and the backend repo.
    
    Attributions: Credits for any third-party libraries, assets, or resources.
    
    Technologies Used: List of key technologies like React, Express, OAuth2, etc.
    
    Next Steps: Outline of potential future enhancements.
