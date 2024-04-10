import React from 'react';
import { useAdmin } from '../../../AdminContext';

function TeacherTable() {
  const { teachers, classes } = useAdmin();
  console.log(teachers)

  return (
    <div className='flex  flex-col justify-center'>
              <h3 className='flex justify-center'>Teachers</h3>
      <table className='table-auto bg-black'>
        <thead>
          <tr>
            <th className='px-8 py-4 bg-indigo-600'>First Name</th>
            <th className='px-8 py-4 bg-indigo-600'>Last Name</th>
            <th className='px-8 py-4 bg-indigo-600'>Email</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td className='px-8 py-4 border '>{teacher.firstName}</td>
              <td className='px-8 py-4 border '>{teacher.lastName}</td>
              <td className='px-8 py-4 border '>{teacher.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;