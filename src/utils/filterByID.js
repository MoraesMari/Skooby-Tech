function filterByID(courses, id) {
     return courses.filter(course => course.id === id)
}

module.exports = filterByID