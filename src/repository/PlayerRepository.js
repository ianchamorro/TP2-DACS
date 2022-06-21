import Player from "../models/Player";

export class PlayerRepository{
    
    async createPlayer(data){
    try {
        const {name,position,team} = data;
        const newPlayer = new Player({name,position,name});
        await newPlayer.save();
        return newPlayer;    
    } catch (error) {
        return null
    }
    }
    async getAll(){
        try {
            const players = await Player.find({})
            if(!players) throw {message: 'cant find players'};
            return players
        } catch (error) {
            return null
        }

    }
    async updatePlayer(id,body){
        try {
            const updatedPlayer = await Player.findByIdAndUpdate(id,body)
            if(!updatedPlayer) throw {message: 'cant update player'}
            return updatedPlayer
        } catch (error) {
            return null
        }
        
    }
    async deletePlayer(req,res){
        try {
            const deletedPlayer = await Player.findByIdAndDelete(id);
            if(!deletedPlayer) throw {message: 'error'};
        } catch (error) {
            return null;
        }
    }

}