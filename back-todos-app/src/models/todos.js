import DataTypes from 'sequelize'
export default (sequelize) => {
    const Todos = sequelize.define('todos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },

        task: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            
        },

        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })

    return Todos
}
