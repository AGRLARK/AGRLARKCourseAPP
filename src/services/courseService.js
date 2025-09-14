import api from '../config/api';

// Course API calls
export const courseService = {
  // Get all courses
  getAllCourses: async () => {
    const response = await api.get('/course/courses');
    return response.data;
  },

  // Get course lectures
  getCourseLectures: async (courseId) => {
    const response = await api.get(`/course/course/${courseId}`);
    return response.data;
  },

  // Create course (Admin only)
  createCourse: async (courseData) => {
    const response = await api.post('/course/createcourse', courseData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Add lectures to course (Admin only)
  addLectures: async (courseId, lectureData) => {
    const response = await api.post(`/course/course/${courseId}`, lectureData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete course (Admin only)
  deleteCourse: async (courseId) => {
    const response = await api.delete(`/course/course/${courseId}`);
    return response.data;
  },

  // Delete lecture (Admin only)
  deleteLecture: async (courseId, lectureId) => {
    const response = await api.delete('/course/deleteLecture', {
      data: { courseId, lectureId },
    });
    return response.data;
  },
};
