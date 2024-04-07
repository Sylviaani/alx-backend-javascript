/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The names of students in the course.
     */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * Gets the name of this course.
     */
  get name() {
    return this.name;
  }

  /**
     * Sets the name of this course.
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = value;
  }

  /**
     * Gets the length of this course (in months).
     */
  get length() {
    return this.length;
  }

  /**
     * Sets the length of this course (in months).
     */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = value;
  }

  /**
     * Gets the names of students in this course.
     */
  get students() {
    return this.students;
  }

  /**
     * Sets the names of students in this course.
     */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this.students = value;
  }
}
