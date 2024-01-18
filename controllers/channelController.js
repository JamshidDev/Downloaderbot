const CHANNEL = require("../models/ChannelModel");
const customLogger = require("../config/customLogger");


const store_item = async (data) => {
    try {
        const existChannel =await CHANNEL.findOne({telegram_id:data.telegram_id});
        if(existChannel){
            data.active = true;
            await CHANNEL.findByIdAndUpdate(existChannel._id, data);
        }else{
            await CHANNEL.create(data);
        }
        return true
    } catch (error) {
        customLogger.log({
            level: 'error',
            message: error
        });
        return false
    }
}

const index_item = async (data) => {
    try {
        let channels =  await CHANNEL.find({active:true});
        return {
            status:true,
            channels,
        }
    } catch (error) {
        customLogger.log({
            level: 'error',
            message: error
        });
        return {
            status:false,
            channels:[],
        }
    }
}


const remove_item = async (id) => {
    try {
        await CHANNEL.updateOne({telegram_id:id},{
            active:false,
            ad:false
        })
        return true
    } catch (error) {
        customLogger.log({
            level: 'error',
            message: error
        });
        return false
    }
}

const ad_item = async (data) => {
    try {
        let channels =  await CHANNEL.find({active:true, ad:true});
        return {
            status:true,
            channels,
        }
    } catch (error) {
        customLogger.log({
            level: 'error',
            message: error
        });
        return {
            status:false,
            channels:[],
        }
    }
}

const change_ad_item = async (id) => {
    try {
        let existChannel =  await CHANNEL.findOne({active:true, _id:id});
        if(existChannel){
            await CHANNEL.findByIdAndUpdate(id,{
                ad:!existChannel.ad
            })
        }
        return true
    } catch (error) {
        customLogger.log({
            level: 'error',
            message: error
        });
        return false
    }
}
module.exports = {
    store_item,
    index_item,
    remove_item,
    ad_item,

}