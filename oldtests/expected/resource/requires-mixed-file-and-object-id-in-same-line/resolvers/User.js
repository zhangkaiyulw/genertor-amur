module.exports = {
  User: {
    async post(root, _, { Post }) {
      return await Post.findById(root.post);
    }
  },
  Query: {
    async user(root, { _id }, { User }) {
      return await User.findById(_id);
    },
    async users(root, { _ }, { User }) {
      return await User.find();
    }
  },
  Mutation: {
    async createUser(root, { input }, { User }) {
      return await User.create(input);
    },
    async updateUser(root, { _id, input }, { User }) {
      return await (await User.findById(_id)).set(input).save();
    },
    async deleteUser(root, { _id }, { User }) {
      return await (await User.findById(_id)).remove();
    }
  }
};
