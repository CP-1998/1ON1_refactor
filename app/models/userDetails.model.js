module.exports = mongoose => {
    const User = mongoose.model(
        'user',
        mongoose.Schema(
            {
                email: String,
                passhash: String,
                username: String,
                messagekey: Number
            },
            { timestamps: true }
        )
    );

    return User;
};