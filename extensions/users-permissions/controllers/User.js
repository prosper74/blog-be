const { sanitizeEntity } = require("strapi-utils");

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query("user", "users-permissions").model,
  });

module.exports = {
  async setSettings(ctx) {
    const { id, contactInfo } = ctx.state.user;
    const { name, phone, email } = ctx.request.body;

    let newInfo = [...contactInfo];

    if (
      typeof name !== "undefined" ||
      typeof phone !== "undefined" ||
      typeof email !== "undefined"
    ) {
      newInfo[0] = { name, phone, email };
    } else if (
      typeof name === "undefined" ||
      typeof phone === "undefined" ||
      typeof email === "undefined"
    ) {
      newInfo[0] = { name: "", email: "", phone: "" };
    }

    let newUser = await strapi.plugins["users-permissions"].services.user.edit(
      { id },
      { contactInfo: newInfo }
    );

    newUser = sanitizeUser(newUser);

    ctx.send(newUser, 200);
  },

  async changePassword(ctx) {
    const { id } = ctx.state.user;
    const { password } = ctx.request.body;

    await strapi.plugins["users-permissions"].services.user.edit(
      { id },
      { password }
    );

    ctx.send("Password Changed Successfully", 200);
  },

  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    let newUser = { ...sanitizeUser(user) };
    const favourites = await strapi.services.favourite.find({
      users_permissions_user: user,
    });
    newUser.favourites = favourites.map((favourite) => ({
      post: favourite.post.id,
      id: favourite.id,
    }));

    ctx.body = newUser;
  },
};
