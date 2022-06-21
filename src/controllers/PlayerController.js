import Player from "../models/Player";
const PlayerRepository = require("../repository/PlayerRepository");
const PlayerRepoInstance = new PlayerRepository();
export class PlayerController {
  constructor() {}

  async createPlayer(req, res) {
    try {
      const created = await PlayerRepoInstance.createPlayer(req.body, res);
      if (!created) throw { message: "cant create" };
      return res.status(201).json(created);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  async getAll(req, res) {
    try {
      const players = await PlayerRepoInstance.getALL();
      if (!players) throw { message: "cant get players" };
      return res.status(201).json(players);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  async updatePlayer(req, res) {
    try {
      const updatedPlayer = await PlayerRepoInstance.updatePlayer(
        req.params.id,
        req.body
      );
      
      if (!updatedPlayer) throw { message: "error" };
      return res.status(201).json(updatedPlayer);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  async deletePlayer(req, res) {
    try {
      const deletedPlayer = await PlayerRepoInstance.deletePlayer(
        req.params.id
      );
      if (!deletedPlayer) throw { message: "error" };
      return res.status(201).json(deletedPlayer);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
module.exports = PlayerController;
