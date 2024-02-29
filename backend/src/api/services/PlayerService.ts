import { Player } from '../models/Player';

class PlayerService {
  async checkPlayerExist(
    name: string,
    born_date: Date,
    position: string,
    number: number
  ): Promise<boolean> {
    const playerExist = await Player.findOne({
      name,
      born_date,
      position,
      number,
    });

    return !!playerExist;
  }

  async isNumberUsed(number: number, active: boolean): Promise<boolean> {
    if (active) {
      const numberUsed = await Player.findOne({ number, active: true });

      return !!numberUsed;
    }
    return false;
  }

  async getPlayerById(id: string) {
    const player = await Player.findById(
      { _id: id },
      'name born_date position number active'
    );

    return player;
  }

  async getAllPlayers() {
    const players = await Player.find(
      {},
      'name born_date position number active'
    );

    return players;
  }
}

export default new PlayerService();
