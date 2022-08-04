module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      userId: String,
      branchId: String,
      companyId: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const SharingProfile = mongoose.model("SharingProfile", schema);
  return SharingProfile;  
};
