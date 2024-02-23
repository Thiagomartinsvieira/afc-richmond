import { Player } from '../models/Player';

export interface ICreateUserFields {
  name?: string;
  born_date?: Date;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

class PlayerService {
  async checkPlayerExist(name: string, born_date: Date, position: string, number: number): Promise<boolean> {

    const playerExist = await Player.findOne({ name, born_date, position, number })

    return !!playerExist;
  }
}

export default new PlayerService();
