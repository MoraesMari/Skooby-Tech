const formatPrice = require('../utils/formatPrice')
const filterByCategory = require('../utils/filterByCategory')
const filterByID = require('../utils/filterByID')
const { Courses } = require('../models')



const coursesController = {
  index: (req, res) => {
    Courses.findAll().then(courses => {
    const categorias = []

    courses.map(course => {
      if (categorias.indexOf(course.categoria) === -1) {
        categorias.push(course.categoria)
      }
    })

      res.render('courses',{
        courses,
        categorias,
        formatPrice,
        filterByCategory
    })
    
    })
  },

    detailsCourse: (req, res) => {
      Courses.findByPk(1)
      const courses = []
      
      courses.filter(course => {
        if (courses.indexOf(course.id) === course.id) {
          courses.push(course.id)
        }
      })
        res.render('internalCourse', {
        filterByID,
        courses,
        formatPrice,
        
     })
    }
  }
     
      module.exports = coursesController