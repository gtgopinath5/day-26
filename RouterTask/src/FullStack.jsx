import React from 'react';

const fullStackCourses = [
  {
    title: "Full Stack Course 1",
    description: "Master full stack development with this course covering both front-end and back-end technologies. Learn to build and deploy web applications using modern frameworks and tools for a complete development experience.",
    image: "https://th.bing.com/th/id/OIP.FXypz32SSqmZDY2cKBMxgAAAAA?rs=1&pid=ImgDetMain"
  },
  {
    title: "Full Stack Course 2",
    description: "Explore advanced topics in full stack development, including API integration and performance optimization. Gain experience in creating scalable applications and modern development practices for robust web solutions.",
    image: "https://th.bing.com/th/id/OIP.PMBiSa-JBIhSrPqckRRxyQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },{
    title: "Full Stack Course 3",
    description: "Master full stack development with this course covering both front-end and back-end technologies. Learn to build and deploy web applications using modern frameworks and tools for a complete development experience.",
    image: "https://th.bing.com/th/id/OIP.bvGcJVFaGXeTZ9M64NpvCwAAAA?rs=1&pid=ImgDetMain"
  }, {
    title: "Full Stack Course 2",
    description: "Explore advanced topics in full stack development, including API integration and performance optimization. Gain experience in creating scalable applications and modern development practices for robust web solutions.",
    image: "https://thetapacademy.com/wp-content/uploads/2023/01/java-full-stack-syllabus-scaled.jpg"
  }
];

const FullStackDevelopment = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Full Stack Development</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fullStackCourses.map((course, index) => (
          <div key={index} className="card border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStackDevelopment;


