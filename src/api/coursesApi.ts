export interface Course {
  title: string;
  framePath: string;
  courseID: string;
  progress: number;
  nrVideos: number;
  startDate: string;
  dueDate: string;
  description: string;
}

export const fetchCourses = async (): Promise<Course[]> => {
  return [
    {
      title: "Data Management of Refugees",
      framePath: "Course1.PNG",
      courseID: "someUUID",
      progress: 0.29,
      nrVideos: 8,
      startDate: "16.12.2024",
      dueDate: "07.01.2025",
      description: "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies."
    },
    {
      title: "Introduction to Machine Learning",
      framePath: "Course2.PNG",
      courseID: "anotherUUID",
      progress: 0.45,
      nrVideos: 10,
      startDate: "01.01.2025",
      dueDate: "15.01.2025",
      description: "Learn the basics of machine learning, including supervised and unsupervised learning techniques, and how to apply them in real-world scenarios."
    },
    {
      title: "Advanced JavaScript",
      framePath: "Course3.PNG",
      courseID: "yetAnotherUUID",
      progress: 0.75,
      nrVideos: 12,
      startDate: "05.01.2025",
      dueDate: "20.01.2025",
      description: "Deep dive into advanced JavaScript concepts, including closures, prototypes, and asynchronous programming."
    },
    {
      title: "Cybersecurity Fundamentals",
      framePath: "Course4.PNG",
      courseID: "differentUUID",
      progress: 0.10,
      nrVideos: 6,
      startDate: "10.01.2025",
      dueDate: "25.01.2025",
      description: "Understand the basics of cybersecurity, including threat analysis, risk management, and best practices for securing digital information."
    }
  ];
}; 