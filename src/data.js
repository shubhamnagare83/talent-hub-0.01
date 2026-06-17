// ============================================================
// CertTrack Pro — Pre-populated Data (Excel Imported)
// ============================================================

let _nextId = 1428;
export const genId = () => 'id_' + (++_nextId);

// ---------- Department Config ----------
export const departmentConfig = {
  "name": "Computer Engineering",
  "college": "XYZ College of Engineering",
  "academicYear": "2024-25",
  "currentSemester": 6,
  "technicalPlatforms": [
    "AWS",
    "Google",
    "Microsoft",
    "Coursera",
    "NPTEL",
    "Udemy",
    "edX",
    "Infosys Springboard",
    "Other"
  ],
  "nonTechCategories": [
    "Sports",
    "Cultural",
    "Leadership",
    "NSS/NCC",
    "Community Service",
    "Other"
  ],
  "scoringConfig": {
    "academics": 35,
    "internships": 20,
    "placements": 15,
    "hackathons": 10,
    "projects": 10,
    "certifications": 5,
    "sports": 5
  }
};

// ========== STUDENTS ==========
export const initialStudents = [
  {
    "id": "STU001",
    "prn": "2024001",
    "name": "Rohan Mehta",
    "email": "rohan.mehta@xyz.edu",
    "phone": "9870045100",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE201",
    "admissionType": "Regular",
    "dob": "2005-03-15",
    "address": "49, MG Road, Pune 411001",
    "parentName": "Mehta Mehta",
    "parentPhone": "9784660071",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 22,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.2,
      "semester": 3,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT001",
        "company": "TechStart Pvt Ltd",
        "role": "Web Dev Intern",
        "duration_months": 2,
        "type": "startup",
        "stipend": 8000,
        "startDate": "2024-05-01",
        "endDate": "2024-06-30",
        "offerLetterFile": "offer_techstart.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK001",
        "name": "Code Sprint 2024",
        "organizer": "XYZ College",
        "result": "participated",
        "teamSize": 4,
        "date": "2024-02-15",
        "certificateFile": "codesprint.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ001",
        "title": "Portfolio Website",
        "description": "Personal portfolio using React",
        "githubUrl": "https://github.com/rohan/portfolio",
        "techStack": [
          "React",
          "CSS"
        ],
        "commitCount": 45,
        "lastCommit": "2024-09-10",
        "stars": 2,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT001",
        "type": "technical",
        "name": "AWS Cloud Practitioner",
        "issuingOrg": "Amazon",
        "platform": "AWS",
        "completionDate": "2024-03-15",
        "credentialId": "AWS-CP-001",
        "credentialUrl": "https://aws.amazon.com/verify/001",
        "fileLabel": "aws_cert.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-03-16",
        "reviewedAt": "2024-03-18",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT002",
        "type": "non-technical",
        "name": "Inter-College Cricket",
        "issuingOrg": "XYZ College",
        "platform": "",
        "completionDate": "2024-01-20",
        "credentialId": "",
        "credentialUrl": "",
        "fileLabel": "cricket.pdf",
        "status": "pending",
        "adminRemarks": "",
        "submittedAt": "2024-09-10",
        "reviewedAt": "",
        "reviewedBy": "",
        "category": "sports",
        "level": "college"
      }
    ],
    "sports": [
      {
        "id": "SPT001",
        "sportName": "Cricket",
        "level": "college",
        "achievement": "Team Captain",
        "date": "2024-01-20",
        "certificateFile": "cricket.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU002",
    "prn": "2024002",
    "name": "Vikram Kulkarni",
    "email": "vikram.k@xyz.edu",
    "phone": "9819667578",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE202",
    "admissionType": "Regular",
    "dob": "2005-07-22",
    "address": "73, MG Road, Pune 411001",
    "parentName": "Kulkarni Kulkarni",
    "parentPhone": "9765193404",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 18,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 20,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 10,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 6,
        "maxMarks": 10
      },
      "CGPA": 6.5,
      "semester": 3,
      "backlogs": 1
    },
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [
      {
        "id": "PROJ002",
        "title": "Todo App",
        "description": "Basic CRUD todo app",
        "githubUrl": "https://github.com/vikram/todo",
        "techStack": [
          "HTML",
          "JavaScript"
        ],
        "commitCount": 18,
        "lastCommit": "2024-08-01",
        "stars": 0,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT003",
        "type": "technical",
        "name": "Python for Everybody",
        "issuingOrg": "University of Michigan",
        "platform": "Coursera",
        "completionDate": "2024-06-10",
        "credentialId": "CR-PY-002",
        "credentialUrl": "",
        "fileLabel": "python_cert.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-06-11",
        "reviewedAt": "2024-06-13",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU003",
    "prn": "2024003",
    "name": "Divya Pillai",
    "email": "divya.p@xyz.edu",
    "phone": "9858245769",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "B",
    "rollNo": "CE203",
    "admissionType": "Regular",
    "dob": "2005-11-08",
    "address": "52, MG Road, Pune 411001",
    "parentName": "Pillai Pillai",
    "parentPhone": "9716906322",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.1,
      "semester": 3,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT002",
        "company": "Google India",
        "role": "STEP Intern",
        "duration_months": 3,
        "type": "MNC",
        "stipend": 60000,
        "startDate": "2024-05-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "google_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK002",
        "name": "HackMIT 2024",
        "organizer": "MIT",
        "result": "runner-up",
        "teamSize": 3,
        "date": "2024-04-20",
        "certificateFile": "hackmit.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ003",
        "title": "AI Chatbot",
        "description": "NLP-based chatbot for college queries",
        "githubUrl": "https://github.com/divya/chatbot",
        "techStack": [
          "Python",
          "Flask",
          "NLP"
        ],
        "commitCount": 120,
        "lastCommit": "2024-09-20",
        "stars": 15,
        "language": "Python",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT004",
        "type": "technical",
        "name": "Google Cloud Associate",
        "issuingOrg": "Google",
        "platform": "Google",
        "completionDate": "2024-02-10",
        "credentialId": "GCP-ACE-003",
        "credentialUrl": "https://google.com/verify/003",
        "fileLabel": "gcp_cert.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-02-11",
        "reviewedAt": "2024-02-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT005",
        "type": "technical",
        "name": "React Developer Certificate",
        "issuingOrg": "Meta",
        "platform": "Coursera",
        "completionDate": "2024-05-20",
        "credentialId": "META-RD-003",
        "credentialUrl": "",
        "fileLabel": "react_cert.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-05-21",
        "reviewedAt": "2024-05-23",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU004",
    "prn": "2023001",
    "name": "Aarav Rane",
    "email": "aarav.r@xyz.edu",
    "phone": "9891415981",
    "year": "3rd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE301",
    "admissionType": "Regular",
    "dob": "2004-01-12",
    "address": "43, MG Road, Pune 411001",
    "parentName": "Rane Rane",
    "parentPhone": "9779677226",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.8,
      "semester": 5,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT003",
        "company": "Infosys",
        "role": "Software Intern",
        "duration_months": 3,
        "type": "MNC",
        "stipend": 25000,
        "startDate": "2024-05-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "infosys_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK003",
        "name": "Smart India Hackathon",
        "organizer": "Govt of India",
        "result": "winner",
        "teamSize": 6,
        "date": "2024-03-10",
        "certificateFile": "sih.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ004",
        "title": "Smart Attendance System",
        "description": "Face recognition based attendance",
        "githubUrl": "https://github.com/aarav/attendance",
        "techStack": [
          "Python",
          "OpenCV",
          "Flask"
        ],
        "commitCount": 85,
        "lastCommit": "2024-09-15",
        "stars": 8,
        "language": "Python",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT006",
        "type": "technical",
        "name": "NPTEL Cloud Computing",
        "issuingOrg": "IIT Kharagpur",
        "platform": "NPTEL",
        "completionDate": "2024-04-01",
        "credentialId": "NPTEL-CC-004",
        "credentialUrl": "",
        "fileLabel": "nptel_cloud.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-04-02",
        "reviewedAt": "2024-04-04",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT007",
        "type": "technical",
        "name": "Azure Fundamentals",
        "issuingOrg": "Microsoft",
        "platform": "Microsoft",
        "completionDate": "2024-07-15",
        "credentialId": "AZ-900-004",
        "credentialUrl": "",
        "fileLabel": "azure.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-07-16",
        "reviewedAt": "2024-07-18",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [
      {
        "id": "SPT002",
        "sportName": "Basketball",
        "level": "district",
        "achievement": "Runner-up",
        "date": "2024-02-10",
        "certificateFile": "basketball.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU005",
    "prn": "2023002",
    "name": "Priya Sharma",
    "email": "priya.s@xyz.edu",
    "phone": "9814480004",
    "year": "3rd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE302",
    "admissionType": "Regular",
    "dob": "2004-05-25",
    "address": "43, MG Road, Pune 411001",
    "parentName": "Sharma Sharma",
    "parentPhone": "9787434350",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.2,
      "semester": 5,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT004",
        "company": "Microsoft India",
        "role": "SDE Intern",
        "duration_months": 6,
        "type": "MNC",
        "stipend": 80000,
        "startDate": "2024-01-01",
        "endDate": "2024-06-30",
        "offerLetterFile": "ms_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [
      {
        "id": "PLC001",
        "company": "Google",
        "role": "SDE-1",
        "ctc": 1200000,
        "offerLetterFile": "google_placement.pdf",
        "status": "approved",
        "adminRemarks": "",
        "offerDate": "2024-08-15"
      }
    ],
    "hackathons": [
      {
        "id": "HACK004",
        "name": "Google Code Jam",
        "organizer": "Google",
        "result": "runner-up",
        "teamSize": 1,
        "date": "2024-05-20",
        "certificateFile": "codejam.pdf",
        "status": "approved"
      },
      {
        "id": "HACK005",
        "name": "Hackathon X",
        "organizer": "IIT Bombay",
        "result": "winner",
        "teamSize": 4,
        "date": "2024-07-10",
        "certificateFile": "hackx.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ005",
        "title": "ML Stock Predictor",
        "description": "LSTM-based stock price prediction",
        "githubUrl": "https://github.com/priya/stock-ml",
        "techStack": [
          "Python",
          "TensorFlow",
          "Flask"
        ],
        "commitCount": 200,
        "lastCommit": "2024-09-25",
        "stars": 45,
        "language": "Python",
        "status": "completed"
      },
      {
        "id": "PROJ006",
        "title": "CertTrack MVP",
        "description": "Certificate tracking portal prototype",
        "githubUrl": "https://github.com/priya/certtrack",
        "techStack": [
          "React",
          "Node.js",
          "MongoDB"
        ],
        "commitCount": 150,
        "lastCommit": "2024-09-28",
        "stars": 12,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT008",
        "type": "technical",
        "name": "TensorFlow Developer",
        "issuingOrg": "Google",
        "platform": "Google",
        "completionDate": "2024-03-20",
        "credentialId": "TF-DEV-005",
        "credentialUrl": "https://google.com/verify/tf005",
        "fileLabel": "tf_cert.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-03-21",
        "reviewedAt": "2024-03-23",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT009",
        "type": "technical",
        "name": "AWS Solutions Architect",
        "issuingOrg": "Amazon",
        "platform": "AWS",
        "completionDate": "2024-06-10",
        "credentialId": "AWS-SA-005",
        "credentialUrl": "",
        "fileLabel": "aws_sa.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-06-11",
        "reviewedAt": "2024-06-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT010",
        "type": "technical",
        "name": "NPTEL Data Science",
        "issuingOrg": "IIT Madras",
        "platform": "NPTEL",
        "completionDate": "2024-08-01",
        "credentialId": "NPTEL-DS-005",
        "credentialUrl": "",
        "fileLabel": "nptel_ds.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-08-02",
        "reviewedAt": "2024-08-04",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [
      {
        "id": "SPT003",
        "sportName": "Table Tennis",
        "level": "state",
        "achievement": "Quarterfinalist",
        "date": "2024-01-15",
        "certificateFile": "tt.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU006",
    "prn": "2023003",
    "name": "Karan Joshi",
    "email": "karan.j@xyz.edu",
    "phone": "9859836956",
    "year": "3rd",
    "branch": "Computer Engineering",
    "division": "B",
    "rollNo": "CE303",
    "admissionType": "Regular",
    "dob": "2004-09-18",
    "address": "56, MG Road, Pune 411001",
    "parentName": "Joshi Joshi",
    "parentPhone": "9768482302",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 20,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 19,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 12,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.8,
      "semester": 5,
      "backlogs": 1
    },
    "internships": [
      {
        "id": "INT005",
        "company": "LocalTech Solutions",
        "role": "Backend Intern",
        "duration_months": 2,
        "type": "startup",
        "stipend": 5000,
        "startDate": "2024-06-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "localtech_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK006",
        "name": "Pune Hackfest",
        "organizer": "PCG",
        "result": "participated",
        "teamSize": 4,
        "date": "2024-04-05",
        "certificateFile": "punehack.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ007",
        "title": "Blog Platform",
        "description": "Full-stack blog with auth",
        "githubUrl": "https://github.com/karan/blog",
        "techStack": [
          "Node.js",
          "Express",
          "MongoDB"
        ],
        "commitCount": 60,
        "lastCommit": "2024-08-20",
        "stars": 3,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT011",
        "type": "technical",
        "name": "Infosys Springboard Java",
        "issuingOrg": "Infosys",
        "platform": "Infosys Springboard",
        "completionDate": "2024-05-15",
        "credentialId": "IS-JAVA-006",
        "credentialUrl": "",
        "fileLabel": "infosys_java.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-05-16",
        "reviewedAt": "2024-05-18",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU007",
    "prn": "2023004",
    "name": "Meera Nair",
    "email": "meera.n@xyz.edu",
    "phone": "9834292438",
    "year": "3rd",
    "branch": "Computer Engineering",
    "division": "B",
    "rollNo": "CE304",
    "admissionType": "Regular",
    "dob": "2004-12-03",
    "address": "12, MG Road, Pune 411001",
    "parentName": "Nair Nair",
    "parentPhone": "9764440129",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.8,
      "semester": 5,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT006",
        "company": "Amazon India",
        "role": "SDE Intern",
        "duration_months": 4,
        "type": "MNC",
        "stipend": 60000,
        "startDate": "2024-05-01",
        "endDate": "2024-08-31",
        "offerLetterFile": "amazon_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK007",
        "name": "TechFest Hackathon",
        "organizer": "IIT Bombay",
        "result": "runner-up",
        "teamSize": 3,
        "date": "2024-06-15",
        "certificateFile": "techfest.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ008",
        "title": "E-Commerce Platform",
        "description": "Full-stack MERN e-commerce",
        "githubUrl": "https://github.com/meera/ecommerce",
        "techStack": [
          "React",
          "Node.js",
          "MongoDB",
          "Stripe"
        ],
        "commitCount": 180,
        "lastCommit": "2024-09-22",
        "stars": 22,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT012",
        "type": "technical",
        "name": "Microsoft Azure AI",
        "issuingOrg": "Microsoft",
        "platform": "Microsoft",
        "completionDate": "2024-04-20",
        "credentialId": "AZ-AI-007",
        "credentialUrl": "",
        "fileLabel": "azure_ai.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-04-21",
        "reviewedAt": "2024-04-23",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT013",
        "type": "technical",
        "name": "Coursera Full Stack",
        "issuingOrg": "Meta",
        "platform": "Coursera",
        "completionDate": "2024-07-10",
        "credentialId": "META-FS-007",
        "credentialUrl": "",
        "fileLabel": "fullstack.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-07-11",
        "reviewedAt": "2024-07-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT014",
        "type": "non-technical",
        "name": "NSS Best Volunteer",
        "issuingOrg": "NSS Unit XYZ",
        "platform": "",
        "completionDate": "2024-02-28",
        "credentialId": "",
        "credentialUrl": "",
        "fileLabel": "nss.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-03-01",
        "reviewedAt": "2024-03-03",
        "reviewedBy": "Admin",
        "category": "community",
        "level": "state"
      }
    ],
    "sports": [
      {
        "id": "SPT004",
        "sportName": "Badminton",
        "level": "state",
        "achievement": "Semi-finalist",
        "date": "2024-03-10",
        "certificateFile": "badminton.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU008",
    "prn": "2022001",
    "name": "Sneha Patil",
    "email": "sneha.p@xyz.edu",
    "phone": "9822424890",
    "year": "4th",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE401",
    "admissionType": "Regular",
    "dob": "2003-06-14",
    "address": "66, MG Road, Pune 411001",
    "parentName": "Patil Patil",
    "parentPhone": "9756453049",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8,
      "semester": 7,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT007",
        "company": "Wipro",
        "role": "Cloud Intern",
        "duration_months": 3,
        "type": "MNC",
        "stipend": 20000,
        "startDate": "2023-12-01",
        "endDate": "2024-02-28",
        "offerLetterFile": "wipro_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [
      {
        "id": "PLC002",
        "company": "Infosys",
        "role": "Systems Engineer",
        "ctc": 550000,
        "offerLetterFile": "infosys_placement.pdf",
        "status": "approved",
        "adminRemarks": "",
        "offerDate": "2024-06-20"
      }
    ],
    "hackathons": [
      {
        "id": "HACK008",
        "name": "Code-a-thon",
        "organizer": "PICT",
        "result": "participated",
        "teamSize": 4,
        "date": "2024-01-20",
        "certificateFile": "codeathon.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ009",
        "title": "Cloud Monitoring Dashboard",
        "description": "Real-time cloud infra monitoring",
        "githubUrl": "https://github.com/sneha/cloudmon",
        "techStack": [
          "React",
          "AWS",
          "Grafana"
        ],
        "commitCount": 95,
        "lastCommit": "2024-09-10",
        "stars": 7,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT015",
        "type": "technical",
        "name": "AWS DevOps Professional",
        "issuingOrg": "Amazon",
        "platform": "AWS",
        "completionDate": "2024-01-10",
        "credentialId": "AWS-DOP-008",
        "credentialUrl": "",
        "fileLabel": "aws_devops.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-01-11",
        "reviewedAt": "2024-01-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT016",
        "type": "technical",
        "name": "Udemy Docker Mastery",
        "issuingOrg": "Udemy",
        "platform": "Udemy",
        "completionDate": "2024-03-05",
        "credentialId": "UD-DK-008",
        "credentialUrl": "",
        "fileLabel": "docker.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-03-06",
        "reviewedAt": "2024-03-08",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT017",
        "type": "technical",
        "name": "edX Linux Foundation",
        "issuingOrg": "Linux Foundation",
        "platform": "edX",
        "completionDate": "2024-05-20",
        "credentialId": "EDX-LF-008",
        "credentialUrl": "",
        "fileLabel": "linux.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-05-21",
        "reviewedAt": "2024-05-23",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [
      {
        "id": "SPT005",
        "sportName": "Volleyball",
        "level": "college",
        "achievement": "Winner",
        "date": "2024-02-05",
        "certificateFile": "volleyball.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU009",
    "prn": "2022002",
    "name": "Ananya Iyer",
    "email": "ananya.i@xyz.edu",
    "phone": "9867130832",
    "year": "4th",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE402",
    "admissionType": "Regular",
    "dob": "2003-02-28",
    "address": "87, MG Road, Pune 411001",
    "parentName": "Iyer Iyer",
    "parentPhone": "9782889638",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 33,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 10,
        "maxMarks": 10
      },
      "CGPA": 9.5,
      "semester": 7,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT008",
        "company": "Google India",
        "role": "SWE Intern",
        "duration_months": 6,
        "type": "MNC",
        "stipend": 120000,
        "startDate": "2024-01-01",
        "endDate": "2024-06-30",
        "offerLetterFile": "google_intern.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [
      {
        "id": "PLC003",
        "company": "Microsoft",
        "role": "SDE-2",
        "ctc": 2400000,
        "offerLetterFile": "ms_placement.pdf",
        "status": "approved",
        "adminRemarks": "",
        "offerDate": "2024-07-10"
      }
    ],
    "hackathons": [
      {
        "id": "HACK009",
        "name": "ACM ICPC Regionals",
        "organizer": "ACM",
        "result": "winner",
        "teamSize": 3,
        "date": "2024-02-25",
        "certificateFile": "icpc.pdf",
        "status": "approved"
      },
      {
        "id": "HACK010",
        "name": "Google Hash Code",
        "organizer": "Google",
        "result": "runner-up",
        "teamSize": 4,
        "date": "2024-04-15",
        "certificateFile": "hashcode.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ010",
        "title": "Distributed File System",
        "description": "Distributed storage with consensus",
        "githubUrl": "https://github.com/ananya/dfs",
        "techStack": [
          "Go",
          "gRPC",
          "Docker"
        ],
        "commitCount": 300,
        "lastCommit": "2024-09-28",
        "stars": 65,
        "language": "Go",
        "status": "completed"
      },
      {
        "id": "PROJ011",
        "title": "Compiler Design",
        "description": "Custom language compiler",
        "githubUrl": "https://github.com/ananya/compiler",
        "techStack": [
          "C++",
          "LLVM"
        ],
        "commitCount": 180,
        "lastCommit": "2024-08-15",
        "stars": 30,
        "language": "C++",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT018",
        "type": "technical",
        "name": "Google Professional Cloud Architect",
        "issuingOrg": "Google",
        "platform": "Google",
        "completionDate": "2024-02-15",
        "credentialId": "GCP-PCA-009",
        "credentialUrl": "",
        "fileLabel": "gcp_pca.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-02-16",
        "reviewedAt": "2024-02-18",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT019",
        "type": "technical",
        "name": "NPTEL Algorithm Design",
        "issuingOrg": "IIT Delhi",
        "platform": "NPTEL",
        "completionDate": "2024-04-20",
        "credentialId": "NPTEL-AD-009",
        "credentialUrl": "",
        "fileLabel": "nptel_algo.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-04-21",
        "reviewedAt": "2024-04-23",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT020",
        "type": "technical",
        "name": "Kubernetes Admin",
        "issuingOrg": "CNCF",
        "platform": "Other",
        "completionDate": "2024-06-10",
        "credentialId": "CKA-009",
        "credentialUrl": "",
        "fileLabel": "cka.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-06-11",
        "reviewedAt": "2024-06-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT021",
        "type": "technical",
        "name": "AWS ML Specialty",
        "issuingOrg": "Amazon",
        "platform": "AWS",
        "completionDate": "2024-08-01",
        "credentialId": "AWS-ML-009",
        "credentialUrl": "",
        "fileLabel": "aws_ml.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-08-02",
        "reviewedAt": "2024-08-04",
        "reviewedBy": "Admin"
      }
    ],
    "sports": [
      {
        "id": "SPT006",
        "sportName": "Chess",
        "level": "national",
        "achievement": "Rank 12",
        "date": "2024-03-20",
        "certificateFile": "chess.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU010",
    "prn": "2022003",
    "name": "Arjun Desai",
    "email": "arjun.d@xyz.edu",
    "phone": "9882988195",
    "year": "4th",
    "branch": "Computer Engineering",
    "division": "B",
    "rollNo": "CE403",
    "admissionType": "Regular",
    "dob": "2003-10-05",
    "address": "79, MG Road, Pune 411001",
    "parentName": "Desai Desai",
    "parentPhone": "9749108993",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 22,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 23,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 7,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT009",
        "company": "Persistent Systems",
        "role": "Java Intern",
        "duration_months": 3,
        "type": "MNC",
        "stipend": 15000,
        "startDate": "2024-05-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "persistent_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [
      {
        "id": "PLC004",
        "company": "TCS",
        "role": "Systems Engineer",
        "ctc": 380000,
        "offerLetterFile": "tcs_placement.pdf",
        "status": "approved",
        "adminRemarks": "",
        "offerDate": "2024-09-01"
      }
    ],
    "hackathons": [
      {
        "id": "HACK011",
        "name": "AngelHack 2024",
        "organizer": "AngelHack",
        "result": "participated",
        "teamSize": 4,
        "date": "2024-03-15",
        "certificateFile": "angelhack.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ012",
        "title": "Inventory Management",
        "description": "ERP inventory module",
        "githubUrl": "https://github.com/arjun/inventory",
        "techStack": [
          "Java",
          "Spring Boot",
          "MySQL"
        ],
        "commitCount": 75,
        "lastCommit": "2024-09-05",
        "stars": 4,
        "language": "Java",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT022",
        "type": "technical",
        "name": "NPTEL DBMS",
        "issuingOrg": "IIT Kharagpur",
        "platform": "NPTEL",
        "completionDate": "2024-04-10",
        "credentialId": "NPTEL-DB-010",
        "credentialUrl": "",
        "fileLabel": "nptel_db.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-04-11",
        "reviewedAt": "2024-04-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT023",
        "type": "non-technical",
        "name": "Leadership Workshop",
        "issuingOrg": "Rotaract Club",
        "platform": "",
        "completionDate": "2024-06-20",
        "credentialId": "",
        "credentialUrl": "",
        "fileLabel": "leadership.pdf",
        "status": "rejected",
        "adminRemarks": "Certificate scan is unclear. Please re-upload with higher resolution.",
        "submittedAt": "2024-06-21",
        "reviewedAt": "2024-06-23",
        "reviewedBy": "Admin",
        "category": "leadership",
        "level": "college"
      }
    ],
    "sports": [
      {
        "id": "SPT007",
        "sportName": "Athletics",
        "level": "district",
        "achievement": "100m Bronze",
        "date": "2024-01-28",
        "certificateFile": "athletics.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU011",
    "prn": "2024DSY001",
    "name": "Sameer Khan",
    "email": "sameer.k@xyz.edu",
    "phone": "9813316118",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-DSY01",
    "admissionType": "DSY",
    "dob": "2004-04-10",
    "address": "18, MG Road, Pune 411001",
    "parentName": "Khan Khan",
    "parentPhone": "9764963972",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.5,
      "semester": 5,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT010",
        "company": "Zoho Corp",
        "role": "QA Intern",
        "duration_months": 3,
        "type": "MNC",
        "stipend": 18000,
        "startDate": "2024-05-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "zoho_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [],
    "hackathons": [
      {
        "id": "HACK012",
        "name": "DSY Hackathon",
        "organizer": "XYZ College",
        "result": "winner",
        "teamSize": 3,
        "date": "2024-06-01",
        "certificateFile": "dsyhack.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ013",
        "title": "Weather App",
        "description": "Real-time weather dashboard",
        "githubUrl": "https://github.com/sameer/weather",
        "techStack": [
          "React",
          "API"
        ],
        "commitCount": 40,
        "lastCommit": "2024-09-01",
        "stars": 3,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT024",
        "type": "technical",
        "name": "Coursera Python",
        "issuingOrg": "Google",
        "platform": "Coursera",
        "completionDate": "2024-03-10",
        "credentialId": "CR-PY-011",
        "credentialUrl": "",
        "fileLabel": "python_google.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-03-11",
        "reviewedAt": "2024-03-13",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT025",
        "type": "technical",
        "name": "Udemy Web Development",
        "issuingOrg": "Udemy",
        "platform": "Udemy",
        "completionDate": "2024-05-20",
        "credentialId": "UD-WD-011",
        "credentialUrl": "",
        "fileLabel": "webdev.pdf",
        "status": "pending",
        "adminRemarks": "",
        "submittedAt": "2024-09-15",
        "reviewedAt": "",
        "reviewedBy": ""
      }
    ],
    "sports": [
      {
        "id": "SPT008",
        "sportName": "Football",
        "level": "college",
        "achievement": "Team Member",
        "date": "2024-02-15",
        "certificateFile": "football.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU012",
    "prn": "2024DSY002",
    "name": "Pooja Thakur",
    "email": "pooja.t@xyz.edu",
    "phone": "9847580655",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "B",
    "rollNo": "CE-DSY02",
    "admissionType": "DSY",
    "dob": "2004-08-20",
    "address": "91, MG Road, Pune 411001",
    "parentName": "Thakur Thakur",
    "parentPhone": "9777419900",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.9,
      "semester": 5,
      "backlogs": 0
    },
    "internships": [
      {
        "id": "INT011",
        "company": "Accenture",
        "role": "Cloud Intern",
        "duration_months": 4,
        "type": "MNC",
        "stipend": 30000,
        "startDate": "2024-04-01",
        "endDate": "2024-07-31",
        "offerLetterFile": "accenture_offer.pdf",
        "status": "approved",
        "adminRemarks": ""
      }
    ],
    "placements": [
      {
        "id": "PLC005",
        "company": "Capgemini",
        "role": "Associate Consultant",
        "ctc": 720000,
        "offerLetterFile": "capgemini_placement.pdf",
        "status": "approved",
        "adminRemarks": "",
        "offerDate": "2024-08-20"
      }
    ],
    "hackathons": [
      {
        "id": "HACK013",
        "name": "Women in Tech Hack",
        "organizer": "WiT India",
        "result": "winner",
        "teamSize": 3,
        "date": "2024-05-10",
        "certificateFile": "wit.pdf",
        "status": "approved"
      }
    ],
    "projects": [
      {
        "id": "PROJ014",
        "title": "Health Tracker",
        "description": "Personal health monitoring dashboard",
        "githubUrl": "https://github.com/pooja/health",
        "techStack": [
          "React",
          "Node.js",
          "Chart.js"
        ],
        "commitCount": 110,
        "lastCommit": "2024-09-20",
        "stars": 10,
        "language": "JavaScript",
        "status": "completed"
      }
    ],
    "certifications": [
      {
        "id": "CERT026",
        "type": "technical",
        "name": "AWS Cloud Practitioner",
        "issuingOrg": "Amazon",
        "platform": "AWS",
        "completionDate": "2024-02-01",
        "credentialId": "AWS-CP-012",
        "credentialUrl": "",
        "fileLabel": "aws_cp2.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-02-02",
        "reviewedAt": "2024-02-04",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT027",
        "type": "technical",
        "name": "Google Data Analytics",
        "issuingOrg": "Google",
        "platform": "Google",
        "completionDate": "2024-04-15",
        "credentialId": "GDA-012",
        "credentialUrl": "",
        "fileLabel": "gda.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-04-16",
        "reviewedAt": "2024-04-18",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT028",
        "type": "technical",
        "name": "NPTEL Soft Computing",
        "issuingOrg": "IIT Kharagpur",
        "platform": "NPTEL",
        "completionDate": "2024-06-20",
        "credentialId": "NPTEL-SC-012",
        "credentialUrl": "",
        "fileLabel": "nptel_sc.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-06-21",
        "reviewedAt": "2024-06-23",
        "reviewedBy": "Admin"
      },
      {
        "id": "CERT029",
        "type": "non-technical",
        "name": "NCC B Certificate",
        "issuingOrg": "NCC",
        "platform": "",
        "completionDate": "2024-01-10",
        "credentialId": "",
        "credentialUrl": "",
        "fileLabel": "ncc_b.pdf",
        "status": "approved",
        "adminRemarks": "",
        "submittedAt": "2024-01-11",
        "reviewedAt": "2024-01-13",
        "reviewedBy": "Admin",
        "category": "NSS/NCC",
        "level": "national"
      }
    ],
    "sports": [
      {
        "id": "SPT009",
        "sportName": "Kabaddi",
        "level": "state",
        "achievement": "Team Captain",
        "date": "2024-03-05",
        "certificateFile": "kabaddi.pdf",
        "status": "approved"
      }
    ],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU013",
    "prn": "2125UMLM1001",
    "name": "Sahil Sunil Wani",
    "email": "sahil.wani_25uml@sanjivani.edu.in",
    "phone": "9890851084",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1001",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sunil Wani",
    "parentPhone": "9780167778",
    "address": "18, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.2,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU014",
    "prn": "2125UMLM1002",
    "name": "Sami Rafik Pathan",
    "email": "sami.pathan_25uml@sanjivani.edu.in",
    "phone": "8208001356",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1002",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rafik Pathan",
    "parentPhone": "9787146618",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 14,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 14,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 8,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 4,
        "maxMarks": 10
      },
      "CGPA": 4,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU015",
    "prn": "2125UMLM1003",
    "name": "Kavitej Rohit Vakte",
    "email": "kavitej.vakte_25uml@sanjivani.edu.in",
    "phone": "9834363338",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1003",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rohit Vakte",
    "parentPhone": "9732155987",
    "address": "17, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 14,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 14,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 8,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 4,
        "maxMarks": 10
      },
      "CGPA": 4,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU016",
    "prn": "2125UMLF1004",
    "name": "Shreya Vilas Kardile",
    "email": "shreya.kardile_25uml@sanjivani.edu.in",
    "phone": "8308780788",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1004",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vilas Kardile",
    "parentPhone": "9728635967",
    "address": "50, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 18,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 18,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 10,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 5,
        "maxMarks": 10
      },
      "CGPA": 5,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU017",
    "prn": "2125UMLF1005",
    "name": "Kartiki Balasaheb Gadhave",
    "email": "kartiki.gadhave_25uml@sanjivani.edu.in",
    "phone": "9850413390",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1005",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Balasaheb Gadhave",
    "parentPhone": "9736232798",
    "address": "42, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 18,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 18,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 10,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 5,
        "maxMarks": 10
      },
      "CGPA": 5,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU018",
    "prn": "2125UMLM1006",
    "name": "Aditya Gajanan Bhandge",
    "email": "aditya.bhandge_25uml@sanjivani.edu.in",
    "phone": "9588465907",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1006",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Gajanan Bhandge",
    "parentPhone": "9764414302",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 18,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 18,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 10,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 5,
        "maxMarks": 10
      },
      "CGPA": 5,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU019",
    "prn": "2125UMLM1007",
    "name": "Yash Dilip Bhavsar",
    "email": "yash.bhavsar_25uml@sanjivani.edu.in",
    "phone": "9518533621",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1007",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dilip Bhavsar",
    "parentPhone": "9722368346",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 21,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 21,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 12,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 6,
        "maxMarks": 10
      },
      "CGPA": 6,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU020",
    "prn": "2125UMLM1008",
    "name": "Shivraj Vaibhav Dhumal",
    "email": "shivraj.dhumal_25uml@sanjivani.edu.in",
    "phone": "8459772917",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1008",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vaibhav Dhumal",
    "parentPhone": "9744964509",
    "address": "86, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 21,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 21,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 12,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 6,
        "maxMarks": 10
      },
      "CGPA": 6,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU021",
    "prn": "2125UMLM1009",
    "name": "Kartik Bhausaheb Mali",
    "email": "kartik.mali_25uml@sanjivani.edu.in",
    "phone": "8263838200",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1009",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Bhausaheb Mali",
    "parentPhone": "9798345412",
    "address": "76, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 21,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 21,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 12,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 6,
        "maxMarks": 10
      },
      "CGPA": 6,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU022",
    "prn": "2125UMLF1010",
    "name": "Diksha Kishor Sonawane",
    "email": "diksha.sonawane_25uml@sanjivani.edu.in",
    "phone": "8459642363",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1010",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kishor Sonawane",
    "parentPhone": "9773780902",
    "address": "73, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU023",
    "prn": "2125UMLM1011",
    "name": "Harshal Pandurang Mhais",
    "email": "harshal.mhais_25uml@sanjivani.edu.in",
    "phone": "9270507811",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1011",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pandurang Mhais",
    "parentPhone": "9729071108",
    "address": "12, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU024",
    "prn": "2125UMLF1012",
    "name": "Pinali Devidas Lokhande",
    "email": "pinali.lokhande_25uml@sanjivani.edu.in",
    "phone": "9322812702",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1012",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Devidas Lokhande",
    "parentPhone": "9766213357",
    "address": "38, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.29,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU025",
    "prn": "2125UMLF1013",
    "name": "Shraddha Siddharth Purohit",
    "email": "shraddha.purohit_25uml@sanjivani.edu.in",
    "phone": "9552904483",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1013",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Siddharth Purohit",
    "parentPhone": "9754597345",
    "address": "42, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.83,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU026",
    "prn": "2125UMLM1014",
    "name": "Anirudha Appasaheb Dhonde",
    "email": "anirudha.dhonde_25uml@sanjivani.edu.in",
    "phone": "9604941689",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1014",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Appasaheb Dhonde",
    "parentPhone": "9777466221",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU027",
    "prn": "2125UMLM1015",
    "name": "Bhagwat Laxman Dhonde",
    "email": "bhagwat.dhonde_25uml@sanjivani.edu.in",
    "phone": "9850936542",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1015",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Laxman Dhonde",
    "parentPhone": "9774835834",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.96,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU028",
    "prn": "2125UMLM1016",
    "name": "Om Mohan Shelke",
    "email": "om.shelke_25uml@sanjivani.edu.in",
    "phone": "9404022542",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1016",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mohan Shelke",
    "parentPhone": "9728361364",
    "address": "75, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.46,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU029",
    "prn": "2125UMLM1017",
    "name": "Darshan Parashram Raktate",
    "email": "darshan.raktate_25uml@sanjivani.edu.in",
    "phone": "8830210236",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1017",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Parashram Raktate",
    "parentPhone": "9774980407",
    "address": "48, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.19,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU030",
    "prn": "2125UMLM1018",
    "name": "Siraj Mujahid Baig",
    "email": "siraj.baig_25uml@sanjivani.edu.in",
    "phone": "9881937637",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1018",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mujahid Baig",
    "parentPhone": "9751821367",
    "address": "62, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.11,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU031",
    "prn": "2125UMLM1019",
    "name": "Adil Azhar Shaikh",
    "email": "adil.shaikh_25uml@sanjivani.edu.in",
    "phone": "7414918410",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1019",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Azhar Shaikh",
    "parentPhone": "9736703655",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.86,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU032",
    "prn": "2125UMLM1020",
    "name": "Yadnesh Balkrishna Kshirsagar",
    "email": "yadnesh.kshirsagar_25uml@sanjivani.edu.in",
    "phone": "9511797250",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1020",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Balkrishna Kshirsagar",
    "parentPhone": "9718018438",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.15,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU033",
    "prn": "2125UMLM1021",
    "name": "Samarth Prasad Sadaphal",
    "email": "samarth.sadaphal_25uml@sanjivani.edu.in",
    "phone": "9923431121",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1021",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prasad Sadaphal",
    "parentPhone": "9773748053",
    "address": "67, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.29,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU034",
    "prn": "2125UMLF1022",
    "name": "Vedika Ganesh Pangavhane",
    "email": "vedika.pangavhane_25uml@sanjivani.edu.in",
    "phone": "9730992147",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1022",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ganesh Pangavhane",
    "parentPhone": "9777648421",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.14,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU035",
    "prn": "2125UMLM1023",
    "name": "Yogesh Nanasaheb Nawle",
    "email": "yogesh.nawle_25uml@sanjivani.edu.in",
    "phone": "8080042428",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1023",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nanasaheb Nawle",
    "parentPhone": "9759034770",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.03,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU036",
    "prn": "2125UMLF1024",
    "name": "Preeti Dnyaneshwar Gaikwad",
    "email": "preeti.gaikwad_25uml@sanjivani.edu.in",
    "phone": "9403773971",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1024",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Gaikwad",
    "parentPhone": "9796012439",
    "address": "92, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.08,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU037",
    "prn": "2125UMLM1025",
    "name": "Piyush Pramod Gaikwad",
    "email": "piyush.gaikwad_25uml@sanjivani.edu.in",
    "phone": "7709940409",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1025",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pramod Gaikwad",
    "parentPhone": "9777362505",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.79,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU038",
    "prn": "2125UMLM1026",
    "name": "Yashodeep Dilip Shinde",
    "email": "yashodeep.shinde_25uml@sanjivani.edu.in",
    "phone": "8379840167",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1026",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dilip Shinde",
    "parentPhone": "9732350897",
    "address": "38, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.61,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU039",
    "prn": "2125UMLM1027",
    "name": "Omkar Sanjay Khond",
    "email": "omkar.khond_25uml@sanjivani.edu.in",
    "phone": "7499036577",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1027",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanjay Khond",
    "parentPhone": "9746265807",
    "address": "70, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.83,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU040",
    "prn": "2125UMLF1028",
    "name": "Jiya Prem Prajapati",
    "email": "jiya.prajapati_25uml@sanjivani.edu.in",
    "phone": "8087749093",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1028",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prem Prajapati",
    "parentPhone": "9726351443",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.11,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU041",
    "prn": "2125UMLM1029",
    "name": "Chhatrabal Dilip Pagar",
    "email": "chhatrabal.pagar_25uml@sanjivani.edu.in",
    "phone": "9403414393",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1029",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dilip Pagar",
    "parentPhone": "9732934093",
    "address": "53, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.29,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU042",
    "prn": "2125UMLM1030",
    "name": "Shriraj Ganesh Kamble",
    "email": "shriraj.kamble_25uml@sanjivani.edu.in",
    "phone": "9921094029",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1030",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ganesh Kamble",
    "parentPhone": "9771464140",
    "address": "20, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.79,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU043",
    "prn": "2125UMLF1031",
    "name": "Snehal Nilesh Patange",
    "email": "snehal.patange_25uml@sanjivani.edu.in",
    "phone": "7219297072",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1031",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nilesh Patange",
    "parentPhone": "9785900815",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.91,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU044",
    "prn": "2125UMLM1033",
    "name": "Jayesh Ganesh Borhade",
    "email": "jayesh.borhade_25uml@sanjivani.edu.in",
    "phone": "9309923637",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1033",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ganesh Borhade",
    "parentPhone": "9736776413",
    "address": "67, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.18,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU045",
    "prn": "2125UMLF1034",
    "name": "Mitali Bipin Gawali",
    "email": "mitali.gawali_25uml@sanjivani.edu.in",
    "phone": "8766595462",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1034",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Bipin Gawali",
    "parentPhone": "9792559732",
    "address": "16, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.16,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU046",
    "prn": "2125UMLM1035",
    "name": "Krushna Janaradan Thete",
    "email": "krushna.thete_25uml@sanjivani.edu.in",
    "phone": "6351963767",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1035",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Janaradan Thete",
    "parentPhone": "9770475976",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.32,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU047",
    "prn": "2125UMLM1036",
    "name": "Sarthak Shivram Labhade",
    "email": "sarthak.labhade_25uml@sanjivani.edu.in",
    "phone": "9970382125",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1036",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shivram Labhade",
    "parentPhone": "9755718681",
    "address": "92, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.07,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU048",
    "prn": "2125UMLM1037",
    "name": "Pratik Prakash Sakhare",
    "email": "pratik.sakhare_25uml@sanjivani.edu.in",
    "phone": "9168939151",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1037",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prakash Sakhare",
    "parentPhone": "9788122303",
    "address": "67, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.56,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU049",
    "prn": "2125UMLM1038",
    "name": "Om Yogesh Khond",
    "email": "om.khond_25uml@sanjivani.edu.in",
    "phone": "7385217167",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1038",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yogesh Khond",
    "parentPhone": "9795002515",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.03,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU050",
    "prn": "2125UMLM1039",
    "name": "Pranav Sachin Sonawane",
    "email": "pranav.sonawane_25uml@sanjivani.edu.in",
    "phone": "7263842962",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1039",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sachin Sonawane",
    "parentPhone": "9714900588",
    "address": "49, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.58,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU051",
    "prn": "2125UMLM1040",
    "name": "Om Sandip Chalak",
    "email": "om.chalak_25uml@sanjivani.edu.in",
    "phone": "9021881099",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1040",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sandip Chalak",
    "parentPhone": "9756450248",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.93,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU052",
    "prn": "2125UMLM1041",
    "name": "Pranav Yogesh Gaikwad",
    "email": "pranav.gaikwad_25uml@sanjivani.edu.in",
    "phone": "7517694847",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1041",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yogesh Gaikwad",
    "parentPhone": "9793997995",
    "address": "41, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.16,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU053",
    "prn": "2125UMLM1042",
    "name": "Sahil Uddhav Jagzap",
    "email": "sahil.jagzap_25uml@sanjivani.edu.in",
    "phone": "9665887055",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1042",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Uddhav Jagzap",
    "parentPhone": "9724996534",
    "address": "27, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.42,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU054",
    "prn": "2125UMLF1043",
    "name": "Tanushka Dattatray Gadekar",
    "email": "tanushka.gadekar_25uml@sanjivani.edu.in",
    "phone": "9689130053",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1043",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dattatray Gadekar",
    "parentPhone": "9717124688",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.85,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU055",
    "prn": "2125UMLM1044",
    "name": "Atharva Rajendra Pawar",
    "email": "atharva.pawar_25uml@sanjivani.edu.in",
    "phone": "9272154270",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1044",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajendra Pawar",
    "parentPhone": "9727272616",
    "address": "43, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.79,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU056",
    "prn": "2125UMLM1045",
    "name": "Saish Hrushikesh Kote",
    "email": "saish.kote_25uml@sanjivani.edu.in",
    "phone": "8432655151",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1045",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Hrushikesh Kote",
    "parentPhone": "9738328291",
    "address": "15, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU057",
    "prn": "2125UMLM1046",
    "name": "Aryan Anirudha Kote",
    "email": "aryan.kote_25uml@sanjivani.edu.in",
    "phone": "7498689886",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1046",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Anirudha Kote",
    "parentPhone": "9710701147",
    "address": "61, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.59,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU058",
    "prn": "2125UMLM1047",
    "name": "Sarthak Popat Gosavi",
    "email": "sarthak.gosavi_25uml@sanjivani.edu.in",
    "phone": "9834616468",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1047",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Popat Gosavi",
    "parentPhone": "9735192969",
    "address": "43, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.12,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU059",
    "prn": "2125UMLM1048",
    "name": "Sahil Sachin Argade",
    "email": "sahil.argade_25uml@sanjivani.edu.in",
    "phone": "9552372261",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1048",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sachin Argade",
    "parentPhone": "9730591895",
    "address": "46, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.51,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU060",
    "prn": "2125UMLM1049",
    "name": "Nishant Ravindra Kasar",
    "email": "nishant.kasar_25uml@sanjivani.edu.in",
    "phone": "9623085847",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1049",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ravindra Kasar",
    "parentPhone": "9760523693",
    "address": "66, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.91,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU061",
    "prn": "2125UMLM1050",
    "name": "Yash Dileep Borse",
    "email": "yash.borse_25uml@sanjivani.edu.in",
    "phone": "8600711265",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1050",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dileep Borse",
    "parentPhone": "9783178950",
    "address": "48, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.25,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU062",
    "prn": "2125UMLM1051",
    "name": "Bhagwan Dadasaheb Kote",
    "email": "bhagwan.kote_25uml@sanjivani.edu.in",
    "phone": "8263924947",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1051",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dadasaheb Kote",
    "parentPhone": "9721486560",
    "address": "86, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU063",
    "prn": "2125UMLM1052",
    "name": "Suraj Prakash Kshirsagar",
    "email": "suraj.kshirsagar_25uml@sanjivani.edu.in",
    "phone": "9322373709",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1052",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prakash Kshirsagar",
    "parentPhone": "9794023622",
    "address": "67, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.9,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU064",
    "prn": "2125UMLM1053",
    "name": "Manish Jitendra Kasar",
    "email": "manish.kasar_25uml@sanjivani.edu.in",
    "phone": "7219503295",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1053",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Jitendra Kasar",
    "parentPhone": "9787585028",
    "address": "10, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.49,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU065",
    "prn": "2125UMLM1054",
    "name": "Pranav Bhausaheb Bare",
    "email": "pranav.bare_25uml@sanjivani.edu.in",
    "phone": "8668409051",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1054",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Bhausaheb Bare",
    "parentPhone": "9781627877",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.72,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU066",
    "prn": "2125UMLF1055",
    "name": "Samiksha Dnyaneshwar Nishane",
    "email": "samiksha.nishane_25uml@sanjivani.edu.in",
    "phone": "9175416137",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1055",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Nishane",
    "parentPhone": "9793757730",
    "address": "39, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.08,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU067",
    "prn": "2125UMLM1056",
    "name": "Yuvraj Ravindra Jamdar",
    "email": "yuvraj.jamdar_25uml@sanjivani.edu.in",
    "phone": "9970892707",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1056",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ravindra Jamdar",
    "parentPhone": "9754522901",
    "address": "70, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.04,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU068",
    "prn": "2125UMLM1057",
    "name": "Yash Rajendra Dhokne",
    "email": "yash.dhokne_25uml@sanjivani.edu.in",
    "phone": "7066069207",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1057",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajendra Dhokne",
    "parentPhone": "9734457356",
    "address": "73, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.6,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU069",
    "prn": "2125UMLM1058",
    "name": "Amit Sambhaji Kote",
    "email": "amit.kote_25uml@sanjivani.edu.in",
    "phone": "9022288571",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1058",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sambhaji Kote",
    "parentPhone": "9714904940",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.22,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU070",
    "prn": "2125UMLM1059",
    "name": "Prathamesh Ganpat Kolhe",
    "email": "prathamesh.kolhe_25uml@sanjivani.edu.in",
    "phone": "8262909373",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1059",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ganpat Kolhe",
    "parentPhone": "9765595201",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.67,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU071",
    "prn": "2125UMLF1060",
    "name": "Siddhi Sandip Gadhave",
    "email": "siddhi.gadhave_25uml@sanjivani.edu.in",
    "phone": "7057008629",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1060",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sandip Gadhave",
    "parentPhone": "9770092482",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.38,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU072",
    "prn": "2125UMLM1061",
    "name": "Aditya Dnyaneshwar Gaikwad",
    "email": "aditya.gaikwad_25uml@sanjivani.edu.in",
    "phone": "9588669950",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1061",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Gaikwad",
    "parentPhone": "9778638254",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.35,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU073",
    "prn": "2125UMLM1062",
    "name": "Prajwal Rajendra Kote",
    "email": "prajwal.kote_25uml@sanjivani.edu.in",
    "phone": "9028111395",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1062",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajendra Kote",
    "parentPhone": "9795761741",
    "address": "57, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.9,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU074",
    "prn": "2125UMLM1063",
    "name": "Aditya Viresh Paithankar",
    "email": "aditya.paithankar_25uml@sanjivani.edu.in",
    "phone": "9226877510",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1063",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Viresh Paithankar",
    "parentPhone": "9747411943",
    "address": "76, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.86,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU075",
    "prn": "2125UMLF1064",
    "name": "Swastika Kuldip Jagtap",
    "email": "swastika.jagtap_25uml@sanjivani.edu.in",
    "phone": "8329075065",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1064",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kuldip Jagtap",
    "parentPhone": "9791403831",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.64,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU076",
    "prn": "2125UMLM1065",
    "name": "Om Prashant Tambe",
    "email": "om.tambe_25uml@sanjivani.edu.in",
    "phone": "9172053853",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1065",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prashant Tambe",
    "parentPhone": "9791376117",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU077",
    "prn": "2125UMLF1066",
    "name": "Dhanashri Sunil Deokar",
    "email": "dhanashri.deokar_25uml@sanjivani.edu.in",
    "phone": "9270261919",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1066",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sunil Deokar",
    "parentPhone": "9748467289",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.36,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU078",
    "prn": "2125UMLF1067",
    "name": "Shubheccha Krushnadas Mhaske",
    "email": "shubheccha.mhaske_25uml@sanjivani.edu.in",
    "phone": "8208529124",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1067",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Krushnadas Mhaske",
    "parentPhone": "9723731233",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU079",
    "prn": "2125UMLF1068",
    "name": "Apeksha Manesh Jadhav",
    "email": "apeksha.jadhav_25uml@sanjivani.edu.in",
    "phone": "9673645797",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1068",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Manesh Jadhav",
    "parentPhone": "9739719449",
    "address": "15, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.18,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU080",
    "prn": "2125UMLM1069",
    "name": "Yash Ravindra Kothule",
    "email": "yash.kothule_25uml@sanjivani.edu.in",
    "phone": "9975809561",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1069",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ravindra Kothule",
    "parentPhone": "9745483629",
    "address": "17, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.87,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU081",
    "prn": "2125UMLF1070",
    "name": "Vaidehi Dattatray More",
    "email": "vaidehi.more_25uml@sanjivani.edu.in",
    "phone": "9881472139",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1070",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dattatray More",
    "parentPhone": "9791654201",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.87,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU082",
    "prn": "2125UMLM1071",
    "name": "Mo Huzefa Shaikh Munaf Bagwan",
    "email": "mohuzefa.bagwan_25uml@sanjivani.edu.in",
    "phone": "7249701386",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1071",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Huzefa Bagwan",
    "parentPhone": "9795160949",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.25,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU083",
    "prn": "2125UMLF1072",
    "name": "Samiksha Vikram Avhale",
    "email": "samiksha.avhale_25uml@sanjivani.edu.in",
    "phone": "9730805369",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1072",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vikram Avhale",
    "parentPhone": "9796124961",
    "address": "54, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.04,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU084",
    "prn": "2125UMLM1073",
    "name": "Sarvesh Anil Aher",
    "email": "sarvesh.aher_25uml@sanjivani.edu.in",
    "phone": "9890281703",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1073",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Anil Aher",
    "parentPhone": "9765278073",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.88,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU085",
    "prn": "2125UMLM1074",
    "name": "Aditya Nitin Kharde",
    "email": "aditya.kharde_25uml@sanjivani.edu.in",
    "phone": "8080520424",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1074",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nitin Kharde",
    "parentPhone": "9722469992",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.91,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU086",
    "prn": "2125UMLM1075",
    "name": "Prashant Mahesh Londhe",
    "email": "prashant.londhe_25uml@sanjivani.edu.in",
    "phone": "7798587500",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1075",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mahesh Londhe",
    "parentPhone": "9771130861",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.82,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU087",
    "prn": "2125UMLM1076",
    "name": "Atharva Babasaheb Kasar",
    "email": "atharva.kasar_25uml@sanjivani.edu.in",
    "phone": "7722079191",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1076",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Babasaheb Kasar",
    "parentPhone": "9760545958",
    "address": "16, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.9,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU088",
    "prn": "2125UMLF1077",
    "name": "Shruti Bapurao Garje",
    "email": "shruti.garje_25uml@sanjivani.edu.in",
    "phone": "9370369319",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1077",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Bapurao Garje",
    "parentPhone": "9750530182",
    "address": "81, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.51,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU089",
    "prn": "2125UMLF1078",
    "name": "Shravani Ravindra Thorat",
    "email": "shravani.thorat_25uml@sanjivani.edu.in",
    "phone": "9356501845",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1078",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ravindra Thorat",
    "parentPhone": "9799114634",
    "address": "98, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.8,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU090",
    "prn": "2125UMLM1079",
    "name": "Krushna Babasaheb Dhokane",
    "email": "krushna.dhokane_25uml@sanjivani.edu.in",
    "phone": "9579787927",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1079",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Babasaheb Dhokane",
    "parentPhone": "9737524449",
    "address": "39, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU091",
    "prn": "2125UMLM1080",
    "name": "Aditya Kalyan Jagdale",
    "email": "aditya.jagdale_25uml@sanjivani.edu.in",
    "phone": "9529368486",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1080",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kalyan Jagdale",
    "parentPhone": "9790609242",
    "address": "82, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.52,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU092",
    "prn": "2125UMLM1081",
    "name": "Prathamesh Janardan Mahajan",
    "email": "prathamesh.mahajan_25uml@sanjivani.edu.in",
    "phone": "7588949443",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1081",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Janardan Mahajan",
    "parentPhone": "9718713453",
    "address": "69, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.8,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU093",
    "prn": "2125UMLF1082",
    "name": "Neha Ravindra Deore",
    "email": "neha.deore_25uml@sanjivani.edu.in",
    "phone": "7709884790",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1082",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ravindra Deore",
    "parentPhone": "9775807354",
    "address": "99, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.12,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU094",
    "prn": "2125UMLM1083",
    "name": "Pranav Raghunath Jadhav",
    "email": "pranav.jadhav_25uml@sanjivani.edu.in",
    "phone": "9309314484",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1083",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Raghunath Jadhav",
    "parentPhone": "9747112806",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU095",
    "prn": "2125UMLF1084",
    "name": "Shraddha Popat Mane",
    "email": "shraddha.mane_25uml@sanjivani.edu.in",
    "phone": "9763648261",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1084",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Popat Mane",
    "parentPhone": "9761951732",
    "address": "38, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.58,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU096",
    "prn": "2125UMLM1085",
    "name": "Pravin Madhav Gadge",
    "email": "pravin.gadge_25uml@sanjivani.edu.in",
    "phone": "8857862285",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1085",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Madhav Gadge",
    "parentPhone": "9769012838",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.74,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU097",
    "prn": "2125UMLF1086",
    "name": "Shruti Anil Gadhave",
    "email": "shruti.gadhave_25uml@sanjivani.edu.in",
    "phone": "9763899466",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1086",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Anil Gadhave",
    "parentPhone": "9736399443",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.15,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU098",
    "prn": "2125UMLM1087",
    "name": "Pankaj Rangnath Kumkar",
    "email": "pankaj.kumkar_25uml@sanjivani.edu.in",
    "phone": "8329036085",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1087",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rangnath Kumkar",
    "parentPhone": "9794435162",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.8,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU099",
    "prn": "2125UMLM1088",
    "name": "Soham Dadasaheb Pathare",
    "email": "soham.pathare_25uml@sanjivani.edu.in",
    "phone": "9130070623",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1088",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dadasaheb Pathare",
    "parentPhone": "9718927852",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.2,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU100",
    "prn": "2125UMLM1089",
    "name": "Sahil Machhindra Kakade",
    "email": "sahil.kakade_25uml@sanjivani.edu.in",
    "phone": "8605496804",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1089",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Machhindra Kakade",
    "parentPhone": "9793064734",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.42,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU101",
    "prn": "2125UMLM1091",
    "name": "Yash Prashant Rohokale",
    "email": "yash.rohokale_25uml@sanjivani.edu.in",
    "phone": "9858717676",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1091",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prashant Rohokale",
    "parentPhone": "9736954073",
    "address": "90, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.06,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU102",
    "prn": "2125UMLM1092",
    "name": "Shivam Raghunath Kokane",
    "email": "shivam.kokane_25uml@sanjivani.edu.in",
    "phone": "9322308082",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1092",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Raghunath Kokane",
    "parentPhone": "9798973213",
    "address": "47, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.35,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU103",
    "prn": "2125UMLF1093",
    "name": "Vaishnavi Dnyaneshwar Padghan",
    "email": "vaishnavi.padghan_25uml@sanjivani.edu.in",
    "phone": "9763594028",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1093",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Padghan",
    "parentPhone": "9745366325",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.99,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU104",
    "prn": "2125UMLF1095",
    "name": "Samruddhi Nilesh Adik",
    "email": "samruddhi.adik_25uml@sanjivani.edu.in",
    "phone": "8208409324",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1095",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nilesh Adik",
    "parentPhone": "9765226449",
    "address": "16, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.57,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU105",
    "prn": "2125UMLF1096",
    "name": "Pradnya Kalpesh Lakariya",
    "email": "pradnya.lakariya_25uml@sanjivani.edu.in",
    "phone": "9699374788",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1096",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kalpesh Lakariya",
    "parentPhone": "9789373066",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.25,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU106",
    "prn": "2125UMLM1097",
    "name": "Arman Amarjit Singh",
    "email": "arman.singh_25uml@sanjivani.edu.in",
    "phone": "8683060070",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1097",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Amarjit Singh",
    "parentPhone": "9726342165",
    "address": "99, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.05,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU107",
    "prn": "2125UMLF1098",
    "name": "Prerana Hemant Dhande",
    "email": "prerana.dhande_25uml@sanjivani.edu.in",
    "phone": "7588615234",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1098",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Hemant Dhande",
    "parentPhone": "9727803397",
    "address": "97, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.42,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU108",
    "prn": "2125UMLM1099",
    "name": "Prathmesh Vinod Pagar",
    "email": "prathmesh.pagar_25uml@sanjivani.edu.in",
    "phone": "7620936326",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1099",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vinod Pagar",
    "parentPhone": "9712108393",
    "address": "75, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.19,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU109",
    "prn": "2125UMLF1100",
    "name": "Vaishnavi Appasaheb Jadhav",
    "email": "vaishnavi.jadhav_25uml@sanjivani.edu.in",
    "phone": "8830253320",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1100",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Appasaheb Jadhav",
    "parentPhone": "9711261094",
    "address": "55, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.42,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU110",
    "prn": "2125UMLF1101",
    "name": "Arya Dnyaneshwar Bhagwat",
    "email": "arya.bhagwat_25uml@sanjivani.edu.in",
    "phone": "9284659500",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1101",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Bhagwat",
    "parentPhone": "9734679865",
    "address": "84, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.2,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU111",
    "prn": "2125UMLM1102",
    "name": "Aryan Indranil Kadam",
    "email": "aryan.kadam_25uml@sanjivani.edu.in",
    "phone": "8766466974",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1102",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Indranil Kadam",
    "parentPhone": "9716769178",
    "address": "52, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.97,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU112",
    "prn": "2125UMLF1103",
    "name": "Srushti Somnath Vadje",
    "email": "srushti.vadje_25uml@sanjivani.edu.in",
    "phone": "7498285488",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1103",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Somnath Vadje",
    "parentPhone": "9771176940",
    "address": "66, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.81,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU113",
    "prn": "2125UMLF1104",
    "name": "Sipravi Purushottam Undare",
    "email": "sipravi.undare_25uml@sanjivani.edu.in",
    "phone": "9403801804",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1104",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Purushottam Undare",
    "parentPhone": "9788573178",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.97,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU114",
    "prn": "2125UMLM1105",
    "name": "Ayush Kiran Jagtap",
    "email": "ayush.jagtap_25uml@sanjivani.edu.in",
    "phone": "9326678384",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1105",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kiran Jagtap",
    "parentPhone": "9727362623",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.5,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU115",
    "prn": "2125UMLF1106",
    "name": "Kartiki Arun Shinde",
    "email": "kartiki.shinde_25uml@sanjivani.edu.in",
    "phone": "9130057151",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1106",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Arun Shinde",
    "parentPhone": "9716355950",
    "address": "84, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.44,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU116",
    "prn": "2125UMLM1107",
    "name": "Vinay Rajendra Velanjkar",
    "email": "vinay.velanjkar_25uml@sanjivani.edu.in",
    "phone": "9028640618",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1107",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajendra Velanjkar",
    "parentPhone": "9729980696",
    "address": "59, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.33,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU117",
    "prn": "2125UMLM1108",
    "name": "Sarvesh Annasaheb Nage",
    "email": "sarvesh.nage_25uml@sanjivani.edu.in",
    "phone": "9960554541",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1108",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Annasaheb Nage",
    "parentPhone": "9715278538",
    "address": "85, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.13,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU118",
    "prn": "2125UMLF1109",
    "name": "Bhavika Prashant Shinde",
    "email": "bhavika.shinde_25uml@sanjivani.edu.in",
    "phone": "8668475547",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1109",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prashant Shinde",
    "parentPhone": "9770382232",
    "address": "40, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.02,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU119",
    "prn": "2125UMLF1110",
    "name": "Samruddhi Mahendra Lute",
    "email": "samruddhi.lute_25uml@sanjivani.edu.in",
    "phone": "9766814460",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1110",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mahendra Lute",
    "parentPhone": "9744356036",
    "address": "91, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.34,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU120",
    "prn": "2125UMLF1111",
    "name": "Shreya Hemraj Jawale",
    "email": "shreya.jawale_25uml@sanjivani.edu.in",
    "phone": "9527898155",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1111",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Hemraj Jawale",
    "parentPhone": "9762935348",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.82,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU121",
    "prn": "2125UMLM1112",
    "name": "Sahil Pushkaraj Jawale",
    "email": "sahil.jawale_25uml@sanjivani.edu.in",
    "phone": "9529107055",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1112",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pushkaraj Jawale",
    "parentPhone": "9760405480",
    "address": "12, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.06,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU122",
    "prn": "2125UMLM1114",
    "name": "Saurabh Sachin Deshmukh",
    "email": "saurabh.deshmukh_25uml@sanjivani.edu.in",
    "phone": "7796047625",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1114",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sachin Deshmukh",
    "parentPhone": "9766477583",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 33,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 33,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.29,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU123",
    "prn": "2125UMLM1115",
    "name": "Jay Ganesh Bhapkar",
    "email": "jay.bhapkar_25uml@sanjivani.edu.in",
    "phone": "8484032121",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1115",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ganesh Bhapkar",
    "parentPhone": "9788825308",
    "address": "41, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.01,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU124",
    "prn": "2125UMLM1116",
    "name": "Aditya Vijay Magar",
    "email": "aditya.magar_25uml@sanjivani.edu.in",
    "phone": "7558341878",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1116",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vijay Magar",
    "parentPhone": "9754147220",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.9,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU125",
    "prn": "2125UMLM1118",
    "name": "Atharv Dipak Ghige",
    "email": "atharv.ghige_25uml@sanjivani.edu.in",
    "phone": "8856027494",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1118",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dipak Ghige",
    "parentPhone": "9734226555",
    "address": "18, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.94,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU126",
    "prn": "2125UMLM1121",
    "name": "Meet Yogesh Doshi",
    "email": "meet.doshi_25uml@sanjivani.edu.in",
    "phone": "9130064068",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1121",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yogesh Doshi",
    "parentPhone": "9778176088",
    "address": "16, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.99,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU127",
    "prn": "2125UMLM1123",
    "name": "Krishna Sanjay Dalvi",
    "email": "krishna.dalvi_25uml@sanjivani.edu.in",
    "phone": "7666811844",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1123",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanjay Dalvi",
    "parentPhone": "9757811989",
    "address": "25, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.2,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU128",
    "prn": "2125UMLM1124",
    "name": "Renin Ahamed",
    "email": "renin.ahamed_25uml1@sanjivani.edu.in",
    "phone": "9746271403",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1124",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ahamed Ahamed",
    "parentPhone": "9730314021",
    "address": "99, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.01,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU129",
    "prn": "2125UMLM1125",
    "name": "Omkar Machhindra Ugale",
    "email": "omkar.ugale_25uml@sanjivani.edu.in",
    "phone": "9325984473",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1125",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Machhindra Ugale",
    "parentPhone": "9789851306",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.2,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU130",
    "prn": "2125UMLM1126",
    "name": "Rushikesh Umakant Gore",
    "email": "rushikesh.gore_25uml@sanjivani.edu.in",
    "phone": "9699654588",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1126",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Umakant Gore",
    "parentPhone": "9716141971",
    "address": "74, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.82,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU131",
    "prn": "2125UMLM1127",
    "name": "Krushna Sagar Kulthe",
    "email": "krushna.kulthe_25uml@sanjivani.edu.in",
    "phone": "9022838515",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1127",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sagar Kulthe",
    "parentPhone": "9735949045",
    "address": "24, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.47,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU132",
    "prn": "2125UMLM1128",
    "name": "Sairaj Dattatray Bagal",
    "email": "sairaj.bagal_25uml@sanjivani.edu.in",
    "phone": "8080469132",
    "year": "1st",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1128",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dattatray Bagal",
    "parentPhone": "9716635233",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.53,
      "semester": 2,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU133",
    "prn": "2125UMLM2087",
    "name": "Ahubham Annasaheb Kurkute",
    "email": "shubham.kurkute_25uml@sanjivani.edu.in",
    "phone": "7620126272",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2087",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Annasaheb Kurkute",
    "parentPhone": "9712314498",
    "address": "12, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.66,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU134",
    "prn": "2125UMLM2045",
    "name": "Omkar Mahesh Sabale",
    "email": "omkar.sabale_25uml@sanjivani.edu.in",
    "phone": "9867558681",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2045",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Mahesh Sabale",
    "parentPhone": "9738742974",
    "address": "62, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU135",
    "prn": "2125UMLM2031",
    "name": "Mayur Sunil Jadhav",
    "email": "mayur.jadhav_25uml@sanjivani.edu.in",
    "phone": "9767742188",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2031",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sunil Jadhav",
    "parentPhone": "9755733597",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.15,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU136",
    "prn": "2125UMLM2017",
    "name": "Aniket Sanjay Ghodke",
    "email": "aniket.ghodke_25uml@sanjivani.edu.in",
    "phone": "8999354958",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2017",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Ghodke",
    "parentPhone": "9710858077",
    "address": "34, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.63,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU137",
    "prn": "2125UMLF2002",
    "name": "Vaishnavi Dilip Bhaldand",
    "email": "vaishanvi.bhaldand_25uml@sanjivani.edu.in",
    "phone": "8329353442",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2002",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dilip Bhaldand",
    "parentPhone": "9732359180",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.93,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU138",
    "prn": "2125UMLF2010",
    "name": "Shrushti Prashant Satalkar",
    "email": "shrushti.satalkar_25uml@sanjivani.edu.in",
    "phone": "7620744449",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2010",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Prashant Satalkar",
    "parentPhone": "9740415351",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.47,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU139",
    "prn": "2125UMLF2013",
    "name": "Thombare Sakshi Santosh",
    "email": "sakshi.thombare_25uml@sanjivani.edu.in",
    "phone": "9511794374",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2013",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sakshi Santosh",
    "parentPhone": "9781955906",
    "address": "69, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.34,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU140",
    "prn": "2125UMLF2014",
    "name": "Kadam Bhagyashri Vitthal",
    "email": "bhagyashri.kadam_25uml@sanjivani.edu.in",
    "phone": "8530470960",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2014",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bhagyashri Vitthal",
    "parentPhone": "9769493836",
    "address": "80, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU141",
    "prn": "2125UMLF2015",
    "name": "Payal Satish Gaikwad",
    "email": "payal.gaikwad_25uml@sanjivani.edu.in",
    "phone": "9356264144",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2015",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Satish Gaikwad",
    "parentPhone": "9727329367",
    "address": "22, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU142",
    "prn": "2125UMLF2018",
    "name": "Sandhya Ganesh Chavan",
    "email": "sandhya.chavan_25uml@sanjivani.edu.in",
    "phone": "9699616750",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2018",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ganesh Chavan",
    "parentPhone": "9754421726",
    "address": "15, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.73,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU143",
    "prn": "2125UMLF2020",
    "name": "Siddhika Adinath Ghodake",
    "email": "siddhika.ghodke_25uml@sanjivani.edu.in",
    "phone": "9356017103",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2020",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Adinath Ghodake",
    "parentPhone": "9722928922",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.82,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU144",
    "prn": "2125UMLF2021",
    "name": "Janhvi Anil Gawali",
    "email": "janhvi.gawali_25uml@sanjivani.edu.in",
    "phone": "9637111103",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2021",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Anil Gawali",
    "parentPhone": "9747552991",
    "address": "47, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU145",
    "prn": "2125UMLF2038",
    "name": "Shelke Supriya Deepak",
    "email": "supriya.shelke_25uml@sanjivani.edu.in",
    "phone": "9699246141",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2038",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Supriya Deepak",
    "parentPhone": "9725687845",
    "address": "64, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.74,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU146",
    "prn": "2125UMLF2042",
    "name": "Jorvekar Revati Manoj",
    "email": "revati.jorvekar_25uml@sanjivani.edu.in",
    "phone": "9511855400",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2042",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Revati Manoj",
    "parentPhone": "9747117984",
    "address": "39, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU147",
    "prn": "2125UMLF2065",
    "name": "Sayali Ravindra Chalak",
    "email": "sayali.chalak_25uml@sanjivani.edu.in",
    "phone": "7276769288",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2065",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Chalak",
    "parentPhone": "9761298592",
    "address": "47, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.44,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU148",
    "prn": "2125UMLF2070",
    "name": "Kalyani Sunil Dongare",
    "email": "kalyani.dongare_25uml@sanjivani.edu.in",
    "phone": "7972562191",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2070",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sunil Dongare",
    "parentPhone": "9778375785",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU149",
    "prn": "2125UMLF2071",
    "name": "Aditi Ravindra Bhagwat",
    "email": "aditi.bhagwat_25uml@sanjivani.edu.in",
    "phone": "8999787033",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2071",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Bhagwat",
    "parentPhone": "9736757381",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.79,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU150",
    "prn": "2125UMLF2074",
    "name": "Deokar Trupti Sanjay",
    "email": "trupti.deokar_25uml@sanjivani.edu.in",
    "phone": "9921299491",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2074",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Trupti Sanjay",
    "parentPhone": "9781902573",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.46,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU151",
    "prn": "2125UMLF2076",
    "name": "Jadhav Nandini Namdev",
    "email": "nandini.jadhav_25uml@sanjivani.edu.in",
    "phone": "8605211313",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2076",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nandini Namdev",
    "parentPhone": "9799513556",
    "address": "49, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.5,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU152",
    "prn": "2125UMLF2078",
    "name": "Neha Sanjay Chavan",
    "email": "neha.chavan_25uml@sanjivani.edu.in",
    "phone": "8263949681",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2078",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Chavan",
    "parentPhone": "9761834952",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU153",
    "prn": "2125UMLF2079",
    "name": "Ashwini Sanjay Chaudhari",
    "email": "ashwini.chaudhari_25uml@sanjivani.edu.in",
    "phone": "8446120602",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2079",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Chaudhari",
    "parentPhone": "9740827741",
    "address": "93, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.04,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU154",
    "prn": "2125UMLF2084",
    "name": "Aparna Prakash Matsagar",
    "email": "aparna.matsagar_25uml@sanjivani.edu.in",
    "phone": "9579324797",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2084",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Prakash Matsagar",
    "parentPhone": "9718707898",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.19,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU155",
    "prn": "2125UMLF2086",
    "name": "Ishwari Pravin Katore",
    "email": "ishwari.katore_25uml@sanjivani.edu.in",
    "phone": "7378859675",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2086",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pravin Katore",
    "parentPhone": "9781639683",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.14,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU156",
    "prn": "2125UMLF2096",
    "name": "Pranali Rajendra Gayke",
    "email": "pranali.gayake_25uml@sanjivani.edu.in",
    "phone": "9325318423",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2096",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rajendra Gayke",
    "parentPhone": "9765753569",
    "address": "61, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.08,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU157",
    "prn": "2125UMLM2019",
    "name": "Vishal Navnath Fulari",
    "email": "navnath.vishal_25uml@sanjivani.edu.in",
    "phone": "7517804052",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2019",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Navnath Fulari",
    "parentPhone": "9717848256",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.82,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU158",
    "prn": "2125UMLM2057",
    "name": "Ajit Subhash Davange",
    "email": "ajit.davange_25uml@sanjivani.edu.in",
    "phone": "9172476948",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2057",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Subhash Davange",
    "parentPhone": "9712447660",
    "address": "66, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU159",
    "prn": "2125UMLM2001",
    "name": "Rehan Inamdar",
    "email": "rehan.inamdar_25uml@sanjivani.edu.in",
    "phone": "7721821192",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2001",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Inamdar Inamdar",
    "parentPhone": "9716911927",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.68,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU160",
    "prn": "2125UMLM2004",
    "name": "Parth Keshav Kakade",
    "email": "parth.kakade_25uml@sanjivani.edu.in",
    "phone": "9767316152",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2004",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Keshav Kakade",
    "parentPhone": "9777980102",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU161",
    "prn": "2125UMLM2005",
    "name": "Pranav Rajendra Rindhe",
    "email": "pranav.rindhe_25uml@sanjivani.edu.in",
    "phone": "8767387171",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2005",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rajendra Rindhe",
    "parentPhone": "9796093852",
    "address": "89, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU162",
    "prn": "2125UMLM2008",
    "name": "Sarvesh Gorkshnath Unde",
    "email": "sarvesh.unde_25uml@sanjivani.edu.in",
    "phone": "9021212769",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2008",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Gorkshnath Unde",
    "parentPhone": "9786111523",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU163",
    "prn": "2125UMLM2006",
    "name": "Prathamesh Pravin Tekale",
    "email": "prathemesh.tekale_25uml@sanjivani.edu.in",
    "phone": "7498789731",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2006",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pravin Tekale",
    "parentPhone": "9755852456",
    "address": "53, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.79,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU164",
    "prn": "2125UMLM2009",
    "name": "Wable Kartik Arvind",
    "email": "kartik.wabale_25uml@sanjivani.edu.in",
    "phone": "9373237589",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2009",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Kartik Arvind",
    "parentPhone": "9729401872",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.94,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU165",
    "prn": "2125UMLM2011",
    "name": "Shreyash Prashant Satalkar",
    "email": "shreyash.satalkar_25uml@sanjivani.edu.in",
    "phone": "7821885094",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2011",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Prashant Satalkar",
    "parentPhone": "9744724244",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.24,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU166",
    "prn": "2125UMLM2012",
    "name": "Anant Machhindra Pagar",
    "email": "anant.pagar_25uml@sanjivani.edu.in",
    "phone": "7219063251",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2012",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Machhindra Pagar",
    "parentPhone": "9727614323",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU167",
    "prn": "2125UMLM2016",
    "name": "Tushar Dattu Sonawane",
    "email": "tushar.sonawane_25uml@sanjivani.edu.in",
    "phone": "9359363431",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2016",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattu Sonawane",
    "parentPhone": "9784885032",
    "address": "43, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.88,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU168",
    "prn": "2125UMLM2023",
    "name": "Mayur Nandkumar Bhosale",
    "email": "mayur.bhosale_25uml@sanjivani.edu.in",
    "phone": "9699465445",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2023",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nandkumar Bhosale",
    "parentPhone": "9740254951",
    "address": "47, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU169",
    "prn": "2125UMLM2024",
    "name": "Chaudhari Sanket Yogesh",
    "email": "sanket.chaudhari_25uml@sanjivani.edu.in",
    "phone": "9156766083",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2024",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanket Yogesh",
    "parentPhone": "9766878704",
    "address": "69, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.52,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU170",
    "prn": "2125UMLM2025",
    "name": "Aditya Dnyaneshwar Wale",
    "email": "aditya.wale_25uml@sanjivani.edu.in",
    "phone": "7028273049",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2025",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Wale",
    "parentPhone": "9758891599",
    "address": "91, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.03,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU171",
    "prn": "2125UMLM2026",
    "name": "Rahane Sarthak Sushil",
    "email": "sarthak.rahane_25uml@sanjivani.edu.in",
    "phone": "8446965764",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2026",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sarthak Sushil",
    "parentPhone": "9750047906",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.25,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU172",
    "prn": "2125UMLM2027",
    "name": "Kabra Aayush Kedarnath",
    "email": "aayush.kabra_25uml@sanjivani.edu.in",
    "phone": "7350912381",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2027",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aayush Kedarnath",
    "parentPhone": "9723841148",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.39,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU173",
    "prn": "2125UMLM2029",
    "name": "Durgesh Shyamsing Pardeshi",
    "email": "durgesh.pardeshi_25uml@sanjivani.edu.in",
    "phone": "7219849175",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2029",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shyamsing Pardeshi",
    "parentPhone": "9760305165",
    "address": "82, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.55,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU174",
    "prn": "2125UMLM2032",
    "name": "Omkar Dattatray Wakchaure",
    "email": "omkar.wakchaure_25uml@sanjivani.edu.in",
    "phone": "9284050615",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2032",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatray Wakchaure",
    "parentPhone": "9772153278",
    "address": "29, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.95,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU175",
    "prn": "2125UMLM2035",
    "name": "Shaikh Rehan Bansi",
    "email": "rehan.shaikh_25nml@sanjivani.edu.in",
    "phone": "80109 26686",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2035",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rehan Bansi",
    "parentPhone": "9773246951",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.89,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU176",
    "prn": "2125UMLM2036",
    "name": "Nale Rohan Sambhaji",
    "email": "rohan.nale_25uml@sanjivani.edu.in",
    "phone": "9529060651",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2036",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rohan Sambhaji",
    "parentPhone": "9739613154",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU177",
    "prn": "2125UMLM2040",
    "name": "Samarth Sanjay Nagare",
    "email": "sanjay.samarth_25uml@sanjivani.edu.in",
    "phone": "9309582515",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2040",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Nagare",
    "parentPhone": "9789083640",
    "address": "88, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.83,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU178",
    "prn": "2125UMLM2041",
    "name": "Pawar Aditya Bharat",
    "email": "aditya.pawar_25uml@sanjivani.edu.in",
    "phone": "9370045222",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2041",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aditya Bharat",
    "parentPhone": "9796135475",
    "address": "82, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.04,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU179",
    "prn": "2125UMLM2043",
    "name": "Samarth Dattatray Sonawane",
    "email": "samarth.sonawane_25uml@sanjivani.edu.in",
    "phone": "7666340766",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2043",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatray Sonawane",
    "parentPhone": "9740399287",
    "address": "17, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.76,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU180",
    "prn": "2125UMLM2044",
    "name": "Yash Sopan Sonawane",
    "email": "yash.sonawane_25sanjivani.edu.in",
    "phone": "9075331485",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2044",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sopan Sonawane",
    "parentPhone": "9787865924",
    "address": "31, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU181",
    "prn": "2125UMLM2046",
    "name": "Swastik Sopan Shelke",
    "email": "swatik.shelke_25uml@sanjivani.edu.in",
    "phone": "8530244212",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2046",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sopan Shelke",
    "parentPhone": "9717471381",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.07,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU182",
    "prn": "2125UMLM2049",
    "name": "Rohit Appasaheb Gaikwad",
    "email": "rohit.gaikwad_25uml@gmail.com",
    "phone": "8010805456",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2049",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Appasaheb Gaikwad",
    "parentPhone": "9776292446",
    "address": "65, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.03,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU183",
    "prn": "2125UMLM2050",
    "name": "Aryan Rajendra Zinjurde",
    "email": "aryan.zinjurde_25uml@sanjivani.edu.in",
    "phone": "9359281700",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2050",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rajendra Zinjurde",
    "parentPhone": "9765505931",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.69,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU184",
    "prn": "2125UMLM2051",
    "name": "Ruturaj Kiran Pande",
    "email": "ruturaj.pande_25uml@sanjivani.edu.in",
    "phone": "9370743550",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2051",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Kiran Pande",
    "parentPhone": "9756138997",
    "address": "28, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.1,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU185",
    "prn": "2125UMLM2052",
    "name": "Kartik Nanasaheb Shinde",
    "email": "kartik.shinde_25uml@sanjivani.edu.in",
    "phone": "9637920406",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2052",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nanasaheb Shinde",
    "parentPhone": "9785352461",
    "address": "92, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.77,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU186",
    "prn": "2125UMLM2053",
    "name": "Vishvesh Pandharinath Arote",
    "email": "vishvesh.arote_25uml@sanjivani.edu.in",
    "phone": "9325424590",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2053",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pandharinath Arote",
    "parentPhone": "9775810613",
    "address": "84, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.34,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU187",
    "prn": "2125UMLM2054",
    "name": "Om Shrikrushna Bhokare",
    "email": "om.bhokare_25uml@sanjivani.edu.in",
    "phone": "9307412236",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2054",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shrikrushna Bhokare",
    "parentPhone": "9756005457",
    "address": "61, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.28,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU188",
    "prn": "2125UMLM2056",
    "name": "Tushar Ajinath Dighe",
    "email": "tushar.dighe_25uml@sanjivani.edu.in",
    "phone": "7499161727",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2056",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ajinath Dighe",
    "parentPhone": "9755486501",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.59,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU189",
    "prn": "2125UMLM2058",
    "name": "Sarthak Ganesh Dhanwate",
    "email": "sarthak.dhanwate_25uml@sanjivani.edu.in",
    "phone": "9359695162",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2058",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ganesh Dhanwate",
    "parentPhone": "9796767885",
    "address": "26, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.46,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU190",
    "prn": "2125UMLM2060",
    "name": "Saish Dinesh Inamke",
    "email": "saish.inamke_25uml@sanjivani.edu.in",
    "phone": "7499190802",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2060",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dinesh Inamke",
    "parentPhone": "9740060647",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU191",
    "prn": "2125UMLM2061",
    "name": "Sarthak Shitalkumar Tiwari",
    "email": "sarthak.tiwari_25uml@sanjivani.edu.in",
    "phone": "7020789596",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2061",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shitalkumar Tiwari",
    "parentPhone": "9710836294",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.86,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU192",
    "prn": "2125UMLM2062",
    "name": "Avinash Chandrakant Thombare",
    "email": "avinash.thombare_25uml@sanjivani.edu.in",
    "phone": "9527918259",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2062",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Chandrakant Thombare",
    "parentPhone": "9737107923",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.68,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU193",
    "prn": "2125UMLM2063",
    "name": "Anurag Appasaheb Ugale",
    "email": "anurag.ugale_25uml@sanjivani.edu.in",
    "phone": "8767501902",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2063",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Appasaheb Ugale",
    "parentPhone": "9722075712",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU194",
    "prn": "2125UMLM2064",
    "name": "Sainath Dattatray Deokar",
    "email": "sainath.deokar_25uml@sanjivani.edu.in",
    "phone": "9730193751",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2064",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatray Deokar",
    "parentPhone": "9750085466",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.6,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU195",
    "prn": "2125UMLM2066",
    "name": "Om Anil Gadekar",
    "email": "om.gadekar_25uml@sanjivani.edu.in",
    "phone": "8799850112",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2066",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Anil Gadekar",
    "parentPhone": "9747653051",
    "address": "15, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.28,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU196",
    "prn": "2125UMLM2072",
    "name": "Tupe Rohit Sandeep",
    "email": "rohit.tupe_25uml@sanjivani.edu.in",
    "phone": "9765969614",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2072",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rohit Sandeep",
    "parentPhone": "9715721217",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.73,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU197",
    "prn": "2125UMLM2075",
    "name": "Chetan Dnyaneshwar Barhate",
    "email": "chetan.barhate_25uml@sanjivani.edu.in",
    "phone": "9699608707",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2075",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Barhate",
    "parentPhone": "9785678741",
    "address": "82, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.28,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU198",
    "prn": "2125UMLM2080",
    "name": "Deokar Yash Gorakh",
    "email": "yash.deokar_25uml@sanjivani.edu.in",
    "phone": "7058768705",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2080",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Yash Gorakh",
    "parentPhone": "9718160564",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU199",
    "prn": "2125UMLM2081",
    "name": "Pawan Vilas Sangale",
    "email": "pawan.sangale_25uml@sanjivani.edu.in",
    "phone": "8767040165",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2081",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vilas Sangale",
    "parentPhone": "9751983790",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU200",
    "prn": "2125UMLM2082",
    "name": "Manish Vinod Patil",
    "email": "manish.patil_25uml@sanjivani.edu.in",
    "phone": "8329790084",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2082",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vinod Patil",
    "parentPhone": "9723086277",
    "address": "99, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU201",
    "prn": "2125UMLM2085",
    "name": "Sairaj Ashok Tupe",
    "email": "sairaj.tupe_25uml@sanjivani.edu.in",
    "phone": "8421219712",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2085",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ashok Tupe",
    "parentPhone": "9749217646",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.09,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU202",
    "prn": "2125UMLM2088",
    "name": "Meherkhamb Ashish Rajendra",
    "email": "ashish.meherkhamb_25uml@sanjivani.edu.in",
    "phone": "9730863426",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2088",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ashish Rajendra",
    "parentPhone": "9751354124",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU203",
    "prn": "2125UMLM2089",
    "name": "Meherkhamb Bhushan Balasaheb",
    "email": "bhushan.meherkhamb_25uml@sanjivani.edu.in",
    "phone": "9175339524",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2089",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bhushan Balasaheb",
    "parentPhone": "9742688384",
    "address": "81, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU204",
    "prn": "2125UMLM2090",
    "name": "Abhijit Avinash Kamble",
    "email": "abhijit.kamble_25uml@sanjivani.edu.in",
    "phone": "7248132810",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2090",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Avinash Kamble",
    "parentPhone": "9793043471",
    "address": "99, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.47,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU205",
    "prn": "2125UMLM2091",
    "name": "Ali Khalil Shaikh",
    "email": "anil.shaikh_25uml@sanjivani.edu.in",
    "phone": "8788981089",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2091",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Khalil Shaikh",
    "parentPhone": "9715319395",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.76,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU206",
    "prn": "2125UMLM2092",
    "name": "Shivprasad Dattatray Chatte",
    "email": "shivprasad.chatte_25uml@sanjivanl.edu.in",
    "phone": "7385691123",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2092",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatray Chatte",
    "parentPhone": "9791961516",
    "address": "88, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.61,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU207",
    "prn": "2125UMLM2093",
    "name": "Sarthak Ravindra Gaikwad",
    "email": "sarthak.gaikwad_25uml@sanjivani.edu.in",
    "phone": "9356122752",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2093",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Gaikwad",
    "parentPhone": "9750102227",
    "address": "52, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU208",
    "prn": "2125UMLM2094",
    "name": "Shubham Babasaheb Ghaytadkar",
    "email": "shubham.ghaytadkar_25uml1@sanjivani.edu.in",
    "phone": "9822960989",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2094",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Babasaheb Ghaytadkar",
    "parentPhone": "9735881543",
    "address": "10, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.16,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU209",
    "prn": "2125UMLM2097",
    "name": "Shubham Balu Karad",
    "email": "shubham.karad_25uml@sanjivani.edu.in",
    "phone": "7448123256",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2097",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Balu Karad",
    "parentPhone": "9722562489",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.73,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU210",
    "prn": "2125UMLM2098",
    "name": "Balkrushna Sunil Tanpure",
    "email": "balkrushna.tanpure_25uml1@sanjivani.edu.in",
    "phone": "9096624859",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2098",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sunil Tanpure",
    "parentPhone": "9710701392",
    "address": "25, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.05,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU211",
    "prn": "2125UMLM2099",
    "name": "Sudhanshu Sunil Sonawane",
    "email": "sudhanshu.sonawane_25uml@sanjivani.edu.in",
    "phone": "8669773510",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2099",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sunil Sonawane",
    "parentPhone": "9786247393",
    "address": "40, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.71,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU212",
    "prn": "2125UMLM2100",
    "name": "Akshay Bhausaheb Adhav",
    "email": "akshay.adhav_25uml@sanjivani.edu.in",
    "phone": "9322182287",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2100",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bhausaheb Adhav",
    "parentPhone": "9713668612",
    "address": "66, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.2,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU213",
    "prn": "2125UMLM2101",
    "name": "Yash Ashok Bhonde",
    "email": "yash.bhonde_25uml@sanjivani.edu.in",
    "phone": "9119433925",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2101",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ashok Bhonde",
    "parentPhone": "9758940903",
    "address": "73, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU214",
    "prn": "2125UMLM2104",
    "name": "Deokar Saiprasad Umakant",
    "email": "saiprasad.deokar_25uml@sanjivani.edu.in",
    "phone": "7517321585",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2104",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Saiprasad Umakant",
    "parentPhone": "9790571135",
    "address": "22, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.92,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU215",
    "prn": "2125UMLM2106",
    "name": "Uday Ravindra Chavan",
    "email": "uday.chavan_25uml@sanjivani.edu.in",
    "phone": "9322277062",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2106",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Chavan",
    "parentPhone": "9756805355",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.1,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU216",
    "prn": "2125UMLM2107",
    "name": "Harsh Anant Udawant",
    "email": "harsh.udawant_25uml@sanjivani.edu.in",
    "phone": "8625967321",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2107",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Anant Udawant",
    "parentPhone": "9741014811",
    "address": "50, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.91,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU217",
    "prn": "2125UMLM2108",
    "name": "Saad Sikandar Pathan",
    "email": "saad.pathan_25uml@sanjivani.edu.in",
    "phone": "9511567274",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2108",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sikandar Pathan",
    "parentPhone": "9738011726",
    "address": "41, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.01,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU218",
    "prn": "2125UMLM2114",
    "name": "Gosavi Prasanna Dattu",
    "email": "prasanna.gosavi_25uml@sanjivani.edu.in",
    "phone": "9021148258",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2114",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Prasanna Dattu",
    "parentPhone": "9771213569",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.81,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU219",
    "prn": "2125UMLM2003",
    "name": "Tejas Vikram Gadhe",
    "email": "tejas.gadhe_25uml@sanjivani.edu.in",
    "phone": "8010784409",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2003",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vikram Gadhe",
    "parentPhone": "9762030873",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.8,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU220",
    "prn": "2125UMLM2019",
    "name": "Vishal Navnath Fulari",
    "email": "navnath.vishal_25uml@sanjivani.edu.in",
    "phone": "7517804052",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2019",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Navnath Fulari",
    "parentPhone": "9732746948",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.81,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU221",
    "prn": "2125UMLM2022",
    "name": "Sumit Vilas Wagh",
    "email": "sumit.wagh_25uml@sanjivani.edu.in",
    "phone": "7666598871",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2022",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vilas Wagh",
    "parentPhone": "9779745062",
    "address": "69, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.05,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU222",
    "prn": "2125UMLM2110",
    "name": "Jay Somnath Jadhav",
    "email": "jay.jadhav_25uml@sanjivani.edu.in",
    "phone": "8482912844",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2110",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Somnath Jadhav",
    "parentPhone": "9710101087",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.39,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU223",
    "prn": "2125UMLM2059",
    "name": "Gaurav Bahusaheb Kadam",
    "email": "bahusaheb.gaurav_25uml@sanjivani.edu.ibn",
    "phone": "9356375543",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2059",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bahusaheb Kadam",
    "parentPhone": "9792861104",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.21,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU224",
    "prn": "2125UMLM2115",
    "name": "Akash Babasaheb More",
    "email": "akash.more_25uml@sanjivani.edu.in",
    "phone": "9021401056",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2115",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Babasaheb More",
    "parentPhone": "9716941670",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.22,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU225",
    "prn": "2125UMLM2103",
    "name": "Prasad Gorakshanath Pawar",
    "email": "prasad.pawar_25uml@sanjivani.edu.in",
    "phone": "7972193205",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2103",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Gorakshanath Pawar",
    "parentPhone": "9722554577",
    "address": "88, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.68,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU226",
    "prn": "2125UMLM2030",
    "name": "Sarode Shubham Changdev",
    "email": "shubham.sarode_25uml@sanjivani.edu.in",
    "phone": "8080984248",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2030",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shubham Changdev",
    "parentPhone": "9792664932",
    "address": "12, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU227",
    "prn": "2125UMLM2028",
    "name": "Makhana Om Vishal",
    "email": "om.makhana_25uml@sanjivani.edu.in",
    "phone": "8421001780",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2028",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Om Vishal",
    "parentPhone": "9724827873",
    "address": "46, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU228",
    "prn": "2125UMLM2033",
    "name": "Aditya Sandip Nikam",
    "email": "aditya.nikam_25sanjivani.edu.in",
    "phone": "9356319968",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2033",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sandip Nikam",
    "parentPhone": "9734240590",
    "address": "17, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.01,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU229",
    "prn": "2125UMLM2034",
    "name": "Pratik Sarangdhar Satre",
    "email": "pratik.satre_25uml@sanjivani.edu.in",
    "phone": "8767313591",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2034",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sarangdhar Satre",
    "parentPhone": "9714891073",
    "address": "28, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.91,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU230",
    "prn": "2125UMLM2055",
    "name": "Rudrapratap Balasaheb Chavan",
    "email": "rudrapratap.chavan_25uml@sanjivani.edu.in",
    "phone": "9527227845",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2055",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Balasaheb Chavan",
    "parentPhone": "9773220501",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.54,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU231",
    "prn": "2125UMLF2118",
    "name": "Shrushti Eknath Mohate",
    "email": "shrushti.mohate_25uml@sanjivani.edu.in",
    "phone": "9373162237",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2118",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Eknath Mohate",
    "parentPhone": "9723460924",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.18,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU232",
    "prn": "2125UMLM2083",
    "name": "Gaurav Ganesh Sabale",
    "email": "gaurav.sabale_25uml@sanjivani.edu.in",
    "phone": "8010970985",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2083",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ganesh Sabale",
    "parentPhone": "9769203237",
    "address": "80, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU233",
    "prn": "2125UMLM2039",
    "name": "Krushna Shivnath Andhale",
    "email": "krushna.andhale_25uml@sanjivani.edu.in",
    "phone": "9028180571",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2039",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shivnath Andhale",
    "parentPhone": "9746772595",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.19,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU234",
    "prn": "2125UMLM2037",
    "name": "Ritesh Umesh Gaikwad",
    "email": "ritesh.gaikwad_25uml@sanjivani.edu.in",
    "phone": "7822077920",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2037",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Umesh Gaikwad",
    "parentPhone": "9782752188",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.54,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU235",
    "prn": "2125UMLM2119",
    "name": "Yuvraj Manik Patekar",
    "email": "yuvraj.patekar_25uml@sanjivani.edu.in",
    "phone": "721 979 1407",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2119",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Manik Patekar",
    "parentPhone": "9794166272",
    "address": "73, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU236",
    "prn": "2125UMLM2113",
    "name": "Barhate Sachin Yadav",
    "email": "sachin.barhate_25uml@sanjivani.edu.in",
    "phone": "9699260287",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2113",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sachin Yadav",
    "parentPhone": "9732477687",
    "address": "98, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU237",
    "prn": "2125UMLM2112",
    "name": "Khandekar Tushar Namdev",
    "email": "tushar.khandekar_25uml@sanjivani.edu.in",
    "phone": "7821023504",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2112",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Tushar Namdev",
    "parentPhone": "9794037416",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.24,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU238",
    "prn": "2125UMLF2007",
    "name": "Shraddha Santosh Shinde",
    "email": "shraddha.shinde_25uml@sanjivani.edu.in",
    "phone": "8999118051",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2007",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Santosh Shinde",
    "parentPhone": "9796962955",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.6,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU239",
    "prn": "2125UMLM2105",
    "name": "Parth Rajendra Ahirrao",
    "email": "parth.ahirrao_25uml@sanjivani.edu.in",
    "phone": "7020583473",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2105",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rajendra Ahirrao",
    "parentPhone": "9791796088",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU240",
    "prn": "2125UMLM2111",
    "name": "Sarthak Girish Sonekar",
    "email": "sarthak.sonekar_25uml@sanjivani.edu.in",
    "phone": "9373343443",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2111",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Girish Sonekar",
    "parentPhone": "9780192861",
    "address": "34, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.95,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU241",
    "prn": "2125UMLM2077",
    "name": "Sahil Satish Sandhan",
    "email": "sahil.sandhan_25umi@sanjivani.edu.in",
    "phone": "9370668181",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2077",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Satish Sandhan",
    "parentPhone": "9774804631",
    "address": "84, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.21,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU242",
    "prn": "2125UMLF2117",
    "name": "Bhumika Ravindra Jagzap",
    "email": "bhumika.jagzap_25uml@sanjivani.edu.in",
    "phone": "9209224828",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2117",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Jagzap",
    "parentPhone": "9780509759",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.19,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU243",
    "prn": "2125UMLF2120",
    "name": "Aishwarya Udaykumar Ostwal",
    "email": "aishwarya.ostwal_25uml@sanjivani.edu.in",
    "phone": "9112423426",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2120",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Udaykumar Ostwal",
    "parentPhone": "9748748898",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.93,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU244",
    "prn": "2125UMLF2073",
    "name": "Riya Pramod Jadhav",
    "email": "riya.jadhav_25uml@sanjivani.edu.in",
    "phone": "9699202979",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2073",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pramod Jadhav",
    "parentPhone": "9750272333",
    "address": "74, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.25,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU245",
    "prn": "2125UMLM2121",
    "name": "Swarupsinh Ratnakar Jawale",
    "email": "swarupsinh.jawale_25uml@sanjivani.edu.in",
    "phone": "9699256972",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2121",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ratnakar Jawale",
    "parentPhone": "9774397893",
    "address": "49, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.5,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU246",
    "prn": "2125UMLM2069",
    "name": "Akash Bhaulal Shinde",
    "email": "akash.shinde_25uml@sanjivani.edu.in",
    "phone": "7666067703",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2069",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bhaulal Shinde",
    "parentPhone": "9717155629",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU247",
    "prn": "2125UMLM2067",
    "name": "Ajit Devidas Nawale",
    "email": "ajit.nawale_25uml@sanjivani.edu.in",
    "phone": "7038703722",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2067",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Devidas Nawale",
    "parentPhone": "9790445480",
    "address": "85, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.32,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU248",
    "prn": "2125UMLM2109",
    "name": "Parth Dnyaneshwar Sidlambe",
    "email": "parth.sidlambe_25uml@sanjivani.edu.in",
    "phone": "9307241415",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2109",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dnyaneshwar Sidlambe",
    "parentPhone": "9713949821",
    "address": "67, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.77,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU249",
    "prn": "2125UMLM2095",
    "name": "Yogesh Namdev Maske",
    "email": "yogesh.maske_25uml@sanjivani.edu.in",
    "phone": "8600903346",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2095",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Namdev Maske",
    "parentPhone": "9785228209",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.25,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU250",
    "prn": "2125UMLF2068",
    "name": "Rajashri Bharat Gaikwad",
    "email": "rajashri.gaikwad_25uml@sanjivani.edu.in",
    "phone": "9834035826",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2068",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Bharat Gaikwad",
    "parentPhone": "9738385123",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.78,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU251",
    "prn": "2125UMLF2102",
    "name": "Sanskruti Nilkanth Sumbre",
    "email": "sanskruti.sumbre_25uml@sanjivani.edu.in",
    "phone": "9325190097",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2102",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nilkanth Sumbre",
    "parentPhone": "9722006890",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.21,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU252",
    "prn": "2125UMLM2123",
    "name": "Nikhil Khanderao Wagh",
    "email": "nikhil.wagh_25uml@sanjivani.edu.in",
    "phone": "9923707734",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2123",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Khanderao Wagh",
    "parentPhone": "9767482089",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU253",
    "prn": "2124UMLF1001",
    "name": "Paithankar Samruddhi Santosh",
    "email": "samruddhi.paithankar24@sanjivani.org.in",
    "phone": "9270172026",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1001",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Samruddhi Santosh",
    "parentPhone": "9790160355",
    "address": "88, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.21,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU254",
    "prn": "2124UMLM1002",
    "name": "Bhoir Prathmesh Dinesh",
    "email": "prathmesh.bhoir24@sanjivani.edu.in",
    "phone": "9763082957",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1002",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prathmesh Dinesh",
    "parentPhone": "9722132896",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU255",
    "prn": "2124UMLM1003",
    "name": "Raneja Yash Santoshkumar",
    "email": "yash.raneja24@sanjivani.edu.in",
    "phone": "8888998183",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1003",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yash Santoshkumar",
    "parentPhone": "9787882885",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU256",
    "prn": "2124UMLF1004",
    "name": "Vaishnavi Chandrabhan Suryavanshi",
    "email": "chandrabhan.vaishnavi24@sanjivani.edu.in",
    "phone": "9011542601",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1004",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Chandrabhan Suryavanshi",
    "parentPhone": "9714734483",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.35,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU257",
    "prn": "2124UMLM1005",
    "name": "Shlok Atul Kotade",
    "email": "atul.shlok24@sanjivani.edu.in",
    "phone": "9404804460",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1005",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Atul Kotade",
    "parentPhone": "9730336557",
    "address": "90, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU258",
    "prn": "2124UMLM1006",
    "name": "Parth Devendra Kukkar",
    "email": "devendra.parth24@sanjivani.edu.in",
    "phone": "9529167899",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1006",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Devendra Kukkar",
    "parentPhone": "9792221082",
    "address": "50, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU259",
    "prn": "2124UMLM1007",
    "name": "Gorhe Dewang Nitin",
    "email": "dewang.gorhe24@sanjivani.edu.in",
    "phone": "8623907501",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1007",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dewang Nitin",
    "parentPhone": "9795103427",
    "address": "91, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU260",
    "prn": "2124UMLM1008",
    "name": "Siddhiraj Saptaranjan Kadam",
    "email": "saptarantan.siddhiraj24@sanjivani.edu.in",
    "phone": "8010756542",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1008",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Saptaranjan Kadam",
    "parentPhone": "9734146891",
    "address": "77, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU261",
    "prn": "2124UMLM1009",
    "name": "Darandale Pruthaviraj Kishor",
    "email": "pruthaviraj.darandale24@sanjivani.edu.in",
    "phone": "9356101521",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1009",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pruthaviraj Kishor",
    "parentPhone": "9711024664",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.18,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU262",
    "prn": "2124UMLF1010",
    "name": "Shradha Sunil Khurud",
    "email": "sunil.shradha24@sanjivani.edu.in",
    "phone": "9422127262",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1010",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sunil Khurud",
    "parentPhone": "9719153347",
    "address": "22, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.92,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU263",
    "prn": "2124UMLM1011",
    "name": "Om Sunil Kapile",
    "email": "om.kapile24@sanjivani.edu.in",
    "phone": "9158557553",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1011",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sunil Kapile",
    "parentPhone": "9788951277",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.37,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU264",
    "prn": "2124UMLM1012",
    "name": "Mokate Nilesh Navnath",
    "email": "nilesh.mokate24@sanjivani.edu.in",
    "phone": "9637283458",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1012",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nilesh Navnath",
    "parentPhone": "9798273138",
    "address": "46, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.47,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU265",
    "prn": "2124UMLM1013",
    "name": "Wani Rohit Vinod",
    "email": "rohit.wani24@sanjivani.edu.in",
    "phone": "9822626877",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1013",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rohit Vinod",
    "parentPhone": "9712449326",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.53,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU266",
    "prn": "2124UMLM1014",
    "name": "Bhosale Pruthvi Subbash",
    "email": "pruthvi.bhosale24@sanjivani.edu.in",
    "phone": "9325246035",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1014",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pruthvi Subbash",
    "parentPhone": "9767774707",
    "address": "70, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.85,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU267",
    "prn": "2124UMLM1015",
    "name": "Malve Hitesh Sanjay",
    "email": "hitesh.malve24@sanjivani.edu.in",
    "phone": "8999455459",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1015",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Hitesh Sanjay",
    "parentPhone": "9735061365",
    "address": "74, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.85,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU268",
    "prn": "2124UMLM1016",
    "name": "Kadam Atish Abhijit",
    "email": "atish.kadam24@sanjivani.edu.in",
    "phone": "9699453770",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1016",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Atish Abhijit",
    "parentPhone": "9783062357",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.32,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU269",
    "prn": "2124UMLF1017",
    "name": "Wani Sakshi Ramdas",
    "email": "sakshi.wani24@sanjivani.edu.in",
    "phone": "9922721056",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1017",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sakshi Ramdas",
    "parentPhone": "9785811420",
    "address": "46, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU270",
    "prn": "2124UMLM1018",
    "name": "Jorvekar Gajanan Chandrabhan",
    "email": "gajanan.jorvekar24@sanjivani.edu.in",
    "phone": "9637660883",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1018",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Gajanan Chandrabhan",
    "parentPhone": "9754144484",
    "address": "54, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU271",
    "prn": "2124UMLM1019",
    "name": "Sherkar Ajeet Mahesh",
    "email": "ajeet.sherkar24@sanjivani.edu.in",
    "phone": "9767009381",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1019",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ajeet Mahesh",
    "parentPhone": "9766378687",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.61,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU272",
    "prn": "2124UMLM1020",
    "name": "Junnarkar Pranav Prashant",
    "email": "pranav.junnarkar24@sanjivani.edu.in",
    "phone": "8087373232",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1020",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pranav Prashant",
    "parentPhone": "9773426441",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.73,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU273",
    "prn": "2124UMLF1021",
    "name": "Repale Shraddha Prabhakar",
    "email": "shraddha.repale24@sanjivani.edu.in",
    "phone": "9422238176",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1021",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shraddha Prabhakar",
    "parentPhone": "9741527064",
    "address": "57, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU274",
    "prn": "2124UMLM1022",
    "name": "Shubham Nana Nagare",
    "email": "shubham.nagare24@sanjivani.edu.in",
    "phone": "8767176517",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1022",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nana Nagare",
    "parentPhone": "9731135504",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.01,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU275",
    "prn": "2124UMLM1023",
    "name": "Chavan Gaurav Dinkar",
    "email": "gaurav.chavan24@sanjivani.edu.in",
    "phone": "9850867069",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1023",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Gaurav Dinkar",
    "parentPhone": "9778573305",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.65,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU276",
    "prn": "2124UMLM1024",
    "name": "Marathe Soham Anup",
    "email": "soham.marathe24@sanjivani.edu.in",
    "phone": "7385594844",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1024",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Soham Anup",
    "parentPhone": "9730732770",
    "address": "65, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU277",
    "prn": "2124UMLM1025",
    "name": "Chattar Sarthak Ramrao",
    "email": "sarthak.chattar24@sanjivani.edu.in",
    "phone": "9325215453",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1025",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sarthak Ramrao",
    "parentPhone": "9782629662",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.83,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU278",
    "prn": "2124UMLM1026",
    "name": "Dhruv Shrikant Soni",
    "email": "shrikant.dhruv24@sanjivani.edu.in",
    "phone": "9028271361",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1026",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shrikant Soni",
    "parentPhone": "9753975025",
    "address": "27, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.09,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU279",
    "prn": "2124UMLM1027",
    "name": "Sairaj Chharurao Tanpure",
    "email": "chharurao.sairaj24@sanjivani.edu.in",
    "phone": "7744093436",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1027",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Chharurao Tanpure",
    "parentPhone": "9776712805",
    "address": "80, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.22,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU280",
    "prn": "2124UMLF1028",
    "name": "Kale Payal Haribhau",
    "email": "payal.kale24@sanjivani.edu.in",
    "phone": "9356399676",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1028",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Payal Haribhau",
    "parentPhone": "9746740266",
    "address": "89, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.46,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU281",
    "prn": "2124UMLM1029",
    "name": "Jamdhade Devendra Arun",
    "email": "devendra.jamdhade24@sanjivani.edu.in",
    "phone": "9373989037",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1029",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Devendra Arun",
    "parentPhone": "9769553275",
    "address": "93, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.1,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU282",
    "prn": "2124UMLM1030",
    "name": "Unde Mayuresh Mangesh",
    "email": "mayuresh.unde24@sanjivani.edu.in",
    "phone": "8010755717",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1030",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mayuresh Mangesh",
    "parentPhone": "9764325156",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU283",
    "prn": "2124UMLF1031",
    "name": "Krishna Vijay Avhad",
    "email": "krishna.avhad24@sanjivani.edu.in",
    "phone": "9356762751",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1031",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vijay Avhad",
    "parentPhone": "9757825553",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.82,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU284",
    "prn": "2124UMLM1032",
    "name": "Sanket Rajendra Kadam",
    "email": "rajendra.sanket24@sanjivani.edu.in",
    "phone": "9767121575",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1032",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajendra Kadam",
    "parentPhone": "9718582451",
    "address": "90, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.63,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU285",
    "prn": "2124UMLM1033",
    "name": "Kadam Saish Sujit",
    "email": "saish.kadam24@sanjivani.edu.in",
    "phone": "9119531818",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1033",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Saish Sujit",
    "parentPhone": "9764485609",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.38,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU286",
    "prn": "2124UMLM1034",
    "name": "Harshal Shamkumar Jadhav",
    "email": "shamkumar.harshal24@sanjivani.edu.in",
    "phone": "9309777379",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1034",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shamkumar Jadhav",
    "parentPhone": "9799723978",
    "address": "59, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.45,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU287",
    "prn": "2124UMLM1035",
    "name": "Jha Onkar Shailendra",
    "email": "onkar.jha24@sanjivani.edu.in",
    "phone": "8767852282",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1035",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Onkar Shailendra",
    "parentPhone": "9770235678",
    "address": "88, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU288",
    "prn": "2124UMLM1036",
    "name": "Polawar Soham Girish",
    "email": "soham.polawar24@sanjivani.edu.in",
    "phone": "8237996715",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1036",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Soham Girish",
    "parentPhone": "9728086230",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.81,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU289",
    "prn": "2124UMLM1037",
    "name": "Borawake Tushar Nilesh",
    "email": "tushar.borawake24@sanjivani.edu.in",
    "phone": "9373047518",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1037",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Tushar Nilesh",
    "parentPhone": "9779449975",
    "address": "77, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.12,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU290",
    "prn": "2124UMLM1038",
    "name": "Udawant Aditya Raju",
    "email": "aditya.udawant24@sanjivani.edu.in",
    "phone": "8767709436",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1038",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aditya Raju",
    "parentPhone": "9763707995",
    "address": "75, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU291",
    "prn": "2124UMLM1039",
    "name": "Bhand Sahil Chandrabhan",
    "email": "sahil.bhand24@sanjivani.edu.in",
    "phone": "9689046339",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1039",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sahil Chandrabhan",
    "parentPhone": "9799388344",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.88,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU292",
    "prn": "2124UMLF1040",
    "name": "Shruti Mukul Khasne",
    "email": "shruti.khasne24@sanjivani.edu.in",
    "phone": "7020499978",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1040",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mukul Khasne",
    "parentPhone": "9792613769",
    "address": "59, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.88,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU293",
    "prn": "2124UMLF1041",
    "name": "Khasne Shreya Mukul",
    "email": "shreya.khasne24@sanjivani.edu.in",
    "phone": "9404759922",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1041",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shreya Mukul",
    "parentPhone": "9763449533",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.1,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU294",
    "prn": "2124UMLM1042",
    "name": "Kadu Soham Prabhakar",
    "email": "soham.kadu24@sanjivani.edu.in",
    "phone": "9021538647",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1042",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Soham Prabhakar",
    "parentPhone": "9735900045",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU295",
    "prn": "2124UMLF1043",
    "name": "Nikita Shankar Rote",
    "email": "nikita.rote24@sanjivani.edu.in",
    "phone": "9076027536",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1043",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shankar Rote",
    "parentPhone": "9740387278",
    "address": "31, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.23,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU296",
    "prn": "2124UMLM1044",
    "name": "Varale Mayur Suresh",
    "email": "mayur.varale24@sanjivani.edu.in",
    "phone": "9209126508",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1044",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mayur Suresh",
    "parentPhone": "9747284997",
    "address": "76, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.27,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU297",
    "prn": "2124UMLM1045",
    "name": "Jadhav Swaraj Santosh",
    "email": "swaraj.jadhav24@sanjivani.edu.in",
    "phone": "7020037109",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1045",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Swaraj Santosh",
    "parentPhone": "9781724997",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.36,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU298",
    "prn": "2124UMLM1046",
    "name": "Swayam Abhijit Jeughale",
    "email": "swayam.jeughale24@sanjivani.edu.in",
    "phone": "7447312563",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1046",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Abhijit Jeughale",
    "parentPhone": "9755251265",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU299",
    "prn": "2124UMLM1047",
    "name": "Swapnil Shivaji Kankrale",
    "email": "swapnil.kankrale24@sanjivani.edu.in",
    "phone": "8390299162",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1047",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shivaji Kankrale",
    "parentPhone": "9782578371",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.88,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU300",
    "prn": "2124UMLM1048",
    "name": "Bankar Sangram Sanjay",
    "email": "sangram.bankar24@sanjivani.edu.in",
    "phone": "7020279929",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1048",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sangram Sanjay",
    "parentPhone": "9786767921",
    "address": "91, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.65,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU301",
    "prn": "2124UMLM1049",
    "name": "Jagzap Sanket Subhash",
    "email": "sanket.jagzap24@sanjivani.edu.in",
    "phone": "8237280805",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1049",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanket Subhash",
    "parentPhone": "9786148473",
    "address": "93, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU302",
    "prn": "2124UMLM1050",
    "name": "Gade Aniket Ashok",
    "email": "aniket.gade24@sanjivani.edu.in",
    "phone": "8856810276",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1050",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aniket Ashok",
    "parentPhone": "9744546384",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.01,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU303",
    "prn": "2124UMLM1051",
    "name": "Saish Sanjay Nehe",
    "email": "saish.nehe24@sanjivani.edu.in",
    "phone": "7820933346",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1051",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanjay Nehe",
    "parentPhone": "9748039721",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU304",
    "prn": "2124UMLF1052",
    "name": "Gaikwad Rajashri Tukaram",
    "email": "rajashri.gaikwad24@sanjivani.edu.in",
    "phone": "9970234643",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1052",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rajashri Tukaram",
    "parentPhone": "9740161649",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.36,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU305",
    "prn": "2124UMLM1053",
    "name": "Dere Harshvardhan Dipak",
    "email": "harshvardhan.dere24@sanjivani.edu.in",
    "phone": "9309240636",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1053",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Harshvardhan Dipak",
    "parentPhone": "9751542519",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.37,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU306",
    "prn": "2124UMLF1054",
    "name": "Jape Rutvika Suresh",
    "email": "rutvika.jape24@sanjivani.edu.in",
    "phone": "7620597488",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1054",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rutvika Suresh",
    "parentPhone": "9748695531",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.02,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU307",
    "prn": "2124UMLM1055",
    "name": "Chechare Om Kishor",
    "email": "om.chechare24@sanjivani.edu.in",
    "phone": "9022761819",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1055",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Om Kishor",
    "parentPhone": "9780727567",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.76,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU308",
    "prn": "2124UMLM1056",
    "name": "Unde Om Bhausaheb",
    "email": "om.unde24@sanjivani.edu.in",
    "phone": "9699600243",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1056",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Om Bhausaheb",
    "parentPhone": "9717857697",
    "address": "70, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.66,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU309",
    "prn": "2124UMLM1057",
    "name": "Bhagat Shubham Ashok",
    "email": "shubham.bhagat24@sanjivani.edu.in",
    "phone": "8261093637",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1057",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shubham Ashok",
    "parentPhone": "9774143385",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.72,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU310",
    "prn": "2124UMLM1058",
    "name": "Surwase Aayush Sanjay",
    "email": "aayush.surwase24@sanjivani.edu.in",
    "phone": "7387512557",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1058",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aayush Sanjay",
    "parentPhone": "9737391027",
    "address": "62, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.81,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU311",
    "prn": "2124UMLF1059",
    "name": "Kakade Sanika Umesh",
    "email": "sanika.kakade24@sanjivani.edu.in",
    "phone": "8421488694",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1059",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanika Umesh",
    "parentPhone": "9754242130",
    "address": "76, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.19,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU312",
    "prn": "2124UMLF1060",
    "name": "Rahane Rinkal Badshaha",
    "email": "rinkal.rahane24@sanjivani.edu.in",
    "phone": "8856914258",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1060",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rinkal Badshaha",
    "parentPhone": "9755175051",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU313",
    "prn": "2124UMLM1061",
    "name": "Gaurav Somnath Naik",
    "email": "gaurav.naik24@sanjivani.edu.in",
    "phone": "7517574393",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1061",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Somnath Naik",
    "parentPhone": "9779684504",
    "address": "21, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.25,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU314",
    "prn": "2124UMLM1062",
    "name": "Khule Jay Pavan",
    "email": "jay.khule24@sanjivani.edu.in",
    "phone": "9881301983",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1062",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Jay Pavan",
    "parentPhone": "9750424634",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.27,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU315",
    "prn": "2124UMLM1063",
    "name": "Deshmukh Harshal Anil",
    "email": "harshal.deshmukh24@sanjivani.edu.in",
    "phone": "7499252483",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1063",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Harshal Anil",
    "parentPhone": "9784892590",
    "address": "77, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU316",
    "prn": "2124UMLM1064",
    "name": "Siddharth Vilas Deshmukh",
    "email": "siddharth.deshmukh24@sanjivani.edu.in",
    "phone": "7720887035",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1064",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vilas Deshmukh",
    "parentPhone": "9782406791",
    "address": "49, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.87,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU317",
    "prn": "2124UMLM1065",
    "name": "Gangurde Aditya Santosh",
    "email": "aditya.gangurde24@sanjivani.edu.in",
    "phone": "9373655664",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1065",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aditya Santosh",
    "parentPhone": "9729993199",
    "address": "54, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.85,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU318",
    "prn": "2124UMLM1066",
    "name": "Kotkar Swagat Dnyaneshwar",
    "email": "swagat.kotkar24@sanjivani.edu.in",
    "phone": "7499144616",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1066",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Swagat Dnyaneshwar",
    "parentPhone": "9745906063",
    "address": "80, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.58,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU319",
    "prn": "2124UMLM1067",
    "name": "Raut Abhishek Balasaheb",
    "email": "abhishek.raut24@sanjivani.edu.in",
    "phone": "9511661699",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1067",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Abhishek Balasaheb",
    "parentPhone": "9712315116",
    "address": "18, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.45,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU320",
    "prn": "2124UMLM1068",
    "name": "Cholke Dhananjay Sandip",
    "email": "dhananjay.cholke24@sanjivani.edu.in",
    "phone": "7219559382",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1068",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dhananjay Sandip",
    "parentPhone": "9770892503",
    "address": "64, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.11,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU321",
    "prn": "2124UMLM1069",
    "name": "Ghogare Vedant Ranjit",
    "email": "vedant.ghogare24@sanjivani.edu.in",
    "phone": "7387008504",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1069",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vedant Ranjit",
    "parentPhone": "9792519285",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.4,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU322",
    "prn": "2124UMLF1070",
    "name": "Belhekar Prajakta Raju",
    "email": "prajakta.belhekar24@sanjivani.edu.in",
    "phone": "9284086657",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1070",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prajakta Raju",
    "parentPhone": "9773323324",
    "address": "12, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.35,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU323",
    "prn": "2124UMLM1071",
    "name": "Londhe Om Ambadas",
    "email": "om.londhe24@sanjivani.edu.in",
    "phone": "8767096174",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1071",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Om Ambadas",
    "parentPhone": "9738212414",
    "address": "49, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.76,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU324",
    "prn": "2124UMLF1072",
    "name": "Sadaphal Mohini Somnath",
    "email": "mohini.sadaphal24@sanjivani.edu.in",
    "phone": "9067341979",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1072",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Mohini Somnath",
    "parentPhone": "9739367132",
    "address": "24, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.15,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU325",
    "prn": "2124UMLM1073",
    "name": "Wagh Ompraksh Balasaheb",
    "email": "ompraksh.wagh24@sanjivani.edu.in",
    "phone": "9975287982",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1073",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Ompraksh Balasaheb",
    "parentPhone": "9787129858",
    "address": "89, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.23,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU326",
    "prn": "2124UMLM1074",
    "name": "Bhor Yashwant Jaywant",
    "email": "yashwant.bhor24@sanjivani.edu.in",
    "phone": "8624807220",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1074",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yashwant Jaywant",
    "parentPhone": "9797950629",
    "address": "78, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.74,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU327",
    "prn": "2124UMLM1075",
    "name": "Aher Prem Vikas",
    "email": "prem.aher24@sanjivani.edu.in",
    "phone": "8261899214",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1075",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prem Vikas",
    "parentPhone": "9737994872",
    "address": "28, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.81,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU328",
    "prn": "2124UMLM1077",
    "name": "Ude Sarthak Kalyan",
    "email": "sarthak.ude24@sanjivani.edu.in",
    "phone": "8329901682",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1077",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sarthak Kalyan",
    "parentPhone": "9733819998",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU329",
    "prn": "2124UMLM1078",
    "name": "Gunjal Krushna Anand",
    "email": "krushna.gunjal24@sanjivani.edu.in",
    "phone": "9822452974",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1078",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Krushna Anand",
    "parentPhone": "9791455969",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.4,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU330",
    "prn": "2124UMLM1079",
    "name": "Zaware Sarthak Rameshwar",
    "email": "sarthak.zaware24@sanjivani.edu.in",
    "phone": "9021079443",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1079",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sarthak Rameshwar",
    "parentPhone": "9768251392",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU331",
    "prn": "2124UMLM1080",
    "name": "Prashil Pramod Lohakane",
    "email": "prashil.lokhane24@sanjivani.edu.in",
    "phone": "7276248389",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1080",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pramod Lohakane",
    "parentPhone": "9796079935",
    "address": "27, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU332",
    "prn": "2124UMLM1081",
    "name": "Dange Pranav Sanjay",
    "email": "pranav.dange24@sanjivani.edu.in",
    "phone": "8600775504",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1081",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pranav Sanjay",
    "parentPhone": "9765479119",
    "address": "93, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.02,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU333",
    "prn": "2124UMLM1082",
    "name": "Bhand Yash Chandrakant",
    "email": "yash.bhand24@sanjivani.edu.in",
    "phone": "8262883668",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1082",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yash Chandrakant",
    "parentPhone": "9744745797",
    "address": "42, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.16,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU334",
    "prn": "2124UMLF1083",
    "name": "Netra Dnyandeo Waghode",
    "email": "netra.waghode24@sanjivani.edu.in",
    "phone": "7499595764",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1083",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Dnyandeo Waghode",
    "parentPhone": "9711233302",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU335",
    "prn": "2124UMLF1084",
    "name": "Kadam Shruti Dattatray",
    "email": "shruti.kadam24@sanjivani.edu.in",
    "phone": "9209034421",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1084",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shruti Dattatray",
    "parentPhone": "9786308997",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.6,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU336",
    "prn": "2124UMLM1085",
    "name": "Bhakare Aryan Dattatray",
    "email": "aryan.bhakare24@sanjivani.edu.in",
    "phone": "8999291003",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1085",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aryan Dattatray",
    "parentPhone": "9775144714",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU337",
    "prn": "2124UMLF1086",
    "name": "Avhale Vedika Trimbak",
    "email": "vedika.avhale24@sanjivani.edu.in",
    "phone": "9309876321",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1086",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vedika Trimbak",
    "parentPhone": "9740674110",
    "address": "52, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.34,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU338",
    "prn": "2124UMLM1087",
    "name": "Salunke Rohan Shainath",
    "email": "rohan.salunke24@sanjivani.edu.in",
    "phone": "8767923486",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1087",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rohan Shainath",
    "parentPhone": "9747862178",
    "address": "95, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.98,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU339",
    "prn": "2124UMLM1088",
    "name": "Chavan Prathamesh Badrinath",
    "email": "prathamesh.chavan24@sanjivani.edu.in",
    "phone": "8805007832",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1088",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Prathamesh Badrinath",
    "parentPhone": "9751106299",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.51,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU340",
    "prn": "2124UMLF1089",
    "name": "Wagh Radhika Sampat",
    "email": "radhika.wagh24@sanjivani.edu.in",
    "phone": "8237522095",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1089",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Radhika Sampat",
    "parentPhone": "9742638662",
    "address": "38, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.14,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU341",
    "prn": "2124UMLM1090",
    "name": "Akshat Pankaj Vishwakarma",
    "email": "akshat.vishwakarma24@sanjivani.edu.in",
    "phone": "7977818997",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1090",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pankaj Vishwakarma",
    "parentPhone": "9788559642",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.1,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU342",
    "prn": "2124UMLM1091",
    "name": "Yadav Abhishek Shrirang",
    "email": "abhishek.yadav24@sanjivani.edu.in",
    "phone": "8010270475",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1091",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Abhishek Shrirang",
    "parentPhone": "9720541560",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.23,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU343",
    "prn": "2124UMLM1092",
    "name": "Tarde Sanket Audumber",
    "email": "sanket.tarde24@sanjivani.edu.in",
    "phone": "9699050733",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1092",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sanket Audumber",
    "parentPhone": "9748392994",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.59,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU344",
    "prn": "2124UMLF1093",
    "name": "Ishwari Sandeep Belhekar",
    "email": "ishwari.belhekor24@sanjivani.edu.in",
    "phone": "7350515883",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1093",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sandeep Belhekar",
    "parentPhone": "9717887214",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.5,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU345",
    "prn": "2124UMLM1094",
    "name": "Waje Yash Pramod",
    "email": "yash.waje24@sanjivani.edu.in",
    "phone": "7744985478",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1094",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yash Pramod",
    "parentPhone": "9784282342",
    "address": "28, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU346",
    "prn": "2124UMLM1095",
    "name": "Kakade Suraj Vilas",
    "email": "suraj.kakade24@sanjivani.edu.in",
    "phone": "9699409601",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1095",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Suraj Vilas",
    "parentPhone": "9723064198",
    "address": "23, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU347",
    "prn": "2124UMLM1108",
    "name": "Jagtap Sairaj Jitendra",
    "email": "sairaj.jagtap24@sanjivani.edu.in",
    "phone": "9359195295",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1108",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sairaj Jitendra",
    "parentPhone": "9712422416",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU348",
    "prn": "2124UMLM1096",
    "name": "Jadhav Nikhil Babasaheb",
    "email": "nikhil.jadhav24@sanjivani.edu.in",
    "phone": "7666536623",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1096",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Nikhil Babasaheb",
    "parentPhone": "9762070551",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.58,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU349",
    "prn": "2124UMLM1097",
    "name": "Randhe Rushikesh Santosh",
    "email": "rushikesh.randhe24@sanjivani.edu.in",
    "phone": "8010366874",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1097",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Rushikesh Santosh",
    "parentPhone": "9714218163",
    "address": "29, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.02,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU350",
    "prn": "2124UMLM1098",
    "name": "Belhekar Aditya Bhaskar",
    "email": "aditya.belhekar24@sanjivani.edu.in",
    "phone": "7972025717",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1098",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aditya Bhaskar",
    "parentPhone": "9768770157",
    "address": "57, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.41,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU351",
    "prn": "2124UMLM1099",
    "name": "Gorde Aishwary Dnyandeo",
    "email": "aishwary.gorde24@sanjivani.edu.in",
    "phone": "9307293783",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1099",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aishwary Dnyandeo",
    "parentPhone": "9791097716",
    "address": "81, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.36,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU352",
    "prn": "2124UMLM1100",
    "name": "Gorde Om Sanjay",
    "email": "om.gorde24@sanjivani.edu.in",
    "phone": "8799922733",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1100",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Om Sanjay",
    "parentPhone": "9767173309",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.7,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU353",
    "prn": "2124UMLF1101",
    "name": "Karle Vaishnavi Bharat",
    "email": "vaishnavi.karle24@sanjivani.edu.in",
    "phone": "9209770576",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1101",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Vaishnavi Bharat",
    "parentPhone": "9736048224",
    "address": "19, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU354",
    "prn": "2124UMLM1102",
    "name": "Tarde Pranav Sainath",
    "email": "pranav.tarde24@sanjivani.edu.in",
    "phone": "9284554528",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1102",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pranav Sainath",
    "parentPhone": "9781578800",
    "address": "65, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.08,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU355",
    "prn": "2124UMLM1103",
    "name": "Kulat Shreyas Vijay",
    "email": "shreyash.kulat241@sanjivani.edu.in",
    "phone": "9011925342",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1103",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shreyas Vijay",
    "parentPhone": "9719233210",
    "address": "26, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.09,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU356",
    "prn": "2124UMLM1104",
    "name": "Ghadage Yash Babasaheb",
    "email": "ghadage.babasaheb24@sanjivani.edu.in",
    "phone": "9075862121",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1104",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Yash Babasaheb",
    "parentPhone": "9757437495",
    "address": "39, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.45,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU357",
    "prn": "2124UMLM1105",
    "name": "Chavan Pranav Nanasaheb",
    "email": "pranav.chavan24@sanjivani.edu.in",
    "phone": "9021530598",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1105",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Pranav Nanasaheb",
    "parentPhone": "9798554908",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU358",
    "prn": "2124UMLF1107",
    "name": "Gade Akshada Ravindra",
    "email": "akshada.gade24@sanjivani.edu.in",
    "phone": "7720005240",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1107",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Akshada Ravindra",
    "parentPhone": "9767959676",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.87,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU359",
    "prn": "2124UMLM1109",
    "name": "Varale Purvesh Rajendra",
    "email": "purvesh.varale24@sanjivani.edu.in",
    "phone": "8080385117",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1109",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Purvesh Rajendra",
    "parentPhone": "9739187816",
    "address": "40, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.28,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU360",
    "prn": "2124UMLM1110",
    "name": "Shinde Aditya Ravindra",
    "email": "aditya.shinde24@sanjivani.edu.in",
    "phone": "9403740904",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1110",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Aditya Ravindra",
    "parentPhone": "9746923889",
    "address": "14, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU361",
    "prn": "2124UMLM1111",
    "name": "Saini Abhishek Rammurti",
    "email": "abhishek.saini24@sanjivani.edu.in",
    "phone": "9468149083",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1111",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Abhishek Rammurti",
    "parentPhone": "9799958060",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.06,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU362",
    "prn": "2124UMLM1112",
    "name": "Saini Hitesh Tarsemkumar",
    "email": "hitesh.saini24@sanjivani.edu.in",
    "phone": "8307785647",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1112",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Hitesh Tarsemkumar",
    "parentPhone": "9734075508",
    "address": "71, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.84,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU363",
    "prn": "2124UMLF1113",
    "name": "Autade Abhirika Tushar",
    "email": "abhirika.autade24@sanjivani.edu.in",
    "phone": "9511422423",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1113",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Abhirika Tushar",
    "parentPhone": "9737193389",
    "address": "86, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.46,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU364",
    "prn": "2124UMLM1114",
    "name": "Ahire Varad Mukund",
    "email": "varad.ahire24@sanjivani.edu.in",
    "phone": "9404552814",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1114",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Varad Mukund",
    "parentPhone": "9773302459",
    "address": "37, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.58,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU365",
    "prn": "2124UMLF1115",
    "name": "Girase Shreya Rakesh",
    "email": "shreya.girase_24uml@sanjivani.edu.in",
    "phone": "7219515025",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1115",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Shreya Rakesh",
    "parentPhone": "9741034973",
    "address": "56, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.16,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU366",
    "prn": "2124UMLM1116",
    "name": "Nage Kiran Ganesh",
    "email": "kiran.nage_24uml@sanjivani.edu.in",
    "phone": "9699642238",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1116",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Kiran Ganesh",
    "parentPhone": "9779435061",
    "address": "72, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.19,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU367",
    "prn": "2124UMLF1117",
    "name": "Saniya Sandip Aher",
    "email": "saniya.aher_24uml@sanjivani.edu.in",
    "phone": "7558276915",
    "year": "2nd",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-1117",
    "admissionType": "Regular",
    "dob": "2005-01-01",
    "parentName": "Sandip Aher",
    "parentPhone": "9732262770",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.95,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU368",
    "prn": "2124UMLM2001",
    "name": "Lahare Saurabh Nitin",
    "email": "saurabh.lahare24@sanjivani.edu.in",
    "phone": "9130276091",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2001",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Saurabh Nitin",
    "parentPhone": "9776045888",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.15,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU369",
    "prn": "2124UMLF2002",
    "name": "Lohote Shravani Dashrath",
    "email": "shravani.lohote_24uml@sanjivani.edu.in",
    "phone": "8766040921",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2002",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shravani Dashrath",
    "parentPhone": "9766142970",
    "address": "15, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU370",
    "prn": "2124UMLM2024",
    "name": "Kahar Abhishek Anil",
    "email": "abhishek.kahar_24ucs@sanjivani.edu.in",
    "phone": "9309573628",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2024",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Abhishek Anil",
    "parentPhone": "9715823103",
    "address": "76, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.37,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU371",
    "prn": "2124UMLF2003",
    "name": "Kadam Aditi Sudhakar",
    "email": "aditi.kadam_24uml@sanjivani.edu.in",
    "phone": "8669391098",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2003",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aditi Sudhakar",
    "parentPhone": "9765737217",
    "address": "70, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.06,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU372",
    "prn": "2124UMLM2004",
    "name": "Bolij Pankaj Prashant",
    "email": "pankaj.bolij_24uml@sanjivani.edu.in",
    "phone": "9529354730",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2004",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pankaj Prashant",
    "parentPhone": "9732201844",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.51,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU373",
    "prn": "2124UMLF2005",
    "name": "Wagh Aishwarya Rajendra",
    "email": "aishwarya.wagh_24uml@sanjivani.edu.in",
    "phone": "9359422632",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2005",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aishwarya Rajendra",
    "parentPhone": "9732014508",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.08,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU374",
    "prn": "2124UMLM2006",
    "name": "Dhok Gopalkrushna Santosh",
    "email": "gopalkrushna.dhok_24uml@sanjivani.edu.in",
    "phone": "9657991865",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2006",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Gopalkrushna Santosh",
    "parentPhone": "9785167979",
    "address": "14, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.02,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU375",
    "prn": "2124UMLF2007",
    "name": "Thorat Sakshi Sharad",
    "email": "sakshi.thorat_24uml@sanjivani.edu.in",
    "phone": "9028906280",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2007",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sakshi Sharad",
    "parentPhone": "9718630117",
    "address": "44, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU376",
    "prn": "2124UMLM2008",
    "name": "Kodre Shlok Siddharth",
    "email": "shlok.kodre_24uml@sanjivani.edu.in",
    "phone": "9699239591",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2008",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shlok Siddharth",
    "parentPhone": "9745472865",
    "address": "55, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.62,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU377",
    "prn": "2124UMLM2009",
    "name": "Akash Navnath Jarhad",
    "email": "jarhad.navnath_24uml@sanjivani.edu.in",
    "phone": "9011322197",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2009",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Navnath Jarhad",
    "parentPhone": "9722148252",
    "address": "62, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.2,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU378",
    "prn": "2124UMLM2010",
    "name": "Unde Jaideep Vijay",
    "email": "jaideep.unde_24uml@sanjivani.edu.in",
    "phone": "7721090039",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2010",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Jaideep Vijay",
    "parentPhone": "9715047583",
    "address": "36, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.92,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU379",
    "prn": "2124UMLM2011",
    "name": "Abak Sahil Sunil",
    "email": "sahil.abak_24uml@sanjivani.edu.in",
    "phone": "8329869109",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2011",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sahil Sunil",
    "parentPhone": "9778688000",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU380",
    "prn": "2124UMLM2012",
    "name": "Kotkar Piyush Anil",
    "email": "piyush.kotkar_24uml@sanjivani.edu.in",
    "phone": "8788399841",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2012",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Piyush Anil",
    "parentPhone": "9751682271",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.34,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU381",
    "prn": "2124UMLM2013",
    "name": "Kale Om Sanjay",
    "email": "om.kale_24uml@sanjivani.edu.in",
    "phone": "9552587048",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2013",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Om Sanjay",
    "parentPhone": "9734885119",
    "address": "86, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.83,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU382",
    "prn": "2124UMLM2014",
    "name": "Halnor Pratik Roghunath",
    "email": "pratik.halnor_24uml@sanjivani.edu.in",
    "phone": "8055324569",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2014",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pratik Roghunath",
    "parentPhone": "9767443059",
    "address": "92, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.47,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU383",
    "prn": "2124UMLF2015",
    "name": "Gawali Tanuja Subhash",
    "email": "tanuja.gawali_24uml@sanjivani.edu.in",
    "phone": "9226444393",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2015",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Tanuja Subhash",
    "parentPhone": "9721631276",
    "address": "84, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU384",
    "prn": "2124UMLM2016",
    "name": "Gawali Tanmay Subhash",
    "email": "tanmay.gawali_24uml@sanjivani.edu.in",
    "phone": "8010381438",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2016",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Tanmay Subhash",
    "parentPhone": "9784232932",
    "address": "57, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.67,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU385",
    "prn": "2124UMLM2017",
    "name": "Bhawar Nikhil Santosh",
    "email": "nikhil.bhawar_24uml@sanjivani.edu.in",
    "phone": "9922173119",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2017",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nikhil Santosh",
    "parentPhone": "9717950017",
    "address": "10, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.27,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU386",
    "prn": "2124UMLM2031",
    "name": "Shaikh Aman Ajij",
    "email": "aman.shaikh_24uds@sanjivani.edu.in",
    "phone": "9322679367",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2031",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aman Ajij",
    "parentPhone": "9733252631",
    "address": "55, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU387",
    "prn": "2124UMLM2018",
    "name": "Bhakad Roshan Sambhaji",
    "email": "roshan.bhakad_24uml@sanjivani.edu.in",
    "phone": "9579021582",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2018",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Roshan Sambhaji",
    "parentPhone": "9730830269",
    "address": "27, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU388",
    "prn": "2124UMLF2019",
    "name": "Abak Sakshi Ramnath",
    "email": "sakshi.abak_24uml@sanjivani.edu.in",
    "phone": "9309310932",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2019",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sakshi Ramnath",
    "parentPhone": "9711681293",
    "address": "26, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.45,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU389",
    "prn": "2124UMLF2020",
    "name": "Nikumbh Vaishnavi Nitin",
    "email": "vaishnavi.nikumbh_24uml@sanjivani.edu.in",
    "phone": "8446143844",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2020",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vaishnavi Nitin",
    "parentPhone": "9793885271",
    "address": "59, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.32,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU390",
    "prn": "2124UMLM2021",
    "name": "Hon Aditya Ashok",
    "email": "aditya.hon_24uml@sanjivani.edu.in",
    "phone": "7057733773",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2021",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aditya Ashok",
    "parentPhone": "9769064272",
    "address": "31, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.07,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU391",
    "prn": "2124UMLM2022",
    "name": "Badjate Vansh Nilesh",
    "email": "vansh.badjate_24uml@sanjivani.edu.in",
    "phone": "9403931288",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2022",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vansh Nilesh",
    "parentPhone": "9710153034",
    "address": "33, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.96,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU392",
    "prn": "2124UMLM2023",
    "name": "Atharva Ranjaykumar Mengar",
    "email": "ranjaykumar.atharva_24uml@sanjivani.edu.in",
    "phone": "8208237889",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2023",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ranjaykumar Mengar",
    "parentPhone": "9710259914",
    "address": "97, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.25,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU393",
    "prn": "2124UMLM2025",
    "name": "Kharpas Akshay Shankarrao",
    "email": "akshay.kharpas_24uml@sanjivani.edu.in",
    "phone": "9307083166",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2025",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Akshay Shankarrao",
    "parentPhone": "9777828419",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.99,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU394",
    "prn": "2124UMLM2026",
    "name": "Turkane Swadesh Ankush",
    "email": "swadesh.turkane_24uml@sanjivani.edu.in",
    "phone": "9529099266",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2026",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Swadesh Ankush",
    "parentPhone": "9785011507",
    "address": "91, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.56,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU395",
    "prn": "2124UMLM2027",
    "name": "Sairaj Nitin Abhale",
    "email": "nitin.sairaj_24uml@sanjivani.edu.in",
    "phone": "9322272409",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2027",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nitin Abhale",
    "parentPhone": "9785192741",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.61,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU396",
    "prn": "2124UMLM2028",
    "name": "Lahare Jayesh Shrikat",
    "email": "jayesh.lahare_24uml@sanjivani.edu.in",
    "phone": "7028614182",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2028",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Jayesh Shrikat",
    "parentPhone": "9752897182",
    "address": "68, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.49,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU397",
    "prn": "2124UMLM2029",
    "name": "Anant Shantilal Hon",
    "email": "anant.hon_24uml@sanjivani.edu.in",
    "phone": "9209162209",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2029",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shantilal Hon",
    "parentPhone": "9715863417",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.38,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU398",
    "prn": "2124UMLM2030",
    "name": "Gore Vishal Navnath",
    "email": "vishal.gore_24uml@sanjivani.edu.in",
    "phone": "9689596432",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2030",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vishal Navnath",
    "parentPhone": "9720249937",
    "address": "73, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 33,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 33,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 19,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.3,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU399",
    "prn": "2124UMLM2032",
    "name": "Gade Swaroop Mahesh",
    "email": "swaroop.gade_24uml@sanjivani.edu.in",
    "phone": "8767728185",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2032",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Swaroop Mahesh",
    "parentPhone": "9732132796",
    "address": "41, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.26,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU400",
    "prn": "2124UMLM2033",
    "name": "More Govind Shankar",
    "email": "govind.more_24uml@sanjivani.edu.in",
    "phone": "9579305369",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2033",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Govind Shankar",
    "parentPhone": "9789232013",
    "address": "11, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.58,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU401",
    "prn": "2124UMLM2034",
    "name": "Digambar Mahajan",
    "email": "digamber.mahajan_24uml@sanjivani.edu.in",
    "phone": "7767993337",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2034",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Mahajan Mahajan",
    "parentPhone": "9759607426",
    "address": "64, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.59,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU402",
    "prn": "2124UMLM2035",
    "name": "Pabale Chaitanya Prashant",
    "email": "chaitanya.pable_24uml@sanjivani.edu.in",
    "phone": "9699422173",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2035",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Chaitanya Prashant",
    "parentPhone": "9731279149",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.93,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU403",
    "prn": "2124UMLM2036",
    "name": "Shelke Pratik Sanjay",
    "email": "pratik.shelke_24uml@sanjivani.edu.in",
    "phone": "9307817299",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2036",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pratik Sanjay",
    "parentPhone": "9783449087",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.06,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU404",
    "prn": "2124UMLM2037",
    "name": "Udawant Prasad Vijay",
    "email": "prasad.udawant_24uml@sanjivani.edu.in",
    "phone": "7057815900",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2037",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Prasad Vijay",
    "parentPhone": "9710704354",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU405",
    "prn": "2124UMLF2038",
    "name": "Kanade Priyanka Santosh",
    "email": "priyanka.kanade_24uml@sanjivani.edu.in",
    "phone": "8888310629",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2038",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Priyanka Santosh",
    "parentPhone": "9785092818",
    "address": "45, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.48,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU406",
    "prn": "2124UMLF2039",
    "name": "Karpe Nandini Navnath",
    "email": "nandini.karpe_24uml@sanjivani.edu.in",
    "phone": "9284150370",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2039",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nandini Navnath",
    "parentPhone": "9740662781",
    "address": "58, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.71,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU407",
    "prn": "2124UMLF2040",
    "name": "Kapse Sakshi Pandurang",
    "email": "sakshi.kapse_24uml@sanjivani.edu.in",
    "phone": "7820808700",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2040",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sakshi Pandurang",
    "parentPhone": "9715589307",
    "address": "62, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.6,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU408",
    "prn": "2124UMLM2041",
    "name": "Nimbalkar Gaurav Anil",
    "email": "gaurav.nimbalkar_24uml@sanjivani.edu.in",
    "phone": "8668260133",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2041",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Gaurav Anil",
    "parentPhone": "9736179638",
    "address": "46, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.17,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU409",
    "prn": "2124UMLM2042",
    "name": "Hangekar Nachiket Uddhav",
    "email": "nachiket.hangekar_24uml@sanjivani.edu.in",
    "phone": "7559373725",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2042",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nachiket Uddhav",
    "parentPhone": "9762337247",
    "address": "83, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.14,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU410",
    "prn": "2124UMLF2043",
    "name": "Awari Priti Bhausaheb",
    "email": "priti.awari_24uml@sanjivani.edu.in",
    "phone": "9834753587",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2043",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Priti Bhausaheb",
    "parentPhone": "9780982767",
    "address": "22, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.89,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU411",
    "prn": "2124UMLM2044",
    "name": "Parjane Sanket Vilas",
    "email": "sanket.parjane_24uml@sanjivani.edu.in",
    "phone": "8830126588",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2044",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanket Vilas",
    "parentPhone": "9712302070",
    "address": "35, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.49,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU412",
    "prn": "2124UMLM2045",
    "name": "Vishal Namdev Jagtap",
    "email": "vishal.jagtap_24uml@sanjivani.edu.in",
    "phone": "9209063668",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2045",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Namdev Jagtap",
    "parentPhone": "9787170855",
    "address": "92, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.13,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU413",
    "prn": "2124UMLM2046",
    "name": "Bhosale Aditya Ravindra",
    "email": "aditya.bhosale_24uml@sanjivani.edu.in",
    "phone": "8180046541",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2046",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aditya Ravindra",
    "parentPhone": "9736957277",
    "address": "20, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.15,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU414",
    "prn": "2124UMLM2047",
    "name": "Khalkar Pramod Sunil",
    "email": "pramod.khalkar_24uml@sanjivani.edu.in",
    "phone": "8308467679",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2047",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Pramod Sunil",
    "parentPhone": "9788210710",
    "address": "27, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.66,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU415",
    "prn": "2124UMLM2048",
    "name": "Swapnil Dattatray Varpe",
    "email": "dattatray.swapnil_24uml@sanjivani.edu.in",
    "phone": "9309472450",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2048",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatray Varpe",
    "parentPhone": "9730210254",
    "address": "10, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.33,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU416",
    "prn": "2124UMLM2049",
    "name": "Jape Krushna Sunil",
    "email": "krushna.jape_24uml@sanjivani.edu.in",
    "phone": "9970946494",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2049",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Krushna Sunil",
    "parentPhone": "9752609801",
    "address": "74, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.15,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU417",
    "prn": "2124UMLM2050",
    "name": "Sahil Sanjay Somase",
    "email": "sahil.somase_24uml@sanjivani.edu.in",
    "phone": "8605503084",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2050",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Somase",
    "parentPhone": "9745222230",
    "address": "39, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.95,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU418",
    "prn": "2124UMLM2051",
    "name": "Gawali Krushnakant Jalindar",
    "email": "krushnakant.gawali_24uml@sanjivani.edu.in",
    "phone": "8956393597",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2051",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Krushnakant Jalindar",
    "parentPhone": "9750014823",
    "address": "97, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.24,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU419",
    "prn": "2124UMLM2052",
    "name": "Hon Shreyas Vishnu",
    "email": "shreyas.hon_24uml@sanjivani.edu.in",
    "phone": "7559166967",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2052",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shreyas Vishnu",
    "parentPhone": "9788530613",
    "address": "61, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.18,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU420",
    "prn": "2124UMLF2053",
    "name": "Dange Rucha Sachin",
    "email": "rucha.dange_24uml@sanjivani.edu.in",
    "phone": "9527487575",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2053",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rucha Sachin",
    "parentPhone": "9719862738",
    "address": "32, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.86,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU421",
    "prn": "2124UMLF2054",
    "name": "Adhav Apurva Kailas",
    "email": "apurva.adhav_24uml@sanjivani.edu.in",
    "phone": "8788214917",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2054",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Apurva Kailas",
    "parentPhone": "9725802025",
    "address": "30, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.14,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU422",
    "prn": "2124UMLM2055",
    "name": "Adhav Harshal Kautik",
    "email": "harshal.adhav_24uml@sanjivani.edu.in",
    "phone": "7249783149",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2055",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Harshal Kautik",
    "parentPhone": "9765030042",
    "address": "51, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.05,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU423",
    "prn": "2124UMLM2056",
    "name": "Abhishek Sanjay Dighe",
    "email": "abhishek.dighe_24uml@sanjivani.edu.in",
    "phone": "9834991104",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2056",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sanjay Dighe",
    "parentPhone": "9710116290",
    "address": "40, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.9,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU424",
    "prn": "2124UMLF2057",
    "name": "Priyanka Navnath Sable",
    "email": "priyanka.sable_24uml@sanjivani.edu.in",
    "phone": "8999495002",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2057",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Navnath Sable",
    "parentPhone": "9737138813",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.42,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU425",
    "prn": "2124UMLF2058",
    "name": "Honde Kajal Santosh",
    "email": "kajal.honde_24uml@sanjivani.edu.in",
    "phone": "7498534218",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2058",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Kajal Santosh",
    "parentPhone": "9760211030",
    "address": "75, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.9,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU426",
    "prn": "2124UMLF2059",
    "name": "Komal Dattatraya Honde",
    "email": "dattatraya.komal_24uml@sanjivani.edu.in",
    "phone": "7498546986",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2059",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Dattatraya Honde",
    "parentPhone": "9772052916",
    "address": "42, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.91,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU427",
    "prn": "2124UMLF2060",
    "name": "Kakade Rutuja Anil",
    "email": "rutuja.kakade_24uml@sanjivani.edu.in",
    "phone": "8010800947",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2060",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Rutuja Anil",
    "parentPhone": "9778478643",
    "address": "85, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.55,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU428",
    "prn": "2124UMLF2061",
    "name": "Jagtap Gayatri Baliram",
    "email": "gayatri.jagtap_24uml@sanjivani.edu.in",
    "phone": "8767629033",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2061",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Gayatri Baliram",
    "parentPhone": "9771410604",
    "address": "42, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.48,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU429",
    "prn": "2124UMLM2062",
    "name": "Udawant Sai Anil",
    "email": "sai.udawant_24uml@sanjivani.edu.in",
    "phone": "8010286599",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2062",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sai Anil",
    "parentPhone": "9763536578",
    "address": "63, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 24,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 24,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 6.85,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU430",
    "prn": "2124UMLM2063",
    "name": "Ayush Ravindra Wagh",
    "email": "ravindra.ayush_24uml@sanjivani.edu.in",
    "phone": "8999807930",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2063",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ravindra Wagh",
    "parentPhone": "9746067924",
    "address": "60, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 31,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 31,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.95,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU431",
    "prn": "2124UMLM2064",
    "name": "Divij Harshvardhan Kulkarni",
    "email": "harshvardhan.divij_24uml@sanjivani.edu.in",
    "phone": "8329678075",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2064",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Harshvardhan Kulkarni",
    "parentPhone": "9758155737",
    "address": "13, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.97,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU432",
    "prn": "2124UMLF2065",
    "name": "Somase Shraddha Yogesh",
    "email": "shraddha.somase_24uml@sanjivani.edu.in",
    "phone": "9112329396",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2065",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Shraddha Yogesh",
    "parentPhone": "9759456602",
    "address": "26, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.09,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU433",
    "prn": "2124UMLF2066",
    "name": "Kakade Payal Valmik",
    "email": "payal.kakade_24uml@sanjivani.edu.in",
    "phone": "9309081838",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2066",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Payal Valmik",
    "parentPhone": "9754079348",
    "address": "24, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 27,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 27,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.72,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU434",
    "prn": "2124UMLM2067",
    "name": "Kamankar Vinayak Yadav",
    "email": "vinayak.kamankar_24uml@sanjivani.edu.in",
    "phone": "7083571601",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2067",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Vinayak Yadav",
    "parentPhone": "9740619452",
    "address": "52, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 30,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 30,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 8.5,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU435",
    "prn": "2124UMLF2069",
    "name": "Kaushik Ananya",
    "email": "ananya.kaushik_24uml@sanjivani.edu.in",
    "phone": "9973944006",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2069",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Ananya Ananya",
    "parentPhone": "9753411353",
    "address": "94, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.86,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU436",
    "prn": "2124UMLM2070",
    "name": "Gadhave Omkar Sunil",
    "email": "omkar.gadhave_24uml@sanjivani.edu.in",
    "phone": "9284394961",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2070",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Omkar Sunil",
    "parentPhone": "9787861358",
    "address": "31, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 29,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 29,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 17,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.41,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU437",
    "prn": "2124UMLM2071",
    "name": "Shinde Nikhil Gopinath",
    "email": "nikhil.shinde_24uml@sanjivani.edu.in",
    "phone": "9359472363",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2071",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Nikhil Gopinath",
    "parentPhone": "9790864509",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC001",
    "academics": {
      "CIA1": {
        "obtained": 26,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 26,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 15,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 7.54,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU438",
    "prn": "2124UMLM2072",
    "name": "Gagare Abhijit Somnath",
    "email": "abhijit.gagare_24uml@sanjivani.edu.in",
    "phone": "7249391346",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2072",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Abhijit Somnath",
    "parentPhone": "9797099382",
    "address": "79, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC002",
    "academics": {
      "CIA1": {
        "obtained": 32,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 32,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 18,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 9,
        "maxMarks": 10
      },
      "CGPA": 9.07,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU439",
    "prn": "2124UMLF2073",
    "name": "Vedika Sachin Taji",
    "email": "sachin.vedika_24uml@sanjivani.edu.in",
    "phone": "8600749570",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2073",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Sachin Taji",
    "parentPhone": "9743719344",
    "address": "61, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC003",
    "academics": {
      "CIA1": {
        "obtained": 25,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 25,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 14,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 7,
        "maxMarks": 10
      },
      "CGPA": 7.14,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  },
  {
    "id": "STU440",
    "prn": "2124UMLM2074",
    "name": "Takate Aditya Pandurang",
    "email": "aditya.takate_24uml@sanjivani.edu.in",
    "phone": "7020605254",
    "year": "DSY",
    "branch": "Computer Engineering",
    "division": "A",
    "rollNo": "CE-2074",
    "admissionType": "DSY",
    "dob": "2005-01-01",
    "parentName": "Aditya Pandurang",
    "parentPhone": "9788674348",
    "address": "96, MG Road, Pune 411001",
    "status": "active",
    "assignedFacultyId": "FAC004",
    "academics": {
      "CIA1": {
        "obtained": 28,
        "maxMarks": 35
      },
      "CIA2": {
        "obtained": 28,
        "maxMarks": 35
      },
      "capstone": {
        "obtained": 16,
        "maxMarks": 20
      },
      "practicals": {
        "obtained": 8,
        "maxMarks": 10
      },
      "CGPA": 8.09,
      "semester": 4,
      "backlogs": 0
    },
    "certifications": [],
    "internships": [],
    "placements": [],
    "hackathons": [],
    "projects": [],
    "sports": [],
    "scoreHistory": [],
    "notifications": [],
    "score": 0,
    "categoryScores": {
      "academics": 0,
      "internships": 0,
      "placements": 0,
      "hackathons": 0,
      "projects": 0,
      "certifications": 0,
      "sports": 0
    }
  }
];

// ========== FACULTY ==========
export const initialFaculty = [
  {
    "id": "FAC001",
    "empId": "FAC001",
    "name": "Dr. Kavita Joshi",
    "email": "kavita.j@xyz.edu",
    "phone": "9876543210",
    "designation": "Professor",
    "department": "Computer Engineering",
    "subjects": [
      "Data Structures",
      "Algorithms"
    ],
    "assignedStudentIds": [
      "STU001",
      "STU002",
      "STU007",
      "STU013",
      "STU017",
      "STU021",
      "STU025",
      "STU029",
      "STU033",
      "STU037",
      "STU041",
      "STU045",
      "STU049",
      "STU053",
      "STU057",
      "STU061",
      "STU065",
      "STU069",
      "STU073",
      "STU077",
      "STU081",
      "STU085",
      "STU089",
      "STU093",
      "STU097",
      "STU101",
      "STU105",
      "STU109",
      "STU113",
      "STU117",
      "STU121",
      "STU125",
      "STU129",
      "STU133",
      "STU137",
      "STU141",
      "STU145",
      "STU149",
      "STU153",
      "STU157",
      "STU161",
      "STU165",
      "STU169",
      "STU173",
      "STU177",
      "STU181",
      "STU185",
      "STU189",
      "STU193",
      "STU197",
      "STU201",
      "STU205",
      "STU209",
      "STU213",
      "STU217",
      "STU221",
      "STU225",
      "STU229",
      "STU233",
      "STU237",
      "STU241",
      "STU245",
      "STU249",
      "STU253",
      "STU257",
      "STU261",
      "STU265",
      "STU269",
      "STU273",
      "STU277",
      "STU281",
      "STU285",
      "STU289",
      "STU293",
      "STU297",
      "STU301",
      "STU305",
      "STU309",
      "STU313",
      "STU317",
      "STU321",
      "STU325",
      "STU329",
      "STU333",
      "STU337",
      "STU341",
      "STU345",
      "STU349",
      "STU353",
      "STU357",
      "STU361",
      "STU365",
      "STU369",
      "STU373",
      "STU377",
      "STU381",
      "STU385",
      "STU389",
      "STU393",
      "STU397",
      "STU401",
      "STU405",
      "STU409",
      "STU413",
      "STU417",
      "STU421",
      "STU425",
      "STU429",
      "STU433",
      "STU437"
    ],
    "qualifications": [
      "Ph.D. Computer Science",
      "M.Tech IIT Bombay"
    ],
    "joinDate": "2010-07-01",
    "status": "active",
    "notifications": [
      {
        "id": "FN001",
        "message": "Rohan Mehta submitted a new certificate",
        "type": "info",
        "read": false,
        "timestamp": "2024-09-10T10:30:00"
      },
      {
        "id": "FN002",
        "message": "Admin updated marks for Vikram Kulkarni",
        "type": "info",
        "read": true,
        "timestamp": "2024-09-08T14:00:00"
      }
    ]
  },
  {
    "id": "FAC002",
    "empId": "FAC002",
    "name": "Prof. Suresh Nair",
    "email": "suresh.n@xyz.edu",
    "phone": "9876543211",
    "designation": "Associate Professor",
    "department": "Computer Engineering",
    "subjects": [
      "Cloud Computing",
      "DevOps"
    ],
    "assignedStudentIds": [
      "STU003",
      "STU004",
      "STU010",
      "STU014",
      "STU018",
      "STU022",
      "STU026",
      "STU030",
      "STU034",
      "STU038",
      "STU042",
      "STU046",
      "STU050",
      "STU054",
      "STU058",
      "STU062",
      "STU066",
      "STU070",
      "STU074",
      "STU078",
      "STU082",
      "STU086",
      "STU090",
      "STU094",
      "STU098",
      "STU102",
      "STU106",
      "STU110",
      "STU114",
      "STU118",
      "STU122",
      "STU126",
      "STU130",
      "STU134",
      "STU138",
      "STU142",
      "STU146",
      "STU150",
      "STU154",
      "STU158",
      "STU162",
      "STU166",
      "STU170",
      "STU174",
      "STU178",
      "STU182",
      "STU186",
      "STU190",
      "STU194",
      "STU198",
      "STU202",
      "STU206",
      "STU210",
      "STU214",
      "STU218",
      "STU222",
      "STU226",
      "STU230",
      "STU234",
      "STU238",
      "STU242",
      "STU246",
      "STU250",
      "STU254",
      "STU258",
      "STU262",
      "STU266",
      "STU270",
      "STU274",
      "STU278",
      "STU282",
      "STU286",
      "STU290",
      "STU294",
      "STU298",
      "STU302",
      "STU306",
      "STU310",
      "STU314",
      "STU318",
      "STU322",
      "STU326",
      "STU330",
      "STU334",
      "STU338",
      "STU342",
      "STU346",
      "STU350",
      "STU354",
      "STU358",
      "STU362",
      "STU366",
      "STU370",
      "STU374",
      "STU378",
      "STU382",
      "STU386",
      "STU390",
      "STU394",
      "STU398",
      "STU402",
      "STU406",
      "STU410",
      "STU414",
      "STU418",
      "STU422",
      "STU426",
      "STU430",
      "STU434",
      "STU438"
    ],
    "qualifications": [
      "M.Tech Cloud Computing",
      "B.E. Computer Science"
    ],
    "joinDate": "2014-08-01",
    "status": "active",
    "notifications": [
      {
        "id": "FN003",
        "message": "Divya Pillai received approval for Google Cloud cert",
        "type": "success",
        "read": false,
        "timestamp": "2024-09-12T09:00:00"
      }
    ]
  },
  {
    "id": "FAC003",
    "empId": "FAC003",
    "name": "Dr. Anita More",
    "email": "anita.m@xyz.edu",
    "phone": "9876543212",
    "designation": "Professor",
    "department": "Computer Engineering",
    "subjects": [
      "Machine Learning",
      "AI"
    ],
    "assignedStudentIds": [
      "STU005",
      "STU006",
      "STU011",
      "STU015",
      "STU019",
      "STU023",
      "STU027",
      "STU031",
      "STU035",
      "STU039",
      "STU043",
      "STU047",
      "STU051",
      "STU055",
      "STU059",
      "STU063",
      "STU067",
      "STU071",
      "STU075",
      "STU079",
      "STU083",
      "STU087",
      "STU091",
      "STU095",
      "STU099",
      "STU103",
      "STU107",
      "STU111",
      "STU115",
      "STU119",
      "STU123",
      "STU127",
      "STU131",
      "STU135",
      "STU139",
      "STU143",
      "STU147",
      "STU151",
      "STU155",
      "STU159",
      "STU163",
      "STU167",
      "STU171",
      "STU175",
      "STU179",
      "STU183",
      "STU187",
      "STU191",
      "STU195",
      "STU199",
      "STU203",
      "STU207",
      "STU211",
      "STU215",
      "STU219",
      "STU223",
      "STU227",
      "STU231",
      "STU235",
      "STU239",
      "STU243",
      "STU247",
      "STU251",
      "STU255",
      "STU259",
      "STU263",
      "STU267",
      "STU271",
      "STU275",
      "STU279",
      "STU283",
      "STU287",
      "STU291",
      "STU295",
      "STU299",
      "STU303",
      "STU307",
      "STU311",
      "STU315",
      "STU319",
      "STU323",
      "STU327",
      "STU331",
      "STU335",
      "STU339",
      "STU343",
      "STU347",
      "STU351",
      "STU355",
      "STU359",
      "STU363",
      "STU367",
      "STU371",
      "STU375",
      "STU379",
      "STU383",
      "STU387",
      "STU391",
      "STU395",
      "STU399",
      "STU403",
      "STU407",
      "STU411",
      "STU415",
      "STU419",
      "STU423",
      "STU427",
      "STU431",
      "STU435",
      "STU439"
    ],
    "qualifications": [
      "Ph.D. Machine Learning",
      "M.Tech IISc Bangalore"
    ],
    "joinDate": "2008-01-15",
    "status": "active",
    "notifications": [
      {
        "id": "FN004",
        "message": "Priya Sharma scored 88 — highest in 3rd year",
        "type": "success",
        "read": false,
        "timestamp": "2024-09-14T11:00:00"
      }
    ]
  },
  {
    "id": "FAC004",
    "empId": "FAC004",
    "name": "Prof. Rahul Patil",
    "email": "rahul.p@xyz.edu",
    "phone": "9876543213",
    "designation": "Assistant Professor",
    "department": "Computer Engineering",
    "subjects": [
      "Web Technologies",
      "DBMS"
    ],
    "assignedStudentIds": [
      "STU008",
      "STU009",
      "STU012",
      "STU016",
      "STU020",
      "STU024",
      "STU028",
      "STU032",
      "STU036",
      "STU040",
      "STU044",
      "STU048",
      "STU052",
      "STU056",
      "STU060",
      "STU064",
      "STU068",
      "STU072",
      "STU076",
      "STU080",
      "STU084",
      "STU088",
      "STU092",
      "STU096",
      "STU100",
      "STU104",
      "STU108",
      "STU112",
      "STU116",
      "STU120",
      "STU124",
      "STU128",
      "STU132",
      "STU136",
      "STU140",
      "STU144",
      "STU148",
      "STU152",
      "STU156",
      "STU160",
      "STU164",
      "STU168",
      "STU172",
      "STU176",
      "STU180",
      "STU184",
      "STU188",
      "STU192",
      "STU196",
      "STU200",
      "STU204",
      "STU208",
      "STU212",
      "STU216",
      "STU220",
      "STU224",
      "STU228",
      "STU232",
      "STU236",
      "STU240",
      "STU244",
      "STU248",
      "STU252",
      "STU256",
      "STU260",
      "STU264",
      "STU268",
      "STU272",
      "STU276",
      "STU280",
      "STU284",
      "STU288",
      "STU292",
      "STU296",
      "STU300",
      "STU304",
      "STU308",
      "STU312",
      "STU316",
      "STU320",
      "STU324",
      "STU328",
      "STU332",
      "STU336",
      "STU340",
      "STU344",
      "STU348",
      "STU352",
      "STU356",
      "STU360",
      "STU364",
      "STU368",
      "STU372",
      "STU376",
      "STU380",
      "STU384",
      "STU388",
      "STU392",
      "STU396",
      "STU400",
      "STU404",
      "STU408",
      "STU412",
      "STU416",
      "STU420",
      "STU424",
      "STU428",
      "STU432",
      "STU436",
      "STU440"
    ],
    "qualifications": [
      "M.Tech VJTI Mumbai",
      "B.E. Information Technology"
    ],
    "joinDate": "2018-06-01",
    "status": "active",
    "notifications": [
      {
        "id": "FN005",
        "message": "Ananya Iyer placed at Microsoft with 24 LPA",
        "type": "success",
        "read": true,
        "timestamp": "2024-07-11T16:00:00"
      }
    ]
  }
];

// ========== ADMIN USER ==========
export const adminUser = {
  "id": "ADMIN001",
  "username": "admin@dept",
  "name": "Dr. R.S. Kulkarni",
  "email": "admin@xyz.edu",
  "designation": "HOD",
  "department": "Computer Engineering",
  "notifications": [
    {
      "id": "AN001",
      "message": "New certificate submission from Sameer Khan",
      "type": "info",
      "read": false,
      "timestamp": "2024-09-15T08:00:00"
    },
    {
      "id": "AN002",
      "message": "3 students below 60 — intervention required",
      "type": "warning",
      "read": false,
      "timestamp": "2024-09-14T09:00:00"
    },
    {
      "id": "AN003",
      "message": "Monthly report generated for September",
      "type": "info",
      "read": true,
      "timestamp": "2024-09-01T10:00:00"
    }
  ]
};

// ========== AUDIT LOG ==========
export const initialAuditLog = [
  {
    "id": "AL01",
    "timestamp": "2024-09-15T10:30:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Priya Sharma",
    "details": "Approved TensorFlow Developer cert #CERT008",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL02",
    "timestamp": "2024-09-15T10:25:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Priya Sharma",
    "details": "Approved AWS Solutions Architect cert #CERT009",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL03",
    "timestamp": "2024-09-14T16:45:00",
    "action": "Certificate Rejected",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Arjun Desai",
    "details": "Rejected Leadership Workshop #CERT023 — unclear scan",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL04",
    "timestamp": "2024-09-14T14:20:00",
    "action": "Marks Updated",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Aarav Rane",
    "details": "Updated CIA1 marks: 22 → 26",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL05",
    "timestamp": "2024-09-13T11:00:00",
    "action": "Student Added",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Divya Pillai",
    "details": "Added student with PRN 2024003",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL06",
    "timestamp": "2024-09-12T09:30:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Divya Pillai",
    "details": "Approved Google Cloud Associate cert #CERT004",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL07",
    "timestamp": "2024-09-11T15:45:00",
    "action": "Faculty Assigned",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Prof. Suresh Nair",
    "details": "Assigned 3 students to FAC002",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL08",
    "timestamp": "2024-09-10T10:15:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Sneha Patil",
    "details": "Approved AWS DevOps Professional cert #CERT015",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL09",
    "timestamp": "2024-09-09T14:00:00",
    "action": "Marks Updated",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Vikram Kulkarni",
    "details": "Updated CIA2 marks: 18 → 20",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL10",
    "timestamp": "2024-09-08T09:00:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Ananya Iyer",
    "details": "Approved Google Professional Cloud Architect #CERT018",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL11",
    "timestamp": "2024-09-07T16:30:00",
    "action": "Student Deactivated",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Test Student",
    "details": "Deactivated test account",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL12",
    "timestamp": "2024-09-06T11:20:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Meera Nair",
    "details": "Approved Microsoft Azure AI cert #CERT012",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL13",
    "timestamp": "2024-09-05T13:45:00",
    "action": "Notification Sent",
    "admin": "Dr. R.S. Kulkarni",
    "target": "All 3rd Year",
    "details": "Reminder: Submit internship certificates by Sep 30",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL14",
    "timestamp": "2024-09-04T10:00:00",
    "action": "Scoring Config Updated",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Department",
    "details": "Adjusted hackathon weightage from 8 to 10",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL15",
    "timestamp": "2024-09-03T15:30:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Sameer Khan",
    "details": "Approved Coursera Python cert #CERT024",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL16",
    "timestamp": "2024-09-02T09:15:00",
    "action": "Marks Updated",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Karan Joshi",
    "details": "Uploaded semester 5 marks via CSV",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL17",
    "timestamp": "2024-09-01T14:00:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Pooja Thakur",
    "details": "Approved NCC B Certificate #CERT029",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL18",
    "timestamp": "2024-08-30T11:00:00",
    "action": "Faculty Added",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Prof. Rahul Patil",
    "details": "Added faculty with EmpID FAC004",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL19",
    "timestamp": "2024-08-28T16:00:00",
    "action": "Certificate Approved",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Rohan Mehta",
    "details": "Approved AWS Cloud Practitioner cert #CERT001",
    "ip": "192.168.1.10"
  },
  {
    "id": "AL20",
    "timestamp": "2024-08-25T10:30:00",
    "action": "Student Added",
    "admin": "Dr. R.S. Kulkarni",
    "target": "Sameer Khan",
    "details": "Added DSY student with PRN 2024DSY001",
    "ip": "192.168.1.10"
  }
];
