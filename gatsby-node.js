exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type ProjectsJson implements Node {
      image: ImageSharp @link(by: "fluid.originalName")
    }
  `
  createTypes(typeDefs)
}
