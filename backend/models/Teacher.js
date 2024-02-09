// models/Teacher.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
