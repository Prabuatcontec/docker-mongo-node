module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      userId: Number,
      branchId: Number,
      companyId: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const SharingProfile = mongoose.model("sharingprofile", schema);
  return SharingProfile;  
};
