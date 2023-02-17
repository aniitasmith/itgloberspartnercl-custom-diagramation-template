const customGridSchema = {
  title : "Custom Grid",
  type : "object",
  properties : {
    gridType : {
      title : "Grid Type",
      type : "number",
      enum : [
        1,
        2,
        3,
        4
      ]
    }
  }
}

export default customGridSchema
