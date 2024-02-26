import { Request, Response } from 'express';
import z from 'zod';
import { Player } from '../models/Player';
import PlayerService from '../services/PlayerService';

const playerSchema = z.object({
  name: z.string(),
  born_date: z.string().datetime(),
  position: z.enum([
    'GK',
    'CB',
    'SW',
    'RB',
    'LB',
    'LWB',
    'RWB',
    'DM',
    'CDM',
    'CM',
    'CAM',
    'RW',
    'LW',
    'SS',
    'CF',
    'ST',
  ]),
  number: z.number().min(1).max(99),
  active: z.boolean(),
  place_birth: z.string(),
});

class PlayerController {
  async add(req: Request, res: Response) {
    const data = req.body;

    const playerExist = await PlayerService.checkPlayerExist(
      data.name,
      data.born_date,
      data.position,
      data.number
    );

    if (playerExist) {
      return res.status(422).json({
        error: 'There is already a player registered with that information.',
      });
    }

    const numberUsed = await PlayerService.isNumberUsed(
      data.number,
      data.active
    );

    if (numberUsed) {
      return res.status(422).json({
        error: 'There is already a active player registered with that number.',
      });
    }

    try {
      playerSchema.parse(data);

      const player = new Player({
        name: data.name,
        born_date: data.born_date,
        position: data.position,
        number: data.number,
        active: data.active,
        place_birth: data.place_birth,
      });

      await player.save();
      res.status(201).end();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async getPlayer(req: Request, res: Response) {
    const id = req.params.id;

    const player = await PlayerService.getPlayerById(id);

    res.status(200).json({ player });
  }
}

export default new PlayerController();
