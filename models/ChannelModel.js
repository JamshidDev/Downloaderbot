const mongoose = require('mongoose')


const ChannelSchema = mongoose.Schema({
    telegram_id: {
        type: Number,
        required: true,
    },
    user_id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
    },
    username: {
        type: String,
    },
    type: {
        type: String,
    },
    new_chat:{
        type: Object,
    },
    ad: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
})

const CHANNEL = mongoose.model("ChannelSchema", ChannelSchema)

module.exports = CHANNEL;