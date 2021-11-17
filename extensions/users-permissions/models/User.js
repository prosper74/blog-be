module.exports = {
  lifecycles: {
    //   Called before an entry is created
    beforeCreate(data) {
      data.contactInfo = [
        { name: data.username, email: data.email, phone: "" },
      ];
    },
  },
};
