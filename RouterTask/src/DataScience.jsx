import React from 'react';

const dataScienceCourses = [
  {
    title: "Data Science Course 1",
    description: "Explore the fundamentals of data science, including data analysis, machine learning, and statistical modeling. This course provides hands-on experience with data manipulation and visualization techniques.",
    image: "https://wallpaperaccess.com/full/1704555.jpg"
  },
  {
    title: "Data Science Course 2",
    description: "Advance your data science skills with a focus on big data and machine learning algorithms. Learn to build predictive models, handle large datasets, and extract meaningful insights from complex data.",
    image: "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Understanding-Data-Science-1020x1024.png"
  },{
    title: "Data Science Course 3",
    description: "Advance your data science skills with a focus on big data and machine learning algorithms. Learn to build predictive models, handle large datasets, and extract meaningful insights from complex data.",
    image: "https://th.bing.com/th/id/OIP.3uJswFjpWEy1O8HM70_44AHaE6?rs=1&pid=ImgDetMain"
  },{
    title: "Data Science Course 4",
    description: "Explore the fundamentals of data science, including data analysis, machine learning, and statistical modeling. This course provides hands-on experience with data manipulation and visualization techniques.",
    image: "https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg"
  }
];

const DataScience = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Science</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dataScienceCourses.map((course, index) => (
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

export default DataScience;
