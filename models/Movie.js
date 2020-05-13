module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("Movie", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING,
    },
    watched: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Movie;
};
