const Thoughts = require("../Models/Thoughts");

class ThoughtsRepository {
  static async addJoke({ message, author }) {
    await Thoughts.create({
      message,
      author,
    });
  }

  static async getRandomThought() {
    const thoughts = await Thoughts.find({
      status: true,
    });

    return thoughts[Math.floor(Math.random() * thoughts.length)];
  }
}

module.exports = ThoughtsRepository;
