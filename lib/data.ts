export const siteData = {
  "tasks": [
    {
      "id": "1",
      "title": "Design user interface mockups",
      "description": "Create wireframes and mockups for the new dashboard",
      "status": "in-progress",
      "priority": "high",
      "projectId": "1",
      "assigneeId": "1",
      "dueDate": "2024-01-15",
      "createdAt": "2024-01-01",
      "tags": [
        "design",
        "ui",
        "dashboard"
      ]
    },
    {
      "id": "2",
      "title": "Implement authentication system",
      "description": "Set up user login and registration functionality",
      "status": "todo",
      "priority": "urgent",
      "projectId": "1",
      "assigneeId": "2",
      "dueDate": "2024-01-10",
      "createdAt": "2024-01-02",
      "tags": [
        "backend",
        "auth",
        "security"
      ]
    },
    {
      "id": "3",
      "title": "Write API documentation",
      "description": "Document all API endpoints and usage examples",
      "status": "completed",
      "priority": "medium",
      "projectId": "2",
      "assigneeId": "1",
      "dueDate": "2024-01-08",
      "createdAt": "2024-01-03",
      "tags": [
        "documentation",
        "api"
      ]
    }
  ],
  "projects": [
    {
      "id": "1",
      "name": "TaskFlow Web App",
      "description": "Main web application development",
      "status": "active",
      "color": "#3B82F6",
      "createdAt": "2024-01-01",
      "deadline": "2024-03-01",
      "progress": 65
    },
    {
      "id": "2",
      "name": "Mobile App",
      "description": "iOS and Android mobile applications",
      "status": "planning",
      "color": "#10B981",
      "createdAt": "2024-01-05",
      "deadline": "2024-06-01",
      "progress": 20
    }
  ],
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "/avatars/john.png",
      "role": "developer"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "avatar": "/avatars/jane.png",
      "role": "designer"
    }
  ],
  "settings": {
    "theme": "auto",
    "notifications": {
      "email": true,
      "push": false,
      "desktop": true
    },
    "defaultView": "dashboard",
    "timezone": "UTC",
    "dateFormat": "MM/dd/yyyy"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "href": "/",
      "icon": "home",
      "active": true
    },
    {
      "label": "Tasks",
      "href": "/tasks",
      "icon": "check-square",
      "badge": "24"
    },
    {
      "label": "Projects",
      "href": "/projects",
      "icon": "folder",
      "badge": "2"
    },
    {
      "label": "Calendar",
      "href": "/calendar",
      "icon": "calendar"
    },
    {
      "label": "Settings",
      "href": "/settings",
      "icon": "settings"
    }
  ],
  "footer": [
    {
      "label": "Help",
      "href": "/help"
    },
    {
      "label": "Privacy",
      "href": "/privacy"
    },
    {
      "label": "Terms",
      "href": "/terms"
    }
  ]
};